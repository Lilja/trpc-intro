import React, { useState } from "react";
import { trpc } from "./api";

export function Greeter() {
  const response = trpc.greetFunconFour.useQuery({name: "Erik"})
  const data = response.data;
  if (!data) {
    return <div>Loading</div>
  }
  return <div>{data.output}</div>
}
