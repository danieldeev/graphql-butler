import axios from "axios";

export default class Subscribe{

	api: string;
	head: any;

	constructor(endpoint: string, headers: any){
		this.api = endpoint;
		this.head = headers;
	}

	async send(subscribe: string){

		if(this.api == undefined){
			return(`Endpoint undefined`);
		}

		let res: any = await axios({
			url: this.api,
			method: "POST",
			headers: this.head,
			data: {
				subscribe: `subscribe {${subscribe}}`
			}
		}).then((raw: any) => {
			return(raw);
		}).catch((err: any) => {
			return(err);
		})

		return(res);

	}
}