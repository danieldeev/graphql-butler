import axios from "axios";

export default class Mutation{

	api: string;
	head: any;

	constructor(endpoint: string, headers: any){
		this.api = endpoint;
		this.head = headers;
	}

	async send(mutation: string){

		if(this.api == undefined){
			return(`Endpoint undefined`);
		}

		let res: any = await axios({
			url: this.api,
			method: "POST",
			headers: this.head,
			data: {
				query: `mutation {${mutation}}`
			}
		}).then((raw: any) => {
			return(raw);
		}).catch((err: any) => {
			return(err);
		})

		return(res);

	}
}