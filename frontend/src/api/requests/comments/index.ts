import { getByPostId } from './getByPostId';
import { addComment } from './addComment';

export type { CommentData } from './types'

export const comments = {
    getByPostId,
    addComment,
}