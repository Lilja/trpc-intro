import { trpc } from "./api";
import {isFailure, isSuccess} from "./utils"

export function Component() {
    const resp = trpc.getLogs.useQuery({token: "123", user_id: "123"})
    if (!resp.data) {
        return <div>Loading</div>
    } else if (isFailure(resp.data)) {
        return <div>{resp.data.error}</div>
    }
    return <div>{resp.data}</div>
}
