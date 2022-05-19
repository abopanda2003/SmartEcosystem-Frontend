import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomCard from 'src/components/Card';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { tooltipImages } from 'src/models/main/achievement/SampleData';

const useStyles = makeStyles({
  cardOutBoxStyle: {
    padding: "20px", 
    height: "100%", 
    alignItems: "flex-start !important",
  },
  cardInnerBoxStyle: {
    paddingRight: "20px", 
    borderRight: "2px solid #323232",
    justifyContent: 'flex-start !important',
  }
})

const NobilityTitle = () => {

  const classes = useStyles();

  return (
    <CustomCard width="100%" height="334px" marginTop="20px">
      <RowBox className={classes.cardOutBoxStyle}>
        <ColumnBox className={classes.cardInnerBoxStyle}>
          <Typography
            textAlign="center"
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#EDEDED',
              lineHeight: '100%'
            }}
          >
            Current title
          </Typography>
          <Box
            component="img"
            src={tooltipImages['prince'].path}
            alt={tooltipImages['prince'].name}
            width="105px"
            height="100px"
            marginTop="20px"
          />
          <Typography
            textAlign="center"
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#E0A501',
              lineHeight: '100%',
              marginTop: '10px'
            }}
          >
            {tooltipImages['prince'].desc}
          </Typography>
        </ColumnBox>

        <Box paddingLeft="20px" width="100%">
          <Typography
            component="div"
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#EDEDED',
              lineHeight: '100%'
            }}
          >
            Privileges
          </Typography>

          <Box display="flex" justifyContent="space-between" marginTop="10px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              position="relative"
              width="110px"
              height="130px"
            >
              <Box
                component="img"
                src={tooltipImages['tree'].path0}
                alt={tooltipImages['tree'].name}
                width="60px"
                height="71px"
              />
              <Box
                component="img"
                src={tooltipImages['tree'].path1}
                alt={tooltipImages['tree'].name}
                width="34px"
                height="34px"
                sx={{
                  position: 'absolute',
                  top: '45px',
                  right: '22px'
                }}
              />
              <Typography
                textAlign="center"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#EDEDED',
                  lineHeight: '100%',
                  marginTop: '5px'
                }}
              >
                {tooltipImages['tree'].desc0}
              </Typography>
              <Typography
                textAlign="center"
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#E0A501',
                  lineHeight: '100%'
                }}
              >
                {tooltipImages['tree'].desc1}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              width="110px"
              height="130px"
            >
              <Box
                component="img"
                src={tooltipImages['share'].path}
                alt={tooltipImages['share'].name}
                width="92px"
                height="74px"
              />
              <Typography
                textAlign="center"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#EDEDED',
                  lineHeight: '100%',
                  marginTop: '5px'
                }}
              >
                {tooltipImages['share'].desc0}
              </Typography>
              <Typography
                textAlign="center"
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#E0A501',
                  lineHeight: '100%'
                }}
              >
                {tooltipImages['share'].desc1}
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            width="110px"
            height="130px"
            margin="10px auto"
          >
            <Box
              component="img"
              src={tooltipImages['reward'].path}
              alt={tooltipImages['reward'].name}
              width="78px"
              height="76px"
            />
            <Typography
              textAlign="center"
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: '#EDEDED',
                lineHeight: '100%',
                marginTop: '5px'
              }}
            >
              {tooltipImages['reward'].desc0}
            </Typography>
            <Typography
              textAlign="center"
              sx={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#E0A501',
                lineHeight: '100%'
              }}
            >
              {tooltipImages['reward'].desc1}
            </Typography>
          </Box>
        </Box>
      </RowBox>
    </CustomCard>
  );
};

export default NobilityTitle;
