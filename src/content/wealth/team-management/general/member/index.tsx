import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GeneralTable from '../Table';
import Hero from '../../Hero';
import InfoHeader from './InfoHeader';
import StatisticHeader from './StatisticHeader';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Popover,
  Hidden
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '40px 60px 50px 60px !important',
    '@media (max-width: 1280px)': {
      padding: '20px !important'
    }
  },
  // CUSTOME WIDHT OF LEVEL STYLE
  customLevelStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      flexDirection: 'column'
    }
  },

  // SORT BY CUSTOME STYLE
  sortByStyle: {
    height: '17px !important',
    marginBottom: '15px !important',
    fontSize: '14px !important',
    color: '#212121 !important',
    cursor: 'pointer'
  },

  // CUSTOM SEARCH BAR STYLE
  searchBarStyle: {
    width: '270px',
    height: '32px',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {
      width: '200px'
    }
  },

  // TITLE GROUP STYLE
  titleGroupStyle: {
    marginRight: '100px !important',
    '@media (max-width: 1024px)': {
      marginRight: '0px !important'
    }
  }
}));

// SORT BUTTON
const SortButton = styled(Button)({
  backgroundColor: '#C4C4C4',
  borderRadius: '20px',
  width: '120px',
  height: '100%',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  padding: '0',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#212121',
    color: '#C4C4C4'
  }
});

// SORT CONDITION LIST
const sortBy = ['by Name', 'by Status', 'by Registration date', 'by Nobility'];

const Member = () => {
  const classes = useStyles();
  const ref = useRef<any>(null);

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  // SORT FUNCTION
  const [selectedSort, setSort] = useState<string>('Sort by');
  const onHandleSelected = (sortTitle: string): void => {
    setSort(sortTitle);
    handleClose();
  };

  // SEARCH FUNCTION
  const [weight, setValues] = useState<string>('');
  const handleChange = (prop) => (event) => {
    setValues(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Wealth | Team - General</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          {/* LEVEL GROUP */}
          <Grid item xs={12}>
            <Box className={classes.customLevelStyle}>
              <Grid item xs={12} md={5}>
                <InfoHeader />
              </Grid>
              <Grid item xs={12} md={7}>
                <StatisticHeader />
              </Grid>
            </Box>
          </Grid>

          {/* CONTROL GROUP */}
          <Grid item xs={12}>
            <Box
              display={'flex'}
              marginTop={'16px'}
              justifyContent={'space-between'}
              marginBottom={'12px'}
              alignItems={'center'}
              height={'32px'}
            >
              {/* SORT BY BUTTON */}
              <Grid item md={2} xs={5} height="100%">
                <SortButton ref={ref} onClick={handleOpen}>
                  {selectedSort}
                </SortButton>
                <Popover
                  anchorEl={ref.current}
                  onClose={handleClose}
                  open={isOpen}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    padding={'7px 20px'}
                    width={'220px'}
                    height={'128px'}
                    sx={{ background: '#C4C4C4' }}
                  >
                    {sortBy.map((con, idx) => {
                      return (
                        <Typography
                          key={idx}
                          variant="h3"
                          component="div"
                          className={classes.sortByStyle}
                          onClick={() => onHandleSelected(con)}
                        >
                          {con}
                        </Typography>
                      );
                    })}
                  </Box>
                </Popover>
              </Grid>

              {/* TITLE GROUP */}
              <Hidden mdDown>
                <Grid item md={6}>
                  <Box
                    height={'20px'}
                    width={'100%'}
                    display="flex"
                    justifyContent={'space-between'}
                  >
                    <Typography
                      component="div"
                      fontSize={'14px'}
                      color={'#FFFFFF'}
                    >
                      Active: 0000
                    </Typography>
                    <Typography color={'#8F8F8F'} fontSize={'14px'}>
                      Passive: 0000
                    </Typography>
                    <Typography color={'#695400'} fontSize={'14px'}>
                      Dead: 0000
                    </Typography>
                    <Typography color={'#7C4AAE'} fontSize={'14px'}>
                      Outperform: 0000
                    </Typography>
                  </Box>
                </Grid>
              </Hidden>

              {/* SEARCH FUNCTION */}
              <Grid
                item
                md={4}
                xs={7}
                sx={{
                  textAlign: 'right'
                }}
              >
                <FormControl
                  variant="outlined"
                  className={classes.searchBarStyle}
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    value={weight}
                    onChange={handleChange('weight')}
                    placeholder="Search..."
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight'
                    }}
                    sx={{
                      padding: '5px 38px 7px 20px',
                      height: '100%',
                      borderRadius: '20px',
                      background: '#C4C4C4',
                      color: '#5A5A5A',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}
                  />
                  <SearchIcon
                    sx={{
                      margin: '0 auto',
                      position: 'absolute',
                      right: '20px',
                      color: '#212121',
                      width: '18px',
                      height: '18px'
                    }}
                  />
                </FormControl>
              </Grid>
            </Box>
          </Grid>

          <Hidden mdUp>
            <Grid item xs={12}>
              <Box
                height={'20px'}
                width={'100%'}
                display="flex"
                justifyContent={'space-between'}
                marginTop="16px"
              >
                <Typography
                  variant="h3"
                  component="div"
                  fontSize={'14px'}
                  width={'90px'}
                  color={'#FFFFFF'}
                  textAlign={'center'}
                >
                  Active: 0000
                </Typography>
                <Typography
                  width={'99px'}
                  color={'#8F8F8F'}
                  fontSize={'14px'}
                  textAlign={'center'}
                >
                  Passive: 0000
                </Typography>
                <Typography
                  width={'84px'}
                  color={'#695400'}
                  fontSize={'14px'}
                  textAlign={'center'}
                >
                  Dead: 0000
                </Typography>
                <Typography
                  width={'132px'}
                  color={'#7C4AAE'}
                  fontSize={'14px'}
                  textAlign={'center'}
                >
                  Outperform: 0000
                </Typography>
              </Box>
            </Grid>
          </Hidden>

          {/* TABLE */}
          <Grid item xs={12}>
            <GeneralTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Member;
