import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { makeStyles } from '@mui/styles';

interface ParentProps {
  onHandleOppClose: (e: React.MouseEvent) => void;
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
    padding: '190px 57px 70px 57px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '100px 10px 35px 20px !important'
    }
  },

  customMainTitleStyle: {
    fontSize: '24px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    }
  },
  customMainSecondStyle: {
    fontSize: '24px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    marginTop: '20px !important',
    padding: '0 66px',
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

const finalImage = {
  name: 'final',
  path: '/static/img/main_smart/opp/final.png',
  desc: 'final background'
};

const FinalPopover: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CloseIcon
          onClick={props.onHandleOppClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '31px',
            right: '31px'
          }}
        />
        <Box
          component="img"
          src={finalImage.path}
          alt={finalImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Typography className={classes.customMainTitleStyle}>
            Sorry, it looks like you have insufficient balance to exchange with
            the license you chose
          </Typography>
          <Typography className={classes.customMainSecondStyle}>
            Please make sure you have enough balance to pay for the license and
            standard BSC fee.
          </Typography>
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
              marginTop="50px"
              onHandleClick={props.onHandleOppClose}
            >
              Got it
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
              marginTop="50px"
              onHandleClick={props.onHandleOppClose}
            >
              Got it
            </CustomButton>
          </Hidden>
        </Box>
      </Box>
    </>
  );
};

export default FinalPopover;
