import React, { useState, useCallback } from 'react';
import { Comment, AddCommentForm } from './components';
import { Button } from 'antd'
import { CommentData } from 'src/api/requests/comments';

import styles from './CommentSection.module.scss';

interface CommentSectionProps {
	comments: CommentData[]
	showComments: boolean
	postId: number
	setPostComments: (comments: CommentData[]) => void
}

export function CommentSection({ postId, comments, showComments, setPostComments }: CommentSectionProps) {
	const [commentFormVisible, setCommentFormVisible] = useState(false);

	const toggleCommentForm = useCallback(() => {
		setCommentFormVisible(!commentFormVisible);
	}, [setCommentFormVisible, commentFormVisible]);

	return showComments ? (
		<div className={styles.commentSectionContainer}>
			{commentFormVisible ? (
				<AddCommentForm setPostComments={setPostComments} postId={postId} toggleCommentForm={toggleCommentForm} />
			) : (
				<Button onClick={toggleCommentForm} type='text'>Add a comment</Button>
			)}
			{comments.map(comment => <Comment key={comment.id} commentData={comment} />)}
		</div>
	) : null;
}