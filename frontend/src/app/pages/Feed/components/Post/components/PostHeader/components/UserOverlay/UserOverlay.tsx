import React from 'react';
import { UserData } from 'src/api/requests/users';
import { Divider, Typography } from 'antd';

import styles from './UserOverlay.module.scss';

const { Text, Title } = Typography;

interface UserOverlayProps {
	userData: UserData
}

export function UserOverlay({ userData }: UserOverlayProps) {
	const { name, email, username } = userData;
	return (
		<div className={styles.overlayContainer}>
			<Title level={5} className={styles.username}>{username}</Title>
			<Divider className={styles.divider} />
			<div className={styles.overlayContent}>
				<Text className={styles.label}>Name</Text>
				<Text className={styles.data}>{name}</Text>
				<Text className={styles.label}>Email</Text>
				<Text className={styles.data}>{email}</Text>
			</div>
		</div>
	)
}