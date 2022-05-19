import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import DetailTable from './Table';
import Hero from '../../Hero';
import InfoHeader from './InfoHeader';
import StatisticHeader from './StatisticHeader';
import {
  Container,
  Grid,
  Box,
  Popover,
  Button,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

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
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      marginBottom: '20px'
    }
  },

  // SORT BUTTON BOX STYLE
  sortButtonBoxStyle: {
    '@media (min-width: 968px)': {
      marginTop: '-50px'
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
  height: '32px',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#212121',
    color: '#C4C4C4'
  }
});

// SORT CONDITION LIST
const sortBy = [
  'by Date of Sales (Oldest)',
  'by Date of Sales (Newest)',
  'by Lowest Sales',
  'by Most Sales Amount',
  'by Least Sales Amount',
  'by Most Profit from Sales',
  'by Least Profit from Sales'
];

const Detail = () => {
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

  return (
    <>
      <Helmet>
        <title>Wealth | Team - Direct Sales</title>
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
              <Grid item xs={12} md={4}>
                <InfoHeader />
              </Grid>
              <Grid item xs={12} md={8}>
                <StatisticHeader />
              </Grid>
            </Box>
            {/* SORT BY BUTTON */}
            <Box className={classes.sortButtonBoxStyle}>
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
                  width={'227px'}
                  height={'225px'}
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
            </Box>
          </Grid>

          {/* TABLE */}
          <Grid item xs={12}>
            <DetailTable />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Detail;
