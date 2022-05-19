import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Popover,
  CardContent,
  CardActions,
  Collapse
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import CustomButtom from 'src/components/Button';
import CustomTitle from 'src/components/Title/BadgeTitle';
import WalletDialog from '../../wallet-modal';

const useStyles = makeStyles({
  visionaryBoxStyle: {
    height: '25px',
    marginTop: '13px',
    background: '#5A5A5A',
    borderRadius: '20px'
  },
  customOutBoxStyle: {
    padding: '60px 20px 50px 20px',
    width: '280px !important',
    height: '100vh',
    background: 'linear-gradient(180deg, #323232 0%, #000000 100%)',
    borderRadius: '20px 0px 0px 20px'
  }
});

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

const MobileRightSidebarMenu = () => {
  const classes = useStyles();
  const ref = useRef<any>(null);

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

  // Wallet Dialog
  const [walletOpen, setWalletOpen] = useState(false);
  const handleWalletClickOpen = (e: React.MouseEvent) => {
    setWalletOpen(true);
  };
  const handleWalletClose = () => {
    setWalletOpen(false);
  };

  return (
    <>
      <ColumnBox className={classes.customOutBoxStyle}>
        <ColumnBox>
          <CustomButtom
            width="132px"
            height="32px"
            background="#E0A501"
            color="#212121"
            borderRadius="20px"
            fontSize="14px"
            fontWeight="600"
            padding="7px"
            onHandleClick={handleWalletClickOpen}
          >
            Connect Wallet
          </CustomButtom>

          <Box
            width="150px"
            sx={{ position: 'relative', margin: '30px auto 0 auto' }}
          >
            <Box
              component="img"
              alt={userAvatar.name}
              src={userAvatar.avatar}
              sx={{
                width: '150px',
                height: '150px',
                cursor: 'pointer',
                margin: 'auto'
              }}
            />
            <Box
              alt={profileMark.name}
              component="img"
              src={profileMark.avatar}
              sx={{
                width: '72.92px',
                height: '76px',
                cursor: 'pointer',
                position: 'absolute',
                top: '88px',
                right: '0',
                borderRadius: '0px !important'
              }}
            />
          </Box>
          <RowBox marginTop="16px" justifyContent="center">
            <Typography variant="h2" color="#EDEDED">
              Mark77
            </Typography>
            <Box
              component="img"
              alt={privateViewImage.name}
              src={privateViewImage.avatar}
              sx={{
                width: '15.72px',
                height: '15.05px',
                cursor: 'pointer',
                marginLeft: '20px'
              }}
            />
            <Box
              component="img"
              alt={telegramView.name}
              src={telegramView.avatar}
              sx={{
                width: '18px',
                height: '18px',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
            />
          </RowBox>
          <RowBox className={classes.visionaryBoxStyle}>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
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
              variant="h5"
              sx={{
                textAlign: 'center',
                padding: '5px 15px',
                color: '#fff',
                width: '40%'
              }}
            >
              364d : 20h
            </Typography>
          </RowBox>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '25px'
            }}
            display="flex"
            flexDirection="column"
          >
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

            <Box
              component="img"
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
                  width: 'auto',
                  height: 'auto',
                  padding: '10px',
                  background:
                    'linear-gradient(180deg, #323232 0%, #000000 100%)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginTop: '10px'
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
                  <Typography style={{ color: '#E0A501', fontSize: '12px' }}>
                    &#8226; Teamwork ladder lv.7
                  </Typography>
                  <Typography style={{ color: '#E0A501', fontSize: '12px' }}>
                    &#8226; Entitled to be an SMT intermediary
                  </Typography>
                  <Typography style={{ color: '#E0A501', fontSize: '12px' }}>
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
                  <Typography style={{ color: '#E0A501', fontSize: '12px' }}>
                    &#8226; Access to Smart Academy, Smart Living, Smart
                    Utilities, Smart Wealth (Visionary)
                  </Typography>
                </CardContent>
              </Collapse>
            </Box>
          </Box>
        </ColumnBox>

        <Box display="flex" flexDirection="column" alignItems="center">
          <CustomButtom
            width="154px"
            height="34px"
            background="#695400"
            color="#EDEDED"
            borderRadius="20px"
            fontSize="18px"
            fontWeight="600"
          >
            Light Mode
          </CustomButtom>

          <CustomButtom
            width="154px"
            height="34px"
            background="#5A5A5A"
            color="#EDEDED"
            borderRadius="20px"
            fontSize="18px"
            fontWeight="600"
            marginTop="10px"
          >
            Settings
          </CustomButtom>
        </Box>
      </ColumnBox>

      <WalletDialog open={walletOpen} onClose={handleWalletClose} />
    </>
  );
};

export default MobileRightSidebarMenu;
