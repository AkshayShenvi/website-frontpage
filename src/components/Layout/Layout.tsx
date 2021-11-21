import React from 'react';
import { Layout, LayoutProps } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

export function AppLayout({
    children,
    ...props
}: LayoutProps) {
    return (
        <Layout {...props}>{children}</Layout>
    )
}

export function AppHeader({
    children,
    ...props
}: LayoutProps) {
    return (
        <Header {...props}>{children}</Header>
    )
}