import CustomCard from '../../../../../components/Card';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CUSTOM BOX STYLE
  customBoxStyle: {
    width: '100%',
    // height: '329px',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%'
    }
  },

  // CUSTOM INNER BOX STYLE
  customInnerBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '47%',
    '@media (max-width: 968px)': {
      width: '90%',
      marginTop: '20px'
    }
  }
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '26px',
  borderRadius: '10px',
  border: '2px solid #323232',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)'
  },
  [`& .${linearProgressClasses.bar}`]: {
    background: 'linear-gradient(90deg, #FFCB00 0%, #E0A501 100%)',
    borderRadius: '8px 0px 0px 8px'
  }
}));

const info = [
  {
    name: 'License type',
    value: 'Visionary'
  },
  {
    name: 'Expiration time',
    value: '117 days'
  },
  {
    name: 'SMT Stacked',
    value: '7,500 SMT'
  },
  {
    name: 'Staking Rewards Earned',
    value: '333 SMT'
  },
  {
    name: 'Total Golden Tree Contribution',
    value: '10,000 Growth'
  }
];

const activityLog = [
  'Earned 33 SMT Staking Rewards',
  'Prince Nobility title achieved!',
  'Updated Runner to Visionary License',
  'Earned 10 Surprise Rewards',
  'Earned 12 SMT Staking Rewards',
  'Earned 15 SMT Staking Rewards',
  'Earned 13 SMT Staking Rewards',
  'Earned 10 Surprise Rewards',
  'Earned 6 SMT Staking Rewards',
  'Updated Opportunist to Runner License',
  'Earned 5 Surprise Rewards',
  'Earned 12 SMT Staking Rewards',
  'Earned 10 SMT Staking Rewards'
];

const StatusSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.customBoxStyle}>
      {/* FITST PART */}
      <Box className={classes.customInnerBoxStyle}>
        <CustomCard width={'100%'} height={'auto'}>
          <Box
            padding={'30px 20px'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            {info.map((con, idx) => {
              return (
                <Box
                  key={idx}
                  display={'flex'}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  width={'100%'}
                >
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    minWidth={'175px'}
                    width="175px"
                  >
                    <Typography
                      variant="h3"
                      component="span"
                      fontSize="18px"
                      color="#EDEDED"
                    >
                      {con.name}
                    </Typography>
                    <Typography
                      variant="h3"
                      component="span"
                      fontSize="18px"
                      color="#EDEDED"
                    >
                      :
                    </Typography>
                  </Box>
                  <Typography
                    variant="h3"
                    component="span"
                    fontSize="18px"
                    color="#E0A501"
                    marginLeft={'10px'}
                  >
                    {con.value}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </CustomCard>
        {/* PROGRESS BAR */}
        <Box
          width={'100%'}
          display={'flex'}
          flexDirection={'column'}
          marginTop={'20px'}
        >
          <Typography
            variant="h3"
            component="div"
            fontSize={'18px'}
            color={'#EDEDED'}
          >
            Next Title Progress
          </Typography>
          {/* PROGRESS */}
          <Box marginTop={'7px'} height={'26px'}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
          <Typography
            variant="h3"
            component="div"
            fontSize={'14px'}
            color={'#EDEDED'}
            textAlign={'center'}
            marginTop={'7px'}
          >
            7,333 / 18,000 Growth
          </Typography>
        </Box>
      </Box>

      {/* SECOND PART */}
      <Box className={classes.customInnerBoxStyle}>
        <CustomCard width={'100%'} height={'100%'}>
          <Box
            padding={'20px 20px 10px 20px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <Typography
              variant="h3"
              component="div"
              fontSize={'18px'}
              color={'#E0A501'}
              fontWeight={'700'}
              textAlign={'center'}
            >
              Activity Log
            </Typography>
            <Box marginTop={'10px'} paddingLeft={'5px'}>
              {activityLog.map((con, idx) => {
                return (
                  <Typography
                    key={idx}
                    variant="h3"
                    component="div"
                    fontSize={'14px'}
                    color={'#EDEDED'}
                  >
                    &#8226; {con}
                  </Typography>
                );
              })}
            </Box>
            <Typography
              variant="h3"
              component="div"
              fontSize={'14px'}
              color={'#E0A501'}
              textAlign={'right'}
              marginTop={'5px'}
            >
              See all &gt;
            </Typography>
          </Box>
        </CustomCard>
      </Box>
    </Box>
  );
};

export default StatusSection;
