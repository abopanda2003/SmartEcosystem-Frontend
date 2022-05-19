import React, { useState } from 'react';
import { Box, Typography, Divider, Popover } from '@mui/material';
import PropsTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { useTheme, Theme } from '@mui/material';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import CustomCard from 'src/components/Card';
import DoubleClaimPopover from '../popover/claim-popover/DoubleClaimPopover';
import ReceivePopover from '../popover/claim-popover/ReceivePopover';
import ReceiveSmtcPopover from '../popover/claim-popover/ReceiveSmtcPopover';
import SurePopover from '../popover/claim-popover/SurePopover';
import SureSmtcPopover from '../popover/claim-popover/SureSmtcPopover';
import ChestPopover from '../popover/chest-popover/ChestPopover';
import ChestGotPopover from '../popover/chest-popover/ChestGotPopover';
import { StyledBadge1 } from 'src/models/main/reward/StyledStyle';

interface ParentProps {
  statusTitle: string;
}

const useStyles = makeStyles((theme) => ({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardInnerBoxStyle1: {
    height: '100% !important',
    width: '80%',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    padding: '5px 42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '2px solid #323232',
    textAlign: 'center'
  },
  cardInnerBoxStyle2: {
    height: '100% !important',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    padding: '5px 95px 5px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    border: '2px solid #323232',
    textAlign: 'center'
  },
  titleButton: {
    color: "#212121",
    paddingLeft: "14px",
    cursor: 'pointer'
  }
}));


const DoubleClaimBar: React.FC<ParentProps> = (props) => {

  const theme: Theme = useTheme();
  const classes = useStyles(theme);

  // CLAIM POPOVER FUNCTIONS
  const [isClaimOpen, setClaimOpen] = useState<boolean>(false);
  const onHandleClaim = (): void => {
    setClaimOpen(true);
    setPopoverClaimStatus('claim');
  };
  const onHandleClaimClose = (): void => {
    setClaimOpen(false);
  };

  const [popoverClaimStatus, setPopoverClaimStatus] = useState<string>('claim');
  const onHandleClaimNext = (event: any, value: string): void => {
    setPopoverClaimStatus(value);
  };

  // CHEST POPOVER FUNCTIONS
  const [isChestOpen, setChestOpen] = useState<boolean>(false);
  const onHandleChest = (): void => {
    setChestOpen(true);
    setPopoverChestStatus(false);
  };
  const onHandleChestClose = (): void => {
    setChestOpen(false);
  };
  const onHandleChestAgain = (): void => {
    setPopoverChestStatus(false);
  };

  const [popoverChestStatus, setPopoverChestStatus] = useState<boolean>(false);
  const onHandleChestNext = (): void => {
    setPopoverChestStatus(true);
  };

  return (
    <>
      <ColumnBox alignItems='flex-start'>
        <Typography variant="h4" marginBottom="5px">
          Accumulated Rewards
        </Typography>
        <CustomCard
          width="100%"
          height="50px"
          background="#E0A501"
          boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
          border="none"
        >
          <RowBox padding="0 38px 0 0" height="100%">
            <Box className={classes.cardInnerBoxStyle1}>
              <Typography variant="h3" color="#E0A501">
                300 SMT
              </Typography>
              <Divider
                orientation="vertical"
                sx={{
                  border: '2px solid #323232',
                  height: '100%'
                }}
              />
              <Typography variant='h3' color="#E0A501">
                300 SMT
              </Typography>
            </Box>
            <Typography
              variant="h3"
              className={classes.titleButton}
              onClick={onHandleClaim}
            >
              Claim
            </Typography>
          </RowBox>
        </CustomCard>

        <Typography variant="h4" marginBottom="5px" marginTop="8px">
          Chest status
        </Typography>
        <CustomCard
          width="100%"
          height="50px"
          background="#E0A501"
          boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
          border="none"
        >
          <RowBox padding="0 20px 0 0" height="100%">
            <Box
              className={classes.cardInnerBoxStyle2}
              width={props.statusTitle === 'Open Rewards' ? '70%' : '60%'}
            >
              <Typography variant="h3" color="#E0A501" paddingRight="36px">
                Available
              </Typography>
              <StyledBadge1 badgeContent="5" />
            </Box>
            <Typography
              variant="h3"
              className={classes.titleButton}
              onClick={onHandleChest}
            >
              {props.statusTitle}
            </Typography>
          </RowBox>
        </CustomCard>
      </ColumnBox>

      {/* CLAIM POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isClaimOpen}
        PaperProps={{
          style: {
            width: '700px',
            boxShadow: 'none'
          }
        }}
      >
        {
          popoverClaimStatus === 'claim' ? (
            <DoubleClaimPopover
              onHandleClaimClose={onHandleClaimClose}
              onHandleClaimNext={(event, value) =>
                onHandleClaimNext(event, value)
              }
            />
          ) : popoverClaimStatus === 'SMT' ? (
            <ReceivePopover
              onHandleClaimClose={onHandleClaimClose}
              onHandleClaimNext={(event, value) =>
                onHandleClaimNext(event, value)
              }
            />
          ) : popoverClaimStatus === 'SMTC' ? (
            <ReceiveSmtcPopover
              onHandleClaimClose={onHandleClaimClose}
              onHandleClaimNext={(event, value) =>
                onHandleClaimNext(event, value)
              }
            />
          ) : popoverClaimStatus === 'sure' ? (
            <SurePopover onHandleClaimClose={onHandleClaimClose} />
          ) : (
            <SureSmtcPopover onHandleClaimClose={onHandleClaimClose} />
          )
        }
      </Popover>

      {/* OPEN CHEST */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isChestOpen}
        PaperProps={{
          style: {
            width: '700px',
            boxShadow: 'none'
          }
        }}
      >
        {
          popoverChestStatus ? (
            <ChestGotPopover
              onHandleChestClose={onHandleChestClose}
              onHandleChestAgain={onHandleChestAgain}
            />
          ) : (
            <ChestPopover
              onHandleChestClose={onHandleChestClose}
              onHandleChestNext={onHandleChestNext}
            />
          )
        }
      </Popover>
    </>
  );
};

DoubleClaimBar.propTypes = {
  statusTitle: PropsTypes.string.isRequired
};

export default DoubleClaimBar;
