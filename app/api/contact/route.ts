import { getApps } from 'firebase/app';
import { NextResponse } from 'next/server';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Firebase Admin初期化
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
};

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount as any)
  });
}

const adminDb = getFirestore();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Firestoreにデータを保存
    const docRef = await adminDb.collection('contacts').add({
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString()
    });

    // メール送信ロジック
    const mailOptions = {
      from: 'NK Corporation <noreply@nkcorporation.jp>',
      to: 'hidetsugu0906@icloud.com',
      subject: '【NK Corporation】ウェブサイトからのお問い合わせ',
      text: `
以下の内容でお問い合わせを受け付けました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【 お名前 】
${name}

【 電話番号 】
${phone}

【 メールアドレス 】
${email}

【 お問い合わせ内容 】
${message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

※ このメールは自動送信されています。
`
    };

    // Firebase Cloud Functionsでメール送信を実装することをお勧めします
    // ここではサンプルとしてコメントアウトしています

    return NextResponse.json({ message: 'お問い合わせを受け付けました' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'エラーが発生しました' },
      { status: 500 }
    );
  }
}