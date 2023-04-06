import Axios from 'axios';
import { notification } from 'antd';
import { RequestUrlList } from '../../RequestUrlList';


export const getByUserId = async (userId: number) => {
	try {
		const res = await Axios.get(RequestUrlList.POSTS, { params: { userId } });
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