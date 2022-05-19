import { Box } from '@mui/material';
import BadgeSection from './BadgeSection';
import LinkSection from './LinkSection';
import StatusSection from './StatusSection';


const ProfileInfoDetail = () => {

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
    >
      {/* FIRST SECTION */}
      <BadgeSection />

      {/* SECOND SECTION */}
      <LinkSection />

      {/* THIRD SECTION */}
      <StatusSection />
    </Box>
  )
}

export default ProfileInfoDetail;