import React from 'react';
import { Typography, Avatar, Popover } from 'antd';
import { RoutePaths } from 'src/app/globalTypes';
import { Link } from 'react-router-dom';
import { UserOverlay } from './components';
import { UserData } from 'src/api/requests/users';
import { UserOutlined } from '@ant-design/icons';

import styles from './PostHeader.module.scss';

const { Text } = Typography;

interface PostHeaderProps {
	postTitle: string
	userData: UserData
	isCurrentUserPost?: boolean
}

export function PostHeader({ userData, postTitle, isCurrentUserPost }: PostHeaderProps) {
	const { username, id } = userData;
	return (
		<div className={styles.headerContainer}>
			<Popover content={<UserOverlay userData={userData} />}>
				<Avatar className={styles.icon} icon={<UserOutlined />} />
			</Popover>
			<div className={styles.vertical}>
				<Text className={styles.postTitle}>{postTitle}</Text>
				{isCurrentUserPost ? (
					<Text>{username}</Text>) : (
					<Link to={`${RoutePaths.PROFILE}/${id}`} className={styles.username}>{username}</Link>
				)}

			</div>
		</div>
	)
}