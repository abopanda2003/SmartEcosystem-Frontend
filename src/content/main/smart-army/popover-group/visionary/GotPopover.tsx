import React from 'react';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import { makeStyles } from '@mui/styles';

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
    padding: '170px 50px 58px 50px !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '50px 25px 35px 25px !important'
    }
  },
  customHeadingTitle: {
    fontSize: '24px !important',
    color: '#EDEDED',
    fontWeight: '700 !important',
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
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

const GotPopover: React.FC<ParentProps> = (props) => {
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
        <Hidden mdDown>
          <Box
            component="img"
            src={gotImage.path}
            alt={gotImage.name}
            sx={{
              position: 'absolute',
              top: '0',
              left: '0'
            }}
          />
        </Hidden>
        <Box className={classes.customInnerBoxStyle}>
          <Hidden mdUp>
            <Typography className={classes.customHeadingTitle}>
              This upgrade works by liquidating your previous license & exchange
              to new license. The liquidation rate & exchange fee is going to be
              charged
            </Typography>
          </Hidden>
          <Hidden mdDown>
            <Typography fontSize="24px" color="#E0A501" fontWeight="700">
              Look! Additional privileges have been added to your account. You
              look super cool now!
            </Typography>
          </Hidden>
          <Box
            component="img"
            src={changeImage.path}
            alt={changeImage.name}
            marginTop="20px"
          />
          <Hidden mdDown>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 200px"
              marginTop="10px"
              width="100%"
            >
              <Typography
                fontSize="18px"
                fontWeight="700"
                color="#E0A501"
                lineHeight="100%"
              >
                Before
              </Typography>
              <Typography
                fontSize="18px"
                fontWeight="700"
                color="#E0A501"
                lineHeight="100%"
              >
                After
              </Typography>
            </Box>
            <Box
              marginTop="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <Box textAlign="left" marginRight="20px" width="280px">
                <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                  &#8226; Teamwork ladder{' '}
                  <Typography
                    component="span"
                    style={{ color: '#E0A501', fontSize: '14px' }}
                  >
                    lv.5
                  </Typography>
                </Typography>
                <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                  &#8226; Entitled to be an SMT intermediary
                </Typography>
                <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                  &#8226; Farming rewards:
                </Typography>
                <Typography
                  style={{
                    color: '#EDEDED',
                    fontSize: '14px',
                    paddingLeft: 12
                  }}
                >
                  &#8226;{' '}
                  <Typography
                    component="span"
                    style={{ color: '#E0A501', fontSize: '14px' }}
                  >
                    0.17%
                  </Typography>{' '}
                  Fee as a liquidity provider
                </Typography>
                <Typography
                  style={{
                    color: '#EDEDED',
                    fontSize: '14px',
                    paddingLeft: 12
                  }}
                >
                  &#8226; Fixed{' '}
                  <Typography
                    component="span"
                    style={{ color: '#E0A501', fontSize: '14px' }}
                  >
                    0.1% /day
                  </Typography>
                </Typography>
                <Typography
                  style={{
                    color: '#EDEDED',
                    fontSize: '14px',
                    paddingLeft: 12
                  }}
                >
                  &#8226; Sell tax distribution *4
                </Typography>
                <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                  &#8226; Access to Smart Academy, Smart Living, Smart
                  Utilities, Smart Wealth{' '}
                  <Typography
                    component="span"
                    style={{ color: '#E0A501', fontSize: '14px' }}
                  >
                    (Runner)
                  </Typography>
                </Typography>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ height: '100%', border: '2px solid #E0A501' }}
              />
              <Box textAlign="left" marginLeft="30px" width="280px">
                <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                  &#8226; Teamwork ladder{' '}
                  <Typography
                    component="span"
                    style={{ color: '#E0A501', fontSize: '14px' }}
                  >
                    lv.7
                  </Typography>
                </Typography>
                <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                  &#8226; Entitled to be an SMT intermediary
                </Typography>
                <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                  &#8226; Farming rewards:
                </Typography>
                <Typography
                  style={{
                    color: '#EDEDED',
                    fontSize: '14px',
                    paddingLeft: 12
                  }}
                >
                  &#8226;{' '}
                  <Typography
                    component="span"
                    style={{ color: '#E0A501', fontSize: '14px' }}
                  >
                    0.17%
                  </Typography>{' '}
                  Fee as a liquidity provider
                </Typography>
                <Typography
                  style={{
                    color: '#EDEDED',
                    fontSize: '14px',
                    paddingLeft: 12
                  }}
                >
                  &#8226; Fixed{' '}
                  <Typography
                    component="span"
                    style={{ color: '#E0A501', fontSize: '14px' }}
                  >
                    0.1% /day
                  </Typography>
                </Typography>
                <Typography
                  style={{
                    color: '#EDEDED',
                    fontSize: '14px',
                    paddingLeft: 12
                  }}
                >
                  &#8226; Sell tax distribution *4
                </Typography>
                <Typography style={{ color: '#EDEDED', fontSize: '14px' }}>
                  &#8226; Access to Smart Academy, Smart Living, Smart
                  Utilities, Smart Wealth{' '}
                  <Typography
                    component="span"
                    style={{ color: '#E0A501', fontSize: '14px' }}
                  >
                    (Visionary)
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Hidden>
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
              marginTop="40px"
              onHandleClick={(e) =>
                props.onHandleVisionaryNext(e, 'visionary_thank')
              }
            >
              Got it
            </CustomButton>
          </Hidden>
          <Hidden mdUp>
            <Box
              marginTop="20px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <CustomButton
                width="140px"
                height="25px"
                background="#E0A501"
                color="#212121"
                fontSize="14px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="17px"
                onHandleClick={(e) =>
                  props.onHandleVisionaryNext(e, 'visionary_thank')
                }
              >
                Upgrade now
              </CustomButton>
              <CustomButton
                width="140px"
                height="25px"
                background="#936900"
                color="#FFFFFF"
                fontSize="14px"
                fontWeight="600"
                boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
                borderRadius="17px"
              >
                Postpone
              </CustomButton>
            </Box>
          </Hidden>
        </Box>
      </Box>
    </>
  );
};

export default GotPopover;
