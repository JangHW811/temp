import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../../utils/auth';
import CommonHeader from '../molecules/CommonHeader';
import SideMenu from '../molecules/SideMenu';

interface CommonLayoutInterface {
  children: React.ReactNode | React.ReactNodeArray;
}
const CommonLayout: FC<CommonLayoutInterface> = ({ children }) => {
  const { accessToken, isLoggedIn } = useAuth();
  console.log('logggggin', accessToken);
  return (
    <Container>
      <Layout style={{ minHeight: '100vh' }}>
        <CommonHeader title='Korean Customer Master File'></CommonHeader>
        <Layout style={{ flexDirection: 'row' }}>
          {isLoggedIn && <SideMenu />}
          <Content style={{ margin: 0, padding: 0 }}>{children}</Content>
        </Layout>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export default CommonLayout;
