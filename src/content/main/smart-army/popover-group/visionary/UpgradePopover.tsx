import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import ColumnBox from 'src/components/Box/ColumnBox';

interface ParentProps {
  onHandleVisionaryClose: (e: React.MouseEvent) => void;
  onHandleVisionaryNext: (e: React.MouseEvent, value: string) => void;
}

const useStyles = makeStyles((theme) => ({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '713px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '172px 94px 70px 94px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '105px 50px 35px 50px !important'
    }
  },
  customLeftTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customRightTitleStyle: {
    fontSize: '18px !important',
    color: '#E0A501',
    fontWeight: '600 !important',
    marginLeft: '5px !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },

  customButtonBoxStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '92px',
    '@media (max-width: 968px)': {
      marginTop: '25px'
    }
  },

  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  },

  mobileInnerBox: {
    marginTop: '62px',
    '@media (max-width: 968px)': {
      marginTop: '0'
    }
  }
}));

const upgradeImage = {
  name: 'upgrade',
  path: '/static/img/main_smart/visionary/upgrade.png',
  desc: 'upgrade background'
};
const changeImage = {
  name: 'change',
  path: '/static/img/main_smart/visionary/change.png',
  desc: 'change background'
};

const UpgradePopover: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CloseIcon
          onClick={props.onHandleVisionaryClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '31px',
            right: '31px',
            zIndex: '10'
          }}
        />
        <Box
          component="img"
          src={upgradeImage.path}
          alt={upgradeImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Hidden mdDown>
            <Typography fontSize="24px" color="#E0A501" fontWeight="700">
              It’s nice to see you upgrading your license!
            </Typography>
            <Typography
              fontSize="18px"
              color="#EDEDED"
              fontWeight="600"
              marginTop="30px"
              padding="0 56px"
            >
              Let’s reconfirm your license upgrade Make sure you have made the
              right decision for upgrading your current license
            </Typography>
            <Box
              component="img"
              src={changeImage.path}
              alt={changeImage.name}
              marginTop="37px"
            />
          </Hidden>
          <ColumnBox className={classes.mobileInnerBox} justifyContent="center">
            <Box display="flex">
              <Typography className={classes.customLeftTitleStyle}>
                Your current license:
              </Typography>
              <Typography className={classes.customRightTitleStyle}>
                Runner
              </Typography>
            </Box>
            <Box display="flex">
              <Typography className={classes.customLeftTitleStyle}>
                Your target license:
              </Typography>
              <Typography className={classes.customRightTitleStyle}>
                Visionary
              </Typography>
            </Box>
            <Hidden mdDown>
              <Box display="flex">
                <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
                  Upgrade fee:
                </Typography>
                <Typography
                  fontSize="18px"
                  color="#E0A501"
                  fontWeight="600"
                  marginLeft="5px"
                >
                  1 SMT
                </Typography>
              </Box>
            </Hidden>
          </ColumnBox>
          <Box className={classes.customButtonBoxStyle}>
            <Hidden mdDown>
              <CustomButton
                width="240px"
                height="50px"
                background="#E0A501"
                color="#212121"
                fontSize="20px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="35px"
                onHandleClick={(e) =>
                  props.onHandleVisionaryNext(e, 'visionary_got')
                }
              >
                Upgrade now
              </CustomButton>
              <CustomButton
                width="240px"
                height="50px"
                background="#936900"
                color="#FFFFFF"
                fontSize="20px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="35px"
                onHandleClick={props.onHandleVisionaryClose}
              >
                Maybe later
              </CustomButton>
            </Hidden>
            <Hidden mdUp>
              <CustomButton
                width="120px"
                height="25px"
                background="#E0A501"
                color="#212121"
                fontSize="18px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="17px"
                onHandleClick={(e) =>
                  props.onHandleVisionaryNext(e, 'visionary_got')
                }
              >
                Yes
              </CustomButton>
              <CustomButton
                width="120px"
                height="25px"
                background="#936900"
                color="#FFFFFF"
                fontSize="18px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="17px"
                onHandleClick={props.onHandleVisionaryClose}
              >
                No
              </CustomButton>
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UpgradePopover;
