import React from "react";
import { Card } from "@/components/ui/card";

export default function MemoryCard() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-8 flex flex-col items-center">
      <Card className="w-full min-h-[270mm] p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">たびのおもいで</h2>
        <div className="mb-6">
          <p className="text-xl mb-2">いちばんたのしかったことは？</p>
          <div className="w-full h-32 border-2 border-dashed border-gray-400"></div>
        </div>
        <div>
          <p className="text-xl mb-2">たのしかったことをえにかこう！</p>
          <div className="w-full h-64 border-2 border-dashed border-gray-400"></div>
        </div>
        <div className="w-full mt-2 h-96 flex items-center justify-center">
          <img
            src="/images/seeyou.png"
            alt="cars"
            className="object-contain h-full"
          />
        </div>
      </Card>
    </div>
  );
}
