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
    padding: '170px 85px 70px 85px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '103px 22px 35px 22px !important'
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
  path: '/static/img/main_smart/runner/liqNow.png',
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
            <Typography fontSize="24px" color="#E0A501" fontWeight="700">
              Please re confirm before you leave
            </Typography>
            <Box
              marginTop="30px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <Box display="flex">
                <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
                  License to liquidate:
                </Typography>
                <Typography
                  fontSize="18px"
                  color="#E0A501"
                  fontWeight="600"
                  marginLeft="5px"
                >
                  Runner License
                </Typography>
              </Box>
              <Box display="flex">
                <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
                  Running rewards/ privileges:
                </Typography>
              </Box>
              <Box display="flex" marginLeft="5px">
                <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
                  &#8226; Farming rewards:
                </Typography>
                <Typography
                  fontSize="18px"
                  color="#E0A501"
                  fontWeight="600"
                  marginLeft="5px"
                >
                  2 SMT/ mo
                </Typography>
              </Box>
              <Box display="flex" marginLeft="5px">
                <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
                  &#8226; Nobility rewards:
                </Typography>
                <Typography
                  fontSize="18px"
                  color="#E0A501"
                  fontWeight="600"
                  marginLeft="5px"
                >
                  100 SMT/ mo
                </Typography>
              </Box>
              <Box display="flex" marginLeft="5px">
                <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
                  &#8226; Ladder rewards:
                </Typography>
                <Typography
                  fontSize="18px"
                  color="#E0A501"
                  fontWeight="600"
                  marginLeft="5px"
                >
                  20 SMT/ mo
                </Typography>
              </Box>
              <Box display="flex">
                <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
                  Locked LP token:
                </Typography>
                <Typography
                  fontSize="18px"
                  color="#E0A501"
                  fontWeight="600"
                  marginLeft="5px"
                >
                  100 SMT-BNB LP ($10,000)
                </Typography>
              </Box>
              <Box display="flex">
                <Typography fontSize="18px" color="#EDEDED" fontWeight="600">
                  Liquidation rate fee:
                </Typography>
                <Typography
                  fontSize="18px"
                  color="#E0A501"
                  fontWeight="600"
                  marginLeft="5px"
                >
                  5 SMT-BNB LP
                </Typography>
              </Box>
            </Box>
          </Hidden>
          <Hidden>
            <Typography fontSize="15px" color="#EDEDED" fontWeight="600">
              You will receive
            </Typography>
            <Typography fontSize="15px" color="#E0A501" fontWeight="600">
              1820 SMT
            </Typography>
            <Typography fontSize="15px" color="#EDEDED" fontWeight="600">
              from this liquidation process
            </Typography>
          </Hidden>
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
                onHandleClick={(e) => props.onHandleLiquidateNext(e, 'liq_got')}
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
                onHandleClick={props.onHandleLiquidateClose}
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
                onHandleClick={(e) => props.onHandleLiquidateNext(e, 'liq_got')}
              >
                Yes, liquidate now
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
