import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface CustomBoxProps {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  padding?: string;
  textAlign?: any;
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  margin?: string;
  paddingRight?: string;
  className?: string;
  onHandleClick?: (e: React.MouseEvent) => void;
}

const RowBox: FC<CustomBoxProps> = (props) => {
  const { children, onHandleClick, textAlign, ...rest } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        {...rest}
        sx={{
          position: 'relative',
          textAlign: textAlign
        }}
        onClick={onHandleClick}
      >
        {children}
      </Box>
    </>
  );
};

export default RowBox;
