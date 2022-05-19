import React from 'react';
import { Box, Typography, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { makeStyles } from '@mui/styles';

interface ParentProps {
  onHandleLiquidateClose: (e: React.MouseEvent) => void;
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
    padding: '170px 42px 70px 42px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '95px 40px 35px 40px !important'
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

const thankImage = {
  name: 'thankImage',
  path: '/static/img/main_smart/runner/extThank.png',
  desc: 'thank background'
};

const UpgradePopover: React.FC<ParentProps> = (props) => {
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
          src={thankImage.path}
          alt={thankImage.name}
          className={classes.customImageStyle}
        />
        <Box className={classes.customInnerBoxStyle}>
          <Hidden mdDown>
            <Typography fontSize="24px" color="#E0A501" fontWeight="600">
              Good news!
            </Typography>
            <Typography fontSize="24px" color="#E0A501" fontWeight="600">
              Your license has been extended for 1 more year!
            </Typography>
            <Typography
              fontSize="18px"
              color="#EDEDED"
              fontWeight="600"
              marginTop="30px"
            >
              It’s good to be with you again, buddy!
            </Typography>
            <Typography
              fontSize="18px"
              color="#EDEDED"
              fontWeight="600"
              marginTop="30px"
            >
              Let’s grab much more rewards and achievement!
            </Typography>
            <Typography
              fontSize="18px"
              color="#EDEDED"
              fontWeight="600"
              marginTop="30px"
            >
              One year in the Smart Army family can give you tons of happiness!
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
              marginTop="37px"
              onHandleClick={props.onHandleLiquidateClose}
            >
              Thanks
            </CustomButton>
          </Hidden>
          <Hidden mdUp>
            <Typography fontSize="18px" color="#E0A501" fontWeight="700">
              CONGRATULATION!
            </Typography>
            <Typography
              fontSize="12px"
              color="#EDEDED"
              fontWeight="600"
              marginTop="15px"
            >
              Your Smartarmy License is now active! You may now enjoy the
              privilege features!
            </Typography>
            <CustomButton
              width="120px"
              height="20px"
              background="#E0A501"
              color="#212121"
              fontSize="14px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="17px"
              marginTop="41px"
              onHandleClick={props.onHandleLiquidateClose}
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
