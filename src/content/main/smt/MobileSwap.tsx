import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import SouthIcon from '@mui/icons-material/South';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

interface ParentProps {
  onHandleSwapClose: (e: React.MouseEvent<SVGElement>) => void;
  onHandleChange: (value: string) => void;
}

const useStyles = makeStyles((theme) => ({
  // CUSTOM SEARCH BAR STYLE
  searchBarStyle: {
    width: '100%',
    height: '45px',
    position: 'relative',
    justifyContent: 'center'
  }
}));

const SwapNextButton = styled(Button)({
  background: '#E0A501',
  boxShadow: '10.9538px 10.9538px 5.47692px rgba(0, 0, 0, 0.5)',
  borderRadius: '17px',
  height: '20px',
  width: '100px',
  fontSize: '12px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  padding: '3px 30px',
  '&:hover': {
    backgroundColor: '#E0A501'
  }
});

const MobileSwap: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        padding: '35px 30px !important',
        position: 'relative',
        background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
        boxSizing: 'border-box',
        borderRadius: '10px',
        width: '100%'
      }}
    >
      <CloseIcon
        onClick={(e) => props.onHandleSwapClose(e)}
        sx={{
          cursor: 'pointer',
          position: 'absolute',
          top: '16px',
          right: '16px'
        }}
      />
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontSize: '14px',
          fontWeight: '700',
          height: '29px',
          color: '#E0A501',
          padding: '0 30px',
          textAlign: 'center'
        }}
      >
        How much do you want to swap to SMT Token?
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        marginTop="17px"
      >
        <Box display="flex" alignItems="center" width="100%">
          <Typography
            variant="h3"
            component="span"
            width="40%"
            fontSize="14px"
            color="#E0A501 !important"
          >
            Current balance
          </Typography>
          <Typography variant="h3" component="span" fontSize="14px">
            :88 BUSD
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" width="100%">
          <Typography
            variant="h3"
            component="span"
            width="40%"
            fontSize="14px"
            color="#E0A501 !important"
          >
            Tax
          </Typography>
          <Typography variant="h3" component="span" fontSize="14px">
            :10%
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexDirection="column"
        marginTop="24px"
        padding="0 20px"
      >
        <Typography
          variant="h3"
          component="span"
          sx={{
            fontSize: '12px',
            color: '#EDEDED',
            letterSpacing: '1px'
          }}
        >
          Swap amount
        </Typography>
        <FormControl variant="outlined" className={classes.searchBarStyle}>
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder="Insert amount"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight'
            }}
            sx={{
              padding: '5px 22px 7px 20px',
              height: '100%',
              width: '100%',
              borderRadius: '11px',
              border: '2.26096px solid #323232',
              background: '#EDEDED',
              color: '#C4C4C4',
              fontSize: '20px',
              fontWeight: '600'
            }}
          />
        </FormControl>
      </Box>
      <Box sx={{ marginTop: '14px', textAlign: 'center' }}>
        <SouthIcon sx={{ color: '#E0A501', fontSize: '32px' }} />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexDirection="column"
        marginTop="10px"
        padding="0 20px"
      >
        <Typography
          variant="h3"
          component="span"
          sx={{
            fontSize: '12px',
            color: '#EDEDED',
            letterSpacing: '1px'
          }}
        >
          You will receive (estimation)
        </Typography>
        <FormControl variant="outlined" className={classes.searchBarStyle}>
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder="Insert amount"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight'
            }}
            sx={{
              padding: '5px 22px 7px 20px',
              height: '100%',
              width: '100%',
              borderRadius: '11px',
              border: '2.26096px solid #323232',
              background: '#EDEDED',
              color: '#C4C4C4',
              fontSize: '20px',
              fontWeight: '600'
            }}
          />
        </FormControl>
      </Box>
      <Box width="100%" textAlign="center">
        <SwapNextButton
          sx={{ marginTop: '20px' }}
          onClick={() => props.onHandleChange('swap-sure')}
        >
          Next
        </SwapNextButton>
      </Box>
    </Box>
  );
};

export default MobileSwap;
