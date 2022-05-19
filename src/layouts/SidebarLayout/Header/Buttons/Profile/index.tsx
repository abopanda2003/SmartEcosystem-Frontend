import { useState, useRef } from 'react';
import { Box, Popover, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import CustomizeProfile from './CustomizeProfile';
import PublicProfile from './PublicProfile';
import ColumnBox from 'src/components/Box/ColumnBox';

const useStyles = makeStyles({
  outBoxStyle: {
    width: '22.5px',
    height: '22.5px',
    cursor: 'pointer',
    '@media (max-width: 1024px)': {
      marginLeft: '15px'
    }
  }
});

const ProfileButtonGroup = styled(Button)({
  padding: '7px 10px',
  background: 'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)',
  borderRadius: '10px',
  width: '280px',
  height: '30px',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'center',
  color: '#EDEDED',
  marginTop: '10px',
  '&:hover': {
    background: '#E0A501'
  }
});

const profileButton = {
  name: 'profile',
  avatar: '/static/img/header/profile.svg',
  desc: 'profileButton'
};

const ProfileButton = () => {
  const classes = useStyles();
  const ref = useRef<any>(null);

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Box
        component="img"
        className={classes.outBoxStyle}
        alt={profileButton.name}
        src={profileButton.avatar}
        ref={ref}
        onClick={handleOpen}
      />
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        PaperProps={{
          style: {
            background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
            borderRadius: '20px',
            marginTop: '10px'
          }
        }}
      >
        <ColumnBox padding="10px 20px 20px 20px">
          {/* Public Profile */}
          <PublicProfile />
          {/* Customize Profile */}
          <CustomizeProfile />

          <ProfileButtonGroup>Change to Light theme</ProfileButtonGroup>
          <ProfileButtonGroup>Activity Logs</ProfileButtonGroup>
        </ColumnBox>
      </Popover>
    </>
  );
};

export default ProfileButton;
