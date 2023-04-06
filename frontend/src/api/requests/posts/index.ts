import { getAll } from './getAll';
import { getByUserId } from './getByUserId';

export type { PostData } from './types';

export const posts = {
    getAll,
    getByUserId,
}