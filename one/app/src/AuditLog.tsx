import React, { useState } from "react";
import { trpc } from "./api";
import {isFailure, isSuccess} from "./utils"

export function AuditLog() {
  const data = trpc.getLogs.useQuery({token: "abc", userId: "123"});
  const resp = data.data;

  if (!resp) {
    return <div>Loading</div>
  }
}
