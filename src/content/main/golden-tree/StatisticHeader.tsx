import { useState, useRef } from 'react';
import { Box, Typography, Hidden, Popover, Avatar } from '@mui/material';
import CustomCard from 'src/components/Card';
import { makeStyles } from '@mui/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDrowUpIcon from '@mui/icons-material/ArrowDropUp';
import CustomButton from 'src/components/Button';
import SellSmtcPopover from './SellSmtcPopover';
import SellSmtcConfirmPopover from './SellSmtcConfirmPopover';
import CustomTooltip from 'src/components/Tooltip';

const useStyles = makeStyles((theme) => ({
  // CUSTOM STATISTIC BOX STYLE
  customBoxStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }
  },
  // INNER BOX OF CUSTOMCARD STYLE
  customInnerBoxStyle: {
    width: '200px',
    height: '120px',
    '@media (max-width: 968px)': {
      marginBottom: '20px'
    },
    '@media (max-width: 600px)': {
      width: '270px'
    }
  },
  // MAIN TITLE STYLE
  mainTitleTopStyle: {
    height: '40px',
    fontSize: '18px !important',
    fontWeight: '600 !important',
    color: '#EDEDED',
    lineHeight: '100% !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  mainTitleDownStyle: {
    height: '60px',
    fontSize: '20px !important',
    fontWeight: '700 !important',
    color: '#E0A501',
    padding: '0 10px',
    lineHeight: '100% !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const tooltipIcon = {
  name: 'tooltipIcon',
  path: '/static/img/main_dashboard/tooltipIcon.svg',
  desc: 'tooltipIcon'
};

const StatisticHeader = () => {
  const classes = useStyles();
  const ref = useRef();

  const [isOpen, setOpen] = useState<boolean>(false);
  const onHandleSellSmt = (): void => {
    setOpen(true);
    setPopoverStatus(false);
  };
  const onHandleSellSmtcClose = (): void => {
    setOpen(false);
  };

  const [isStatisticOpen, setStatisticOpen] = useState<boolean>(false);
  // STATISTIC POPOVER CLICK
  const onHandleStatistic = (): void => {
    setStatisticOpen(true);
  };
  const onHandleStatisticClose = (): void => {
    setStatisticOpen(false);
  };

  const [pooverStatus, setPopoverStatus] = useState<boolean>(false);
  const onHandleSellSmtcClick = (): void => {
    setPopoverStatus(true);
  };

  return (
    <Box className={classes.customBoxStyle}>
      <Box className={classes.customInnerBoxStyle}>
        <CustomCard height={'100%'} width={'100%'}>
          <Box padding="10px">
            <Typography className={classes.mainTitleTopStyle}>
              Your contribution
            </Typography>
            <Typography className={classes.mainTitleDownStyle}>
              375867 Growth (30%)
            </Typography>
          </Box>
        </CustomCard>
      </Box>

      <Box className={classes.customInnerBoxStyle}>
        <CustomCard height={'100%'} width={'100%'}>
          <Box padding="10px 5px">
            <Typography className={classes.mainTitleTopStyle}>
              Global contribution (current)
            </Typography>
            <Typography className={classes.mainTitleDownStyle}>
              1874303 Growth
            </Typography>
          </Box>
        </CustomCard>
      </Box>

      <Box className={classes.customInnerBoxStyle}>
        <CustomCard height={'100%'} width={'100%'}>
          <Box padding="10px">
            <Typography className={classes.mainTitleTopStyle}>
              Current Golden Tree Phase
            </Typography>
            <Typography className={classes.mainTitleDownStyle}>8th</Typography>
          </Box>
        </CustomCard>
      </Box>

      <Hidden mdDown>
        <Box ref={ref}>
          <CustomCard height={'120px'} width={'320px'}>
            <Box padding="10px 0">
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: '700',
                  height: '29px',
                  lineHeight: '100%',
                  color: '#E0A501',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Golden Tree Pool
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '40px',
                  marginTop: '16px',
                  padding: '0 10px'
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={onHandleStatistic}
                >
                  {isStatisticOpen ? (
                    <ArrowDrowUpIcon sx={{ color: '#E0A501' }} />
                  ) : (
                    <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
                  )}
                  <Typography
                    textAlign="center"
                    height="22px"
                    lineHeight="22px"
                    fontSize="18px"
                    fontWeight="600"
                    color="#E0A501"
                  >
                    Statistic
                  </Typography>
                </Box>
                <CustomButton
                  width={'180px'}
                  height={'40px'}
                  background={'#E0A501'}
                  color={'#212121'}
                  fontSize={'14px'}
                  fontWeight={'600'}
                  padding={'6px 15px'}
                  borderRadius={'20px'}
                  boxShadow={
                    '4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)'
                  }
                  title={'Sell SMTC at fixed threshold price'}
                  onHandleClick={onHandleSellSmt}
                />
              </Box>
            </Box>
          </CustomCard>
        </Box>
        <Popover
          anchorEl={ref.current}
          onClose={onHandleStatisticClose}
          open={isStatisticOpen}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          PaperProps={{
            style: {
              background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
              borderRadius: '10px',
              width: '468px',
              height: '384px'
            }
          }}
        >
          <Box
            padding="35px 50px 40px 35px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              fontSize="24px"
              color="#E0A501"
              height="29px"
              lineHeight="100%"
              textAlign="center"
            >
              Golden Tree Pool Statistic
            </Typography>
            <Box
              height="150px"
              width="100%"
              display="flex"
              justifyContent="space-between"
              marginTop="30px"
            >
              <CustomCard
                width={'174px'}
                height={'100%'}
                background={'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)'}
                border={'none'}
              >
                <Box>
                  <Typography
                    color="#EDEDED"
                    fontSize="18px"
                    textAlign="center"
                    fontWeight="600"
                    height="32px"
                    padding="20px 55px"
                    lineHeight="100%"
                  >
                    BUSD in Pool
                  </Typography>
                  <Typography
                    color="#E0A501"
                    fontSize="24px"
                    textAlign="center"
                    fontWeight="700"
                    height="22px"
                    lineHeight="100%"
                    marginTop="30px"
                  >
                    1,000,000
                  </Typography>
                  <Typography
                    color="#EDEDED"
                    fontSize="18px"
                    textAlign="center"
                    fontWeight="600"
                    height="16px"
                    lineHeight="100%"
                    marginTop="10px"
                  >
                    BUSD
                  </Typography>
                </Box>
              </CustomCard>
              <CustomCard
                width={'174px'}
                height={'100%'}
                background={'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)'}
                border={'none'}
              >
                <Typography
                  color="#EDEDED"
                  fontSize="18px"
                  textAlign="center"
                  fontWeight="600"
                  height="32px"
                  padding="20px 37px"
                  lineHeight="100%"
                >
                  SMTC in circulation
                </Typography>
                <Typography
                  color="#E0A501"
                  fontSize="24px"
                  textAlign="center"
                  fontWeight="700"
                  height="22px"
                  lineHeight="100%"
                  marginTop="30px"
                >
                  1,000,000
                </Typography>
                <Typography
                  color="#EDEDED"
                  fontSize="18px"
                  textAlign="center"
                  fontWeight="600"
                  height="16px"
                  lineHeight="100%"
                  marginTop="10px"
                >
                  SMTC
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '11px',
                    right: '11px'
                  }}
                >
                  <CustomTooltip
                    content={
                      'SMTC in circulation is determined by total SMT supply - burned SMT (SMT in burn address)'
                    }
                    width="220px"
                  >
                    <Avatar
                      sx={{ ml: 2, width: '13.34px', height: '13.34px' }}
                      variant="rounded"
                      alt={tooltipIcon.name}
                      src={tooltipIcon.path}
                    ></Avatar>
                  </CustomTooltip>
                </Box>
              </CustomCard>
            </Box>
            <Box height="60px" width="100%" marginTop="30px">
              <CustomCard
                width={'100%'}
                height={'100%'}
                background={'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)'}
                border={'none'}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  height="100%"
                  padding="22px 30px"
                >
                  <Typography
                    color="#EDEDED"
                    fontSize="18px"
                    textAlign="center"
                    fontWeight="600"
                  >
                    Current SMTC Price
                  </Typography>
                  <Typography
                    color="#E0A501"
                    fontSize="24px"
                    textAlign="center"
                    fontWeight="700"
                    marginLeft="62px"
                  >
                    1
                  </Typography>
                  <Typography
                    color="#EDEDED"
                    fontSize="18px"
                    textAlign="center"
                    fontWeight="600"
                  >
                    BUSD
                  </Typography>
                </Box>
              </CustomCard>
            </Box>
          </Box>
        </Popover>
      </Hidden>

      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isOpen}
        PaperProps={{
          style: {
            width: '700px',
            boxShadow: 'none'
          }
        }}
      >
        {pooverStatus ? (
          <SellSmtcConfirmPopover
            onHandleSellSmtcClose={onHandleSellSmtcClose}
          />
        ) : (
          <SellSmtcPopover
            onHandleSellSmtcClose={onHandleSellSmtcClose}
            onHandleSellSmtcClick={onHandleSellSmtcClick}
          />
        )}
      </Popover>
    </Box>
  );
};

export default StatisticHeader;
