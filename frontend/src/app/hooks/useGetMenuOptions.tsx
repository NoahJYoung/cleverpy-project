import React from "react";
import { useRecoilState } from "recoil";
import { currentUserState } from "../state";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutePaths } from "../globalTypes";
import { MenuProps } from "antd";


export const useGetMenuOptions = () => {
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
	const navigate = useNavigate();

	const handleSignOut = () => {
		setCurrentUser(null);
		navigate(RoutePaths.SIGN_IN);
	}

	const loggedOutMenuOptions: MenuProps['items'] = [
		{
			label: <NavLink to={RoutePaths.SIGN_IN}>Sign in</NavLink>,
			key: RoutePaths.SIGN_IN,
		},
		{
			label: <NavLink to={RoutePaths.SIGN_UP}>Sign up</NavLink>,
			key: RoutePaths.SIGN_UP,
		}
	];

	const loggedInMenuOptions: MenuProps['items'] = [
		{
			label: <NavLink to={RoutePaths.FEED}>Feed</NavLink>,
			key: RoutePaths.FEED,
		},
		{
			label: 'Sign out',
			onClick: handleSignOut,
			key: 'sign-out',
		},
	];

	return currentUser ? loggedInMenuOptions : loggedOutMenuOptions;
}