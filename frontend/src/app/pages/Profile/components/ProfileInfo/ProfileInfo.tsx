import React from "react";
import { Card, Avatar, Typography, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { UserData } from "src/api/requests/users";

import styles from './ProfileInfo.module.scss';

const { Title, Text } = Typography;

interface ProfileInfoProps {
	userData: UserData
}

export function ProfileInfo({ userData }: ProfileInfoProps) {
	const {
		username,
		name,
		email,
		website,
		phone,
		company,
	} = userData;

	const { name: companyName, catchPhrase, bs } = company;
	return (
		<Card className={styles.profileInfoCard}>
			<div className={styles.cardHeader}>
				<Avatar className={styles.avatar} icon={<UserOutlined />} />
				<Title className={styles.username} level={3}>{username}</Title>
			</div>
			<Divider />
			<div className={styles.userInfo}>
				<div className={styles.infoItem}>
					<Text className={styles.infoLabel}>Name:</Text>
					<Text>{name}</Text>
				</div>
				<div className={styles.infoItem}>
					<Text className={styles.infoLabel}>Email:</Text>
					<Text>{email}</Text>
				</div>
				<div className={styles.infoItem}>
					<Text className={styles.infoLabel}>Website:</Text>
					<Text>{website}</Text>
				</div>
				<div className={styles.infoItem}>
					<Text className={styles.infoLabel}>Phone number:</Text>
					<Text>{phone}</Text>
				</div>
			</div>
			<div className={styles.companyInfo}>
			</div>
		</Card>
	)
}