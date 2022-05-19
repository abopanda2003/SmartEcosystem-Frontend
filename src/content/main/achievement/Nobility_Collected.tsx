import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomTitle from 'src/components/Title/BadgeTitle';
import CustomCard from 'src/components/Card';
import CustomTooltip from 'src/components/Tooltip';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import { collectionGroup } from 'src/models/main/achievement/SampleData';
import { CollectedStyle } from 'src/models/main/achievement/CustomStyle';


const NobilityCollected = () => {

  const classes = CollectedStyle();

  return (
    <ColumnBox>
      {collectionGroup.map((rows, idx) => {
        return (
          <RowBox key={idx} className={classes.innerBoxStyle}>
            {rows.map((row, index) => {
              return (
                <ColumnBox key={index} className={classes.mainBoxStyle}>
                  <Box className={classes.mainInnerBoxStyle}>
                    <CustomCard width="100%" height="100%">
                      <ColumnBox height="100%">
                        <Box
                          component="img"
                          src={row.path1}
                          alt={row.name}
                          className={classes.badgeStyle1}
                        />
                        <Box
                          component="img"
                          src={row.path}
                          alt={row.name}
                          className={classes.badgeStyle}
                        />
                        <Typography variant="h2" className={classes.cardTitle}>
                          {row.name}
                        </Typography>
                      </ColumnBox>
                    </CustomCard>
                  </Box>
                  <RowBox>
                    <CustomTitle
                      width="80%"
                      height="30px"
                      background={
                        row.title === 'Locked' ? '#5A5A5A' : '#E0A501'
                      }
                      color="#212121"
                      boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                      fontSize="14px"
                      fontWeight="600"
                      title={row.title}
                      borderRadius="20px"
                    />
                    <CustomTooltip
                      content={row.tooltip}
                      width="220px"
                      iconHeight="30px"
                      iconWidth="30px"
                    />
                  </RowBox>
                </ColumnBox>
              );
            })}
          </RowBox>
        );
      })}
    </ColumnBox>
  );
};

export default NobilityCollected;
