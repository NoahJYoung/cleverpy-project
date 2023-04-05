import Axios from 'axios';
import { notification } from 'antd';
import { RequestUrlList } from '../../RequestUrlList';


export const getById = async (userId: number) => {
	try {
		const res = await Axios.get(`${RequestUrlList.USERS}/${userId}`);
		if (res) {
			return res.data;
		}
	} catch (error) {
		notification.error({
			message: 'Error!',
			description: 'Error fetching user'
		})
	}
}