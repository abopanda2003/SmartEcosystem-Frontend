import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';

import Hero from './Hero';
import CurrentTax from '../../dashboard/CurrentTax';
import SwapPanel from './SwapPanel';
import LiquidityPanel from './LiquidityPanel';
import AddLiquidityPanel from './AddLiquidityPanel';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '50px 60px !important',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '20px 20px 0px 0px',
    marginTop: '-40px',
    position: 'relative',
    '@media (max-width: 1280px)': {
      padding: '30px 20px 72px 20px !important',
      marginTop: '-20px'
    }
  },
  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    lineHeight: '44px !important',
    color: '#E0A501 !important'
  },
  // SMT EXCHANGE MAIN BOX
  smtExchangeMainStyle: {
    margin: '0',
    padding: '0 205px 60px',
    '@media (max-width: 1024px)': {
      padding: '0 100px 60px'
    },
    '@media (max-width: 720px)': {
      padding: '0 20px 60px'
    }
  },
  // CURRENT SMT AND SMTC PRICE STYLE
  currentSmtPriceStyle: {
    width: '358px',
    height: '40px'
  },
  // CURRENT SMT LEFT TYPO STYLE
  currentSmtTypoLeftStyle: {
    height: '22px !important',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '18px !important',
    lineHeight: '22px !important',
    color: '#EDEDED !important'
  },
  // CURRENT SMT RIGHT TYPO STYLE
  currentSmtTypoRightStyle: {
    background: '#141414',
    border: '2px solid #323232',
    borderRadius: '10px',
    fontSize: '18px !important',
    color: '#E0A501 !important',
    padding: '9px 20px 9px 96px',
    '@media (max-width: 1280px)': {
      padding: '5px 20px 5px 70px'
    }
  },
  // SMT & SMT CASH MONITOR OUT BOX STYLE
  smtCashMonitorOutBoxStyle: {
    position: 'relative',
    marginTop: '20px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center'
  },
  // WHEN MUTI BUTTON CLICKED THE LIQUIDITY
  smtCashMonitorOutBoxLiqStyle: {
    position: 'relative',
    height: '40px',
    display: 'flex',
    justifyContent: 'center'
  },
  // SMT & SMT CASH MONITOR INNER BOX STYLE
  smtCashMonitorInnerBoxStyle: {
    position: 'absolute',
    bottom: '0',
    background: '#695400',
    height: '100%',
    borderRadius: '12.5px',
    justifyContent: 'center !important',
    alignItems: 'center'
  },
  // MULTITAB ACTIVE BUTTON STYLE
  activeTab: {
    background: '#E0A501',
    color: '#212121 !important'
  },
  // SWAP HIDEN PANEL STYLE
  swapHidenPanelStyle: {
    display: 'none !important'
  },
  // LIQUIDITY HIDEN PANEL STYLE
  liqHidenPanelStyle: {
    display: 'none !important'
  },
  // ADD LIQUIDITY HIDEN PANEL STYLE
  addLiqHidenPanelStyle: {
    display: 'none !important'
  },
  // CURRENT TAX HIDEN STYLE
  curTaxHidenStyle: {
    display: 'none !important'
  },
  // CURRENT SMT PRICE STYLE
  currentSmtPriceBoxHidenStyle: {
    display: 'none !important'
  },
  // ICON BUTTON STYLE
  iconBtnStyle: {
    padding: '0px !important',
    top: '0 !important',
    left: '0 !important',
    zIndex: '9999 !important'
  }
}));

// MULTITAB CUSTOME STYLE
const tabTitleStyle = {
  fontSize: '24px',
  lineHeight: '29px',
  color: '#EDEDED',
  fontWeight: '600',
  cursor: 'pointer',
  borderRadius: '10px',
  marginBottom: '0px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .2s',
  padding: '5px 30px'
};

function GetSmtDetail() {
  const classes = useStyles();

  // ADD REQUIDITY FUNCTION
  const [isLiquidityState, setLiquidity] = useState<boolean>(false);
  // LIQUIDITY BUTTON CLICK EVENT
  const onHandleAddLiquidity = (e: React.MouseEvent) => {
    setLiquidity(true);
  };
  const closeHandleAddLiquidity = (e: React.MouseEvent) => {
    setLiquidity(false);
  };

  // SMT MULTITAB CLICK EVENT
  const [tabSmtValue, tabSmtSetState] = useState<String>('Swap');
  const handleClickSmtTab = (value: String): void => {
    tabSmtSetState(value);
    setLiquidity(false);
  };

  return (
    <>
      <Helmet>
        <title>Main | Get SMT / SMTC</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {/* MAIN SIDE OF DASHBOARD */}
          <Grid item xs={12} sm={12} position="relative">
            {/* BACK BUTTON */}
            <IconButton
              aria-label="vehicles"
              sx={{ position: 'absolute' }}
              className={classes.iconBtnStyle}
              component={NavLink}
              to="/main/smt/getSmt"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            {/* SMT EXCHANGE MAIN GRID */}
            <Grid item xs={12} position="relative">
              <Box className={classes.smtExchangeMainStyle}>
                {/* CURRENT SMT PRICE */}
                <Box
                  display="flex"
                  justifyContent="center"
                  className={
                    tabSmtValue === 'Liquidity'
                      ? classes.currentSmtPriceBoxHidenStyle
                      : ''
                  }
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    className={classes.currentSmtPriceStyle}
                  >
                    <Typography
                      variant="h3"
                      component="div"
                      gutterBottom
                      className={classes.currentSmtTypoLeftStyle}
                    >
                      Current SMT Price
                    </Typography>
                    <Typography
                      variant="h3"
                      component="div"
                      gutterBottom
                      className={classes.currentSmtTypoRightStyle}
                    >
                      $ 1,000
                    </Typography>
                  </Box>
                </Box>

                {/* MULTI SELECT MENU */}
                <Box
                  className={
                    tabSmtValue === 'Swap'
                      ? classes.smtCashMonitorOutBoxStyle
                      : classes.smtCashMonitorOutBoxLiqStyle
                  }
                >
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    className={classes.smtCashMonitorInnerBoxStyle}
                  >
                    <Typography
                      variant="h3"
                      component="span"
                      gutterBottom
                      className={
                        tabSmtValue === 'Swap' ? classes.activeTab : ''
                      }
                      style={tabTitleStyle}
                      onClick={() => handleClickSmtTab('Swap')}
                    >
                      Swap
                    </Typography>
                    <Typography
                      variant="h3"
                      component="span"
                      gutterBottom
                      className={
                        tabSmtValue === 'Liquidity' ? classes.activeTab : ''
                      }
                      style={tabTitleStyle}
                      onClick={() => handleClickSmtTab('Liquidity')}
                    >
                      Liquidity
                    </Typography>
                  </Box>
                </Box>

                {/* SWAP PANEL */}
                <Box
                  className={
                    tabSmtValue === 'Swap' ? '' : classes.swapHidenPanelStyle
                  }
                >
                  <SwapPanel />
                </Box>

                {/* LIQUIDITY PANEL */}
                <Box
                  className={
                    tabSmtValue === 'Liquidity'
                      ? isLiquidityState
                        ? classes.liqHidenPanelStyle
                        : ''
                      : classes.liqHidenPanelStyle
                  }
                >
                  <LiquidityPanel
                    clickOpenHandler={(e) => onHandleAddLiquidity(e)}
                  />
                </Box>

                {/* ADD LIQUIDITY PANEL */}
                <Box
                  className={
                    isLiquidityState ? '' : classes.addLiqHidenPanelStyle
                  }
                >
                  <AddLiquidityPanel
                    clickOpenHandler={(e) => closeHandleAddLiquidity(e)}
                  />
                </Box>

                {/* CURRENT TAX */}
                <Box
                  sx={{ margin: '30px auto', width: '430px' }}
                  className={
                    tabSmtValue === 'Swap' ? '' : classes.curTaxHidenStyle
                  }
                >
                  <CurrentTax />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default GetSmtDetail;
