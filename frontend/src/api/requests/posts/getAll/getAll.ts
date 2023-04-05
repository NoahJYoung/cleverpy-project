import Axios from 'axios';
import { RequestUrlList } from '../../RequestUrlList';


export const getAll = async () => {
	try {
		const res = await Axios.get(RequestUrlList.POSTS);
		if (res) {
			return res.data;
		}
	} catch (error) {
		console.error(error);
	}
}