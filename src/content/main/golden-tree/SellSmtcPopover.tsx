import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomCard from 'src/components/Card';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { makeStyles } from '@mui/styles';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomButton from 'src/components/Button';

interface ParentProps {
  onHandleSellSmtcClose: (e: React.MouseEvent) => void;
  onHandleSellSmtcClick: (e: React.MouseEvent) => void;
}

const useStyles = makeStyles((theme) => ({
  // SEARCH BAR CUSTOM STYLE
  searchCustomStyle: {
    width: '100%',
    height: '40px',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 968px)': {}
  }
}));

const percentValues = ['10%', '25%', '50%', '75%', '100%'];

const SellSmtcPopover: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          padding: '30px 30px 50px 30px !important',
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
          How many SMTC that you want to sell?
        </Typography>
        <Divider
          sx={{
            border: '2px solid #323232'
          }}
        />
        <Box padding="20px 55px 0 55px">
          <Typography
            fontSize="14px"
            color="#EDEDED"
            fontWeight="600"
            padding="0 82px"
          >
            Selling SMTC at threshold price will burn the SMTC and be removed
            from circulation
          </Typography>
          <Box
            marginTop="20px"
            height="143px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CustomCard
              width={'200px'}
              height={'100%'}
              background={'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)'}
              border={'none'}
            >
              <Box padding="20px 35px">
                <Typography
                  color="#EDEDED"
                  fontSize="14px"
                  textAlign="center"
                  fontWeight="600"
                  height="17px"
                  lineHeight="100%"
                >
                  Your balance
                </Typography>
                <Typography
                  color="#E0A501"
                  fontSize="48px"
                  textAlign="center"
                  fontWeight="700"
                  height="59px"
                  lineHeight="100%"
                  marginTop="10px"
                >
                  1,000
                </Typography>
                <Typography
                  color="#E0A501"
                  fontSize="14px"
                  textAlign="center"
                  fontWeight="700"
                  height="17px"
                  lineHeight="100%"
                >
                  SMTC
                </Typography>
              </Box>
            </CustomCard>
            <Box width="300px" display="flex" flexDirection="column">
              <Typography
                fontSize="14px"
                color="#EDEDED"
                fontWeight="600"
                marginBottom="5px"
                textAlign="left"
              >
                Amount to sell
              </Typography>
              <FormControl
                variant="outlined"
                className={classes.searchCustomStyle}
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder="500"
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
                <Typography
                  sx={{
                    margin: '0 auto',
                    position: 'absolute',
                    right: '20px',
                    height: '22px',
                    fontSize: '18px',
                    lineHeight: '100%',
                    color: '#323232'
                  }}
                >
                  SMT
                </Typography>
              </FormControl>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginTop="10px"
              >
                {percentValues.map((con, idx) => {
                  return (
                    <CustomTitle
                      key={idx}
                      title={con}
                      background={'#5A5A5A'}
                      borderRadius={'20px'}
                      width={'50px'}
                      height={'32px'}
                      color={'#EDEDED'}
                      fontSize={'14px'}
                    />
                  );
                })}
              </Box>
            </Box>
          </Box>
          <Box
            padding="0 115px"
            display="flex"
            flexDirection="column"
            marginTop="20px"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontSize="14px" color="#EDEDED" fontWeight="600">
                Amount to receive:
              </Typography>
              <Typography fontSize="14px" color="#E0A501" fontWeight="600">
                500 BUSD
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontSize="14px" color="#EDEDED" fontWeight="600">
                Current threshold price:
              </Typography>
              <Typography fontSize="14px" color="#E0A501" fontWeight="600">
                100 BUSD
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontSize="14px" color="#EDEDED" fontWeight="600">
                Price on DEX:
              </Typography>
              <Typography fontSize="14px" color="#E0A501" fontWeight="600">
                120 BUSD
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="48px"
            height="50px"
          >
            <CustomButton
              width="240px"
              height="100%"
              background="#E0A501"
              color="#212121"
              fontSize="22px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={props.onHandleSellSmtcClick}
            >
              Sell now
            </CustomButton>
            <CustomButton
              width="240px"
              height="100%"
              background="#936900"
              color="#FFFFFF"
              fontSize="22px"
              fontWeight="600"
              boxShadow="21.7832px 21.7832px 10.8916px rgba(0, 0, 0, 0.5)"
              borderRadius="35px"
              onHandleClick={props.onHandleSellSmtcClose}
            >
              Cancel
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SellSmtcPopover;
