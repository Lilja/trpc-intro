import React, { useState } from "react";
import { trpc } from "./api";
import {isFailure, isSuccess} from "./utils"

export function AuditLog() {
  const response = trpc.getLogs.useQuery({token: "abcdefghikl", userId: "editor"});

  const data = response.data;

  if (!data) {
    return <div>Loading</div>
  }

  if (isFailure(data)) {
    return <div>{data.error}</div>
  } else {
    return <div>{data.data}</div>
  }
}
