import { useState } from 'react';
import { Box, Typography, Popover, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import AmountPopover from '../popover/add-popover/AmountPopover';
import ProceedPopover from '../popover/add-popover/ProceedPopover';
import SurePopover from '../popover/add-popover/SurePopover';

import HarvestPopover from '../popover/harvest-popover/HarvestPopover';
import ReceivePopover from '../popover/harvest-popover/ReceivePopover';
import HarvestSurePopover from '../popover/harvest-popover/SurePopover';
import { FixedBarStyles } from 'src/models/main/reward/CustomStyle';

const FixedBar = () => {
  const theme: Theme = useTheme();
  const classes = FixedBarStyles(theme);

  // ADD POPOVER FUNCTINOS
  const [isAddOpen, setAddOpen] = useState<boolean>(false);
  const onHandleAdd = (): void => {
    setAddOpen(true);
    setPopoverStatus('amount');
  };
  const onHandleAddClose = (): void => {
    setAddOpen(false);
  };
  const [popoverStatus, setPopoverStatus] = useState<string>('amount');
  const onHandleAddNext = (event: any, value: string): void => {
    setPopoverStatus(value);
  };

  // HARVEST POPOVER FUNCTIONS
  const [isHarvestOpen, setHarvestOpen] = useState<boolean>(false);
  const onHandleHarvest = (): void => {
    setHarvestOpen(true);
    setPopoverHarvestStatus('harvest');
  };
  const onHandleHarvestClose = (): void => {
    setHarvestOpen(false);
  };

  const [popoverHarvestStatus, setPopoverHarvestStatus] =
    useState<string>('harvest');
  const onHandleHarvestNext = (event: any, value: string): void => {
    setPopoverHarvestStatus(value);
  };

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <Box className={classes.customInnerBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox padding="19px 0 10px 0">
              <Typography variant="h3" className={classes.farmedSmtStyle}>
                Your farmed SMT
              </Typography>
              <Typography className={classes.valueSmtStyle}>
                10,000 SMT
              </Typography>
              <Hidden mdDown>
                <CustomButton
                  width="70px"
                  height="20px"
                  borderRadius="20px"
                  background="#E0A501"
                  color="#212121"
                  fontSize="12px"
                  fontWeight="400"
                  onHandleClick={onHandleAdd}
                >
                  Add
                </CustomButton>
              </Hidden>
              <Hidden mdUp>
                <CustomButton
                  width="70px"
                  height="20px"
                  borderRadius="20px"
                  background="#E0A501"
                  color="#212121"
                  fontSize="12px"
                  fontWeight="400"
                >
                  Add
                </CustomButton>
              </Hidden>
            </ColumnBox>
          </CustomCard>
        </Box>

        <Box className={classes.customInnerBoxBottomStyle}>
          <Box className={classes.secondCardOutBoxStyle}>
            <CustomCard
              width="100%"
              height="100%"
              background="#E0A501"
              boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
              border="none"
            >
              <Box className={classes.customHarvestProgressOutBoxStyle}>
                <Box className={classes.harverstProgressInnerBoxStyle}>
                  <Typography
                    variant="h4"
                    className={classes.harverstTitleStyle}
                  >
                    Not-harvested / Harvested Reward 1,000 / 10
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  className={classes.harvestButtonTitle}
                  onClick={onHandleHarvest}
                >
                  Harvest
                </Typography>
              </Box>
            </CustomCard>
          </Box>
          <Box className={classes.secondCardOutBoxStyle}>
            <CustomCard width="100%" height="100%">
              <RowBox height="100%">
                <Box className={classes.remainingSmtCusotmBoxStyle}>
                  <Typography
                    variant="h4"
                    className={classes.harverstTitleStyle}
                    color="#212121"
                  >
                    Remaining SMT in Farming Supply 5,000,000 / 6,000,000 (4
                    years)
                  </Typography>
                </Box>
              </RowBox>
            </CustomCard>
          </Box>
        </Box>
      </Box>

      {/* ADD POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isAddOpen}
        PaperProps={{
          style: {
            width: '700px',
            boxShadow: 'none'
          }
        }}
      >
        {popoverStatus === 'amount' ? (
          <AmountPopover
            onHandleAddClose={onHandleAddClose}
            onHandleAddNext={(event, value) => onHandleAddNext(event, value)}
          />
        ) : popoverStatus === 'proceed' ? (
          <ProceedPopover
            onHandleAddClose={onHandleAddClose}
            onHandleAddNext={(event, value) => onHandleAddNext(event, value)}
          />
        ) : (
          <SurePopover onHandleAddClose={onHandleAddClose} />
        )}
      </Popover>

      {/* HARVEST POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isHarvestOpen}
        PaperProps={{
          style: {
            width: '100%',
            boxShadow: 'none'
          }
        }}
      >
        {popoverHarvestStatus === 'harvest' ? (
          <HarvestPopover
            onHandleHarvestClose={onHandleHarvestClose}
            onHandleHarvestNext={(event, value) =>
              onHandleHarvestNext(event, value)
            }
          />
        ) : popoverHarvestStatus === 'receive' ? (
          <ReceivePopover
            onHandleHarvestClose={onHandleHarvestClose}
            onHandleHarvestNext={(event, value) =>
              onHandleHarvestNext(event, value)
            }
          />
        ) : (
          <HarvestSurePopover onHandleHarvestClose={onHandleHarvestClose} />
        )}
      </Popover>
    </>
  );
};

export default FixedBar;
