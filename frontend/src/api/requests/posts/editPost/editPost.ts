import Axios from 'axios';
import { RequestUrlList } from '../../RequestUrlList';
import { notification } from 'antd';
import { PostData } from '../types';

/*
	Mocking postId as 1 due to the api not being able to handle put requests with new postIds, in the same way that it can handle delete requests.
	the actual URL would be: `${RequestUrlList.POSTS}/${values.id}`
*/


export const editPost = async (values: PostData) => {
	try {
		const res = await Axios.put(`${RequestUrlList.POSTS}/${1}`, values);
		if (res?.status === 200) {
			notification.success({
				message: 'Success!',
				description: 'Post updated successfully!'
			})
		}
	} catch (error) {
		notification.error({
			message: 'Error!',
			description: 'Error updating post'
		})
	}
}