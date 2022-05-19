import React, { useState } from 'react';
import {
  Popover,
  Button,
  Backdrop
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import PublicProfileContent from './PublicProfileContent';
import ShareProfile from './ShareProfile';

const useStyles = makeStyles(theme => ({
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // CUSTOM SEARCH BAR STYLE
  searchBarStyle: {
    width: '100%',
    height: '42px',
    position: "relative",
    justifyContent: 'center',
  },
}));

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
  "&:hover": {
    background: "#E0A501"
  }
});


const PublicProfile = () => {

  const classes = useStyles();

  // CUSTOMIZE PROFILE POPOVER EVENT
  const [isCustoProfile, setCustoProfile] = useState<boolean>(false);
  const onHandleCustoProfileClick = (): void => {
    setShare(false);
    setCustoProfile(true);
  }
  const onHandleCustoClose = (): void => {
    setCustoProfile(false);
  }

  // SHARE BUTTON CLICK EVENT
  const [share, setShare] = useState<boolean>(false);
  const onHandleShareClick = (): void => {
    setShare(true);
  }

  return (
    <>
      <ProfileButtonGroup onClick={onHandleCustoProfileClick}>
        Public Profile
      </ProfileButtonGroup>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isCustoProfile}
      >

        <Popover
          anchorReference={"none"}
          classes={{
            root: classes.popoverRoot,
          }}
          onClose={onHandleCustoClose}
          open={isCustoProfile}
          PaperProps={{
            style: {
              width: '428px',
              boxShadow: 'none'
            },
          }}
        >
          {
            share ?
              (
                <ShareProfile
                  onHandleCustoClose={onHandleCustoClose}
                />
              ) :
              (
                <PublicProfileContent
                  onHandleCustoClose={onHandleCustoClose}
                  onHandleShareClick={onHandleShareClick}
                />
              )
          }
        </Popover>

      </Backdrop>
    </>
  )
}

export default PublicProfile;