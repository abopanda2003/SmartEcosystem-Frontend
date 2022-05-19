import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';

interface ParentProps {
  onHandleSellSmtcClose: (e: React.MouseEvent) => void;
}

const SellSmtcConfirmPopover: React.FC<ParentProps> = (props) => {
  return (
    <>
      <Box
        sx={{
          padding: '30px 30px 70px 30px !important',
          position: 'relative',
          background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
          boxSizing: 'border-box',
          borderRadius: '10px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <CloseIcon
          onClick={props.onHandleSellSmtcClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '31px',
            right: '31px'
          }}
        />
        <Typography
          fontSize="24px"
          color="#E0A501"
          fontWeight="700"
          marginBottom="20px"
        >
          Sell request is confirmed!
        </Typography>
        <Divider
          sx={{
            border: '2px solid #323232'
          }}
        />
        <Box
          padding="130px 70px 0 70px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            fontSize="24px"
            color="#EDEDED"
            fontWeight="600"
            marginBottom="138px"
            sx={{
              letterSpacing: '2.5px'
            }}
          >
            BUSD token should have been sent to your wallet!
          </Typography>
          <CustomButton
            width="240px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            onHandleClick={props.onHandleSellSmtcClose}
          >
            Got it
          </CustomButton>
        </Box>
      </Box>
    </>
  );
};

export default SellSmtcConfirmPopover;
