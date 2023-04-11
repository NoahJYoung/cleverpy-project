import Axios from 'axios';
import { RequestUrlList } from '../../RequestUrlList';
import { notification } from 'antd';


export const deletePost = async (postId: number) => {
	try {
		const res = await Axios.delete(`${RequestUrlList.POSTS}/${postId}`);
		if (res?.status === 200) {
			notification.success({
				message: 'Success!',
				description: 'Post deleted successfully!'
			})
		}
	} catch (error) {
		notification.error({
			message: 'Error!',
			description: 'Error deleting post'
		})
	}
}