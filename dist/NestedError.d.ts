export declare class NestedError<T extends Error> extends Error {
    nestedError: T;
    constructor(error: T, message?: string);
}
