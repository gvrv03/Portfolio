import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Iphone16ProMaxMockup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="shadow-2xl rounded-[40px] overflow-hidden border-4 border-black" style={{ width: '430px', height: '932px', backgroundColor: '#fefefe' }}>
        <div style={{ height: '30px', backgroundColor: '#000' }}></div>
        <CardContent className="p-4 flex flex-col items-center justify-between h-full">
          <div className="text-center">
            <h1 className="text-xl font-bold">iPhone 16 Pro Max</h1>
            <p className="text-gray-600">Mockup Screen</p>
          </div>

          <div className="bg-gray-200 w-full h-80 rounded-xl flex items-center justify-center border border-dashed border-gray-400">
            <span className="text-gray-500">Your App UI Here</span>
          </div>

          <div className="flex flex-col items-center space-y-4 mt-6">
            <Button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all duration-300">Action</Button>
          </div>
        </CardContent>
        <div style={{ height: '30px', backgroundColor: '#000' }}></div>
      </Card>
    </div>
  );
}
