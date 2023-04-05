import Axios, { AxiosError } from 'axios';
import { RequestUrlList } from '../../RequestUrlList';
import { CommentData } from '../types';
import { notification } from 'antd';


export const addComment = async (comment: Omit<CommentData, "id">) => {
	try {
		const res = await Axios.post(RequestUrlList.COMMENTS, comment);
		if (res?.status === 201) {
			notification.success({
				message: 'Success!',
				description: 'Comment posted successfully!'
			})
		}
	} catch (error) {
		notification.error({
			message: 'Error!',
			description: 'Error posting comment'
		})
	}
}