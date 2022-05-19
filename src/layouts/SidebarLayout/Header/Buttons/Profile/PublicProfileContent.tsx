import React, { useState } from 'react';
import { Box, Typography, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Collapse from '@mui/material/Collapse';
import Switch from '@mui/material/Switch';
import CustomTitle from 'src/components/Title/BadgeTitle';
import ColumBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';

interface ParentProps {
  onHandleCustoClose: (e: React.MouseEvent<SVGElement>) => void;
  onHandleShareClick: () => void;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const useStyles = makeStyles((theme) => ({
  outBoxStyle: {
    padding: '50px 44px 40px 44px !important',
    position: 'relative',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '100%',
    textAlign: 'center'
  },
  closeIconStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: '16px',
    right: '16px'
  },
  visionaryBoxStyle: {
    height: '25px',
    marginTop: '13px',
    background: '#5A5A5A',
    borderRadius: '20px'
  }
}));

// MIDDLE SECTION BUTTON NAMES
const middleButtons = ['Portofolio', 'Achievement', 'Growth', 'Wealth'];

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 32,
  padding: 0,
  borderRadius: '20px',
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 32,
      color: '#FFF',
      backgroundColor: '#FFF'
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
      color: '#FFF',
      backgroundColor: '#FFF'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    '&.Mui-checked': {
      transform: 'translateX(26px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#E0A501' : '#695400'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 32,
    height: 32,
    borderRadius: 16,
    color: '#FFF',
    backgroundColor: '#FFF',
    transition: theme.transitions.create(['width'], {
      duration: 200
    })
  },
  '& .MuiSwitch-track': {
    borderRadius: 16,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#695400' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box'
  }
}));

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const userAvatar = {
  name: 'userAvatar',
  avatar: '/static/img/sidebar/profileImage.svg',
  desc: 'userAvatarImage'
};
const profileMark = {
  name: 'profileMark',
  avatar: '/static/img/sidebar/profileMark.svg',
  desc: 'profileMarkImage'
};
const publicUserInfo = {
  name: 'Mark77'
};
const privateViewImage = {
  name: 'privateView',
  avatar: '/static/img/sidebar/privateProfileView.svg',
  desc: 'privateProfileView'
};
const publicViewImage = {
  name: 'publicView',
  avatar: '/static/img/sidebar/publicProfileView.svg',
  desc: 'publicProfileView'
};
const telegramView = {
  name: 'telegramView',
  avatar: '/static/img/sidebar/telegramView.svg',
  desc: 'telegramView'
};
const shareIcon = {
  name: 'shareIcon',
  path: '/static/img/header/share.svg',
  desc: 'shareIcon'
};
const makePublic = ['Make Public', 'Make Private'];

const PublicProfileContent: React.FC<ParentProps> = (props) => {
  const classes = useStyles();

  // MAKE PUBLIC, PRIVATE
  const [isPublic, setPublic] = useState<number>(0);
  const changeSwitch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.checked ? setPublic(1) : setPublic(0);
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box className={classes.outBoxStyle}>
        <CloseIcon
          onClick={props.onHandleCustoClose}
          className={classes.closeIconStyle}
        />
        <Box padding="0 20px">
          <Typography
            variant="h2"
            sx={{
              color: '#E0A501',
              textAlign: 'center'
            }}
          >
            Public Profile
          </Typography>
          {/* TOP SECTION */}
          <Box sx={{ marginTop: '20px', padding: '0 30px' }}>
            <Box width="150px" sx={{ position: 'relative', margin: '0 auto' }}>
              <Box
                component="img"
                alt={userAvatar.name}
                src={userAvatar.avatar}
                sx={{
                  width: '150px',
                  height: '150px',
                  cursor: 'pointer',
                  margin: 'auto'
                }}
              />
              <Box
                component="img"
                alt={profileMark.name}
                src={profileMark.avatar}
                sx={{
                  width: '72.92px',
                  height: '76px',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '88px',
                  right: '0',
                  borderRadius: '0px !important'
                }}
              />
            </Box>
            <Box sx={{ position: 'relative', marginTop: '16px' }}>
              <Typography
                variant="h2"
                color="#EDEDED"
                sx={{
                  textAlign: 'center'
                }}
              >
                {publicUserInfo.name}
              </Typography>
              <Box
                component="img"
                alt={
                  makePublic[isPublic] === 'Make Private'
                    ? publicViewImage.name
                    : privateViewImage.name
                }
                src={
                  makePublic[isPublic] === 'Make Private'
                    ? publicViewImage.avatar
                    : privateViewImage.avatar
                }
                sx={{
                  width: '15.72px',
                  height: '15.05px',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '0',
                  bottom: '0',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  right: '29.49px'
                }}
              />
              <Box
                component="img"
                alt={telegramView.name}
                src={telegramView.avatar}
                sx={{
                  width: '18px',
                  height: '18px',
                  cursor: 'pointer',
                  position: 'absolute',
                  top: '0',
                  bottom: '0',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  right: '0'
                }}
              />
            </Box>
            <RowBox className={classes.visionaryBoxStyle}>
              <Typography
                component="span"
                sx={{
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '12px',
                  lineHeight: '100%',
                  padding: '5px 10px',
                  color: '#212121',
                  background: '#E0A501',
                  borderRadius: '20px',
                  height: '100%',
                  width: '60%'
                }}
              >
                Visionary License
              </Typography>
              <Typography
                component="span"
                sx={{
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '12px',
                  padding: '5px 15px',
                  color: '#fff',
                  width: '40%'
                }}
              >
                364d : 20h
              </Typography>
            </RowBox>
            <ColumBox>
              <RowBox marginTop="10px">
                <CustomTitle
                  title={'Elon’s Eye'}
                  width={'110px'}
                  height={'25px'}
                  fontSize={'12px'}
                  fontWeight={'600'}
                  color={'#EDEDED'}
                  background={'#5A5A5A'}
                />
                <CustomTitle
                  title={'The Prince'}
                  width={'110px'}
                  height={'25px'}
                  color={'#EDEDED'}
                  fontSize={'12px'}
                  fontWeight={'600'}
                  background={'#5A5A5A'}
                />
              </RowBox>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '32px',
                  marginTop: '7px',
                  zIndex: '1'
                }}
              >
                <CardActions
                  sx={{
                    background:
                      'linear-gradient(180deg, #212121 0%, #000000 100%)',
                    border: '2px solid #323232',
                    boxSizing: 'border-box',
                    borderRadius: '10px',
                    height: '100%',
                    padding: '0 66px',
                    position: 'relative',
                    cursor: 'pointer',
                    justifyContent: 'center'
                  }}
                  onClick={handleExpandClick}
                >
                  <Typography
                    variant="h3"
                    component="span"
                    sx={{
                      textAlign: 'center',
                      color: '#EDEDED'
                    }}
                  >
                    Privilege
                  </Typography>
                  <ExpandMore expand={expanded}>
                    <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      padding: '42px 10px 12px 10px !important',
                      width: '100%',
                      background:
                        'linear-gradient(180deg, #212121 0%, #000000 100%)',
                      border: '2px solid #323232',
                      boxSizing: 'border-box',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      marginTop: '-32px',
                      textAlign: 'left'
                    }}
                  >
                    <Typography style={{ color: '#E0A501', fontSize: '12px' }}>
                      &#8226; Teamwork ladder lv.7
                    </Typography>
                    <Typography style={{ color: '#E0A501', fontSize: '12px' }}>
                      &#8226; Entitled to be an SMT intermediary
                    </Typography>
                    <Typography style={{ color: '#E0A501', fontSize: '12px' }}>
                      &#8226; Farming rewards:
                    </Typography>
                    <Typography
                      style={{
                        color: '#EDEDED',
                        fontSize: '12px',
                        paddingLeft: 12
                      }}
                    >
                      &#8226; 0.17% Fee as a liquidity provider
                    </Typography>
                    <Typography
                      style={{
                        color: '#EDEDED',
                        fontSize: '12px',
                        paddingLeft: 12
                      }}
                    >
                      &#8226; Fixed 0.1% /day
                    </Typography>
                    <Typography
                      style={{
                        color: '#EDEDED',
                        fontSize: '12px',
                        paddingLeft: 12
                      }}
                    >
                      &#8226; Sell tax distribution *4
                    </Typography>
                    <Typography style={{ color: '#E0A501', fontSize: '12px' }}>
                      &#8226; Access to Smart Academy, Smart Living, Smart
                      Utilities, Smart Wealth (Visionary)
                    </Typography>
                  </CardContent>
                </Collapse>
              </Box>
            </ColumBox>
          </Box>
          {/* MIDDLE SECTION */}
          <Box marginTop="30px">
            {middleButtons.map((con, idx) => {
              return (
                <CardActions
                  key={idx}
                  disableSpacing
                  sx={{
                    background:
                      'linear-gradient(180deg, #212121 0%, #000000 100%)',
                    border: '2px solid #323232',
                    boxSizing: 'border-box',
                    borderRadius: '10px',
                    height: '40px',
                    width: '100%',
                    padding: '0 30px',
                    position: 'relative',
                    cursor: 'pointer',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '18px',
                      height: '25px',
                      color: '#EDEDED',
                      letterSpacing: '1px'
                    }}
                  >
                    {con}
                  </Typography>
                  <ArrowDropDownIcon sx={{ color: '#E0A501' }} />
                </CardActions>
              );
            })}
          </Box>
        </Box>
        {/* BOTTOM SETION */}
        <RowBox marginTop="195px" justifyContent="center">
          <RowBox width="50%">
            <AntSwitch
              inputProps={{ 'aria-label': 'setted' }}
              onChange={(e) => changeSwitch(e)}
            />
            <Typography fontSize="14px" color="#E0A501">
              {makePublic[isPublic]}
            </Typography>
          </RowBox>
          {makePublic[isPublic] === 'Make Private' ? (
            <RowBox width="40%" marginLeft="30px">
              <Typography fontSize="14px" color="#E0A501">
                Share Profile
              </Typography>
              <Box
                component="img"
                src={shareIcon.path}
                alt={shareIcon.name}
                onClick={props.onHandleShareClick}
                sx={{
                  cursor: 'pointer'
                }}
              />
            </RowBox>
          ) : (
            ''
          )}
        </RowBox>
      </Box>
    </>
  );
};

export default PublicProfileContent;
