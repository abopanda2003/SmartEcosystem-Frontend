import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { makeStyles } from '@mui/styles';

interface ParentProps {
  onHandleTrialClose: (e: React.MouseEvent) => void;
  onHandleTrialNext: (e: React.MouseEvent, value: string) => void;
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
    padding: '167px 100px 50px 100px !important',
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
    marginLeft: '5px',
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

const IntroducePopover: React.FC<ParentProps> = (props) => {
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
            right: '31px',
            zIndex: '10'
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
            We're ready to introduce you to Smart Army family!
          </Typography>
          <Typography className={classes.customMainTitleStyle}>
            Let's re-confirm your license activation, make sure you have chosen
            the right one for you, buddy
          </Typography>
          <Box
            marginTop="30px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex">
              <Typography className={classes.customLeftTitleStyle}>
                Your current wallet balance:
              </Typography>
              <Typography className={classes.customRightTitleStyle}>
                1,000 SMT
              </Typography>
            </Box>
            <Box display="flex">
              <Typography className={classes.customLeftTitleStyle}>
                SMT required to exchange:
              </Typography>
              <Typography className={classes.customRightTitleStyle}>
                200 SMT
              </Typography>
            </Box>
            <Box display="flex">
              <Typography className={classes.customLeftTitleStyle}>
                License to activate:
              </Typography>
              <Typography className={classes.customRightTitleStyle}>
                Trial
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            marginTop="30px"
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
                onHandleClick={(e) =>
                  props.onHandleTrialNext(e, 'trial_confirm')
                }
              >
                Yes, take me there
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
                No, bring me back
              </CustomButton>
            </Hidden>
            <Hidden mdUp>
              <CustomButton
                width="150px"
                height="25px"
                background="#E0A501"
                color="#212121"
                fontSize="12px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="17px"
                onHandleClick={(e) =>
                  props.onHandleTrialNext(e, 'trial_confirm')
                }
              >
                Yes, take me there
              </CustomButton>
              <CustomButton
                width="150px"
                height="25px"
                background="#936900"
                color="#FFFFFF"
                fontSize="12px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="17px"
                onHandleClick={props.onHandleTrialClose}
              >
                No, bring me back
              </CustomButton>
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IntroducePopover;
