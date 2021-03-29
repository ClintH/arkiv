import React from 'react';
import Content from '../components/Content';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

export const MinPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Layout>
      <Helmet title={'Arkixd.' + title} />
      <PageContent content={content} />
    </Layout>
  );
};