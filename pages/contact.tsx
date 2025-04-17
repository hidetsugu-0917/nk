// pages/contact.tsx

export default function ContactPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>お問い合わせ</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        
        <p>
          <label>お名前：<br />
            <input type="text" name="name" required />
          </label>
        </p>

        <p>
          <label>メールアドレス：<br />
            <input type="email" name="email" required />
          </label>
        </p>

        <p>
          <label>メッセージ：<br />
            <textarea name="message" required></textarea>
          </label>
        </p>

        <p><button type="submit">送信</button></p>
      </form>
    </main>
  );
}
