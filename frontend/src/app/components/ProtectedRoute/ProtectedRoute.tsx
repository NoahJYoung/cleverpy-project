import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { RoutePaths } from "src/app/globalTypes";
import { currentUserState } from "src/app/state";

interface ProtectedRouteProps {
	children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	const currentUser = useRecoilValue(currentUserState);
	return currentUser ? (
		<>{children}</>
	) : <Navigate to={RoutePaths.SIGN_IN} />
}