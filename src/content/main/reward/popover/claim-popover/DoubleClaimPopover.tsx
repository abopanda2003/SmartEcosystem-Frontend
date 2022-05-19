import React, { useState } from 'react';
import { Box, Typography, Divider, Hidden } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomCard from 'src/components/Card';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import RowBox from 'src/components/Box/RowBox';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomButton from 'src/components/Button';
import MultiTabButton from 'src/components/MultiTab';
import { HarvestPopoverStyle } from 'src/models/main/reward/CustomStyle';

interface ParentProps {
  onHandleClaimClose: (e: React.MouseEvent) => void;
  onHandleClaimNext: (e: React.MouseEvent, value: string) => void;
}

const percentValues = ['10%', '25%', '50%', '75%', '100%'];


const DoubleClaimPopover: React.FC<ParentProps> = (props) => {

  const theme: Theme = useTheme();
  const classes = HarvestPopoverStyle(theme);

  const [tabValue, tabSetState] = useState<string>('Claim SMT');
  const handleClickTab = (e: React.MouseEvent, value: string): void => {
    tabSetState(value);
  };

  return (
    <>
      <Box className={classes.outBoxStyle}>
        <CloseIcon
          onClick={props.onHandleClaimClose}
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
        <Box className={classes.innerBoxStyle}>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              height: '32px',
              background: '#695400',
              borderRadius: '10px',
              textAlign: 'center',
              width: 'fit-content',
              margin: '0 auto'
            }}
          >
            <MultiTabButton
              titles='Claim SMT, Claim SMTC'
              currentValue={tabValue}
              onHandleClick={handleClickTab}
            />
          </Box>
          <Typography variant="h2" marginTop="20px" className={classes.contentHeadingTitle}>
            How much do you want to claim?
          </Typography>
          <RowBox marginTop="20px">
            <Box className={classes.cardBoxStyle}>
              <CustomCard
                width='100%'
                height='100%'
                background={theme.colors.gradients.grey}
                border='none'
              >
                <Box className={classes.cardInnerBoxStyle}>
                  <Typography variant="h4" className={classes.cardHeadingStyle}>
                    Claimable amount
                  </Typography>
                  <Typography className={classes.cardContentTitleStyle}>
                    990
                  </Typography>
                  <Typography
                    variant="h4"
                    color="#E0A501"
                    fontWeight="700"
                    className={classes.cardHeadingStyle}
                  >
                    {
                      tabValue === 'Claim SMT' ?
                        'SMT' :
                        'SMTC'
                    }
                  </Typography>
                </Box>
              </CustomCard>
            </Box>
            <Box width="57%" display="flex" flexDirection="column">
              <FormControl
                variant="outlined"
                className={classes.searchCustomStyle}
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder="990"
                  className={classes.innerInputStyle}
                />
                <Typography
                  variant="h3"
                  className={classes.innerInputTitleStyle}
                >
                  {
                    tabValue === 'Claim SMT' ?
                      'SMT' :
                      'SMTC'
                  }
                </Typography>
              </FormControl>
              <Hidden mdDown>
                <RowBox marginTop="10px">
                  {percentValues.map((con, idx) => {
                    return (
                      <CustomTitle
                        key={idx}
                        title={con}
                        background="#5A5A5A"
                        borderRadius="20px"
                        padding="8px 12px"
                        color="#EDEDED"
                        fontSize="14px"
                      />
                    );
                  })}
                </RowBox>
              </Hidden>
              <Hidden mdUp>
                <RowBox marginTop="10px">
                  {percentValues.map((con, idx) => {
                    return (
                      <CustomTitle
                        key={idx}
                        title={con}
                        background="#5A5A5A"
                        borderRadius="20px"
                        padding="5px"
                        color="#EDEDED"
                        fontSize="8px"
                      />
                    );
                  })}
                </RowBox>
              </Hidden>
            </Box>
          </RowBox>
          <Typography variant="h4" className={classes.noteStyle}>
            *standard BSC fee will be charged
          </Typography>
          <Hidden mdDown>
            <RowBox marginTop="48px" height="50px">
              <CustomButton
                width="240px"
                height="100%"
                background="#E0A501"
                color="#212121"
                fontSize="22px"
                fontWeight="600"
                boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                borderRadius="35px"
                onHandleClick={
                  tabValue === 'Claim SMT'
                    ? (e) => props.onHandleClaimNext(e, 'SMT')
                    : (e) => props.onHandleClaimNext(e, 'SMTC')
                }
              >
                Claim
              </CustomButton>
              <CustomButton
                width="240px"
                height="100%"
                background="#936900"
                color="#FFFFFF"
                fontSize="22px"
                fontWeight="600"
                boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                borderRadius="35px"
                onHandleClick={props.onHandleClaimClose}
              >
                Cancel
              </CustomButton>
            </RowBox>
          </Hidden>
          <Hidden mdUp>
            <RowBox
              justifyContent="space-around"
              marginTop="29px"
              height="30px"
            >
              <CustomButton
                width="150px"
                height="100%"
                background="#E0A501"
                color="#212121"
                fontSize="13px"
                fontWeight="600"
                boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                borderRadius="20px"
                onHandleClick={
                  tabValue === 'Claim SMT'
                    ? (e) => props.onHandleClaimNext(e, 'SMT')
                    : (e) => props.onHandleClaimNext(e, 'SMTC')
                }
              >
                Claim
              </CustomButton>
              <CustomButton
                width="150px"
                height="100%"
                background="#936900"
                color="#FFFFFF"
                fontSize="13px"
                fontWeight="600"
                boxShadow="21px 21px 10px rgba(0, 0, 0, 0.5)"
                borderRadius="20px"
                onHandleClick={props.onHandleClaimClose}
              >
                Cancel
              </CustomButton>
            </RowBox>
          </Hidden>

        </Box>
      </Box>
    </>
  );
};

export default DoubleClaimPopover;
