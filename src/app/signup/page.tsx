"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRef } from "react";

function SignUpPage() {
  const inUsernameRef = useRef<HTMLInputElement>(null);
  const inEmailRef = useRef<HTMLInputElement>(null);
  const inPasswordRef = useRef<HTMLInputElement>(null);

  async function onBtSignup() {
    try {
      // - Pastikan semua form input diisi
      // - Jika ada yang kosong beri alert
      if (
        inUsernameRef.current?.value ||
        inEmailRef.current?.value ||
        inPasswordRef.current?.value
      ) {
        alert("Isi semua form");
      } else {
        // - Jika ada datanya maka submit ke backendless lewat axios
        const response = await axios.post(
          "https://festalplane-us.backendless.app/api/data/accounts",
          {
            username: inUsernameRef.current?.value,
            email: inEmailRef.current?.value,
            password: inPasswordRef.current?.value,
          }
        );
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Card>
        <CardContent className="w-96">
          <h1 className="text-3xl">Signup</h1>
          <div className="my-4">
            <label>Username</label>
            <Input
              type="text"
              placeholder="Type username"
              ref={inUsernameRef}
            />
          </div>
          <div className="my-4">
            <label>Email</label>
            <Input type="email" placeholder="Type email" ref={inEmailRef} />
          </div>
          <div className="my-4">
            <label>Password</label>
            <Input
              type="password"
              placeholder="Type password"
              ref={inPasswordRef}
            />
          </div>
          <Button type="button" className="w-full">
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUpPage;
