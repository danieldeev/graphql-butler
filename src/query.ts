import axios from "axios";

export default class Query{

	api: string;
	head: any;

	constructor(endpoint: string, headers: string){
		this.api = endpoint;
		this.head = headers;
	}

	async send(query: string){

		if(this.api == undefined){
			return(`Endpoint undefined`);
		}

		let res: any = await axios({
			url: this.api,
			method: "POST",
			headers: this.head,
			data: {
				query: `query {${query}}`
			}
		}).then((raw: any) => {
			return(raw);
		}).catch((err: any) => {
			return(err);
		})

		return(res);

	}
}