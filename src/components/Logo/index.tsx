import { Hidden, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};

        @media (min-width: 1280px) {
          padding-top: 20px;
        }
`
);

// const LogoSignWrapper = styled(Box)(
//   () => `
//         width: 52px;
//         height: 38px;
//         margin-top: 4px;
//         transform: scale(.8);
// `
// );

// const LogoSign = styled(Box)(
//   ({ theme }) => `
//         background: ${theme.general.reactFrameworkColor};
//         width: 18px;
//         height: 18px;
//         border-radius: ${theme.general.borderRadiusSm};
//         position: relative;
//         transform: rotate(45deg);
//         top: 3px;
//         left: 17px;

//         &:after,
//         &:before {
//             content: "";
//             display: block;
//             width: 18px;
//             height: 18px;
//             position: absolute;
//             top: -1px;
//             right: -20px;
//             transform: rotate(0deg);
//             border-radius: ${theme.general.borderRadiusSm};
//         }

//         &:before {
//             background: ${theme.palette.primary.main};
//             right: auto;
//             left: 0;
//             top: 20px;
//         }

//         &:after {
//             background: ${theme.palette.secondary.main};
//         }
// `
// );

// const LogoSignInner = styled(Box)(
//   ({ theme }) => `
//         width: 16px;
//         height: 16px;
//         position: absolute;
//         top: 12px;
//         left: 12px;
//         z-index: 5;
//         border-radius: ${theme.general.borderRadiusSm};
//         background: ${theme.header.background};
// `
// );

// const LogoTextWrapper = styled(Box)(
//   ({ theme }) => `
//         padding-left: ${theme.spacing(1)};
// `
// );

// const VersionBadge = styled(Box)(
//   ({ theme }) => `
//         background: ${theme.palette.success.main};
//         color: ${theme.palette.success.contrastText};
//         padding: ${theme.spacing(0.4, 1)};
//         border-radius: ${theme.general.borderRadiusSm};
//         text-align: center;
//         display: inline-block;
//         line-height: 1;
//         font-size: ${theme.typography.pxToRem(11)};
// `
// );

// const LogoText = styled(Box)(
//   ({ theme }) => `
//         font-size: ${theme.typography.pxToRem(15)};
//         font-weight: ${theme.typography.fontWeightBold};
// `
// );

function Logo() {
  const LogoImage = {
    name: 'logo',
    avatar: '/static/img/sidebar/logo.svg',
    desc: 'LogoImage'
  };
  const LogoImageMobile = {
    name: 'logoMobile',
    avatar: '/static/img/sidebar/logo_mobile.svg',
    desc: 'LogoImageMobile'
  };

  return (
    <LogoWrapper to="/main/dashboard">
      <Hidden lgUp>
        <Avatar
          variant="square"
          alt={LogoImageMobile.name}
          src={LogoImageMobile.avatar}
          sx={{ width: '190px', height: '30px', cursor: 'pointer' }}
        />
      </Hidden>
      <Hidden lgDown>
        <Avatar
          alt={LogoImage.name}
          variant="square"
          src={LogoImage.avatar}
          sx={{ width: '188px', height: '60px', cursor: 'pointer' }}
        />
      </Hidden>
    </LogoWrapper>
  );
}

export default Logo;
