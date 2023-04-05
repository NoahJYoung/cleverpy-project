import React, { useState } from 'react';
import { CommentData } from 'src/api/requests/comments';
import { API } from 'src/api';
import { Card, Input, Button, Form } from 'antd';

import styles from './AddCommentForm.module.scss';
import { generateRandomId } from 'src/app/helpers';

const { TextArea } = Input;
const { Item, useForm } = Form;

interface AddCommentFormProps {
	postId: number
	toggleCommentForm: () => void
	setPostComments: (comments: CommentData[]) => void
}

export function AddCommentForm({ postId, toggleCommentForm, setPostComments }: AddCommentFormProps) {
	const [form] = useForm();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		setLoading(true);
		const validatedFormValues = await form.validateFields();
		const preparedFormValues: Omit<CommentData, 'id'> = { ...validatedFormValues, postId }
		await API.comments.addComment(preparedFormValues);
		form.resetFields();
		const newComments = await API.comments.getByPostId(postId);
		// Mocking this so that changes will appear on front end
		// if backend supported post requests, it would be setPostComments(newComments) because id is generated on backend
		setPostComments([...newComments, { ...preparedFormValues, id: generateRandomId() }]);
		setLoading(false);
		toggleCommentForm();
	}
	return (
		<Card loading={loading} className={styles.commentFormContainer}>
			<Form form={form} name="addComment" onFinish={handleSubmit}>
				<Item
					name='name'
					rules={[
						{
							required: true,
							message: '${name} is required'
						},
					]}
				>
					<Input placeholder='Enter your name...' className={styles.name} />
				</Item>
				<Item
					name='email'
					rules={[
						{
							required: true,
							message: '${name} is required',
						},
						{
							type: 'email',
							message: 'Please enter a valid email',
						}
					]}
				>
					<Input placeholder='Enter your email...' className={styles.email} />
				</Item>
				<Item
					name='body'
					rules={[
						{
							required: true,
							message: '${name} is required'
						},
					]}
				>
					<TextArea placeholder='Got something to say?' className={styles.body} />
				</Item>
				<div className={styles.buttonContainer}>
					<Item>
						<Button htmlType='button' onClick={toggleCommentForm}>Cancel</Button>
					</Item>
					<Item>
						<Button htmlType='submit' onClick={handleSubmit} type='primary'>Add comment</Button>
					</Item>
				</div>
			</Form>
		</Card>
	)
}