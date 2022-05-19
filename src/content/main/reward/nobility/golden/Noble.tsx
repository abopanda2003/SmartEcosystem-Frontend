import { useState } from 'react';
import { Box, Typography, Divider, Popover } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomCard from 'src/components/Card';
import ClaimPopover from '../../popover/claim-popover/ClaimPopover';
import ReceivePopover from '../../popover/claim-popover/ReceivePopover';
import SurePopover from '../../popover/claim-popover/SurePopover';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { BorderLinearProgress } from 'src/models/main/reward/StyledStyle';
import { NobleStyle } from 'src/models/main/reward/CustomStyle';


const Noble = () => {

  const theme: Theme = useTheme();
  const classes = NobleStyle(theme);

  // HARVEST POPOVER FUNCTIONS
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

  return (
    <>
      <RowBox className={classes.outBoxStyle}>
        <CustomCard width="25%" height="100%">
          <ColumnBox padding="7px 10px" height="100%">
            <Typography variant="h4" className={classes.cardHeadingStyle}>
              Portion
            </Typography>
            <Typography variant="h2" className={classes.cardContentTitleStyle}>
              4x
            </Typography>
            <Divider
              sx={{
                border: '2px solid #323232',
                width: '100%',
                marginBottom: '7px'
              }}
            />
            <Typography variant="h4" className={classes.cardHeadingStyle}>
              Global Share
            </Typography>
            <Typography variant="h2" className={classes.cardContentTitleStyle}>
              7%
            </Typography>
          </ColumnBox>
        </CustomCard>

        <ColumnBox width="75%" height="100%" paddingLeft="10px">
          <CustomCard height="50%" width="100%">
            <BorderLinearProgress variant="determinate" value={90} />
            <RowBox justifyContent="center" padding="6px">
              <Typography variant="h4" className={classes.progressTitle}>
                30 Growth remaining to pass
              </Typography>
            </RowBox>
          </CustomCard>

          <CustomCard
            width="100%"
            height="43%"
            background="#E0A501"
            boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
            border="none"
          >
            <RowBox padding="0 23px 0 30px" height="100%">
              <Box className={classes.progressInnerBox}>
                <Typography variant="h4" className={classes.progressTitle}>
                  Claimed / Unclaimed amount 3 SMTC / 20 SMTC
                </Typography>
              </Box>
              <Typography
                variant="h3"
                className={classes.claimTitleStyle}
                onClick={onHandleClaim}
              >
                Claim
              </Typography>
            </RowBox>
          </CustomCard>
        </ColumnBox>
      </RowBox>

      {/* Claim POPOVER */}
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
        {popoverClaimStatus === 'claim' ? (
          <ClaimPopover
            onHandleClaimClose={onHandleClaimClose}
            onHandleClaimNext={(event, value) =>
              onHandleClaimNext(event, value)
            }
          />
        ) : popoverClaimStatus === 'receive' ? (
          <ReceivePopover
            onHandleClaimClose={onHandleClaimClose}
            onHandleClaimNext={(event, value) =>
              onHandleClaimNext(event, value)
            }
          />
        ) : (
          <SurePopover onHandleClaimClose={onHandleClaimClose} />
        )}
      </Popover>
    </>
  );
};

export default Noble;
