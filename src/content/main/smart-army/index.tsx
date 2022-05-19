import { Helmet } from 'react-helmet-async';
import { Container, Grid, Box, Typography, Hidden } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Hero from './Hero';
import LicenseMenu from './LicenseMenu';
import History from './History';
import HelpCard from './HelpCard';
import CustomTitle from 'src/components/Title/BadgeTitle';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    position: 'relative',
    padding: '258px 50px 60px 40px !important',
    "@media (max-width: 1280px)": {
      padding: '230px 20px !important'
    }
  },
}));


const SmartArmy = () => {

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Main | Smart Army License</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <Hidden mdDown>
              <Box
                sx={{
                  height: '42px',
                  width: '370px',
                  background: '#323232',
                  borderRadius: '20px',
                  float: 'right',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 20px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#EDEDED',
                    fontWeight: '600',
                    lineHeight: '100%',
                  }}
                >
                  Current license expires in:
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#E0A501',
                    fontWeight: '600',
                    lineHeight: '100%',
                  }}
                >
                  364 d : 20 h : 45 s
                </Typography>
              </Box>
            </Hidden>
            <Hidden mdUp>
              <Box display="flex" justifyContent="center">
                <CustomTitle
                  width="229px"
                  height="42px"
                  background="#E0A501"
                  color="#212121"
                  fontSize="18px"
                  fontWeight="600"
                  borderRadius="20px"
                  title={'Liquidate / Extend'}
                />
              </Box>
            </Hidden>
          </Grid>

          <Grid item xs={12}>
            <LicenseMenu />
          </Grid>

          <Grid item xs={12} md={7}>
            <History />
          </Grid>

          <Grid item xs={12} md={5}>
            <HelpCard />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default SmartArmy;