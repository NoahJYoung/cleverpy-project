import React, { useState, useEffect } from 'react';
import { API } from 'src/api';
import { PostData } from 'src/api/requests/posts';
import { Post } from './components';

interface FeedProps {

}

export function Feed() {
	const [posts, setPosts] = useState<PostData[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await API.posts.getAll();
			res && setPosts(res);
		}
		fetchPosts();
	}, []);

	return (
		<div>
			{posts.map((post) => <Post key={post.id} postData={post} />)}
		</div>
	)
}