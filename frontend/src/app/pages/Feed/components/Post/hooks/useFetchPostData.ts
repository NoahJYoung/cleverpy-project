import React, { useEffect, useState } from 'react';
import { API } from 'src/api';
import { UserData } from 'src/api/requests/users';
import { CommentData } from 'src/api/requests/comments';
import { useRecoilState } from 'recoil';
import { currentUserState } from 'src/app/state';


export function useFetchPostData(postId: number, userId: number, isCurrentUserPost?: boolean) {
	const [userData, setUserData] = useState<UserData | null>(null);
	const [postComments, setPostComments] = useState<CommentData[]>([]);
	const [currentUserData] = useRecoilState(currentUserState);

	useEffect(() => {
		if (!isCurrentUserPost) {
			const fetchUserData = async () => {
				const res = await API.users.getById(userId);
				res && setUserData(res);
			}
			const fetchPostComments = async () => {
				const res = await API.comments.getByPostId(postId);
				res && setPostComments(res);
			}
			fetchUserData();
			fetchPostComments();
		}
	}, []);

	return {
		userData: userData || currentUserData,
		postComments,
		setPostComments,
	}

}