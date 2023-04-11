import React, { useEffect, useState } from "react";
import { useRecoilState } from 'recoil';
import { API } from "src/api";
import { postsState, userPostsState } from "src/app/state";

/*
		If the backend were prepared to handle paginated queries, this is where I would to apply that logic.
*/

export const useLoadPosts = () => {
	const [posts, setPosts] = useRecoilState(postsState);
	const [userPosts] = useRecoilState(userPostsState);
	const [recordCount, setRecordCount] = useState(10);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await API.posts.getAll();
			res && setPosts(res);
		}
		fetchPosts();
	}, []);

	return {
		posts: posts.slice(0, recordCount),
		recordCount,
		setRecordCount,
		userPosts,
	}
}