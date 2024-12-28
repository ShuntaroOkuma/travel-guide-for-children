import React from "react";
import { Card } from "@/components/ui/card";

export default function SealRallyCard() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-8 flex flex-col items-center">
      <Card className="w-full min-h-[270mm] mb-8 p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          たびのシールラリー
        </h2>
        <p className="text-xl mb-4">
          それぞれのばしょについたら、シールをはろう！
        </p>
        <div className="grid grid-cols-2 gap-6">
          {[
            "こうそくバス",
            "くうこう",
            "おみやげ",
            "ひるごはん",
            "ひこうき",
            "おばあちゃんおじいちゃん",
          ].map((place, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center"
            >
              <p className="text-lg mb-2">{place}</p>
              <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center text-3xl">
                ☆
              </div>
            </div>
          ))}
        </div>
        <p className="text-xl mt-6 text-center">
          ぜんぶシールがはれたら、おめでとう！🎉
        </p>
      </Card>
    </div>
  );
}
