"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className="h-screen flex flex-col gap-10 items-center justify-center dark:bg-gray-600">
        <p>Theme mode: {localStorage.getItem("mode")}</p>
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
