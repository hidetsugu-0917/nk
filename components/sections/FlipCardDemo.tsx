"use client";

import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card";
import Image from "next/image";

export function FlipCardDemo() {
  return (
    <section className="py-16 flex items-center justify-center">
      <FlipCard className="mx-auto">
        <FlipCardFront>
          <div className="h-full w-full rounded-xl bg-white p-6 shadow-lg">
            <div className="relative h-[200px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f"
                alt="Construction site"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-primary">建設現場の測量</h3>
              <p className="mt-2 text-gray-600">
                最新の測量技術と経験豊富なスタッフによる
                正確な測量サービスを提供しています
              </p>
            </div>
          </div>
        </FlipCardFront>
        <FlipCardBack>
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-primary p-6 text-white shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold">詳細を見る</h3>
              <p className="mt-2">
                カードをクリックして
                詳しい情報をご覧ください
              </p>
            </div>
          </div>
        </FlipCardBack>
      </FlipCard>
    </section>
  );
}