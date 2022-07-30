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
	};

	static async getById(id) {
		let response = {};
		response = await axios.get(this.baseUrl + `/${id}`);
		return response.data;
	};

	static async getPostComments(id) {
		let response = {};
		response = await axios.get(this.baseUrl + `/${id}/comments`);
		return response.data;
	}
}
