import React from 'react';
import { styled } from '../stitches.config';
//icons
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  return (
    <Wrapper>
      <BlogTitle>70ki8suda</BlogTitle>
      <HeaderSearch>
        <BsSearch />
        <SearchInput type='text' placeholder='Search' />
        <AiOutlineClose />
      </HeaderSearch>
    </Wrapper>
  );
}

//style

const Wrapper = styled('header', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid $grayBorder',
  background: '#fff',
});
const BlogTitle = styled('h1', {
  fontSize: '$titleSize',
  padding: '1em',
  '@sp': {
    fontSize: '$4',
  },
});

const HeaderSearch = styled('div', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@sp': {
    left: 'auto',
    right: '14px',
    transform: 'translate(0,-50%)',
  },
});

const SearchInput = styled('input', {
  outline: 'none',
  border: 'none',
  borderBottom: '1px solid $grayBorder',
  margin: '0 10px',
  padding: '10px',
  '@sp': {
    fontSize: '$2',
  },
});
