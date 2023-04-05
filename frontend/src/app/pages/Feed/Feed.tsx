import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useInfiniteScroll } from './hooks';
import { Post } from './components';

import styles from './Feed.module.scss';

export function Feed() {
	const { posts, setRecordCount } = useInfiniteScroll();
	const [active, setActive] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleScroll = useCallback(() => {
		const container = containerRef.current;
		if (container) {
			const isScrolledToBottom =
				container.scrollTop + container.clientHeight >= container.scrollHeight;
			if (isScrolledToBottom) {
				setRecordCount((prevRecordCount) => prevRecordCount + 10);
			}
		}
	}, []);

	const handleSetActive = useCallback(() => {
		setActive(true);
	}, [active, setActive]);

	const handleSetInactive = useCallback(() => {
		setActive(false);
	}, [active, setActive])

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (container) {
				container.removeEventListener("scroll", handleScroll);
			}
		};
	}, [handleScroll]);

	return (
		<div
			ref={containerRef}
			className={`${styles.postFeed} ${active ? styles.active : ''}`}
			onMouseEnter={handleSetActive}
			onMouseLeave={handleSetInactive}
		>
			{posts.map((post) => <Post key={post.id} postData={post} />)}
		</div>
	)
}