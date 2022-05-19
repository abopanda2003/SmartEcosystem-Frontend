import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { makeStyles } from '@mui/styles';

interface ParentProps {
  onHandleTrialClose: (e: React.MouseEvent) => void;
}

const useStyles = makeStyles((theme) => ({
  customOutBoxStyle: {
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '700px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '350px'
    }
  },
  customInnerBoxStyle: {
    padding: '180px 55px 60px 55px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '100px 10px 35px 20px !important'
    }
  },

  customHeadingStyle: {
    fontSize: '24px !important',
    color: '#E0A501',
    fontWeight: '600 !important',
    padding: '0 163px',
    '@media (max-width: 968px)': {
      fontSize: '16px !important',
      padding: '0'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    marginTop: '31px !important',
    padding: '0 17px',
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

const introduceImage = {
  name: 'introduce',
  path: '/static/img/main_smart/trial/introduce.png',
  desc: 'introduce background'
};

const FinalPopover: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CloseIcon
          onClick={props.onHandleTrialClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '31px',
            right: '31px'
          }}
        />
        <Box
          component="img"
          src={introduceImage.path}
          alt={introduceImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Typography className={classes.customHeadingStyle}>
            Hi there, welcome to Smart Army family!
          </Typography>
          <Typography className={classes.customMainTitleStyle}>
            We are waiting for your action contributing to Golden Tree and grow
            together with us!
          </Typography>
          <Typography className={classes.customMainTitleStyle}>
            We advise you to learn from our guide if it's your first time here
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            width="100%"
            marginTop="50px"
          >
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
              >
                Take the tour
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
                onHandleClick={props.onHandleTrialClose}
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
                fontSize="14px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="17px"
              >
                Take the tour
              </CustomButton>
              <CustomButton
                width="120px"
                height="25px"
                background="#936900"
                color="#FFFFFF"
                fontSize="14px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="17px"
                onHandleClick={props.onHandleTrialClose}
              >
                Maybe later
              </CustomButton>
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FinalPopover;
