export type Success<T> = {
    data: T,
    tag: "success"
}

export type Failure<T> = {
    error: T,
    tag: "failure"
}

export type Result<S, F> = Success<S> | Failure<F>

export const isSuccess = <S, F>(r: Result<S, F>): r is Success<S> => r.tag === "success";
export const isFailure = <S, F>(r: Result<S, F>): r is Failure<F> => r.tag === "failure";

export const success = <T>(data: T): Success<T> => {
    return {
        data,
        tag: "success",
    }
}


export const failure = <F>(error: F): Failure<F> => {
    return {
        error,
        tag: "failure",
    }
}
