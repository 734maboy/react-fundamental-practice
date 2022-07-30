import axios from 'axios'

export default class PostService {
	static baseUrl = "https://jsonplaceholder.typicode.com/posts";

	static async getAll(limit = 10, page = 1) {
		let response = { };
	 	response = await axios.get(this.baseUrl, {
			 params: {
				 _limit: limit,
				 _page: page
			 }
		});
		return response;
	}
}
