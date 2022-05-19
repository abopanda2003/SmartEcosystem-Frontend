import { useRef, useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CustomTitle from '../../../../components/Title/BadgeTitle';
import GeneralTable from './Table';
import Hero from '../Hero';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Popover
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '30px 60px 50px 60px !important',
    '@media (max-width: 1280px)': {
      padding: '20px !important'
    }
  },
  // CUSTOME WIDHT OF LEVEL STYLE
  customLevelStyle: {
    width: '1020px',
    '@media (max-width: 1280px)': {
      width: '1239px'
    },
    '@media (max-width: 1024px)': {
      width: '984px'
    },
    '@media (max-width: 600px)': {
      width: '700px'
    }
  },
  // CUSTOM SCROLL STYLE
  customScrollStyle: {
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
    }
  },

  // SORT BY CUSTOM STYLE
  sortByStyle: {
    height: '17px !important',
    marginBottom: '15px !important',
    fontSize: '14px !important',
    color: '#212121 !important',
    cursor: 'pointer'
  },

  // SEARCH BAR CUSTOM STYLE
  searchCustomStyle: {
    width: '270px',
    height: '32px',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {
      width: '200px'
    }
  },

  // TITLE GROUP GRID STYLE
  titleGroupGridStyle: {
    marginRight: '100px !important',
    '@media (max-width: 968px)': {
      marginRight: '0px !important'
    }
  },
  // TITLE GROUP BOX STYLE
  titleGroupBoxStyle: {
    height: '20px',
    width: '100%',
    marginTop: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      marginTop: '20px'
    }
  }
}));

// SORT CONDITION LIST
const sortBy = ['by Name', 'by Status', 'by Registration date', 'by Nobility'];

// SORT BUTTON
const SortButton = styled(Button)({
  backgroundColor: '#C4C4C4',
  borderRadius: '20px',
  width: '120px',
  height: '100%',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#212121',
    color: '#C4C4C4'
  }
});

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([
        window.innerWidth < 600 ? 91 : 120,
        window.innerWidth < 600 ? 26 : 34
      ]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const General = () => {
  const classes = useStyles();
  const [width, height] = useWindowSize();
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
          <Grid item xs={12} className={classes.customScrollStyle}>
            <Box
              display="flex"
              justifyContent="space-between"
              className={classes.customLevelStyle}
            >
              {Array(7)
                .fill(0)
                .map((con, idx) => {
                  return (
                    <CustomTitle
                      key={idx}
                      width={width + 'px'}
                      height={height + 'px'}
                      background={'#E0A501'}
                      color={'#212121'}
                      title={'Lv. ' + (1 + idx)}
                      fontSize={'18px'}
                      fontWeight={'600'}
                      boxShadow={
                        '4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)'
                      }
                    />
                  );
                })}
            </Box>
          </Grid>
          {/* CONTROL GROUP */}
          <Grid item xs={12}>
            <Box
              display={'flex'}
              marginTop={'16px'}
              justifyContent={'space-between'}
              height={'32px'}
            >
              {/* SORT BY BUTTON */}
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
                  sx={{
                    background: '#C4C4C4'
                  }}
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

              {/* SEARCH FUNCTION */}
              <FormControl
                variant="outlined"
                className={classes.searchCustomStyle}
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
            </Box>
          </Grid>
          {/* TITLE GROUP */}
          <Grid item xs={12} md={6} className={classes.titleGroupGridStyle}>
            <Box className={classes.titleGroupBoxStyle}>
              <Typography
                variant="h3"
                component="div"
                fontSize={'14px'}
                width={'95px'}
                color={'#FFFFFF'}
              >
                Active: 0000
              </Typography>
              <Typography width={'99px'} color={'#8F8F8F'} fontSize={'14px'}>
                Passive: 0000
              </Typography>
              <Typography width={'84px'} color={'#695400'} fontSize={'14px'}>
                Dead: 0000
              </Typography>
              <Typography width={'132px'} color={'#7C4AAE'} fontSize={'14px'}>
                Outperform: 0000
              </Typography>
            </Box>
          </Grid>
          {/* TABLE */}
          <Grid item xs={12}>
            <GeneralTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default General;
