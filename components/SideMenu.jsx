import { styled, keyframes } from '../stitches.config';
//icons
import { CgProfile } from 'react-icons/cg';
import { FaTwitter } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

const Wrapper = styled('div', {
  flexShrink: '0',
  textAlign: 'center',
  width: '200px',
  background: '#fff',
  borderRight: '1px solid $grayBorder',
  padding: '40px 20px',
  '@sp': {
    display: 'none',
  },
});

const Profile = styled('div', {
  textAlign: 'center',
});
const ProfileInfo = styled('div', {
  textAlign: 'center',
});

const ProfileAvatar = styled('div', {
  width: '100px',
  height: '100px',
  margin: '0 auto 18px',
  '& svg': {
    width: '100%',
    height: '100%',
  },
});

const SNSIcons = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  '& .twitter-icon': {
    fill: '#1DA1F2',
    width: '30px',
    height: '30px',
    marginRight: '14px',
  },
  '& .github-icon': {
    width: '30px',
    height: '30px',
    fill: '#000',
  },
});

const NavListCircleAnimation = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
});

const SideNav = styled('nav', {
  display: 'inline-block',
  textAlign: 'left',
  paddingTop: '30px',
  paddingRight: '20px',

  '& .sideNav-item': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '$6',
    marginBottom: '.5em',
    fontWeight: 'bold',
    transition: '.2s color',
  },
  '& .sideNav-item:hover': {
    color: '$accentBlue1',
  },
  '& .sideNav-item:before': {
    content: '',
    width: '8px',
    height: '8px',
    marginRight: '6px',
    display: 'inline-block',
    borderRadius: '4px',
    background: 'linear-gradient(to left,#7f7f7f,#b2b2b2)',
    backgroundSize: '400% 400%',
    animation: `${NavListCircleAnimation} 3s linear infinite`,
    transformOrigin: 'center center',
  },
  '& .sideNav-item:hover:before': {
    background: '$accentBlue1',
  },
});

export default function SideMenu() {
  return (
    <Wrapper>
      <Profile>
        <ProfileAvatar>
          <CgProfile />
        </ProfileAvatar>
        <ProfileInfo>
          <SNSIcons>
            <a href='' target='_blank'>
              <FaTwitter className='twitter-icon' />
            </a>
            <a href='' target='_blank'>
              <AiOutlineGithub className='github-icon' />
            </a>
          </SNSIcons>
          <SideNav>
            <ul>
              <li className='sideNav-item'>Profile</li>
              <li className='sideNav-item'>Blog</li>
              <li className='sideNav-item'>Project</li>
            </ul>
          </SideNav>
        </ProfileInfo>
      </Profile>
    </Wrapper>
  );
}
