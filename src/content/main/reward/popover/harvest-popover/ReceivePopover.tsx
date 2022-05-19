import React from 'react';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from 'src/components/Button';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';
import { ReceivePopoverStyle } from 'src/models/main/reward/CustomStyle';

interface ParentProps {
  onHandleHarvestClose: (e: React.MouseEvent) => void;
  onHandleHarvestNext: (e: React.MouseEvent, value: string) => void;
}

const ReceivePopover: React.FC<ParentProps> = (props) => {
  const theme: Theme = useTheme();
  const classes = ReceivePopoverStyle(theme);

  return (
    <>
      <Box className={classes.outBoxStyle}>
        <CloseIcon
          onClick={props.onHandleHarvestClose}
          className={classes.closeIconStyle}
        />
        <Typography variant="h2" className={classes.headingTitle}>
          Enjoy your rewards!
        </Typography>
        <Divider
          sx={{
            border: '2px solid #323232'
          }}
        />
        <ColumnBox className={classes.innerBoxStyle}>
          <ColumnBox className={classes.innerBoxStyle1}>
            <Typography variant="h2" className={classes.contentHeadingTitle}>
              You will receive
            </Typography>
            <Typography className={classes.contentMiddleTitleStyle}>
              990 SMT
            </Typography>
            <Typography
              variant="h3"
              className={classes.contentBottomTitleStyle}
            >
              This amount of rewards will be deducted from your reward
              accumulation. Are you sure to continue?
            </Typography>
          </ColumnBox>
          <Hidden mdDown>
            <RowBox marginTop="72px">
              <CustomButton
                width="240px"
                height="50px"
                background="#E0A501"
                color="#212121"
                fontSize="22px"
                fontWeight="600"
                boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                borderRadius="35px"
                onHandleClick={(e) => props.onHandleHarvestNext(e, 'sure')}
              >
                Yes
              </CustomButton>
              <CustomButton
                width="240px"
                height="50px"
                background="#936900"
                color="#FFFFFF"
                fontSize="22px"
                fontWeight="600"
                boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                borderRadius="35px"
                onHandleClick={props.onHandleHarvestClose}
              >
                No
              </CustomButton>
            </RowBox>
          </Hidden>
          <Hidden mdUp>
            <RowBox justifyContent="space-around" marginTop="45px">
              <CustomButton
                width="150px"
                height="30px"
                background="#E0A501"
                color="#212121"
                fontSize="13px"
                fontWeight="600"
                boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                borderRadius="35px"
                onHandleClick={(e) => props.onHandleHarvestNext(e, 'sure')}
              >
                Yes
              </CustomButton>
              <CustomButton
                width="150px"
                height="30px"
                background="#936900"
                color="#FFFFFF"
                fontSize="13px"
                fontWeight="600"
                boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                borderRadius="35px"
                onHandleClick={props.onHandleHarvestClose}
              >
                No
              </CustomButton>
            </RowBox>
          </Hidden>
        </ColumnBox>
      </Box>
    </>
  );
};

export default ReceivePopover;
