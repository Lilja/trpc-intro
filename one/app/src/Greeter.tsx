import React, { useState } from "react";
import { trpc } from "./api";

export function Greeter() {
  const data = trpc.greetFunconFour.useQuery("Erik");
  if (!data.data) {
    return <div>loading</div>
  }
  return <div>{data.data}</div>
}
