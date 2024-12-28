import React from "react";
import { Card } from "@/components/ui/card";

export default function ActivityCard() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-8 flex flex-col items-center">
      <Card className="w-full min-h-[270mm] mb-8 p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">たのしいあそび</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">そらとぶのりものぬりえ</h3>
          <div className="w-full h-96 flex items-center justify-center">
            <img
              src="/images/airplane.png"
              alt="airplane"
              className="object-contain h-full"
            />
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">はたらくくるまのぬりえ</h3>
          <div className="w-full h-96 flex items-center justify-center">
            <img
              src="/images/cars.png"
              alt="cars"
              className="object-contain h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
