import { useContext, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useLocation } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';
import Logo from 'src/components/Logo';
import SidebarMenu from './SidebarMenu';
import WealthSidebarMenu from './WealthSidebarMenu';
import MobileSideBarMenu from './MobileSidebarMenu';
import MobileRightSideBarMenu from './MobileRightSidebarMenu';
import CustomTitle from 'src/components/Title/BadgeTitle';
import Button from '@mui/material/Button';
import {
  Box,
  Drawer,
  Hidden,
  Avatar,
  Typography,
  Popover,
  CardContent,
  CardActions,
  Collapse
} from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
    width: 300px;
    color: ${theme.sidebar.textColor};
    background: linear-gradient(180deg, #323232 0%, #000000 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    @media (min-width: ${theme.breakpoints.values.lg}px) {
        position: fixed;
        z-index: 10;
        border-top-right-radius: ${theme.general.borderRadius};
        border-bottom-right-radius: ${theme.general.borderRadius};
        height: 100%;
    }

    @media (max-width: 1024px) {
      width: 280px;
      height: 200%;
    }
`
);

const TopSection = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
`
);

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const DownSection = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    z-index: -1;
    margin-top: 20px;
    width: 100%;
    background: linear-gradient(180deg, #212121 0%, #000000 100%);
    border: 2px solid #323232;
    box-sizing: border-box;
    border-radius: 0px 20px 0px 0px;
  `
);

const LightModeButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: '#695400',
  borderRadius: '17px',
  width: '146px',
  height: '34px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '17px',
  textAlign: 'center',
  color: '#EDEDED'
});

const handleClickOpen = () => {
  alert('LightMode');
};

const userAvatar = {
  name: 'userAvatar',
  avatar: '/static/img/sidebar/profileImage.svg',
  desc: 'userAvatarImage'
};
const profileMark = {
  name: 'profileMark',
  avatar: '/static/img/sidebar/profileMark.svg',
  desc: 'profileMarkImage'
};
const publicUserInfo = {
  name: 'Mark77'
};
const privateViewImage = {
  name: 'privateView',
  avatar: '/static/img/sidebar/privateProfileView.svg',
  desc: 'privateProfileView'
};
const telegramView = {
  name: 'telegramView',
  avatar: '/static/img/sidebar/telegramView.svg',
  desc: 'telegramView'
};
const markDown = {
  name: 'markDown',
  avatar: '/static/img/sidebar/markDown.svg',
  desc: 'markDown'
};
const settingImage = {
  name: 'setting',
  avatar: '/static/img/sidebar/setting.svg',
  desc: 'settingImage'
};

const Sidebar = () => {
  const location = useLocation();
  const ref = useRef<any>(null);

  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const { rightSidebarToggle, toggleRightSidebar } = useContext(SidebarContext);
  const closeRightSidebar = () => toggleRightSidebar();

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <Scrollbars autoHide>
            <TopSection>
              <Logo />
              <Box
                sx={{
                  marginTop: '20px',
                  width: '260px',
                  padding: '0 10px',
                  height: '328px'
                }}
              >
                <Box
                  width="150px"
                  sx={{ position: 'relative', margin: '0 auto' }}
                >
                  <Avatar
                    variant="rounded"
                    alt={userAvatar.name}
                    src={userAvatar.avatar}
                    sx={{
                      width: '150px',
                      height: '150px',
                      cursor: 'pointer',
                      margin: 'auto'
                    }}
                  />
                  <Avatar
                    alt={profileMark.name}
                    variant="square"
                    src={profileMark.avatar}
                    sx={{
                      width: '72px',
                      height: '76px',
                      cursor: 'pointer',
                      position: 'absolute',
                      top: '88px',
                      right: '0',
                      borderRadius: '0px !important'
                    }}
                  />
                </Box>
                <Box sx={{ position: 'relative', marginTop: '16px' }}>
                  <Typography
                    variant="h2"
                    textAlign="center"
                    fontWeight="600"
                    color="#EDEDED"
                  >
                    {publicUserInfo.name}
                  </Typography>
                  <Avatar
                    alt={privateViewImage.name}
                    src={privateViewImage.avatar}
                    sx={{
                      width: '15px',
                      height: '15px',
                      cursor: 'pointer',
                      position: 'absolute',
                      top: '0',
                      bottom: '0',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      right: '29.49px'
                    }}
                  />
                  <Avatar
                    alt={telegramView.name}
                    src={telegramView.avatar}
                    sx={{
                      width: '18px',
                      height: '18px',
                      cursor: 'pointer',
                      position: 'absolute',
                      top: '0',
                      bottom: '0',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                      right: '0'
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '25px',
                    marginTop: '13px',
                    background: '#5A5A5A',
                    borderRadius: '20px',
                    display: 'flex'
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '12px',
                      lineHeight: '100%',
                      padding: '5px 10px',
                      color: '#212121',
                      background: '#E0A501',
                      borderRadius: '20px',
                      height: '100%',
                      width: '60%'
                    }}
                  >
                    Visionary License
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '12px',
                      padding: '5px 15px',
                      color: '#fff',
                      width: '40%'
                    }}
                  >
                    364d : 20h
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '25px'
                  }}
                  display="flex"
                  flexDirection="column"
                >
                  {location.pathname.includes('/wealth') ? (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      sx={{ marginTop: '10px' }}
                    >
                      <CustomTitle
                        title={'Elon’s Eye'}
                        width={'110px'}
                        height={'25px'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        color={'#EDEDED'}
                        background={'#5A5A5A'}
                      />
                      <CustomTitle
                        title={'The Prince'}
                        width={'110px'}
                        height={'25px'}
                        color={'#EDEDED'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        background={'#5A5A5A'}
                      />
                    </Box>
                  ) : (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      sx={{ marginTop: '10px' }}
                    >
                      <CustomTitle
                        title={'Elon’s Eye'}
                        width={'110px'}
                        height={'25px'}
                        color={'#76CEFF'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        background={'#00649C'}
                      />
                      <CustomTitle
                        title={'The Prince'}
                        width={'110px'}
                        height={'25px'}
                        color={'#4B3C00'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        background={'#E8B500'}
                      />
                    </Box>
                  )}

                  {location.pathname.includes('/wealth') ? (
                    ''
                  ) : (
                    <Avatar
                      alt={markDown.name}
                      src={markDown.avatar}
                      sx={{
                        width: '10px',
                        height: '5px',
                        cursor: 'pointer',
                        margin: 'auto',
                        marginTop: '8px'
                      }}
                      ref={ref}
                      onClick={handleOpen}
                    />
                  )}
                  <Popover
                    anchorEl={ref.current}
                    onClose={handleClose}
                    open={isOpen}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'center'
                    }}
                    transformOrigin={{
                      vertical: 'center',
                      horizontal: 'center'
                    }}
                    PaperProps={{
                      style: {
                        width: '260px',
                        height: '105px',
                        padding: '10px',
                        background:
                          'linear-gradient(180deg, #323232 0%, #000000 100%)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        marginTop: '4px'
                      }
                    }}
                  >
                    <Box display="flex" justifyContent="space-between">
                      <CustomTitle
                        title={'Elon’s Eye'}
                        width={'110px'}
                        height={'25px'}
                        color={'#76CEFF'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        background={'#00649C'}
                        marginBottom={'4px'}
                      />
                      <CustomTitle
                        title={'The Prince'}
                        width={'110px'}
                        height={'25px'}
                        color={'#4B3C00'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        background={'#E8B500'}
                        marginBottom={'4px'}
                      />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <CustomTitle
                        title={'Loyal Army'}
                        width={'110px'}
                        height={'25px'}
                        color={'#39FF8E'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        background={'#1E9450'}
                        marginBottom={'4px'}
                      />
                      <CustomTitle
                        title={'Early Run'}
                        width={'110px'}
                        height={'25px'}
                        color={'#EDEDED'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        background={'#5A5A5A'}
                        marginBottom={'4px'}
                      />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <CustomTitle
                        title={'Forever Army'}
                        width={'110px'}
                        height={'25px'}
                        color={'#7E0000'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        background={'#F84343'}
                        marginBottom={'4px'}
                      />
                      <CustomTitle
                        title={'The Duke'}
                        width={'110px'}
                        height={'25px'}
                        color={'#310062'}
                        fontSize={'12px'}
                        fontWeight={'600'}
                        background={'#C285FF'}
                        marginBottom={'4px'}
                      />
                    </Box>
                  </Popover>

                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '32px',
                      marginTop: '7px',
                      zIndex: '1'
                    }}
                  >
                    <CardActions
                      disableSpacing
                      sx={{
                        background:
                          'linear-gradient(180deg, #212121 0%, #000000 100%)',
                        border: '2px solid #323232',
                        boxSizing: 'border-box',
                        borderRadius: '10px',
                        height: '100%',
                        padding: '0 66px',
                        position: 'relative',
                        cursor: 'pointer'
                      }}
                      onClick={handleExpandClick}
                    >
                      <Typography
                        component="span"
                        sx={{
                          textAlign: 'center',
                          fontWeight: '600',
                          fontSize: '18px',
                          width: '110px',
                          height: '25px',
                          color: '#EDEDED',
                          letterSpacing: '1px'
                        }}
                      >
                        Privilege
                      </Typography>
                      <ExpandMore
                        expand={expanded}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent
                        sx={{
                          padding: '42px 10px 12px 10px !important',
                          width: '100%',
                          background:
                            'linear-gradient(180deg, #212121 0%, #000000 100%)',
                          border: '2px solid #323232',
                          boxSizing: 'border-box',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          marginTop: '-32px'
                        }}
                      >
                        <Typography
                          style={{ color: '#E0A501', fontSize: '12px' }}
                        >
                          &#8226; Teamwork ladder lv.7
                        </Typography>
                        <Typography
                          style={{ color: '#E0A501', fontSize: '12px' }}
                        >
                          &#8226; Entitled to be an SMT intermediary
                        </Typography>
                        <Typography
                          style={{ color: '#E0A501', fontSize: '12px' }}
                        >
                          &#8226; Farming rewards:
                        </Typography>
                        <Typography
                          style={{
                            color: '#EDEDED',
                            fontSize: '12px',
                            paddingLeft: 12
                          }}
                        >
                          &#8226; 0.17% Fee as a liquidity provider
                        </Typography>
                        <Typography
                          style={{
                            color: '#EDEDED',
                            fontSize: '12px',
                            paddingLeft: 12
                          }}
                        >
                          &#8226; Fixed 0.1% /day
                        </Typography>
                        <Typography
                          style={{
                            color: '#EDEDED',
                            fontSize: '12px',
                            paddingLeft: 12
                          }}
                        >
                          &#8226; Sell tax distribution *4
                        </Typography>
                        <Typography
                          style={{ color: '#E0A501', fontSize: '12px' }}
                        >
                          &#8226; Access to Smart Academy, Smart Living, Smart
                          Utilities, Smart Wealth (Visionary)
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Box>
                </Box>
              </Box>
            </TopSection>

            <DownSection>
              {location.pathname.includes('/wealth') ? (
                <>
                  <WealthSidebarMenu />
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      padding: '0 30px',
                      margin: '265px 0'
                    }}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Avatar
                      alt={settingImage.name}
                      src={settingImage.avatar}
                      sx={{
                        width: '28.88px',
                        height: '29.67px',
                        cursor: 'pointer'
                      }}
                    />
                    <LightModeButton
                      variant="contained"
                      onClick={handleClickOpen}
                    >
                      Light Mode
                    </LightModeButton>
                  </Box>
                </>
              ) : (
                <>
                  <SidebarMenu />
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      padding: '0 30px',
                      margin: '25px 0'
                    }}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Avatar
                      alt={settingImage.name}
                      src={settingImage.avatar}
                      sx={{
                        width: '28.88px',
                        height: '29.67px',
                        cursor: 'pointer'
                      }}
                    />
                    <LightModeButton
                      variant="contained"
                      onClick={handleClickOpen}
                    >
                      Light Mode
                    </LightModeButton>
                  </Box>
                </>
              )}
            </DownSection>
          </Scrollbars>
        </SidebarWrapper>
      </Hidden>

      {/* LEFT SIDE BAR IN THE MOBILE */}
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarWrapper sx={{ paddingTop: '200px' }}>
            <MobileSideBarMenu />
          </SidebarWrapper>
        </Drawer>
      </Hidden>

      {/* RIGHT SIDE BAR IN THE MOBILE */}
      <Hidden lgUp>
        <Drawer
          anchor="right"
          open={rightSidebarToggle}
          onClose={closeRightSidebar}
          variant="temporary"
          elevation={9}
        >
          <MobileRightSideBarMenu />
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
