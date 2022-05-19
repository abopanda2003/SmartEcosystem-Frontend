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
    padding: '172px 85px 70px 85px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '110px 20px 35px 20px !important'
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

const nowImage = {
  name: 'now',
  path: '/static/img/main_smart/runner/extNow.png',
  desc: 'now background'
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
          src={nowImage.path}
          alt={nowImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Hidden mdDown>
            <Typography fontSize="24px" color="#E0A501" fontWeight="600">
              It’s nice to have you for another year!
            </Typography>
            <Typography
              fontSize="18px"
              color="#EDEDED"
              fontWeight="600"
              marginTop="20px"
              padding="0 25px"
            >
              It’s been 1 year since we have been working together. We know you
              love Smart Army family
            </Typography>
            <Typography
              fontSize="18px"
              color="#EDEDED"
              fontWeight="600"
              marginTop="20px"
            >
              Can we start extending your Smart Army License now?
            </Typography>
            <Box display="flex" marginTop="20px">
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
          <Hidden mdUp>
            <Typography className={classes.customMainTitleStyle}>
              Are you sure to extend your current license?
            </Typography>
            <Typography className={classes.customMainTitleStyle}>
              This will cost you some additional administrative fee.
            </Typography>
          </Hidden>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            marginTop="56px"
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
                  props.onHandleLiquidateNext(e, 'ext_thank')
                }
              >
                Yes, right now
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
                Not now
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
                  props.onHandleLiquidateNext(e, 'ext_thank')
                }
              >
                Yes, please proceed
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
                onHandleClick={props.onHandleLiquidateClose}
              >
                No, take me back
              </CustomButton>
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IntroducePopover;
