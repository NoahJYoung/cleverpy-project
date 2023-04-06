import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { useRecoilState } from 'recoil';
import { globalLoadingState } from './state';
import { RoutePaths } from './globalTypes';
import { Feed, Profile } from './pages';

import styles from './App.module.scss';

const { Header, Content, Footer } = Layout;

function App() {
  const [loading] = useRecoilState(globalLoadingState)
  return (
    <BrowserRouter>
      <div className={`App ${styles.App}`}>
        <Header className={styles.header}>
          <div>HEADER</div>
        </Header>
        <Spin spinning={loading}>
          <Content className={styles.content}>
            <Routes>
              <Route path={RoutePaths.ROOT} element={<Navigate to={RoutePaths.FEED} />} />
              <Route path={RoutePaths.FEED} element={<Feed />} />
              <Route path={`${RoutePaths.PROFILE}`}>
                <Route path=':id' element={<Profile />} />
              </Route>
            </Routes>
          </Content>
        </Spin>
        <Footer className={styles.footer}>
          <div>FOOTER</div>
        </Footer>
      </div>
    </BrowserRouter>
  )
}

export default App
