import React, { useState } from 'react';
import { Popover, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import MobileSwap from './MobileSwap';
import MobileSwapSure from './MobileSwapSure';
import MobileSwapSuccess from './MobileSwapSuccess';

const useStyles = makeStyles((theme) => ({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const BuyDexDirect = styled(Button)({
  background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
  border: '2px solid #323232',
  borderRadius: '50px',
  height: '68px',
  fontSize: '18px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#FFCB00',
  padding: '16px 30px',
  '&:hover': {
    backgroundColor: '#E0A501'
  }
});

const MobileModal = () => {
  const classes = useStyles();

  const [isSwapOpen, setSwapOpen] = useState<boolean>(false);
  const onHandleSwapClick = (): void => {
    setSwapOpen(true);
    setSwapStatus('swap');
  };
  const onHandleSwapClose = (): void => {
    setSwapOpen(false);
  };

  const [isSwapStatus, setSwapStatus] = useState<string>('swap');
  const onHandleChange = (value: string): void => {
    setSwapStatus(value);
  };

  return (
    <>
      <BuyDexDirect sx={{ marginTop: '20px' }} onClick={onHandleSwapClick}>
        Request buying
      </BuyDexDirect>
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        onClose={onHandleSwapClose}
        open={isSwapOpen}
        PaperProps={{
          style: { width: '90%' }
        }}
      >
        {isSwapStatus === 'swap' ? (
          <MobileSwap
            onHandleSwapClose={onHandleSwapClose}
            onHandleChange={onHandleChange}
          />
        ) : isSwapStatus === 'swap-sure' ? (
          <MobileSwapSure
            onHandleSwapClose={onHandleSwapClose}
            onHandleChange={onHandleChange}
          />
        ) : (
          <MobileSwapSuccess
            onHandleSwapClose={onHandleSwapClose}
            onHandleChange={onHandleChange}
          />
        )}
      </Popover>
    </>
  );
};

export default MobileModal;
