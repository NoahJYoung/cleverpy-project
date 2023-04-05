import React from 'react';
import { Comment } from './components';
import { CommentData } from 'src/api/requests/comments';

import styles from './CommentSection.module.scss';

interface CommentSectionProps {
	comments: CommentData[]
	showComments: boolean
}

export function CommentSection({ comments, showComments }: CommentSectionProps) {
	return showComments ? (
		<div className={styles.commentSectionContainer}>
			{comments.map(comment => <Comment key={comment.id} commentData={comment} />)}
		</div>
	) : null;
}