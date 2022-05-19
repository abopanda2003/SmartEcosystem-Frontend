import React, { useState } from 'react';
import { Button, styled } from '@mui/material';
import WalletDialog from '../../../wallet-modal';

const ConnectWalletButton = styled(Button)({
  padding: '7px 10px',
  backgroundColor: '#E0A501',
  borderRadius: '20px',
  width: '132px',
  height: '32px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '17px',
  textAlign: 'center',
  color: '#212121'
});

const ConnectWallet = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ConnectWalletButton variant="contained" onClick={handleClickOpen}>
        Connect Wallet
      </ConnectWalletButton>
      <WalletDialog open={open} onClose={handleClose} />
    </>
  );
};

export default ConnectWallet;
