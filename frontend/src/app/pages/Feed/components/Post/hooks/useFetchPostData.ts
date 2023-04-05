import React, { useEffect, useState } from 'react';
import { API } from 'src/api';
import { UserData } from 'src/api/requests/users';
import { CommentData } from 'src/api/requests/comments';


export function useFetchPostData(postId: number, userId: number) {
	const [userData, setUserData] = useState<UserData | null>(null);
	const [postComments, setPostComments] = useState<CommentData[]>([]);

	useEffect(() => {
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
	}, []);

	return {
		userData,
		postComments
	}

}