import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import { Feed } from './pages';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header>
          <div>HEADER</div>
        </Header>
        <Content>
          <Routes>
            <Route path='/' element={<Navigate to='/feed' />} />
            <Route path='/feed' element={<Feed />} />
          </Routes>
        </Content>
        <Footer>
          <div>FOOTER</div>
        </Footer>
      </div>
    </BrowserRouter>
  )
}

export default App
