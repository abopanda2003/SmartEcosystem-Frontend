import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Box,
  Typography,
  Popover,
  Hidden
} from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Hero from '../Hero';
import CustomButton from 'src/components/Button';
import CustomCard from 'src/components/Card';
import EarningHistoryTable from './Table';
import LearnCard from './Learn';

import ClaimPopover from '../popover/claim-popover/ClaimPopover';
import ReceivePopover from '../popover/claim-popover/ReceivePopover';
import SurePopover from '../popover/claim-popover/SurePopover';

import { QuestStyle } from 'src/models/main/reward/CustomStyle';

const welcomeImage = {
  name: 'welcome',
  path: '/static/img/main_reward/questReward/welcome.png',
  desc: 'welcomeImage'
};


const PassivePhase = () => {
  
  const theme: Theme = useTheme();
  const classes = QuestStyle(theme);

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

  return (
    <>
      <Helmet>
        <title>Main | Rewards</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} display="flex" alignItems="center">
            <IconButton
              aria-label="vehicles"
              sx={{ padding: '0px' }}
              component={NavLink}
              to="/main/rewards"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h1"
              marginLeft="26px"
              className={classes.headerTypoStyle}
            >
              Quest Rewards
            </Typography>
          </Grid>

          <Box className={classes.bscscanButtonStyle}>
            <Hidden mdDown>
              <CustomButton
                width="152px"
                height="25px"
                background="#E0A501"
                color="#212121"
                borderRadius="20px"
                fontSize="12px"
                fontWeight="600"
              >
                Check on bscscan
              </CustomButton>
            </Hidden>
            <Hidden mdUp>
              <CustomButton
                width="113px"
                height="18px"
                background="#E0A501"
                color="#212121"
                borderRadius="20px"
                fontSize="8px"
                fontWeight="600"
              >
                Check on bscscan
              </CustomButton>
            </Hidden>
          </Box>

          <RowBox className={classes.outBoxStyle}>
            <ColumnBox className={classes.leftInnerBox}>
              <ColumnBox alignItems="flex-start">
                <Typography
                  variant="h1"
                  sx={{
                    color: '#EDEDED',
                    fontWeight: '700'
                  }}
                >
                  Welcome Mark77
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#E0A501',
                    fontWeight: '700'
                  }}
                >
                  The Loyal Army
                </Typography>
              </ColumnBox>
              <ColumnBox>
                <Box
                  component="img"
                  src={welcomeImage.path}
                  alt={welcomeImage.name}
                  marginTop="-70px"
                />
                <ColumnBox marginTop="-70px">
                  <CustomButton
                    background="#E0A501"
                    borderRadius="20px"
                    width="200px"
                    height="40px"
                    fontSize="14px"
                    fontWeight="600"
                    color="#212121"
                    marginTop="10px"
                    onHandleClick={onHandleClaim}
                  >
                    Claim Quest Rewards
                  </CustomButton>
                  <RowBox height="120px" marginTop="10px">
                    <CustomCard width="47%" height="100%">
                      <Box
                        padding="15px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Typography
                          sx={{
                            fontSize: '18px',
                            color: '#EDEDED',
                            fontWeight: '600'
                          }}
                        >
                          Claimed
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '30px',
                            color: '#E0A501',
                            fontWeight: '700'
                          }}
                        >
                          1,355
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: '#E0A501',
                            fontWeight: '600'
                          }}
                        >
                          SMTC
                        </Typography>
                      </Box>
                    </CustomCard>
                    <CustomCard width="47%" height="100%">
                      <Box
                        padding="15px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Typography
                          sx={{
                            fontSize: '18px',
                            color: '#EDEDED',
                            fontWeight: '600'
                          }}
                        >
                          Unclaimed
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '30px',
                            color: '#E0A501',
                            fontWeight: '700'
                          }}
                        >
                          100
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: '#E0A501',
                            fontWeight: '600'
                          }}
                        >
                          SMTC
                        </Typography>
                      </Box>
                    </CustomCard>
                  </RowBox>
                </ColumnBox>
              </ColumnBox>
            </ColumnBox>

            <ColumnBox className={classes.rightInnerBox}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <LearnCard />
                <EarningHistoryTable />
              </Box>
            </ColumnBox>
          </RowBox>
        </Grid>
      </Container>

      {/* ClAIM POPOVER */}
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

export default PassivePhase;
