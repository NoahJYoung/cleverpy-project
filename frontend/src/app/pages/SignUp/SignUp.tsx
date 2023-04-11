import React from "react";
import { Button, Card, Divider, Form, Input, Typography } from "antd";
import { useRecoilState } from "recoil";
import { RoutePaths } from "src/app/globalTypes";
import { currentUserState } from "src/app/state";
import { generateRandomId } from "src/app/helpers";
import { useNavigate } from "react-router-dom";

import styles from './SignUp.module.scss';

const { Item, useForm } = Form;
const { Title } = Typography;

export function SignUp() {
	const [form] = useForm();
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
	const navigate = useNavigate();


	const handleSubmit = async () => {
		const validatedValues = await form.validateFields();
		const preparedValues = {
			id: generateRandomId(),
			name: validatedValues.name,
			email: validatedValues.email,
			username: validatedValues.username,
			password: validatedValues.password,
		}
		setCurrentUser(preparedValues);
		navigate(RoutePaths.FEED);
	}

	return (
		<div className={styles.signUpPage}>
			<Title level={4}>Enter your information to create an account</Title>
			<Divider />
			<Card className={styles.signUpCard} title="Sign up">
				<Form layout='vertical' form={form}>
					<div className={styles.gridContainer}>
						<Item
							label="Full name"
							name="name"
							rules={[
								{
									required: true,
									message: 'Please enter your full name',
								},
							]}
						>
							<Input placeholder="Enter your full name" />
						</Item>
						<Item
							label="Username"
							name="username"
							rules={[
								{
									required: true,
									message: 'Please enter a username',
								},
							]}
						>
							<Input placeholder="enter a username" />
						</Item>
						<Item
							label="Email"
							name="email"
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
							<Input placeholder="Enter your email" />
						</Item>
						<Item
							label="Password"
							name="password"
							rules={[
								{
									required: true,
									message: 'Please enter a password',
								},
							]}
						>
							<Input placeholder="Enter a password" type="password" />
						</Item>
						<Item
							label="Confirm password"
							name="passwordRepeat"
							rules={[
								{
									required: true,
									message: 'Please confirm your password',
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}
										return Promise.reject(new Error('The two passwords that you entered do not match!'));
									},
								}),
							]}
						>
							<Input placeholder="Re-type your password" type="password" />
						</Item>
					</div>
					<Item className={styles.buttonContainer}>
						<Button
							onClick={handleSubmit}
							type="primary"
							htmlType="submit"
						>
							Create Account
						</Button>
					</Item>
				</Form>
			</Card>
		</div>
	)
}