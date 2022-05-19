import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomCard from '../../dashboard/CustomCard';
import Setting from './Setting';
import Recent from './Recent';

interface ChildProps {
  clickOpenHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const useStyles = makeStyles((theme) => ({
  // HEADER TITLE STYLE
  headerTypoStyle: {
    textAlign: 'center',
    fontWeight: '700 !important',
    fontSize: '36px !important',
    lineHeight: '44px !important',
    color: '#E0A501 !important'
  },

  // LIQUIDITY TITLE STYLE
  liqTitleStyle: {
    float: 'right',
    fontWeight: '700 !important',
    fontSize: '24px !important',
    lineHeight: '29px !important',
    color: '#E0A501 !important'
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

const AddLiquidityPanel: React.FC<ChildProps> = (props) => {
  const classes = useStyles();

  return (
    <CustomCard marginTop="30px" height="600px">
      <Box padding="20px" sx={{ height: '100%' }}>
        <Box
          position="relative"
          sx={{
            height: '29px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{ height: '100%' }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              aria-label="vehicles"
              sx={{ float: 'left', padding: '0 !important' }}
              onClick={props.clickOpenHandler}
            >
              <ArrowBackIcon className={classes.headerTypoStyle} />
            </IconButton>
            <Typography
              variant="h3"
              component="span"
              className={classes.liqTitleStyle}
            >
              Add Liquidity
            </Typography>
          </Box>
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
          <Typography
            variant="h3"
            component="span"
            sx={{
              fontSize: '18px',
              color: '#EDEDED',
              lineHeight: '0px !important'
            }}
          >
            Add liquidity to receive LP tokens
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
              sx={{ padding: '0 !important', margin: '0 !important' }}
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h3"
              component="div"
              sx={{ fontSize: '14px', color: '#EDEDED' }}
            >
              Input
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontSize: '14px', color: '#EDEDED' }}
            >
              Balance: 1,000
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: '13px',
              lineHeight: '1px !important'
            }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontSize: '48px',
                color: '#EDEDED',
                fontWeight: '700',
                lineHeight: '1px !important'
              }}
            >
              0.00
            </Typography>
            <Box
              sx={{ float: 'right', width: '120px' }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box component="img" alt={bnbIcon.name} src={bnbIcon.path}></Box>
              <Typography
                variant="h3"
                component="span"
                sx={{
                  fontSize: '24px',
                  color: '#EDEDED',
                  fontWeight: '600'
                }}
              >
                BNB
              </Typography>
              <ExpandMoreIcon sx={{ color: '#5A5A5A', fontSize: '28px' }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: '14px', textAlign: 'center', lineHeight: '1px' }}>
          <AddIcon sx={{ color: '#E0A501', fontSize: '32px' }} />
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h3"
              component="div"
              sx={{ fontSize: '14px', color: '#EDEDED' }}
            >
              Input
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontSize: '14px', color: '#EDEDED' }}
            >
              Balance: 1,000
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: '14px',
              lineHeight: '1px !important'
            }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontSize: '48px',
                color: '#EDEDED',
                fontWeight: '700',
                lineHeight: '1px !important'
              }}
            >
              0.00
            </Typography>
            <Box
              sx={{ float: 'right', width: '120px' }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box component="img" alt={bnbIcon.name} src={bnbIcon.path}></Box>
              <Typography
                variant="h3"
                component="span"
                sx={{ fontSize: '24px', color: '#EDEDED', fontWeight: '600' }}
              >
                SMT
              </Typography>
              <ExpandMoreIcon sx={{ color: '#5A5A5A', fontSize: '28px' }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: '100px',
            marginTop: '20px',
            border: '2px solid #5A5A5A',
            borderRadius: '10px',
            padding: '10px 20px 20px'
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontSize: '14px',
              margin: '0 auto',
              width: '154px',
              color: '#EDEDED',
              textAlign: 'center'
            }}
          >
            Prices and Pool Share
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            sx={{ marginTop: '20px' }}
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{ textAlign: 'center' }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontSize: '18px',
                  width: '154px',
                  height: '16px',
                  lineHeight: '1px',
                  color: '#E0A501',
                  letterSpacing: '1px'
                }}
              >
                1.000
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontSize: '14px',
                  width: '154px',
                  height: '13px',
                  lineHeight: '1px',
                  color: '#EDEDED',
                  letterSpacing: '1px'
                }}
              >
                SMT per BNB
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ textAlign: 'center' }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontSize: '18px',
                  width: '154px',
                  height: '16px',
                  lineHeight: '1px',
                  color: '#E0A501',
                  letterSpacing: '1px'
                }}
              >
                1.000
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontSize: '14px',
                  width: '154px',
                  height: '13px',
                  lineHeight: '1px',
                  color: '#EDEDED',
                  letterSpacing: '1px'
                }}
              >
                BNB per SMT
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ textAlign: 'center' }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontSize: '18px',
                  width: '154px',
                  height: '16px',
                  lineHeight: '1px',
                  color: '#E0A501',
                  letterSpacing: '1px'
                }}
              >
                40%
              </Typography>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontSize: '14px',
                  width: '154px',
                  height: '13px',
                  lineHeight: '1px',
                  color: '#EDEDED',
                  letterSpacing: '1px'
                }}
              >
                Share of Pool
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          <ExchangeButton variant="contained" onClick={props.clickOpenHandler}>
            Add Liquidity
          </ExchangeButton>
        </Box>
      </Box>
    </CustomCard>
  );
};

export default AddLiquidityPanel;
