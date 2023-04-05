import Axios from 'axios';
import { notification } from 'antd';
import { RequestUrlList } from '../../RequestUrlList';


export const getAll = async () => {
	try {
		const res = await Axios.get(RequestUrlList.POSTS);
		if (res) {
			return res.data;
		}
	} catch (error) {
		notification.error({
			message: 'Error!',
			description: 'Error fetching posts'
		})
	}
}