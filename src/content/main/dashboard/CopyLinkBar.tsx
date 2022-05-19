import {
  Box,
  Typography,
} from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';
import { m_d_copyImage } from 'src/models/ImageUrl';


const CopyLinkBar = () => {

  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);

  return (
    <>
      <Box className={classes.copyLinkCardActionStyle}>
        <Typography component="span" className={classes.copyLinkTextStyle}>
          Your ref link:
        </Typography>
        <Typography component="span" className={classes.copyLinkTextValueStyle}>
          XcR8P/Smart-Ecosystem?p-id=3%3A2
        </Typography>
        <Box
          component="img"
          src={m_d_copyImage.path}
          alt={m_d_copyImage.name}
          className={classes.copyImageStyle}
        />
      </Box>
    </>
  )
}

export default CopyLinkBar;