import React from 'react';
import { Card, Typography } from 'antd';
import { CommentData } from 'src/api/requests/comments';

import styles from './Comment.module.scss';

const { Text } = Typography;

interface CommentProps {
	commentData: CommentData
};

export function Comment({ commentData }: CommentProps) {
	return (
		<Card className={styles.commentCard}>
			<Text>
				{commentData.body}
			</Text>
		</Card>
	)
}