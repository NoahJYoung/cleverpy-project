import React, { useCallback, useEffect, useState } from 'react';
import { Card, Typography, Divider } from 'antd';
import { PostData } from 'src/api/requests/posts';
import { UserData } from 'src/api/requests/users';
import { CommentSection, PostButtons, PostHeader } from './components';
import { useFetchPostData } from './hooks';

import styles from './Post.module.scss';

const { Paragraph } = Typography;

interface PostProps {
	postData: PostData
}

export function Post({ postData }: PostProps) {
	const [showComments, setShowComments] = useState(false);
	const { title, body, userId, id } = postData;
	const { userData, postComments } = useFetchPostData(id, userId);

	const toggleShowComments = useCallback(() => {
		setShowComments(!showComments);
	}, [showComments, setShowComments])

	return userData ? (
		<>
			<Card className={styles.postCard}>
				<PostHeader postTitle={title} userData={userData} />
				<Divider />
				<Paragraph>{body}</Paragraph>
				<PostButtons toggleShowComments={toggleShowComments} numComments={postComments.length} />
			</Card>
			<CommentSection showComments={showComments} comments={postComments} />
			<Divider />
		</>
	) : null;
}