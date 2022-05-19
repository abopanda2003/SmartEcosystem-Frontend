import React from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';

interface ParentProps {
  onHandleAddClose: (e: React.MouseEvent) => void;
  onHandleAddNext: (e: React.MouseEvent, value: string) => void;
}

const ProceedPopover: React.FC<ParentProps> = (props) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          padding: '130px 30px 50px 70px !important',
          position: 'relative',
          background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
          boxSizing: 'border-box',
          borderRadius: '10px',
          width: '100%',
          textAlign: 'center',
          height: '527px'
        }}
      >
        <CloseIcon
          onClick={props.onHandleAddClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '31px',
            right: '31px'
          }}
        />
        <Box>
          <Typography
            color="#EDEDED"
            fontSize="18px"
            textAlign="center"
            fontWeight="600"
            height="22px"
            lineHeight="100%"
          >
            Are you sure to add
          </Typography>
          <Typography
            color="#E0A501"
            fontSize="48px"
            textAlign="center"
            fontWeight="700"
          >
            1,000 SMT
          </Typography>
          <Typography
            color="#EDEDED"
            fontSize="18px"
            textAlign="center"
            fontWeight="600"
            height="22px"
            lineHeight="100%"
          >
            to your farmed amount?
          </Typography>
        </Box>

        <Box
          height="120px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          marginTop="102px"
        >
          <CustomButton
            width="240px"
            height="50px"
            background="#936900"
            color="#FFFFFF"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            onHandleClick={(e) => props.onHandleAddNext(e, 'amount')}
          >
            No, take me back
          </CustomButton>
          <CustomButton
            width="254px"
            height="50px"
            background="#E0A501"
            color="#212121"
            fontSize="22px"
            fontWeight="600"
            boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
            borderRadius="35px"
            onHandleClick={(e) => props.onHandleAddNext(e, 'sure')}
          >
            Yes, proceed to add
          </CustomButton>
        </Box>
      </Box>
    </>
  );
};

export default ProceedPopover;
