import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SouthIcon from '@mui/icons-material/South';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomCard from '../../dashboard/CustomCard';
import Setting from './Setting';
import Recent from './Recent';

const useStyles = makeStyles((theme) => ({
  // SWAP TITLE STYLE
  swapTitleStyle: {
    float: 'left',
    fontWeight: '700 !important',
    color: '#E0A501'
  }
}));

// EXCHANGE BUTTON CUSTOMIZE
const ExchangeButton = styled(Button)({
  backgroundColor: '#E0A501',
  borderRadius: '20px',
  width: '260px',
  height: '40px',
  fontSize: '18px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#695400'
  }
});

// BNB ICON
const bnbIcon = {
  name: 'bnb',
  path: '/static/img/main_smt/get_smt/bnb.svg',
  desc: 'btnIcon'
};

const SwapPanel = () => {
  const classes = useStyles();

  // EXCHANGE BUTTON CLICK EVENT
  const onHandleExchage = () => {
    alert('exchange');
  };

  return (
    <CustomCard marginTop="30px" height="449px">
      <Box padding="20px" sx={{ height: '100%' }}>
        <Box position="relative" height="29px">
          <Typography
            variant="h2"
            component="span"
            className={classes.swapTitleStyle}
          >
            Swap
          </Typography>
          <Box
            sx={{ float: 'right', width: '65px', height: '100%' }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* SETTING ICON */}
            <Setting />
            {/* RECENT ICON */}
            <Recent />
          </Box>
        </Box>

        <Box
          position="relative"
          sx={{ height: '16px', marginTop: '10px' }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h3" component="span" color="#EDEDED">
            Trade token in an instant
          </Typography>
          <Box sx={{ float: 'right' }}>
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  sx={{
                    padding: '0 !important',
                    margin: '0 !important',
                    color: '#E0A501'
                  }}
                />
              }
              label="Auto set to lowest tax"
              labelPlacement="end"
              sx={{
                padding: '0 !important',
                margin: '0 !important',
                color: '#EDEDED'
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            height: '100px',
            marginTop: '30px',
            border: '2px solid #5A5A5A',
            borderRadius: '10px',
            padding: '10px 20px 20px'
          }}
        >
          <Typography variant="h4">from</Typography>
          <Box
            marginTop="13px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: '48px',
                color: '#EDEDED',
                fontWeight: '700',
                lineHeight: '1px !important'
              }}
            >
              000
            </Typography>
            <Box
              sx={{ float: 'right', width: '120px' }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box component="img" alt={bnbIcon.name} src={bnbIcon.path}></Box>
              <Typography
                variant="h2"
                component="span"
                sx={{ color: '#EDEDED', fontWeight: '600' }}
              >
                BNB
              </Typography>
              <ExpandMoreIcon sx={{ color: '#5A5A5A', fontSize: '28px' }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: '14px', textAlign: 'center', lineHeight: '1px' }}>
          <SouthIcon sx={{ color: '#E0A501', fontSize: '32px' }} />
        </Box>

        <Box
          sx={{
            height: '100px',
            marginTop: '13px',
            border: '2px solid #5A5A5A',
            borderRadius: '10px',
            padding: '10px 20px 20px'
          }}
        >
          <Typography variant="h4">to</Typography>
          <Box
            sx={{ marginTop: '14px' }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: '48px',
                color: '#EDEDED',
                fontWeight: '700',
                lineHeight: '1px !important'
              }}
            >
              000
            </Typography>
            <Box
              sx={{ float: 'right', width: '120px' }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box component="img" alt={bnbIcon.name} src={bnbIcon.path}></Box>
              <Typography
                variant="h2"
                component="span"
                sx={{ color: '#EDEDED', fontWeight: '600' }}
              >
                SMT
              </Typography>
              <ExpandMoreIcon sx={{ color: '#5A5A5A', fontSize: '28px' }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          <ExchangeButton variant="contained" onClick={onHandleExchage}>
            Exchange
          </ExchangeButton>
        </Box>
      </Box>
    </CustomCard>
  );
};

export default SwapPanel;
