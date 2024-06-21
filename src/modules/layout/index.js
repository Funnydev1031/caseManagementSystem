import { Layout, theme } from "antd";
import React from "react";
import AppSider from "../../components/sider";

const { Content } = Layout;

const AppLayout = ({ children }) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<Layout
			style={{
				background: colorBgContainer,
				borderRadius: borderRadiusLG,

			}}
		>
			<AppSider />
			<Content
				style={{
					padding: 24,
					maxHeight: '80%',
					overflow: 'hidden'
				}}
			>
				{children}
			</Content>
		</Layout>
	);
};

export default AppLayout;
