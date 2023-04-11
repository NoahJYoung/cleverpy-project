import Axios from 'axios';
import { RequestUrlList } from '../../RequestUrlList';
import { PostData } from '../types';
import { notification } from 'antd';


export const addPost = async (post: Omit<PostData, "id">) => {
	try {
		const res = await Axios.post(RequestUrlList.POSTS, post);
		if (res?.status === 201) {
			notification.success({
				message: 'Success!',
				description: 'Post submitted successfully!'
			})
		}
	} catch (error) {
		notification.error({
			message: 'Error!',
			description: 'Error submitting post'
		})
	}
}