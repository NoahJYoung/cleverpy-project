import Axios from 'axios';
import { RequestUrlList } from '../../RequestUrlList';


export const getByPostId = async (postId: number) => {
    try {
        const res = await Axios.get(RequestUrlList.COMMENTS, { params: { postId } });
        if (res) {
            return res.data;
        }
    } catch (error) {
        console.error(error);
    }
}