import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ParentProps {
  onHandleSwapClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onHandleChange: (value: string) => void;
}

const GotItButton = styled(Button)({
  background: '#E0A501',
  boxShadow: '10.9538px 10.9538px 5.47692px rgba(0, 0, 0, 0.5)',
  borderRadius: '17px',
  height: '25px',
  width: '120px',
  fontSize: '12px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#212121',
  padding: '4px 40px',
  '&:hover': {
    backgroundColor: '#E0A501'
  }
});

const mobileSuccessImg = {
  name: 'mobileSuccessImg',
  path: '/static/img/main_smt/successHero.png',
  desc: 'mobileSuccessHeroImage'
};

const MobileSwapSuccess: React.FC<ParentProps> = (props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
        boxSizing: 'border-box',
        borderRadius: '10px',
        width: '100%'
      }}
    >
      <Box
        component="img"
        src={mobileSuccessImg.path}
        alt={mobileSuccessImg.name}
        sx={{
          width: '100%',
          height: '75px'
        }}
      />
      <Box padding="36px 60px">
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: '14px',
            fontWeight: '600',
            height: '52px',
            color: '#EDEDED',
            textAlign: 'center'
          }}
        >
          Your intermediary request has been sent! Ask your intermediary to
          confirm the request.
        </Typography>
        <Box width="100%" textAlign="center" marginTop="42px">
          <GotItButton onClick={(e) => props.onHandleSwapClose(e)}>
            Got it
          </GotItButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileSwapSuccess;
