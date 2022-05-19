import { useState } from 'react';
import { Box, Typography, Popover } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomCard from 'src/components/Card';

import HarvestPopover from '../popover/harvest-popover/HarvestPopover';
import ReceivePopover from '../popover/harvest-popover/ReceivePopover';
import HarvestSurePopover from '../popover/harvest-popover/SurePopover';

import { SellBarStyle } from 'src/models/main/reward/CustomStyle';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';

const SellBar = () => {
  const theme: Theme = useTheme();
  const classes = SellBarStyle(theme);

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
        <Box className={classes.firstCardBoxStyle}>
          <CustomCard width="100%" height="100%">
            <ColumnBox className={classes.cardInnerBoxStyle}>
              <Typography variant="h3" className={classes.customCardTitle}>
                Sell tax portion
              </Typography>
              <Typography className={classes.customCareNumTitle}>4x</Typography>
            </ColumnBox>
          </CustomCard>
        </Box>

        <ColumnBox className={classes.cardInnerBoxStyle1}>
          <Box className={classes.secondCardOutBoxStyle}>
            <CustomCard
              width="100%"
              height="100%"
              background="#E0A501"
              boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
              border="none"
            >
              <RowBox padding="0 11px" height="100%">
                <Box className={classes.harvestBoxStyle}>
                  <Typography
                    variant="h4"
                    className={classes.harvestTitleStyle}
                  >
                    Not-harvested / Harvested Reward 1,000 / 10
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  className={classes.harvestButtonTitleStyle}
                  onClick={onHandleHarvest}
                >
                  Harvest
                </Typography>
              </RowBox>
            </CustomCard>
          </Box>
          <Box className={classes.secondCardOutBoxStyle}>
            <CustomCard width="100%" height="100%">
              <RowBox height="100%">
                <Box width="35%" paddingLeft="10px">
                  <Typography
                    variant="h4"
                    component="span"
                    className={classes.harvestTitleStyle}
                  >
                    Your global portion of sell tax:
                  </Typography>
                  <Typography
                    component="span"
                    variant="h4"
                    color="#E0A501"
                    marginLeft="5px"
                    className={classes.harvestTitleStyle}
                  >
                    6%
                  </Typography>
                </Box>
                <ColumnBox width="65%" height="100%">
                  <Box
                    sx={{
                      height: '50%',
                      width: '100%',
                      background: '#5A5A5A',
                      borderTopRightRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '3px 10px'
                    }}
                  >
                    <Typography
                      variant="h4"
                      className={classes.harvestTitleStyle}
                    >
                      Today’s distribution:
                    </Typography>
                    <Typography
                      variant="h4"
                      className={classes.harvestTitleStyle}
                    >
                      1,000 SMT
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: '50%',
                      width: '100%',
                      background:
                        'linear-gradient(90deg, #FFCB00 0%, #E0A501 100%)',
                      borderBottomRightRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '3px 10px'
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="#212121"
                      className={classes.harvestTitleStyle}
                    >
                      Total distributed:
                    </Typography>
                    <Typography
                      variant="h4"
                      color="#212121"
                      className={classes.harvestTitleStyle}
                    >
                      100,000 SMT
                    </Typography>
                  </Box>
                </ColumnBox>
              </RowBox>
            </CustomCard>
          </Box>
        </ColumnBox>
      </Box>

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

export default SellBar;
