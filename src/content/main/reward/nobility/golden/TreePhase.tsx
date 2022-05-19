import { useState } from 'react';
import { Box, Avatar, Typography, Popover } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import CustomButton from 'src/components/Button';
import FuturePopover from '../../popover/FutureReward';

const useStyles = makeStyles((theme) => ({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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

const TreePhase = () => {
  
  const classes = useStyles();

  const [tabValue, tabSetState] = useState<number>(6);
  const handleClickButton = (value: number): void => {
    tabSetState(value);
  };

  // FUTURE POPOVER FUNCTIONS
  const [isFutureOpen, setFutureOpen] = useState<boolean>(false);
  const onHandleFuture = (): void => {
    setFutureOpen(true);
  };
  const onHandleFutureClose = (): void => {
    setFutureOpen(false);
  };

  return (
    <>
      <CustomCard height='560px' width="100%" marginTop="20px">
        <Box
          sx={{
            padding: '10px',
            height: '100%'
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            sx={{
              border: '2px solid #323232',
              borderRadius: '10px',
              height: '400px',
              width: '100%',
              padding: '10px'
            }}
            display="flex"
            justifyContent="space-between"
          >
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
                          top: '0px',
                          left: '0',
                          bottom: '0px',
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
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              sx={{
                textAlign: 'center',
                maxWidth: '107px',
                width: '25%'
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
                      height="30px"
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

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            marginTop="20px"
          >
            <Box>
              <Typography
                component="span"
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#EDEDED',
                  lineHeight: '100%'
                }}
              >
                Current Phase
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#E0A501',
                  marginLeft: '5px',
                  lineHeight: '100%'
                }}
              >
                #3
              </Typography>
            </Box>
            <Typography
              component="div"
              sx={{
                marginTop: '5px',
                lineHeight: '100%',
                fontSize: '14px',
                fontWeight: '600',
                color: '#EDEDED'
              }}
            >
              Next rewards:
            </Typography>
            <Typography
              component="div"
              sx={{
                fontSize: '30px',
                fontWeight: '700',
                color: '#E0A501',
                marginLeft: '5px',
                lineHeight: '100%'
              }}
            >
              10 SMTC
            </Typography>
            <CustomButton
              marginTop="15px"
              width="200px"
              height="30px"
              background="#E0A501"
              color="#212121"
              borderRadius="20px"
              fontSize="14px"
              fontWeight="600"
              boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
              onHandleClick={onHandleFuture}
            >
              Future Rewards
            </CustomButton>
          </Box>
        </Box>
      </CustomCard>

      {/* FUTURE POPOVER */}
      <Popover
        anchorReference={'none'}
        classes={{
          root: classes.popoverRoot
        }}
        open={isFutureOpen}
        PaperProps={{
          style: {
            width: '700px',
            boxShadow: 'none'
          }
        }}
      >
        <FuturePopover onHandleFutureClose={onHandleFutureClose} />
      </Popover>
    </>
  );
};

export default TreePhase;
