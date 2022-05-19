import { FC, ReactNode } from 'react';
import { Card, CardContent } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

interface CustomCardProps {
  children?: ReactNode;
  height: string;
  width?: string;
  marginTop?: string;
  marginBottom?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  minWidth?: string;
  textAlign?: string;
  padding?: string;
}

const CardSelf = styled(Card)({
  background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
  border: '2px solid #323232',
  boxSizing: 'border-box',
  borderRadius: '10px',
  position: 'relative'
});

const CustomCard: FC<CustomCardProps> = ({
  children,
  height,
  marginTop,
  marginBottom,
  background,
  width,
  border,
  borderRadius,
  boxShadow,
  minWidth,
  padding,
}) => {
  return (
    <CardSelf
      sx={{
        height,
        marginTop,
        marginBottom,
        background,
        width,
        border,
        borderRadius,
        boxShadow,
        minWidth,
        padding
      }}
    >
      <CardContent
        sx={{
          padding: '0px',
          paddingBottom: '0px !important',
          height: '100%'
        }}
      >
        {children}
      </CardContent>
    </CardSelf>
  );
};

CustomCard.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string.isRequired
};

export default CustomCard;
