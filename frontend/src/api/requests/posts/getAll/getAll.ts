import Axios from 'axios';
import { RequestUrlList } from '../../RequestUrlList';


export const getAll = async () => {
	try {
		const res = await Axios.get(RequestUrlList.getAllPosts);
		if (res) {
			return res.data;
		} else {
			return undefined;
		}
	} catch (error) {
		console.error(error);
	}
}