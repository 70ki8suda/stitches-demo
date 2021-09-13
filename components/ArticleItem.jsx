import React from 'react';
import { styled } from '../stitches.config';

const Wrapper = styled('li', {
  width: '100%',
  listStyle: 'none',
  '@sp': {
    width: 'calc(50% - 10px)',
  },
  '& .ArticleItem__image': {
    width: '100%',
  },
  '& .ArticleItem__text': {
    padding: '10px',
  },
  '& .ArticleItem__title': {
    fontSize: '$4',
    marginBottom: '1em',
    '@sp': {
      fontSize: '$3',
    },
  },
  '& .ArticleItem__body': {
    fontSize: '$3',
    '@sp': {
      fontSize: '$2',
    },
  },
});

export default function ArticleItem({ title, body, i }) {
  return (
    <Wrapper>
      <img className='ArticleItem__image' src={`https://picsum.photos/200/200?random=${i}`} />
      <div className='ArticleItem__text'>
        <h3 className='ArticleItem__title'>{title}</h3>
        <p className='ArticleItem__body'>{body}</p>
      </div>
    </Wrapper>
  );
}
