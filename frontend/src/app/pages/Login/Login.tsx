import React, { useCallback, useState } from "react";
import { Form, Input, Card, Button, Typography, Divider } from 'antd';
import { RoutePaths } from "src/app/globalTypes";
import { mockedUser } from "src/helpers";

import styles from './Login.module.scss';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentUserState } from "src/app/state";

const { Item, useForm } = Form;
const { Text, Title } = Typography;

export function Login() {
	const [form] = useForm();
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
	const [hasLoginError, setHasLoginError] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const validatedFormValues = await form.validateFields();

		// Mocking this login logic due to lack of user authentication on backend
		const userIsAuthenticated = validatedFormValues.password === mockedUser.password &&
			validatedFormValues.email === mockedUser.email;
		//
		if (validatedFormValues && userIsAuthenticated) {
			setCurrentUser(mockedUser);
			navigate(RoutePaths.FEED);
		} else {
			setHasLoginError(true);
		}
	}

	return (
		<div className={styles.loginPageContainer}>
			<Title level={4}>Sign in to view posts and profile content</Title>
			<Divider />
			<Card className={styles.signInCard} title="Sign in">
				{hasLoginError && <Text type="danger">Invalid email or password</Text>}
				<Form layout="vertical" form={form}>
					<Item
						label='Email'
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
						<Input />
					</Item>
					<Item
						label='password'
						name='password'
						rules={[
							{
								required: true,
								message: '${name} is required',
							},
						]}
					>
						<Input type="password" />
					</Item>
					<div className={styles.buttonContainer}>
						<Item>
							<Button htmlType="button" type="text" href={RoutePaths.SIGN_UP}>Create an account</Button>
						</Item>
						<Item>
							<Button htmlType='submit' onClick={handleSubmit} type='primary'>Sign in</Button>
						</Item>
					</div>
				</Form>
			</Card>
		</div>
	)
}