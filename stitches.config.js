import { createStitches } from '@stitches/react';

export const { config, createTheme, css, getCssText, globalCss, styled, theme, keyframes } = createStitches({
  theme: {
    colors: {
      textBlack: '#0b0d0e',
      grayBorder: '#F3F3F4',
      accentBlue1: '#3B86CB',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '24px',
      titleSize: '30px',
    },
    fonts: {
      system: 'system-ui',
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    sp: '(max-width: 959px)',
    pc: '(min-width: 960px)',
  },
});
