import { FC } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CustomTooltip from 'src/components/Tooltip';
import { IndexStyles } from 'src/models/main/dashboard/CustomStyles';

export interface UserType {
  name: string;
  avatar: string;
}

interface PageTitleWrapperProps {
  title: string;
  content?: string;
  width?: string;
}

const PageTitle: FC<PageTitleWrapperProps> = ({ title, content, width }) => {
  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);

  return (
    <Grid container>
      <Grid item {...width} display="flex" alignItems="center">
        <Typography variant="h2" className={classes.pageTitleStyle}>
          {title}
        </Typography>
        <CustomTooltip content={content} />
      </Grid>
    </Grid>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
