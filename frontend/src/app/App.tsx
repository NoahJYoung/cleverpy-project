import React, { useCallback } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout, Spin, Menu } from 'antd';
import { useGetMenuOptions } from './hooks';
import { useRecoilState } from 'recoil';
import { Logo, ProtectedRoute } from './components';
import { globalLoadingState } from './state';
import { RoutePaths } from './globalTypes';
import { Feed, Login, Profile, SignUp } from './pages';

import styles from './App.module.scss';

const { Header, Content, Footer } = Layout;

function App() {
  const [loading] = useRecoilState(globalLoadingState);
  const { pathname } = useLocation();
  const menuOptions = useGetMenuOptions();

  return (
    <div className={`App ${styles.App}`}>
      <Header className={styles.header}>
        <Logo />
        <Menu
          theme='dark'
          mode='horizontal'
          items={menuOptions}
          className={styles.headerMenu}
          selectedKeys={[pathname]}
        />
      </Header>
      <Spin spinning={loading}>
        <Content className={styles.content}>
          <Routes>
            <Route path={RoutePaths.ROOT} element={<Navigate to={RoutePaths.FEED} />} />
            <Route path={RoutePaths.SIGN_IN} element={<Login />} />
            <Route path={RoutePaths.SIGN_UP} element={<SignUp />} />
            <Route path={RoutePaths.FEED} element={<ProtectedRoute><Feed /></ProtectedRoute>} />
            <Route path={`${RoutePaths.PROFILE}`}>
              <Route path=':id' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            </Route>
          </Routes>
        </Content>
      </Spin>
    </div>
  )
}

export default App
