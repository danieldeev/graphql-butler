export default class Query {
    api: string;
    head: any;
    constructor(endpoint: string, headers: string);
    send(query: string): Promise<any>;
}
