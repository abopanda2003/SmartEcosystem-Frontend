import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import Hero from '../../Hero';
import {
  Container,
  Grid,
  Box,
  Typography,
  CardContent,
  Divider,
  Popover,
  Hidden,
  IconButton,
  CardActions,
  Collapse
} from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomButton from 'src/components/Button';
import CustomCard from 'src/components/Card';
import EarningHistoryTable from './EarningHistoryTable';
import LearnCard from './Learn';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import ClaimPopover from '../../popover/claim-popover/ClaimPopover';
import ReceivePopover from '../../popover/claim-popover/ReceivePopover';
import SurePopover from '../../popover/claim-popover/SurePopover';
import { ExpandMore } from 'src/models/main/reward/StyledStyle';
import { PassiveStyle } from 'src/models/main/reward/CustomStyle';

const welcomeImage = {
  name: 'welcome',
  path: '/static/img/main_reward/nobilityReward/passive/welcome.png',
  desc: 'welcomeImage'
};

const PassivePhase = () => {
  const theme: Theme = useTheme();
  const classes = PassiveStyle(theme);

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
              to="/main/rewards/nobility"
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h1"
              marginLeft="26px"
              className={classes.headerTypoStyle}
            >
              Passive Global Share
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
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Typography
                  sx={{
                    color: '#EDEDED',
                    fontSize: '36px',
                    fontWeight: '700',
                    lineHeight: '100%'
                  }}
                >
                  Welcome Mark77
                </Typography>
                <Typography
                  sx={{
                    color: '#E0A501',
                    fontSize: '24px',
                    fontWeight: '700'
                  }}
                >
                  Our Prince
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginTop="10px"
                position="relative"
              >
                <Box
                  component="img"
                  src={welcomeImage.path}
                  alt={welcomeImage.name}
                />
                <Box
                  position="absolute"
                  bottom="0"
                  width="100%"
                  textAlign="center"
                >
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-around"
                    height="36px"
                  >
                    <Box textAlign="center">
                      <Typography
                        sx={{
                          fontSize: '18px',
                          color: '#EDEDED',
                          fontWeight: '600',
                          lineHeight: '100%'
                        }}
                      >
                        Share Portion
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '18px',
                          color: '#E0A501',
                          fontWeight: '700',
                          lineHeight: '100%'
                        }}
                      >
                        300
                      </Typography>
                    </Box>
                    <Divider
                      sx={{ border: '2px solid #E0A501' }}
                      orientation="vertical"
                    />
                    <Box textAlign="center">
                      <Typography
                        sx={{
                          fontSize: '18px',
                          color: '#EDEDED',
                          fontWeight: '600',
                          lineHeight: '100%'
                        }}
                      >
                        Global Share
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '18px',
                          color: '#E0A501',
                          fontWeight: '700',
                          lineHeight: '100%'
                        }}
                      >
                        10%
                      </Typography>
                    </Box>
                  </Box>
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
                    Claim your share
                  </CustomButton>
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="120px"
                marginTop="10px"
              >
                <CustomCard width="47%" height="100%">
                  <ColumnBox padding="15px">
                    <Typography variant="h3" color="#EDEDED">
                      Claimed
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '30px',
                        color: '#E0A501',
                        fontWeight: '700'
                      }}
                    >
                      10,000
                    </Typography>
                    <Typography variant="h4" color="#E0A501">
                      SMT
                    </Typography>
                  </ColumnBox>
                </CustomCard>
                <CustomCard width="47%" height="100%">
                  <ColumnBox padding="15px">
                    <Typography variant="h3" color="#EDEDED">
                      Unclaimed
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '30px',
                        color: '#E0A501',
                        fontWeight: '700'
                      }}
                    >
                      10,000
                    </Typography>
                    <Typography variant="h4" color="#E0A501">
                      SMT
                    </Typography>
                  </ColumnBox>
                </CustomCard>
              </Box>
              <CardActions
                className={classes.cardActionStyle}
                onClick={handleExpandClick}
              >
                <Typography variant="h4" component="span" textAlign="center">
                  Statistic
                </Typography>
                <ExpandMore expand={expanded}>
                  <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" color="#E0A501">
                    &#8226; Teamwork ladder lv.7
                  </Typography>
                  <Typography variant="h5" color="#E0A501">
                    &#8226; Entitled to be an SMT intermediary
                  </Typography>
                  <Typography variant="h5" color="#E0A501">
                    &#8226; Farming rewards:
                  </Typography>
                  <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
                    &#8226; 0.17% Fee as a liquidity provider
                  </Typography>
                  <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
                    &#8226; Fixed 0.1% /day
                  </Typography>
                  <Typography variant="h5" color="#EDEDED" paddingLeft="12px">
                    &#8226; Sell tax distribution *4
                  </Typography>
                  <Typography variant="h5" color="#E0A501">
                    &#8226; Access to Smart Academy, Smart Living, Smart
                    Utilities, Smart Wealth (Visionary)
                  </Typography>
                </CardContent>
              </Collapse>
            </ColumnBox>

            <ColumnBox className={classes.rightInnerBox}>
              <LearnCard />
              <EarningHistoryTable />
            </ColumnBox>
          </RowBox>
        </Grid>
      </Container>

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

export default PassivePhase;
