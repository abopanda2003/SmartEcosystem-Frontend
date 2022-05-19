import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { makeStyles } from '@mui/styles';

interface ParentProps {
  onHandleVisionaryClose: (e: React.MouseEvent) => void;
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
    padding: '170px 60px 58px 60px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '95px 80px 35px 80px !important'
    }
  },

  customHeadingStyle: {
    fontSize: '24px !important',
    color: '#E0A501',
    fontWeight: '600 !important',
    padding: '0 52px',
    '@media (max-width: 968px)': {
      fontSize: '16px !important',
      padding: '0'
    }
  },

  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    marginTop: '30px !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },

  customImageStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    '@media (max-width: 968px)': {
      height: '75px'
    }
  }
}));

const gotImage = {
  name: 'got',
  path: '/static/img/main_smart/visionary/got.png',
  desc: 'got background'
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
          src={gotImage.path}
          alt={gotImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Hidden mdDown>
            <Typography fontSize="24px" color="#E0A501" fontWeight="600">
              Good news!
            </Typography>
            <Typography fontSize="24px" color="#E0A501" fontWeight="600">
              Your upgrade has been processed successfully!
            </Typography>
            <Box
              component="img"
              src={changeImage.path}
              alt={changeImage.name}
              marginTop="30px"
            />
            <Typography
              fontSize="24px"
              color="#EDEDED"
              fontWeight="600"
              padding="0 7px"
              marginTop="50px"
            >
              Let's re-confirm your license activation, make sure you have
              chosen the right one for you, buddy
            </Typography>
            <CustomButton
              width="240px"
              height="50px"
              background="#E0A501"
              color="#212121"
              fontSize="20px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              marginTop="88px"
              onHandleClick={props.onHandleVisionaryClose}
            >
              Thanks!
            </CustomButton>
          </Hidden>
          <Hidden mdUp>
            <Typography fontSize="18px" color="#E0A501" fontWeight="600">
              CONGRATULATION!
            </Typography>
            <Typography
              fontSize="12px"
              color="#EDEDED"
              fontWeight="600"
              marginTop="20px"
            >
              Your license is now upgraded to
            </Typography>
            <Typography
              fontSize="12px"
              color="#E0A501"
              fontWeight="700"
              marginTop="5px"
            >
              VISIONARY
            </Typography>
            <CustomButton
              width="120px"
              height="25px"
              background="#E0A501"
              color="#212121"
              fontSize="14px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
              marginTop="31px"
              onHandleClick={props.onHandleVisionaryClose}
            >
              Got it
            </CustomButton>
          </Hidden>
        </Box>
      </Box>
    </>
  );
};

export default UpgradePopover;
