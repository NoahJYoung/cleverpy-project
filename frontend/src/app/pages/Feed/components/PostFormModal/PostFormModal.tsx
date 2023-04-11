import React, { Dispatch, SetStateAction, useCallback } from "react";
import { Form, Input, Modal } from "antd";
import { API } from "src/api";
import { currentUserState, userPostsState } from "src/app/state";
import { useRecoilState } from "recoil";
import { generateRandomId } from "src/app/helpers";
import { PostData } from "src/api/requests/posts";

import styles from './PostFormModal.module.scss';

const { Item, useForm } = Form;
const { TextArea } = Input;

interface NewPostFormModalProps {
	isModalOpen: boolean,
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
	selectedPost?: PostData
}

export function PostFormModal({ isModalOpen, setIsModalOpen, selectedPost }: NewPostFormModalProps) {
	const [form] = useForm();
	const [currentUser] = useRecoilState(currentUserState);
	const [userPosts, setUserPosts] = useRecoilState(userPostsState);

	const isEditMode = !!selectedPost;

	const handleSubmit = useCallback(async () => {
		const validatedValues = await form.validateFields();

		if (isEditMode) {
			const preparedValues: PostData = {
				userId: selectedPost.userId,
				id: selectedPost.id,
				body: validatedValues.body,
				title: validatedValues.title
			}
			await API.posts.editPost(preparedValues);
			// Mocking this due to lack of backend functionality
			const newPosts = [...userPosts]
			const postIndex = newPosts.findIndex((post) => post.id === selectedPost.id);
			newPosts[postIndex] = preparedValues;
			setUserPosts(newPosts);
		} else {
			const preparedFormValues = { ...validatedValues, userId: currentUser?.id }
			await API.posts.addPost(preparedFormValues);
			// Mocking this due to lack of backend functionality
			setUserPosts((prev) => [...prev, { ...preparedFormValues, id: generateRandomId() }]);
		};
		handleCloseModal();
		form.resetFields();
	}, [])

	const handleCloseModal = useCallback(() => {
		setIsModalOpen(false);
		form.resetFields();
	}, [isModalOpen, setIsModalOpen])

	return (
		<Modal
			title={selectedPost ? "Edit Post" : "New post"}
			open={isModalOpen}
			onCancel={handleCloseModal}
			okText="Submit"
			onOk={handleSubmit}
		>
			<Form
				initialValues={selectedPost && { title: selectedPost.title, body: selectedPost.body }}
				layout="vertical"
				form={form}
				className={styles.newPostForm}
			>
				<Item
					label="Title"
					name="title"
					rules={[
						{
							required: true,
							message: '${name} is required',
						},
					]}
				>
					<Input placeholder="Enter your snappy title" />
				</Item>
				<Item
					label="Body"
					name="body"
					rules={[
						{
							required: true,
							message: '${name} is required',
						},
					]}
				>
					<TextArea
						className={styles.bodyInput}
						maxLength={800}
						style={{ resize: 'none' }}
						placeholder="What's on your mind?"
						showCount
					/>
				</Item>
				<Item>
				</Item>
			</Form>
		</Modal>
	)
}