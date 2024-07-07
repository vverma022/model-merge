declare class FormDataRequestBody {
    private fd;
    private encoder;
    constructor(fd: any);
    setup(): Promise<void>;
    /**
     * @returns the multipart form data request
     */
    getBody(): Promise<any>;
    /**
     * @returns headers that need to be added to the multipart form data request
     */
    getHeaders(): Promise<Record<string, string>>;
}
/**
 * FormDataWrapper is a utility to make form data
 * requests across both Browser and Node.js runtimes.
 */
export declare class FormDataWrapper {
    private fd;
    append(name: string, value: any): Promise<void>;
    getRequest(): FormDataRequestBody;
}
export {};
