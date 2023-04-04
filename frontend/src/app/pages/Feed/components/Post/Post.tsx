import React from 'react';
import { Card, Typography } from 'antd';
import { PostData } from 'src/api/requests/posts';

import styles from './Post.module.scss';

const { Title, Paragraph } = Typography;

interface PostProps {
	postData: PostData
}

export function Post({ postData }: PostProps) {
	const { title, body, id } = postData;

	return (
		<Card className={styles.postCard} >
			<Title level={4}>{title}</Title>
			<Paragraph>{body}</Paragraph>
		</Card>
	);
}