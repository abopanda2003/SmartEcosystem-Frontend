import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

interface ParentProps {
  onHandleSwapClose: (e: React.MouseEvent<SVGElement>) => void;
  onHandleChange: (value: string) => void;
}

const ProceedButton = styled(Button)({
  background: '#E0A501',
  boxShadow: '14.8969px 14.8969px 7.44845px rgba(0, 0, 0, 0.5)',
  borderRadius: '34px',
  height: '43px',
  lineHeight: '100%',
  width: '201px',
  fontSize: '12px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  padding: '5px 27px',
  '&:hover': {
    backgroundColor: '#E0A501'
  }
});

const BackButton = styled(Button)({
  background: '#936900',
  boxShadow: '14.8969px 14.8969px 7.44845px rgba(0, 0, 0, 0.5)',
  borderRadius: '23px',
  height: '27px',
  width: '136px',
  fontSize: '12px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#EDEDED',
  padding: '6px 12px',
  '&:hover': {
    backgroundColor: '#E0A501'
  }
});

const MobileSwapSure: React.FC<ParentProps> = (props) => {
  return (
    <Box
      sx={{
        padding: '40px 20px 35px 20px !important',
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
          fontSize: '15px',
          fontWeight: '700',
          height: '18px',
          color: '#EDEDED',
          textAlign: 'center'
        }}
      >
        Are you sure you want to swap
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontSize: '23px',
          fontWeight: '700',
          height: '28px',
          color: '#E0A501',
          textAlign: 'center'
        }}
      >
        88 BUSD
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontSize: '15px',
          fontWeight: '700',
          height: '19px',
          color: '#EDEDED',
          textAlign: 'center'
        }}
      >
        with SMT Token through intermediary?
      </Typography>
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontSize: '11px',
          fontWeight: '600',
          height: '14px',
          color: '#E0A501',
          textAlign: 'center'
        }}
      >
        (This process couldn’t be cancelled)
      </Typography>
      <Box width="100%" textAlign="center" marginTop="24px">
        <BackButton onClick={() => props.onHandleChange('swap')}>
          No, take me back
        </BackButton>
      </Box>
      <Box width="100%" textAlign="center" marginTop="13px">
        <ProceedButton onClick={() => props.onHandleChange('swap-success')}>
          Proceed to buy SMT on Pancakeswap through intermediary
        </ProceedButton>
      </Box>
    </Box>
  );
};

export default MobileSwapSure;
