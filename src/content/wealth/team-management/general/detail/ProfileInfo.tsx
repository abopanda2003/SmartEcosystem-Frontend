import CustomCard from '../../../../../components/Card';
import CustomTitle from '../../../../../components/Title/BadgeTitle';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Avatar, Hidden } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CUSTOM BOX STYLE
  customBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '@media (max-width: 968px)': {
      flexDirection: 'row',
      marginTop: '10px'
    }
  },

  // CUSTOM INNER BOX STYLE
  customInnerBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '30px',
    position: 'relative',
    '@media (max-width: 968px)': {
      width: '50%',
      padding: '0 10px'
    }
  },

  // CUSTOM NOT BOX STYLE
  customnNoteBoxStyle: {
    '@media (max-width: 968px)': {
      marginTop: '10px',
      marginBottom: '20px',
      position: 'relative'
    }
  }
}));

const prevIcon = {
  name: 'prev',
  path: '/static/img/wealth_team/general/prev.svg',
  desc: 'prevIcon'
};

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
const telegramView = {
  name: 'telegramView',
  avatar: '/static/img/sidebar/telegramView.svg',
  desc: 'telegramView'
};

const ProfileInfo = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <Box className={classes.customBoxStyle}>
      {/* TOP SECTION */}
      <Box className={classes.customInnerBoxStyle}>
        <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
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
            sx={{ width: '34px', height: '34px', cursor: 'pointer' }}
            onClick={() => navigate('/wealth/team/general')}
          />
        </Box>
        <Box
          width={'100%'}
          height={'100%'}
          position={'relative'}
          margin={'20px auto'}
        >
          <Avatar
            variant="rounded"
            alt={userAvatar.name}
            src={userAvatar.avatar}
            sx={{
              width: '100%',
              height: '100%',
              cursor: 'pointer',
              margin: '0 auto'
            }}
          />
          <Avatar
            alt={profileMark.name}
            variant="square"
            src={profileMark.avatar}
            sx={{
              width: '72.92px',
              height: '76px',
              cursor: 'pointer',
              position: 'absolute',
              bottom: '0',
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
          <Avatar
            alt={privateViewImage.name}
            src={privateViewImage.avatar}
            sx={{
              width: '15px',
              height: '15px',
              cursor: 'pointer',
              position: 'absolute',
              top: '0',
              bottom: '0',
              marginTop: 'auto',
              marginBottom: 'auto',
              right: '29.49px'
            }}
          />
          <Avatar
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
        <Box display="flex" flexDirection={'column'} marginTop={'20px'}>
          <Box display="flex" justifyContent="space-between">
            <CustomTitle
              title={'Visionary License'}
              width={'120px'}
              height={'20px'}
              fontSize={'10px'}
              fontWeight={'600'}
              color={'#212121'}
              background={'#E0A501'}
            />
            <CustomTitle
              title={''}
              width={'75px'}
              height={'20px'}
              color={'#EDEDED'}
              fontSize={'12px'}
              fontWeight={'600'}
              background={'#5A5A5A'}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ marginTop: '10px' }}
          >
            <CustomTitle
              title={''}
              width={'85px'}
              height={'20px'}
              fontSize={'12px'}
              fontWeight={'600'}
              color={'#EDEDED'}
              background={'#5A5A5A'}
            />
            <CustomTitle
              title={''}
              width={'105px'}
              height={'20px'}
              color={'#EDEDED'}
              fontSize={'12px'}
              fontWeight={'600'}
              background={'#5A5A5A'}
            />
          </Box>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '26px',
              marginTop: '10px',
              zIndex: '1'
            }}
          >
            <CardActions
              disableSpacing
              sx={{
                background: '#464646',
                borderRadius: '16px',
                height: '100%',
                padding: '0 30px',
                position: 'relative',
                cursor: 'pointer',
                justifyContent: 'space-evenly'
              }}
            >
              <Typography
                component="span"
                sx={{
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '15px',
                  color: '#EDEDED',
                  letterSpacing: '1px'
                }}
              >
                Privilege
              </Typography>
              <ArrowDropDownIcon sx={{ color: '#EDEDED' }} />
            </CardActions>
          </Box>
        </Box>
      </Box>

      {/* DOWN SECTION */}
      <Box className={classes.customInnerBoxStyle}>
        <Box className={classes.customnNoteBoxStyle}>
          <Box
            sx={{
              position: 'absolute',
              top: '-12px',
              left: 0,
              right: 0,
              zIndex: '999',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <CustomTitle
              title={'Note'}
              width={'70%'}
              height={'24px'}
              fontSize={'18px'}
              fontWeight={'700'}
              color={'#E0A501'}
              background={'#5A5A5A'}
              padding={'3px 50px'}
              borderRadius={'5px'}
            />
          </Box>
          <CustomCard height={'215px'} width={'100%'}>
            <Box
              padding={'32px 20px 10px 20px'}
              display={'flex'}
              flexDirection={'column'}
            >
              <Typography
                component="div"
                height={'120px'}
                fontSize={'18px'}
                color={'#EDEDED'}
                textAlign={'center'}
                display={'flex'}
                alignItems={'center'}
              >
                This team member is Outperform!
              </Typography>
              <Typography
                component="div"
                height={'26px'}
                fontSize={'12px'}
                color={'#676767'}
                marginTop={'27px'}
                lineHeight={'100%'}
              >
                Last activity 03:13 27/09/2021
              </Typography>
            </Box>
          </CustomCard>
        </Box>

        <Hidden mdUp>
          <CustomCard width={'100%'} height={'130px'}>
            <Box padding={'20px'}>
              <Typography
                component="div"
                height={'16px'}
                lineHeight={'100%'}
                color={'#EDEDED'}
                fontSize={'14px'}
                textAlign={'center'}
                sx={{
                  letterSpacing: '1px'
                }}
              >
                Current Nobility Title
              </Typography>
              <Box
                height={'55px'}
                marginTop={'15px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-around'}
              >
                <Box
                  sx={{
                    width: '55px',
                    height: '53px'
                  }}
                  component="img"
                  src={profileMark.avatar}
                  alt={profileMark.name}
                />
                <Typography
                  component="div"
                  color={'#E0A501'}
                  fontSize={'24px'}
                  fontWeight={'700'}
                  sx={{
                    letterSpacing: '1px'
                  }}
                >
                  Prince
                </Typography>
              </Box>
            </Box>
          </CustomCard>
        </Hidden>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
