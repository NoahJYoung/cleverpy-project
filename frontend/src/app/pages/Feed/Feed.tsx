import React, { useState, useCallback } from 'react';
import { useLoadPosts } from './hooks';
import { Post, PostFormModal } from './components';
import { Button, Divider, Typography } from 'antd';
import styles from './Feed.module.scss';

const { Title } = Typography;

export function Feed() {
	const { posts, setRecordCount, userPosts } = useLoadPosts();
	const [active, setActive] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
		const isScrolledToBottom =
			e.currentTarget.scrollHeight - e.currentTarget.scrollTop <= e.currentTarget.getBoundingClientRect().bottom;
		if (isScrolledToBottom) {
			setRecordCount((prevRecordCount) => prevRecordCount + 10);
		}

	}, [setRecordCount, posts, userPosts]);

	const handleOpenModal = useCallback(() => { setIsModalOpen(true) }, [isModalOpen, setIsModalOpen])

	const handleSetActive = useCallback(() => {
		setActive(true);
	}, [active, setActive]);

	const handleSetInactive = useCallback(() => {
		setActive(false);
	}, [active, setActive])

	return (
		<div
			onScroll={handleScroll}
			className={`${styles.postFeed} ${active ? styles.active : ''}`}
			onMouseEnter={handleSetActive}
			onMouseLeave={handleSetInactive}
		>	<div>
				<Title level={2}>See what's new</Title>
				<Button onClick={handleOpenModal} type='primary'>New post</Button>
			</div>
			<Divider />
			{userPosts.map(post => <Post key={post.id} postData={post} isCurrentUserPost />)}
			{posts.map((post) => <Post key={post.id} postData={post} />)}
			<PostFormModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</div>
	)
}