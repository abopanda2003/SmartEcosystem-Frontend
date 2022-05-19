import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import CustomTitle from 'src/components/Title/BadgeTitle';
import RowBox from 'src/components/Box/RowBox';

interface ParentProps {
  onHandleCustoClose: (e: React.MouseEvent<SVGElement>) => void;
}

const useStyles = makeStyles({
  outBoxStyle: {
    padding: '50px 33px 70px 33px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center'
  }
});

const qrCodeImage = {
  name: 'qrCodeImage',
  path: '/static/img/header/qrcode.svg',
  desc: 'qrCodeImage'
};
const copyIcon = {
  name: 'copyIcon',
  path: '/static/img/header/copy.svg',
  desc: 'copyIcon'
};

const ShareProfile: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.outBoxStyle}>
        <CloseIcon
          onClick={props.onHandleCustoClose}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '16px',
            right: '16px'
          }}
        />
        <Box>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontSize: '24px',
              color: '#E0A501',
              textAlign: 'center'
            }}
          >
            Share your public profile
          </Typography>
          <Box
            sx={{
              marginTop: '70px'
            }}
          >
            <Box
              component="img"
              src={qrCodeImage.path}
              alt={qrCodeImage.name}
              margin="0 auto"
            />
            <Typography
              component="div"
              sx={{
                fontSize: '18px',
                color: '#E0A501',
                textAlign: 'center',
                marginTop: '30px'
              }}
            >
              Share your public profile
            </Typography>
            <Typography
              component="div"
              sx={{
                fontSize: '14px',
                color: '#EDEDED',
                textAlign: 'center',
                marginTop: '5px'
              }}
            >
              or
            </Typography>
            <Typography
              component="div"
              sx={{
                fontSize: '18px',
                color: '#E0A501',
                textAlign: 'center',
                marginTop: '5px',
                marginBottom: '20px'
              }}
            >
              Use link instead
            </Typography>
            <RowBox>
              <CustomTitle
                title={'XcR8P/Smart-Ecosystem?p-id=3%3A2'}
                width={'90%'}
                height={'36px'}
                color={'#EDEDED'}
                background={'linear-gradient(180deg, #212121 0%, #000000 100%)'}
                fontSize={'14px'}
                borderRadius={'10px'}
                padding={'9px 25px'}
                border={'2px solid #323232'}
              />
              <Box component="img" src={copyIcon.path} alt={copyIcon.name} />
            </RowBox>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ShareProfile;
