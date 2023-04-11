import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProfileData } from './hooks';
import { Divider, Typography } from 'antd';
import { ProfileInfo, ProfilePostFeed } from './components';

import styles from './Profile.module.scss';

const { Title } = Typography;

export function Profile() {
	const { id } = useParams();
	const { userData, userPosts } = useGetProfileData(Number(id));
	return (
		<div className={styles.profilePageContainer}>
			{userData && <ProfileInfo userData={userData} />}
			<Title className={styles.message} level={3}>See posts from {userData?.username} </Title>
			<Divider />
			{userPosts && <ProfilePostFeed userPosts={userPosts} />}
		</div>
	)
}