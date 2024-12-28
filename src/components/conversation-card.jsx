import React from "react";
import { Card } from "@/components/ui/card";

export default function ConversationCard() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-8 flex flex-col items-center">
      <Card className="w-full min-h-[270mm] mb-8 p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          おばあちゃん・おじいちゃんとおはなし
        </h2>
        <p className="text-xl mb-4">
          おばあちゃん・おじいちゃんにきいてみたいことをかこう！
        </p>
        <div className="space-y-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="border-b-2 border-gray-300 pb-2">
              <p className="text-lg mb-2">{num}. </p>
              <div className="w-full h-32 border-2 border-dashed border-gray-400"></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
