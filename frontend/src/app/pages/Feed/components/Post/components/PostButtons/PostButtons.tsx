import React, { useCallback, useState } from 'react';
import { Button, Typography } from 'antd';
import { HeartOutlined, CommentOutlined, HeartFilled } from '@ant-design/icons';

import styles from './PostButtons.module.scss';

const { Text } = Typography;

interface PostButtonsProps {
	numComments: number
	toggleShowComments: () => void
}

export function PostButtons({ numComments, toggleShowComments }: PostButtonsProps) {
	const [userLikesPost, setUserLikesPost] = useState(false);
	const [numLikes, setNumLikes] = useState(0);

	const toggleLikePost = useCallback(() => {
		// Mocking this funcionality only on front end due to likes not being available on backend
		setUserLikesPost(!userLikesPost);
		setNumLikes(userLikesPost ? 0 : 1);
	}, [userLikesPost, setUserLikesPost])

	return (
		<div className={styles.postButtonsContainer}>
			<div className={styles.buttonSection}>
				<Button
					onClick={toggleLikePost}
					type='text'
					icon={userLikesPost ? (
						<HeartFilled className={`${styles.buttonIcon} ${styles.likeButtonActive}`} />
					) : (
						<HeartOutlined className={styles.buttonIcon} />
					)}
				/>
				<Text>{numLikes}</Text>
			</div>

			<div className={styles.buttonSection}>
				<Button onClick={toggleShowComments} type='text' icon={<CommentOutlined className={styles.buttonIcon} />} />
				<Text>{numComments}</Text>
			</div>

		</div>
	)
}