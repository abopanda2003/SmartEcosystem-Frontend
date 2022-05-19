import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Box, Typography } from '@mui/material';
import { useTheme, Theme } from '@mui/material';
import Hero from './Hero';
import RowBox from 'src/components/Box/RowBox';
import ColumnBox from 'src/components/Box/ColumnBox';
import CustomButton from 'src/components/Button';
import CustomTooltip from 'src/components/Tooltip';
import { rewardList } from 'src/models/SampleData';
import { IndexStyles } from 'src/models/main/reward/CustomStyle';
import { StyledBadge } from 'src/models/main/reward/StyledStyle';
import { COLOR_LIST } from 'src/models/main/reward/SampleData';


const Reward = () => {
  
  const theme: Theme = useTheme();
  const classes = IndexStyles(theme);
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Main | Rewards</title>
      </Helmet>
      <Hero />
      <Container maxWidth="xl" className={classes.customPadding}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <Box className={classes.customOutBoxStyle}>
              {rewardList.map((rows, idx) => {
                return (
                  <ColumnBox key={idx} maxWidth="240px">
                    {
                      rows.map((row, index) => {
                        return (
                          <ColumnBox key={index} marginBottom="50px">
                            <RowBox
                              justifyContent="center"
                              textAlign="center"
                              marginBottom="20px"
                            >
                              <Typography
                                variant="h2"
                                className={classes.boxHeadingStyle}
                              >
                                {row.title}
                              </Typography>
                              <CustomTooltip
                                content={row.tooltip}
                                iconWidth="16px"
                                iconHeight="16px"
                                height="86px"
                                width="250px"
                              />
                            </RowBox>
                            {row.title === 'Golden Tree Phases Rewards' ? (
                              <Box className={classes.treePhaseStyle}>
                                <Box
                                  component="img"
                                  src={row.path}
                                  alt={row.title}
                                  className={classes.treePhaseImageStyle}
                                />
                              </Box>
                            ) : (
                              <Box
                                component="img"
                                src={row.path}
                                alt={row.title}
                              />
                            )}

                            {row.badge === 'none' ? (
                              ''
                            ) : (
                              <StyledBadge badgeContent={row.badge} />
                            )}

                            <Typography
                              variant="h4"
                              margin="20px 0"
                              fontWeight="400"
                            >
                              {row.content}
                            </Typography>

                            <CustomButton
                              width="160px"
                              height="30px"
                              background={COLOR_LIST[row.buttonName].background}
                              color={theme.colors.black.main}
                              fontSize="14px"
                              fontWeight="600"
                              borderRadius="20px"
                              boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -3px 4px rgba(0, 0, 0, 0.25)"
                              onHandleClick={() => navigate(`${row.url}`)}
                            >
                              {row.buttonName}
                            </CustomButton>
                          </ColumnBox>
                        );
                      })
                    }
                  </ColumnBox>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Reward;
