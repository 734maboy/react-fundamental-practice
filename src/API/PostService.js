import axios from 'axios'

export default class PostService {
	static baseUrl = "https://jsonplaceholder.typicode.com/posts";

	static async getAll() {
		let response = { data: [] };
	 	response = await axios.get(this.baseUrl);
		return response?.data;
	}
}
