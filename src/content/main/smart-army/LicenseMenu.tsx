import { useState, useRef, useEffect } from 'react';
import { Box, Popover, Typography, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomButton from 'src/components/Button';
import CustomCard from 'src/components/Card';
import CustomProgress from './popover-group/CustomProgress';

// TRIAL POPOVER IMPORT
import TrialIntroducePopover from './popover-group/trial/IntroducePopover';
import TrialConfirmPopover from './popover-group/trial/ConfirmPopover';
import TrialFinalPopover from './popover-group/trial/FinalPopover';

// OPPOTUNITY POPOVER IMPORT
import OppFinalPopover from './popover-group/oppotunity/FinalPopover';

// VISIONARY POPOVER IMPORT
import UpgradePopover from './popover-group/visionary/UpgradePopover';
import GotPopover from './popover-group/visionary/GotPopover';
import ThankPopover from './popover-group/visionary/ThankPopover';

// RUNNER POPOVER IMPORT
import ChoosePopover from './popover-group/runner/ChoosePopover';
import LiqStartPopover from './popover-group/runner/LiqStartPopover';
import LiqNowPopover from './popover-group/runner/LiqNowPopover';
import LiqGotPopover from './popover-group/runner/LiqGotPopover';

import ExtNowPopover from './popover-group/runner/ExtNowPopover';
import ExtThankPopover from './popover-group/runner/ExtThankPopover';

const useStyles = makeStyles((theme) => ({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  customOutBoxStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30px',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      marginTop: '20px'
    }
  },
  customInnerBoxStyle: {
    height: '390px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 968px)': {
      marginBottom: '40px'
    }
  },

  customCardButtonStyle: {
    '@media (max-width: 968px)': {
      position: 'absolute',
      bottom: '-10px'
    }
  },

  customCardBoxStyle: {
    padding: '37px 20px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    position: 'relative',
    '@media (max-width: 968px)': {
      justifyContent: 'flex-start'
    }
  }
}));

const menuLists = [
  {
    name: 'trial',
    path: '/static/img/main_smart/trial.png',
    desc: 'trial',
    button: 'Exchange',
    hiddenTitle: 'You have 1 free license'
  },
  {
    name: 'opportunity',
    path: '/static/img/main_smart/opportunity.png',
    desc: 'opportunity',
    button: 'Exchange',
    hiddenTitle: 'You have 2 free license'
  },
  {
    name: 'runner',
    path: '/static/img/main_smart/runner.png',
    desc: 'runner',
    button: 'Active',
    hiddenTitle: 'You have 1 free license'
  },
  {
    name: 'visionary',
    path: '/static/img/main_smart/visionary.png',
    desc: 'visionary',
    button: 'Upgrade now',
    hiddenTitle: 'You have 0 free license'
  }
];

const LicenseMenu = () => {
  const classes = useStyles();
  const timer: any = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  // RUNNER CHANGE CONFIG
  const [isRunner, setRunner] = useState(false);

  // PROGRESS SETTING
  const [isProgress, setProgress] = useState(false);
  const onHandleProgressClick = (): void => {
    setProgress(true);
  };
  const onHandleProgressClose = (): void => {
    setProgress(false);
  };

  // TRIAL SETTING
  const [isTrial, setTrial] = useState<boolean>(false);
  const onHandleTrialClick = (): void => {
    setStatusTrial('trial_introduce');
    setTrial(true);
  };
  const onHandleTrialClose = (): void => {
    setTrial(false);
  };
  const [statusTrial, setStatusTrial] = useState<string>('trial_introduce');
  const onHandleTrialNext = (e: any, value: string): void => {
    setStatusTrial(value);
  };

  // OPPOTUNITY SETTING
  const [isOpp, setOpp] = useState<boolean>(false);
  const onHandleOppClick = (): void => {
    setOpp(true);
  };
  const onHandleOppClose = (): void => {
    setOpp(false);
  };

  // LIQUIDATE SETTING
  const [isLiquidate, setLiquidate] = useState<boolean>(false);
  const onHandleLiquidateClick = (): void => {
    setStatusLiquidate('runner_choose');
    setLiquidate(true);
  };
  const onHandleLiquidateClose = (): void => {
    setLiquidate(false);
  };
  const [statusLiquidate, setStatusLiquidate] =
    useState<string>('runner_choose');
  const onHandleLiquidateNext = (e: any, value: string): void => {
    setStatusLiquidate(value);
  };

  // VISIONARY SETTING
  const [isVisionary, setVisionary] = useState<boolean>(false);
  const onHandleVisionaryClick = (): void => {
    setStatusVisionary('visionary_upgrade');
    setVisionary(true);
  };
  const onHandleVisionaryClose = (): void => {
    setVisionary(false);
  };
  const [statusVisionary, setStatusVisionary] =
    useState<string>('visionary_upgrade');
  const onHandleVisionaryNext = (e: any, value: string): void => {
    setStatusVisionary(value);
  };

  // INITIAL BUTTON CLICK
  const onHandleClick = (value: string) => {
    if (value === 'runner' && !isRunner) {
      setRunner(true);
      return;
    }

    if (value === 'runner' && isRunner) {
      // IF CLICK RUNNER(LIQUIDATE/EXTEND)
      onHandleLiquidateClick();
      return;
    }

    if (!isProgress) {
      setRunner(false);
      onHandleProgressClick();
      timer.current = window.setTimeout(() => {
        onHandleProgressClose();
        // TRIAL
        if (value === 'trial') {
          onHandleTrialClick();
        }

        // OPPOTUNITY
        if (value === 'opportunity') {
          onHandleOppClick();
        }

        // VISIONARY
        if (value === 'visionary') {
          onHandleVisionaryClick();
        }
      }, 2000);
    }
  };

  // TRIAL POPOVER LIST
  const TrialPopoverList = {
    trial_introduce: (
      <TrialIntroducePopover
        onHandleTrialNext={(e, value) => onHandleTrialNext(e, value)}
        onHandleTrialClose={onHandleTrialClose}
      />
    ),
    trial_confirm: (
      <TrialConfirmPopover
        onHandleTrialNext={(e, value) => onHandleTrialNext(e, value)}
        onHandleTrialClose={onHandleTrialClose}
      />
    ),
    trial_final: <TrialFinalPopover onHandleTrialClose={onHandleTrialClose} />
  };

  // VISIONARY POPOVER LIST
  const VisionaryPopoverList = {
    visionary_upgrade: (
      <UpgradePopover
        onHandleVisionaryNext={(e, value) => onHandleVisionaryNext(e, value)}
        onHandleVisionaryClose={onHandleVisionaryClose}
      />
    ),
    visionary_got: (
      <GotPopover
        onHandleVisionaryNext={(e, value) => onHandleVisionaryNext(e, value)}
        onHandleVisionaryClose={onHandleVisionaryClose}
      />
    ),
    visionary_thank: (
      <ThankPopover onHandleVisionaryClose={onHandleVisionaryClose} />
    )
  };

  // RUNNER (LIQUIDATE / EXTEND) POPOVER LIST
  const RunnerPopoverList = {
    runner_choose: (
      <ChoosePopover
        onHandleLiquidateNext={(e, value) => onHandleLiquidateNext(e, value)}
        onHandleLiquidateClose={onHandleLiquidateClose}
      />
    ),
    liq_start: (
      <LiqStartPopover
        onHandleLiquidateNext={(e, value) => onHandleLiquidateNext(e, value)}
        onHandleLiquidateClose={onHandleLiquidateClose}
      />
    ),
    liq_now: (
      <LiqNowPopover
        onHandleLiquidateNext={(e, value) => onHandleLiquidateNext(e, value)}
        onHandleLiquidateClose={onHandleLiquidateClose}
      />
    ),
    liq_got: <LiqGotPopover onHandleLiquidateClose={onHandleLiquidateClose} />,
    ext_now: (
      <ExtNowPopover
        onHandleLiquidateNext={(e, value) => onHandleLiquidateNext(e, value)}
        onHandleLiquidateClose={onHandleLiquidateClose}
      />
    ),
    ext_thank: (
      <ExtThankPopover onHandleLiquidateClose={onHandleLiquidateClose} />
    )
  };

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        {menuLists.map((con, idx) => {
          return (
            <Box key={idx} className={classes.customInnerBoxStyle}>
              <CustomCard width="22%" height="100%" minWidth="240px">
                <Box className={classes.customCardBoxStyle}>
                  {con.name === 'runner' && isRunner ? (
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#EDEDED',
                        fontWeight: '600',
                        position: 'absolute',
                        top: '5px'
                      }}
                    >
                      Grace period
                    </Typography>
                  ) : (
                    ''
                  )}
                  <Box
                    component="img"
                    src={con.path}
                    alt={con.name}
                    width="100%"
                    height="283px"
                  />
                  <Hidden mdUp>
                    <Typography marginTop="12px">{con.hiddenTitle}</Typography>
                  </Hidden>
                  <Hidden mdDown>
                    <CustomButton
                      width="160px"
                      height="30px"
                      background="#E0A501"
                      color="#212121"
                      fontSize="14px"
                      fontWeight="600"
                      borderRadius="20px"
                      boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                      title={
                        con.name === 'runner' && isRunner
                          ? 'Liquidate/Extend'
                          : con.button
                      }
                      onHandleClick={() => onHandleClick(con.name)}
                    />
                  </Hidden>
                </Box>
              </CustomCard>

              <Hidden mdUp>
                <Box className={classes.customCardButtonStyle}>
                  <CustomButton
                    width="160px"
                    height="30px"
                    background="#E0A501"
                    color="#212121"
                    fontSize="14px"
                    fontWeight="600"
                    borderRadius="20px"
                    boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                    title={
                      con.name === 'runner' && isRunner
                        ? 'Liquidate/Extend'
                        : con.button
                    }
                    onHandleClick={() => onHandleClick(con.name)}
                  />
                </Box>
              </Hidden>
            </Box>
          );
        })}
      </Box>

      {/* PROGRESS POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isProgress}
        PaperProps={{
          style: {
            boxShadow: 'none'
          }
        }}
      >
        <CustomProgress />
      </Popover>

      {/* TRIAL POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isTrial}
        PaperProps={{
          style: {
            boxShadow: 'none'
          }
        }}
      >
        {TrialPopoverList[statusTrial]}
      </Popover>

      {/* OPPOTUNITY POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isOpp}
        PaperProps={{
          style: {
            boxShadow: 'none'
          }
        }}
      >
        <OppFinalPopover onHandleOppClose={onHandleOppClose} />
      </Popover>

      {/* RUNNER POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isLiquidate}
        PaperProps={{
          style: {
            // width: '700px',
            boxShadow: 'none'
          }
        }}
      >
        {RunnerPopoverList[statusLiquidate]}
      </Popover>

      {/* VISIONARY POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isVisionary}
        PaperProps={{
          style: {
            boxShadow: 'none'
          }
        }}
      >
        {VisionaryPopoverList[statusVisionary]}
      </Popover>
    </>
  );
};

export default LicenseMenu;
