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
    padding: '230px 100px 70px 100px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '115px 50px 35px 50px !important'
    }
  },

  customTitleGroupStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 30px',
    '@media (max-width: 968px)': {
      padding: '0 10px'
    }
  },
  customMainTitleStyle: {
    fontSize: '18px !important',
    color: '#EDEDED',
    fontWeight: '600 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important',
      marginBottom: '5px !important'
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

const chooseImage = {
  name: 'choose',
  path: '/static/img/main_smart/runner/choose.png',
  desc: 'choose background'
};

const ChoosePopover: React.FC<ParentProps> = (props) => {
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
          src={chooseImage.path}
          alt={chooseImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Box className={classes.customTitleGroupStyle}>
            <Typography className={classes.customMainTitleStyle}>
              Do you wish to liquidate the license
            </Typography>
            <Typography className={classes.customMainTitleStyle}>or</Typography>
            <Typography className={classes.customMainTitleStyle}>
              extend the license?
            </Typography>
          </Box>
          <Box className={classes.customButtonStyle}>
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
                  props.onHandleLiquidateNext(e, 'liq_start')
                }
              >
                Liquidate
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
                onHandleClick={(e) => props.onHandleLiquidateNext(e, 'ext_now')}
              >
                Extend
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
                onHandleClick={(e) =>
                  props.onHandleLiquidateNext(e, 'liq_start')
                }
              >
                Liquidate
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
                onHandleClick={(e) => props.onHandleLiquidateNext(e, 'ext_now')}
              >
                Extend
              </CustomButton>
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChoosePopover;
