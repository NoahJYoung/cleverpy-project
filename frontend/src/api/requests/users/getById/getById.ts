import Axios from 'axios';
import { RequestUrlList } from '../../RequestUrlList';


export const getById = async (userId: number) => {
	try {
		const res = await Axios.get(`${RequestUrlList.USERS}/${userId}`);
		if (res) {
			return res.data;
		}
	} catch (error) {
		console.error(error);
	}
}