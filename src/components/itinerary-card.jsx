import React from "react";
import { Card } from "@/components/ui/card";

export default function ItineraryCard() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-8 flex flex-col items-center">
      <Card className="w-full min-h-[270mm] mb-8 p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">たびのよてい</h2>
        <ol className="list-decimal list-inside space-y-6 text-xl">
          <li>こうそくバスで くうこう へ 🚌</li>
          <li>
            くうこう で おみやげ をかう 🎁
            <div className="mt-4 flex justify-between">
              <div className="w-1/2 items-center justify-center mr-2">
                おみやげ１
                <img
                  src="/images/xxx.png" // おみやげ１の画像を指定
                  alt="omiya1"
                  className="object-contain h-full"
                />
              </div>
              <div className="w-1/2 items-center justify-center ml-2">
                おみやげ２
                <img
                  src="/images/xxx.png" // おみやげ２の画像を指定
                  alt="omiya2"
                  className="object-contain h-full"
                />
              </div>
            </div>
          </li>
          <li>ひるごはんをたべる 🍱</li>
          <li>ひこうきにのる ✈️ </li>
          <li>おばあちゃんとおじいちゃんにあう 👵👴</li>
          <li>くるままでいえにいく 🚗</li>
        </ol>
        <div className="mt-8 p-4 border-2 border-dashed border-gray-400 rounded-lg">
          <p className="text-lg font-bold">たいせつなこと：</p>
          <ul className="list-disc list-inside ml-4 text-lg">
            <li>たのしいりょこうにしよう！ 😊</li>
            <li>バスとひこうきではしずかにすごそう 🤫</li>
            <li>おかしはけいかくてきに 🍪</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
