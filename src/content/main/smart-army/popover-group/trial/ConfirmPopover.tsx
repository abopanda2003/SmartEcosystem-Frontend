import React from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { makeStyles } from '@mui/styles';

interface ParentProps {
  onHandleTrialClose: (e: React.MouseEvent) => void;
  onHandleTrialNext: (e: React.MouseEvent, value: string) => void;
}

const useStyles = makeStyles((theme) => ({
  // SEARCH BAR CUSTOM STYLE
  searchCustomStyle: {
    width: '100%',
    height: '40px',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {}
  },

  customOutBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 65px 60px 65px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    textAlign: 'center',
    width: '700px',
    '@media (max-width: 968px)': {
      width: '350px',
      padding: '30px 10px 35px 10px !important'
    }
  }
}));

const ConfirmPopover: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.customOutBoxStyle}>
        <CloseIcon
          onClick={props.onHandleTrialClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '31px',
            right: '31px'
          }}
        />
        <Typography fontSize="24px" color="#E0A501" fontWeight="600">
          Almost done..
        </Typography>
        <Typography
          fontSize="24px"
          color="#E0A501"
          fontWeight="600"
          lineHeight="100%"
        >
          We need a little bit information to be able to reach you
        </Typography>
        <Typography
          fontSize="13px"
          color="#EDEDED"
          fontWeight="600"
          marginTop="26px"
        >
          Your Best Photo
        </Typography>
        <CustomButton
          width="240px"
          height="50px"
          background="linear-gradient(180deg, #212121 0%, #000000 100%)"
          color="#E0A501"
          fontSize="22px"
          fontWeight="600"
          boxShadow="10px 10px 10px rgba(0, 0, 0, 0.5)"
          border="3px solid #323232"
          borderRadius="20px"
          marginTop="6px"
          onHandleClick={props.onHandleTrialClose}
        >
          Upload photo
        </CustomButton>

        <Box textAlign="left" width="100%">
          <Typography
            fontSize="13px"
            color="#EDEDED"
            fontWeight="600"
            marginTop="16px"
          >
            Your telegram account
          </Typography>
          <FormControl variant="outlined" className={classes.searchCustomStyle}>
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="t.me/mark77 or @mark77"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight'
              }}
              sx={{
                padding: '9px 60px 9px 20px',
                height: '100%',
                borderRadius: '10px',
                background: '#EDEDED',
                color: '#C4C4C4',
                fontSize: '18px',
                fontWeight: '600'
              }}
            />
          </FormControl>
        </Box>
        <Box textAlign="left" width="100%">
          <Typography
            fontSize="13px"
            color="#EDEDED"
            fontWeight="600"
            marginTop="16px"
          >
            Your Smart Army username
          </Typography>
          <FormControl variant="outlined" className={classes.searchCustomStyle}>
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Mark77"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight'
              }}
              sx={{
                padding: '9px 60px 9px 20px',
                height: '100%',
                borderRadius: '10px',
                background: '#EDEDED',
                color: '#C4C4C4',
                fontSize: '18px',
                fontWeight: '600'
              }}
            />
          </FormControl>
        </Box>
        <Box textAlign="left" width="100%">
          <Typography
            fontSize="13px"
            color="#EDEDED"
            fontWeight="600"
            marginTop="16px"
          >
            Your wallet address
          </Typography>
          <FormControl variant="outlined" className={classes.searchCustomStyle}>
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="0x9d92dA89c4970eFad9837D263057512F197564F9"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight'
              }}
              sx={{
                padding: '9px 60px 9px 20px',
                height: '100%',
                borderRadius: '10px',
                background: '#EDEDED',
                color: '#C4C4C4',
                fontSize: '18px',
                fontWeight: '600'
              }}
            />
          </FormControl>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          width="100%"
          marginTop="50px"
        >
          <CustomButton
            width="240px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="20px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            onHandleClick={(e) => props.onHandleTrialNext(e, 'trial_final')}
          >
            Confirm
          </CustomButton>
          <CustomButton
            width="240px"
            height="50px"
            background="#936900"
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            onHandleClick={props.onHandleTrialClose}
          >
            Cancel
          </CustomButton>
        </Box>
      </Box>
    </>
  );
};

export default ConfirmPopover;
