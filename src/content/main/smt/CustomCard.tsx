import { FC, ReactNode } from 'react';
import { Card, CardContent } from '@mui/material';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

interface CustomCardProps {
  children?: ReactNode;
  height: string;
  width?: string;
  marginTop?: string;
  background?: string;
  border?: string;
}

const useStyles = makeStyles((theme) => ({
  customeCard: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%) !important',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px !important'
  }
}));

const CustomCard: FC<CustomCardProps> = ({
  children,
  height,
  marginTop,
  background,
  width,
  border
}) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.customeCard}
      sx={{ height, marginTop, background, width, border }}
    >
      <CardContent
        sx={{ padding: '0px', paddingBottom: '0px !important', height: '100%' }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

CustomCard.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string.isRequired
};

export default CustomCard;
