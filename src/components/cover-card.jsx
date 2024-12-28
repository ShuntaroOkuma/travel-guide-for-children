import React from "react";
import { Card } from "@/components/ui/card";

export default function CoverCard() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-8 flex flex-col items-center">
      <Card className="w-full h-[270mm] mb-8 p-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">おじいちゃんおばあちゃん</h1>
        <h1 className="text-4xl font-bold mb-4">に会いにいこう！</h1>
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center mb-4">
          <img src="/images/cover.png" alt="cover" />
        </div>
        <p className="text-xl">xxがつxxにち のだいぼうけん</p>
        <p className="text-2xl mt-8">なまえ: ____________________________</p>
      </Card>
    </div>
  );
}
