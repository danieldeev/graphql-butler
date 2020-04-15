export default class Mutation {
    api: string;
    head: any;
    constructor(endpoint: string, headers: any);
    send(mutation: string): Promise<any>;
}
