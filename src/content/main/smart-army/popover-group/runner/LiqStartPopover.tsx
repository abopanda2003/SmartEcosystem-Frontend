import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { makeStyles } from '@mui/styles';

interface ParentProps {
  onHandleLiquidateClose: (e: React.MouseEvent) => void;
  onHandleLiquidateNext: (e: React.MouseEvent, value: string) => void;
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
    padding: '170px 100px 70px 100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '105px 30px 35px 30px !important'
    }
  },

  customHeadingStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    padding: '0 35px',
    marginTop: '10px !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important',
      padding: '0 !important',
      marginTop: '0  !important'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#C59100',
    fontWeight: '600 !important',
    marginTop: '30px  !important',
    padding: '0 12px',
    '@media (max-width: 968px)': {
      fontSize: '9px !important',
      marginTop: '25px !important',
      padding: '0'
    }
  },

  customButtonStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '88px',
    '@media (max-width: 968px)': {
      marginTop: '44px'
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

const startImage = {
  name: 'start',
  path: '/static/img/main_smart/runner/liqStart.png',
  desc: 'start background'
};

const IntroducePopover: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CloseIcon
          onClick={props.onHandleLiquidateClose}
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
          src={startImage.path}
          alt={startImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Hidden mdDown>
            <Typography fontSize="24px" color="#F84343" fontWeight="600">
              Oh no, do you know what you’re doing?
            </Typography>
          </Hidden>
          <Typography className={classes.customHeadingStyle}>
            Do you really want to leave us? Liquidating the license will leave
            you nothing including our family bond :(
          </Typography>
          <Typography className={classes.customMainTitleStyle}>
            *liquidating the license will destroy all license’s records. You
            will be charged by liquidation rate fee to unlock your locked LP
            token
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            marginTop="34px"
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
                onHandleClick={(e) => props.onHandleLiquidateNext(e, 'liq_now')}
              >
                yes, start liquidating
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
                onHandleClick={props.onHandleLiquidateClose}
              >
                maybe later
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
                onHandleClick={(e) => props.onHandleLiquidateNext(e, 'liq_now')}
              >
                Yes
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
                onHandleClick={props.onHandleLiquidateClose}
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

export default IntroducePopover;
