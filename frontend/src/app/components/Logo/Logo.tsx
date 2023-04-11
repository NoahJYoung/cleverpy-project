import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

import styles from './Logo.module.scss';

export function Logo() {
	return (
		<div className={styles.logoContainer}>
			<Title className={styles.logo} level={1}>LOGO</Title>
		</div>
	)
}