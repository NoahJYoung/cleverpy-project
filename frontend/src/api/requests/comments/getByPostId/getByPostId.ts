import Axios from 'axios';
import { notification } from 'antd';
import { RequestUrlList } from '../../RequestUrlList';


export const getByPostId = async (postId: number) => {
    try {
        const res = await Axios.get(RequestUrlList.COMMENTS, { params: { postId } });
        if (res) {
            return res.data;
        }
    } catch (error) {
        notification.error({
            message: 'Error!',
            description: 'Error fetching comments'
        })
    }
}