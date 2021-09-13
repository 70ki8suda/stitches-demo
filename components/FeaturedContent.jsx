import React from 'react';
import { styled } from '../stitches.config';

const Wrapper = styled('div', {
  borderBottom: '1px solid #C8C7C2',
  padding: '30px',
  variants: {
    color: {
      yellow: {
        '& .featured-lead': {
          boxShadow: 'inset 0 -2.4px #fff, inset 0 -11.2px #ffff00, 5px 5px 0 5px #fff, -5px 5px 0 5px #fff',
        },
      },
      red: {
        '& .featured-lead': {
          boxShadow: 'inset 0 -2.4px #fff, inset 0 -11.2px #ff0000, 5px 5px 0 5px #fff, -5px 5px 0 5px #fff',
        },
      },
      blue: {
        '& .featured-lead': {
          boxShadow: 'inset 0 -2.4px #fff, inset 0 -11.2px #0000ff, 5px 5px 0 5px #fff, -5px 5px 0 5px #fff',
        },
      },
    },
  },
  '& .image-wrap': {
    position: 'relative',
    width: '60%',
    margin: '0 auto',
    '@sp': {
      width: '100%',
    },
  },
  '& .image-wrap img': {
    width: '100%',
  },
  '& .featured-lead-wrap': {
    width: '70%',
    position: 'absolute',
    top: '50%',
    left: '-25%',
    transform: 'translate(0, -25%)',
    '@sp': {
      left: '-15px',
      transform: 'translate(0, 0)',
      top: '0',
    },
  },
  '& .featured-lead': {
    zIndex: '2',
    display: 'inline',
    fontSize: '2.4vw',
    maxWidth: '60%',
    background: '#fff',
    '@sp': {
      fontSize: '4vw',
    },
  },
  '& .image-credit': {
    fontSize: '10px',
    textAlign: 'right',
  },
});

export default function FeaturedContent({ color }) {
  return (
    <Wrapper color={color}>
      <div className='image-wrap'>
        <img src='https://www.syfy.com/sites/syfy/files/styles/1140x640_hero/public/screen-shot-2021-09-09-at-9.07.24-am.png' />
        <p className='image-credit'>
          Credit: The Matrix Resurrections – Official Trailer 1 / Warner Bros. Pictures YouTube
        </p>
        <div className='featured-lead-wrap'>
          <h2 className='featured-lead'>
            'THE MATRIX RESURRECTIONS'
            <br /> TRAILER SENDS TWITTER DOWN A RABBIT HOLE OF FAN THEORIES
          </h2>
        </div>
      </div>
    </Wrapper>
  );
}
