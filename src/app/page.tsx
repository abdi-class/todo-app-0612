"use client";
import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Home() {
  const router = useRouter();
  const { modeContext } = useContext(ThemeContext);
  return (
    <div>
      <div className="h-screen flex flex-col gap-10 items-center justify-center ">
        <p>Theme mode: {modeContext}</p>
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Welcome to Todo App</h1>
          <p className="font-light">
            Get started to list your daily activities
          </p>
        </div>
        <Button type="button" onClick={() => router.push("/todo")}>
          Type Todo
        </Button>
      </div>
    </div>
  );
}
