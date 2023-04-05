import React from 'react';
import { Card, Divider, Typography, Avatar } from 'antd';
import { CommentData } from 'src/api/requests/comments';
import { UserOutlined } from '@ant-design/icons';

import styles from './Comment.module.scss';

const { Text } = Typography;

interface CommentProps {
	commentData: CommentData
};

export function Comment({ commentData }: CommentProps) {
	const { body, name, email } = commentData;
	return (
		<Card className={styles.commentCard}>
			<div className={styles.commentHeader}>
				<Avatar className={styles.icon} icon={<UserOutlined />} />
				<div className={styles.vertical}>
					<Text className={styles.name}>
						{name}
					</Text>

					<Text className={styles.email}>
						{email}
					</Text>
				</div>
			</div>

			<Divider className={styles.divider} />

			<Text className={styles.body}>
				{body}
			</Text>
		</Card>
	)
}