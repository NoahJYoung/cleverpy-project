import React, { useCallback, useState } from 'react';
import { PostFormModal } from '../PostFormModal';
import { Card, Typography, Divider, Button, Popconfirm } from 'antd';
import { PostData } from 'src/api/requests/posts';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { API } from 'src/api';
import { CommentSection, PostButtons, PostHeader } from './components';
import { useRecoilState } from 'recoil';
import { useFetchPostData } from './hooks';
import { userPostsState } from 'src/app/state';

import styles from './Post.module.scss';

const { Paragraph } = Typography;

interface PostProps {
	postData: PostData,
	isCurrentUserPost?: boolean,
}

export function Post({ postData, isCurrentUserPost }: PostProps) {
	const [showComments, setShowComments] = useState(false);
	const { title, body, userId, id } = postData;
	const [userPosts, setUserPosts] = useRecoilState(userPostsState);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { userData, postComments, setPostComments } = useFetchPostData(id, userId, isCurrentUserPost);

	const toggleModalOpen = useCallback(() => {
		setIsModalOpen(!isModalOpen)
	}, [isModalOpen, setIsModalOpen])

	const handleDeletePost = useCallback(async () => {
		await API.posts.deletePost(id);

		// MOCKED DELETE POST FUNCTIONALITY
		const filteredPosts = userPosts.filter(post => post.id !== id);
		setUserPosts(filteredPosts);
	}, [id])

	const toggleShowComments = useCallback(() => {
		setShowComments(!showComments);
	}, [showComments, setShowComments]);

	return userData ? (
		<>
			<Card className={styles.postCard}>
				<div className={styles.headerContainer}>
					<PostHeader
						postTitle={title}
						userData={userData}
						isCurrentUserPost={isCurrentUserPost}
					/>
					{isCurrentUserPost && (
						<div className={styles.controlPanel}>
							<Button type='text' icon={<EditOutlined />} onClick={toggleModalOpen} />
							<Popconfirm
								title="Delete Post"
								description="Are you sure you want to delete this post?"
								okText="Yes"
								cancelText="No"
								onConfirm={handleDeletePost}
							>
								<Button type='text' icon={<DeleteOutlined />} danger />
							</Popconfirm>
						</div>
					)}
				</div>
				<Divider />
				<Paragraph>{body}</Paragraph>
				<PostButtons
					showComments={showComments}
					toggleShowComments={toggleShowComments}
					numComments={postComments.length}
				/>
			</Card>
			<CommentSection
				postId={id}
				showComments={showComments}
				comments={postComments}
				setPostComments={setPostComments}
			/>
			<Divider />
			<PostFormModal
				selectedPost={postData}
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
			/>
		</>
	) : null;
}