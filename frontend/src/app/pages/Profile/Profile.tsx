import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProfileData } from './hooks';
import { Typography } from 'antd';
import { ProfileInfo } from './components';

import styles from './Profile.module.scss';

const { Title } = Typography;

export function Profile() {
	const { id } = useParams();
	const { userData, userPosts } = useGetProfileData(Number(id));
	return (
		<div className={styles.profilePageContainer}>
			{userData && <ProfileInfo userData={userData} />}
		</div>
	)
}