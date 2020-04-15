export default class Subscribe {
    api: string;
    head: any;
    constructor(endpoint: string, headers: any);
    send(subscribe: string): Promise<any>;
}
