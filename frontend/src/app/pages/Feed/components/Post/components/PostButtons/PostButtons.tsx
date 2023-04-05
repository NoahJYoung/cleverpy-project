import React from 'react';
import { Button, Typography } from 'antd';
import { HeartOutlined, CommentOutlined } from '@ant-design/icons';

import styles from './PostButtons.module.scss';

const { Text } = Typography;

interface PostButtonsProps {
	numComments: number
	toggleShowComments: () => void
}

export function PostButtons({ numComments, toggleShowComments }: PostButtonsProps) {

	return (
		<div className={styles.postButtonsContainer}>
			<div className={styles.buttonSection}>
				<Button type='text' icon={<HeartOutlined className={styles.buttonIcon} />} />
				<Text>{0}</Text>
			</div>

			<div className={styles.buttonSection}>
				<Button onClick={toggleShowComments} type='text' icon={<CommentOutlined className={styles.buttonIcon} />} />
				<Text>{numComments}</Text>
			</div>

		</div>
	)
}