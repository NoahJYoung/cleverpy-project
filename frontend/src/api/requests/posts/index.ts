import { getAll } from './getAll';
import { getByUserId } from './getByUserId';
import { addPost } from './addPost';
import { deletePost } from './deletePost';
import { editPost } from './editPost';

export type { PostData } from './types';

export const posts = {
    getAll,
    getByUserId,
    addPost,
    deletePost,
    editPost
}