import React from "react";
import { Post } from "src/app/pages/Feed/components";
import { PostData } from "src/api/requests/posts";

import styles from './ProfilePostFeed.module.scss';

interface ProfilePostFeedProps {
	userPosts: PostData[]
}

export function ProfilePostFeed({ userPosts }: ProfilePostFeedProps) {
	return (
		<div className={styles.postFeedContainer}>
			{userPosts.map(post => <Post key={post.id} postData={post} />)}
		</div>
	)
}