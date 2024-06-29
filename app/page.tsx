"use client";

import { Button } from "@/components/ui/button";
import { BrowserRouter, Router, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
    <div className="flex flex-col items-center space-y-4">
      <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-semibold font-mono">Welcome to ModelMerge</h1>
      <Button>
        Get Started
        </Button>
    </div>
  </div>
  );
}
