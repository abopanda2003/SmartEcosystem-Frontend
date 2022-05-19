import { Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NobilityImageSlider from './Nobility_ImageSlider';
import NobilityProgress from './Nobility_Progress';
import NobilityTitle from './Nobility_Title';
import NobilityCollected from './Nobility_Collected';
import ColumnBox from 'src/components/Box/ColumnBox';

const useStyles = makeStyles({
  outBoxStyle: {
    paddingRight: "60px",
    '@media (max-width: 968px)': {
      paddingRight: '0px',
    }
  }
})


const Nobility = () => {

  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} md={6} lg={6} marginTop="30px">
        <ColumnBox className={classes.outBoxStyle}>
          <NobilityImageSlider />

          <NobilityProgress />

          <NobilityTitle />
        </ColumnBox>
      </Grid>

      <Grid item xs={12} md={6} lg={6} marginTop="30px">
        <NobilityCollected />
      </Grid>
    </>
  );
};

export default Nobility;
