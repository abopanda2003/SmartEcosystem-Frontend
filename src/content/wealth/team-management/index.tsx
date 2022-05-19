import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import CustomTitle from '../../../components/Title/BadgeTitle';
import CustomCard from '../../main/dashboard/CustomCard';
import { Container, Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '40px 20px 60px 20px !important',
    '@media (max-width: 1280px)': {
      padding: '30px !important'
    }
  },

  // CONTENT SCROLLING
  contentScrollStyle: {
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      width: '1px',
      height: '5px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid #323232',
      cursor: 'pointer',
      borderRadius: '10px'
    },

    '@media (max-width: 1280px)': {
      marginRight: '10px'
    }
  },
  // CONTENT PADDING STYLE
  contentPaddingStyle: {
    height: '600px',
    '@media (max-width: 1400px)': {
      padding: '0px 5px'
    }
  },
  // HEADING TITLE CUSTOM STYLE
  headingTitleStyle: {
    color: '#E0A501 !important',
    fontSize: '24px !important',
    height: '29px',
    lineHeight: '100%',
    fontWeight: '700 !important',
    marginLeft: '20px !important',
    '@media (max-width: 968px)': {
      marginLeft: '0px !important'
    }
  }
}));

const teamInfo = [
  {
    name: 'Team member amount',
    value: '000'
  },
  {
    name: 'Active',
    value: '000'
  },
  {
    name: 'Passive',
    value: '000'
  },
  {
    name: 'Dead',
    value: '000'
  },
  {
    name: 'Outperform',
    value: '000'
  }
];

const Team = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Wealth | Team Management</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} display="flex" justifyContent="flex-start">
            <Typography
              variant="h3"
              component="div"
              className={classes.headingTitleStyle}
            >
              Team Ladder Overview
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              className={classes.contentScrollStyle}
            >
              {Array(7)
                .fill(0)
                .map((con, idx) => {
                  let height = 250;
                  return (
                    <Box
                      display={'flex'}
                      key={idx}
                      flexDirection={'column'}
                      alignItems={'center'}
                      justifyContent={'flex-end'}
                      className={classes.contentPaddingStyle}
                    >
                      <CustomCard
                        height={height + idx * 50 + 'px'}
                        width={'150px'}
                      >
                        <Box
                          padding={'10px'}
                          height={'100%'}
                          display={'flex'}
                          flexDirection={'column'}
                        >
                          {teamInfo.map((con, idx) => {
                            return (
                              <Box
                                key={idx}
                                display={'flex'}
                                flexDirection={'column'}
                                marginBottom={'10px'}
                              >
                                <Typography
                                  color={'#EDEDED'}
                                  fontSize={'12px'}
                                  fontWeight={'600'}
                                  lineHeight={'100%'}
                                >
                                  {con.name}
                                </Typography>
                                <Typography
                                  color={'#E0A501'}
                                  fontSize={'18px'}
                                  fontWeight={'700'}
                                  lineHeight={'110%'}
                                >
                                  {con.value}
                                </Typography>
                              </Box>
                            );
                          })}
                        </Box>
                      </CustomCard>
                      <CustomTitle
                        width={'120px'}
                        height={'40px'}
                        color={'#212121'}
                        background={'#E0A501'}
                        title={'Lv. ' + (idx + 1)}
                        fontSize={'24px'}
                        fontWeight={'700'}
                        marginTop={'10px'}
                      />
                    </Box>
                  );
                })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Team;
