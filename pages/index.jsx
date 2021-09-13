import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { styled } from '../stitches.config';
import Head from 'next/head';
//components
import FeaturedContent from '../components/FeaturedContent';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import ArticleItem from '../components/ArticleItem';

const MainContainer = styled('div', {
  display: 'flex',
  '@sp': {
    display: 'block',
  },
});

const MainArea = styled('div', {
  width: '100%',
});

const ArticlesArea = styled('div', {
  padding: '30px',

  '& .ArticlesArea__list': {
    display: 'flex',
    gap: '20px 20px',
    '@sp': {
      flexWrap: 'wrap',
    },
  },
  '& .ArticlesArea__lead': {
    fontSize: '$5',
    marginBottom: '1.4em',
  },
});

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((result) => result.slice(0, 4));

export default function Home() {
  const [articles, setArticles] = useState([]);
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  useEffect(() => {
    setArticles(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Header />
      <MainContainer>
        <SideMenu />
        <MainArea>
          <FeaturedContent color='yellow' />
          <ArticlesArea>
            <h2 className='ArticlesArea__lead'>Recent update project</h2>
            <ul className='ArticlesArea__list'>
              {articles &&
                articles.length > 0 &&
                articles.map((article, i) => <ArticleItem title={articles[i].title} body={articles[i].body} i={i} />)}
            </ul>
          </ArticlesArea>
        </MainArea>
      </MainContainer>
    </>
  );
}
