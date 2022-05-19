import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface CustomBoxProps {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  padding?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingRight?: string;
  paddingLeft?: string;
  className?: string;
  maxWidth?: string;
  textAlign?: string;
}

const ColumnBox: FC<CustomBoxProps> = (props) => {
  const { children, textAlign, ...rest } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        {...textAlign}
        {...rest}
        sx={{
          position: 'relative'
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default ColumnBox;
