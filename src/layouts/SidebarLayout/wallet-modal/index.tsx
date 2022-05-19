import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CustomButton from 'src/components/Button';

interface ParentProps {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  outBoxStyle: {
    padding: '30px 20px 40px 20px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '760px',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      width: '100%'
    }
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '31px',
    right: '31px',
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      top: '18px',
      right: '18px'
    }
  },
  headingTitle: {
    color: '#E0A501',
    fontWeight: '700 !important',
    marginBottom: '20px !important',
    '@media (max-width: 968px)': {
      marginBottom: '10px !important',
      fontSize: '21px !important'
    }
  },
  itemTitle: {
    // fontSize: '24px !important',
    // fontWeight: '600 !important',
    // lineHeight: '100% !important',
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      fontSize: '14px !important'
    }
  },
  walletTitle: {
    fontSize: '20px !important',
    lineHeight: '100% !important',
    fontWeight: '600 !important',
    marginTop: '20px !important',
    color: '#EDEDED',
    '@media (max-width: 968px)': {
      fontSize: '11px !important'
    }
  },
  deActiveStyle: {
    opacity: '.3'
  },
  checkBoxTitleStyle: {
    color: '#EDEDED !important',
    marginLeft: '12px !important',
    '@media (max-width: 968px)': {
      fontSize: '14px !important'
    }
  },
  walletBorderStyle: {
    outline: '3px solid #FFCB00',
    outlineOffset: '-3px',
    borderRadius: '50%',
    '@media (max-width: 968px)': {
      width: '71px',
      height: '71px'
    }
  },
  innerBoxStyle: {
    padding: '30px 30px 0 30px',
    '@media (max-width: 968px)': {
      padding: '17px 0 0 10px'
    }
  },
  getWalletTitleStyle: {
    color: '#EDEDED',
    marginTop: '73px !important',
    '@media (max-width: 968px)': {
      fontSize: '10px !important',
      marginTop: '43px !important'
    }
  },
  walletIconStyle: {
    '@media (max-width: 968px)': {
      width: '71px',
      height: '71px'
    }
  },
  outWalletIconStyle: {
    marginLeft: '45px',
    '@media (max-width: 968px)': {
      marginLeft: '20px'
    }
  },
  innerWalletIconStyle: {
    marginTop: '10px',
    width: 'auto',
    marginRight: '80px',
    '@media (max-width: 968px)': {
      marginRight: '20px'
    }
  }
}));

const binanceIcon = {
  name: 'binance',
  path: '/static/img/header/binance.svg',
  desc: 'binance icon'
};
const trustIcon = {
  name: 'trust',
  path: '/static/img/header/trust.svg',
  desc: 'trust icon'
};
const metamaskIcon = {
  name: 'metamask',
  path: '/static/img/header/metamask.svg',
  desc: 'metamask icon'
};
const walletConectIcon = {
  name: 'walletConect',
  path: '/static/img/header/walletConnect.svg',
  desc: 'walletConect icon'
};

const WalletDialog: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };

  const [isAccept, isSetAccept] = useState<boolean>(false);
  const onHandleCheck = (event: any): void => {
    isSetAccept(event.target.checked);
  };

  const [isBinance, isSetBinance] = useState<boolean>(false);
  const onHandleBinanceClick = (): void => {
    isSetBinance(!isBinance);
  };

  const [isTrust, isSetTrust] = useState<boolean>(false);
  const onHandleTrustClick = (): void => {
    isSetTrust(!isTrust);
  };

  const [isMetamask, isSetMetamask] = useState<boolean>(false);
  const onHandleMetamaskClick = (): void => {
    isSetMetamask(!isMetamask);
  };

  const [isWalletConnect, isSetWalletConnect] = useState<boolean>(false);
  const onHandleWalletConnectClick = (): void => {
    isSetWalletConnect(!isWalletConnect);
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          maxWidth: '900px'
        }
      }}
    >
      <Box className={classes.outBoxStyle}>
        <CloseIcon className={classes.closeIconStyle} onClick={handleClose} />
        <Typography variant="h1" className={classes.headingTitle}>
          Connect Wallet
        </Typography>
        <Divider sx={{ border: '2px solid #323232' }} />
        <Box className={classes.innerBoxStyle}>
          <ColumnBox>
            <ColumnBox alignItems="flex-start">
              <RowBox>
                <Typography variant="h2" className={classes.itemTitle}>
                  1. Accept Terms of Service and Privacy Policy
                </Typography>
              </RowBox>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      padding: '0 !important',
                      marginLeft: '34px !important',
                      color: '#EDEDED'
                    }}
                  />
                }
                onChange={(e) => onHandleCheck(e)}
                label={
                  <Typography
                    variant="h2"
                    className={classes.checkBoxTitleStyle}
                  >
                    I read and accept
                  </Typography>
                }
                labelPlacement="end"
                sx={{
                  padding: '0 !important',
                  margin: '10px 0 0 0 !important'
                }}
              />
            </ColumnBox>

            <ColumnBox marginTop="30px" alignItems="flex-start">
              <Typography variant="h2" className={classes.itemTitle}>
                2. Choose Network
              </Typography>
              <ColumnBox
                marginTop="20px"
                width="auto"
                className={classes.outWalletIconStyle}
              >
                <Box className={isAccept ? '' : classes.deActiveStyle}>
                  <Box
                    component="img"
                    src={binanceIcon.path}
                    alt={binanceIcon.name}
                    className={
                      isBinance
                        ? classes.walletBorderStyle
                        : classes.walletIconStyle
                    }
                    onClick={onHandleBinanceClick}
                  />
                  <Typography className={classes.walletTitle}>
                    Binance
                  </Typography>
                </Box>
              </ColumnBox>
            </ColumnBox>

            <ColumnBox marginTop="36px" alignItems="flex-start">
              <Typography variant="h2" className={classes.itemTitle}>
                3. Choose Wallet
              </Typography>
              <Box
                className={isAccept && isBinance ? '' : classes.deActiveStyle}
              >
                <RowBox
                  marginTop="10px"
                  justifyContent="flex-start"
                  className={classes.outWalletIconStyle}
                >
                  <ColumnBox className={classes.innerWalletIconStyle}>
                    <Box
                      component="img"
                      src={trustIcon.path}
                      alt={trustIcon.name}
                      className={
                        isAccept && isBinance && isTrust
                          ? classes.walletBorderStyle
                          : classes.walletIconStyle
                      }
                      onClick={onHandleTrustClick}
                    />
                    <Typography className={classes.walletTitle}>
                      Trust Wallet
                    </Typography>
                  </ColumnBox>
                  <ColumnBox className={classes.innerWalletIconStyle}>
                    <Box
                      component="img"
                      src={metamaskIcon.path}
                      alt={metamaskIcon.name}
                      className={
                        isAccept && isBinance && isMetamask
                          ? classes.walletBorderStyle
                          : classes.walletIconStyle
                      }
                      onClick={onHandleMetamaskClick}
                    />
                    <Typography className={classes.walletTitle}>
                      Metamask
                    </Typography>
                  </ColumnBox>
                  <ColumnBox className={classes.innerWalletIconStyle}>
                    <Box
                      component="img"
                      src={walletConectIcon.path}
                      alt={walletConectIcon.name}
                      className={
                        isAccept && isBinance && isWalletConnect
                          ? classes.walletBorderStyle
                          : classes.walletIconStyle
                      }
                      onClick={onHandleWalletConnectClick}
                    />
                    <Typography className={classes.walletTitle}>
                      Wallet Connect
                    </Typography>
                  </ColumnBox>
                </RowBox>
              </Box>
            </ColumnBox>

            <ColumnBox>
              <Typography variant="h3" className={classes.getWalletTitleStyle}>
                Haven’t got a crypto wallet?
              </Typography>

              <Hidden mdDown>
                <CustomButton
                  width="240px"
                  height="50px"
                  background="#E0A501"
                  color="#212121"
                  fontSize="22px"
                  fontWeight="600"
                  marginTop="20px"
                  boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                  borderRadius="35px"
                >
                  Learn more
                </CustomButton>
              </Hidden>
              <Hidden mdUp>
                <CustomButton
                  width="140px"
                  height="30px"
                  background="#E0A501"
                  color="#212121"
                  fontSize="14px"
                  fontWeight="600"
                  marginTop="20px"
                  boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                  borderRadius="20px"
                >
                  Learn more
                </CustomButton>
              </Hidden>
            </ColumnBox>
          </ColumnBox>
        </Box>
      </Box>
    </Dialog>
  );
};

WalletDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default WalletDialog;
