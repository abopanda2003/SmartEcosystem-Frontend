import { useContext } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';
import { Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
    padding-left: ${theme.spacing(1)};
    padding-right: ${theme.spacing(1)};
`
);

const user = {
  name: 'Mark 77',
  avatar: '/static/img/header/mobileprofile.svg',
  jobtitle: 'Project Manager'
};

const HeaderUserbox = () => {
  const { toggleRightSidebar } = useContext(SidebarContext);

  return (
    <>
      <UserBoxButton color="secondary" onClick={toggleRightSidebar}>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />
      </UserBoxButton>
    </>
  );
};

export default HeaderUserbox;
