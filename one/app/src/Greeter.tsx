import React, { useState } from "react";
import { trpc } from "./api";

export function Greeter() {
  const hello = trpc.greetFunconFour.useQuery({ name: "Lilja" });
  if (!hello.data) {
    return <div>Loading</div>;
  } else {
    return <div>{hello.data}</div>;
  }
}
