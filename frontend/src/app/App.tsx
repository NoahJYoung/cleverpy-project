import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { RecoilRoot, useRecoilState } from 'recoil';
import { Feed } from './pages';

import styles from './App.module.scss';
import { globalLoadingState } from './state';

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
              <Route path='/' element={<Navigate to='/feed' />} />
              <Route path='/feed' element={<Feed />} />
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
