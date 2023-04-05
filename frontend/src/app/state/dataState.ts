import { atom } from 'recoil';
import { PostData } from 'src/api/requests/posts';
import { UserData } from 'src/api/requests/users';

export const postsState = atom<PostData[]>({
	key: 'posts',
	default: [],
});

export const currentUserState = atom<UserData | null>({
	key: 'currentUser',
	default: null,
})
