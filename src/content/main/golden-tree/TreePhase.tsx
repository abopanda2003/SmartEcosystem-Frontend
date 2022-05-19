import { useState } from 'react';
import { Box, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';

interface ParentProps {
  onHandlePhaseChange: (value: number) => void;
}

const useStyles = makeStyles((theme) => ({
  customCardOutBoxStyle: {
    padding: '10px 10px 10px 30px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      padding: '10px'
    }
  }
}));

const growNum = 9876543210;
const growTreeImage = [
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree9.svg',
    desc: 'growTreeImage'
  },
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree8.svg',
    desc: 'growTreeImage'
  },
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree7.svg',
    desc: 'growTreeImage'
  },
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree6.svg',
    desc: 'growTreeImage'
  },
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree5.svg',
    desc: 'growTreeImage'
  },
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree4.svg',
    desc: 'growTreeImage'
  },
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree3.svg',
    desc: 'growTreeImage'
  },
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree2.svg',
    desc: 'growTreeImage'
  },
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree1.svg',
    desc: 'growTreeImage'
  },
  {
    name: 'growTree',
    path: '/static/img/main_dashboard/growtree0.svg',
    desc: 'growTreeImage'
  }
];

const TreePhase: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  const [tabValue, tabSetState] = useState<number>(0);

  const handleClickButton = (value: number): void => {
    props.onHandlePhaseChange(value);
    tabSetState(value);
  };

  return (
    <>
      <CustomCard height={'450px'}>
        <Box className={classes.customCardOutBoxStyle}>
          <Box width="70%" position="relative">
            {growNum
              .toString()
              .split('')
              .map((num, idx) => {
                return (
                  tabValue === idx && (
                    <Box
                      key={idx}
                      sx={{
                        position: 'absolute',
                        top: '24px',
                        left: '0',
                        bottom: '24px',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 'auto',
                          height: 'auto',
                          position: 'absolute',
                          bottom: '0',
                          alignItems: 'flex-end'
                        }}
                        variant="square"
                        alt={growTreeImage[idx].name}
                        src={growTreeImage[idx].path}
                      ></Avatar>
                    </Box>
                  )
                );
              })}
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
            sx={{
              textAlign: 'center',
              maxWidth: '107px',
              width: '30%'
            }}
          >
            {growNum
              .toString()
              .split('')
              .map((num, idx) => {
                return (
                  <CustomButton
                    key={idx}
                    width="100%"
                    height="34px"
                    title={'Phase ' + num}
                    background={tabValue === idx ? '#E0A501' : '#323232'}
                    color={tabValue === idx ? '#212121' : '#EDEDED'}
                    borderRadius="20px"
                    fontSize="18px"
                    fontWeight="600"
                    onHandleClick={() => handleClickButton(idx)}
                  />
                );
              })}
          </Box>
        </Box>
      </CustomCard>
    </>
  );
};

export default TreePhase;
