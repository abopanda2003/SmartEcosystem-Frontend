import { Typography, Box } from '@mui/material';
import CustomTitle from '../../../../../components/Title/BadgeTitle';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CUSTOM STATISTIC BOX STYLE
  customBoxStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '46px',
    width: '90%',
    '@media (max-width: 968px)': {
      width: '100%'
    }
  }
}));

const prevIcon = {
  name: 'prev',
  path: '/static/img/wealth_team/general/prev.svg',
  desc: 'prevIcon'
};

const InfoHeader = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <Box className={classes.customBoxStyle}>
      <CustomTitle
        width={'147px'}
        height={'34px'}
        background={'#E0A501'}
        color={'#212121'}
        title={'Lv. 1'}
        fontSize={'18px'}
        fontWeight={'600'}
        boxShadow={
          '4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)'
        }
      />
      <Box
        component="img"
        src={prevIcon.path}
        alt={prevIcon.name}
        sx={{
          width: '34px',
          height: '34px',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/wealth/team/general')}
      />
      <Box display={'flex'} flexDirection={'column'}>
        <Typography
          color={'#E0A501'}
          fontSize={'24px'}
          fontWeight={'700'}
          height={'24px'}
          lineHeight={'100%'}
        >
          Mark77’s
        </Typography>
        <Typography
          color={'#EDEDED'}
          fontSize={'18px'}
          fontWeight={'600'}
          height={'22px'}
          lineHeight={'100%'}
        >
          Team Member
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoHeader;
