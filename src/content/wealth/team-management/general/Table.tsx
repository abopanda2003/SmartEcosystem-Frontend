import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  regiDateStyle: {
    color: '#EDEDED',
    padding: '0 47px',
    width: '180px',
    margin: '0 auto',
    '@media (max-width: 968px)': {
      width: 'auto',
      padding: '0'
    }
  },

  // CUSTOM NOBILITY STYLE
  customNobilityStyle: {
    '@media (min-width: 968px)': {
      height: '46px',
      width: '150px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center'
    },
    alignItems: 'center',
    margin: '0 auto',
    display: 'flex'
  },
  // CUSTOM NOBILITY IMAGE STYLE
  customNobilityImageStyle: {
    '@media (max-width: 968px)': {
      width: '30px',
      height: '30px'
    }
  },
  // CUSTOM NOBILITY TITLE STYLE
  customNobilityTitleStyle: {
    '@media (max-width: 968px)': {
      fontSize: '12px !important'
    },
    marginLeft: '17px !important'
  },

  // CUSTOM ACTION STYLE
  customActionStyle: {
    '@media (min-width: 968px)': {
      display: 'flex',
      width: '66px',
      margin: '0 auto',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    display: 'flex',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // CUSTOM ACTION BUTTON STYLE
  customActionButtonStyle: {
    '@media (max-width: 968px)': {
      width: '20px',
      height: '20px',
      border: '1px solid #EDEDED',
      borderRadius: '50%',
      background: '#EDEDED',
      color: '#000',
      cursor: 'pointer'
    },
    width: '28px',
    height: '28px',
    border: '1px solid #EDEDED',
    borderRadius: '50%',
    background: '#EDEDED',
    color: '#000',
    cursor: 'pointer'
  },

  // CUSTOM AVATAR STYLE
  customAvatarStyle: {
    '@media (max-width: 968px)': {
      width: '30px !important',
      height: '30px !important',
      margin: '0 auto'
    },
    width: '50px',
    height: '50px',
    margin: '0 auto'
  }
}));

function createData(photoUrl, nickName, nobility, status, regiDate) {
  return { photoUrl, nickName, nobility, status, regiDate };
}

const rows = [
  createData(
    '/static/img/wealth_team/general/photo0.svg',
    'Mark77',
    'Prince',
    'Active',
    '21:42 EST 16 Aug 2021'
  ),
  createData(
    '/static/img/wealth_team/general/photo1.svg',
    'Josh51',
    'Baron',
    'Passive',
    '21:42 EST 16 Aug 2021'
  ),
  createData(
    '/static/img/wealth_team/general/photo2.svg',
    'Eugen333',
    'Folks',
    'Dead',
    '21:42 EST 16 Aug 2021'
  ),
  createData(
    '/static/img/wealth_team/general/photo3.svg',
    'Carlmeyr',
    'Baron',
    'Outperform',
    '21:42 EST 16 Aug 2021'
  ),
  createData(
    '/static/img/wealth_team/general/photo4.svg',
    'Korrrraaa',
    'Count',
    'Dead',
    '21:42 EST 16 Aug 2021'
  ),
  createData(
    '/static/img/wealth_team/general/photo5.svg',
    'Cottoncandy',
    'Viscount',
    'Passive',
    '21:42 EST 16 Aug 2021'
  ),
  createData(
    '/static/img/wealth_team/general/photo6.svg',
    'Carole654',
    'Earl',
    'Outperform',
    '21:42 EST 16 Aug 2021'
  ),
  createData(
    '/static/img/wealth_team/general/photo7.svg',
    'Thisisanickname',
    'Duke',
    'Active',
    '21:42 EST 16 Aug 2021'
  )
];

const Root = styled('div')(
  ({ theme }) => `
    @media (max-width: 968px) {
      table {
        font-size: 8px;
        font-weight: 600;
        border-collapse: collapse;
        width: 100%;
        border-radius: 10px;
        border-style: hidden;
      }
      td,
      th {
          border: 3px solid #323232;
          text-align: center;
      }
      th {
          color: #E0A501;
      }
      border-radius: 10px;
      border: 2px solid #323232;
      margin-top: 20px;
      width: 100%;
    }

    @media (min-width: 968px) {
      table {
        font-size: 14px;
        font-weight: 600;
        border-collapse: collapse;
        width: 100%;
        border-radius: 10px;
        border-style: hidden;
      }
      td,
      th {
          border: 3px solid #323232;
          text-align: center;
          padding: 5px;
      }
      th {
          color: #E0A501;
      }
      border-radius: 10px;
      border: 2px solid #323232;
      margin-top: 8px;
      width: 100%;
    }

    color: #EDEDED;
`
);

const Table = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <Root>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>No</th>
            <th>Photo</th>
            <th>Nickname</th>
            <th>Nobility</th>
            <th>Status</th>
            <th>Registration date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>
                <Box
                  component="img"
                  alt={row.nickName}
                  src={row.photoUrl}
                  className={classes.customAvatarStyle}
                />
              </td>
              <td>{row.nickName}</td>
              <td>
                <Box className={classes.customNobilityStyle}>
                  <Box
                    component="img"
                    alt={row.nobility}
                    src={
                      '/static/img/wealth_team/general/' + row.nobility + '.svg'
                    }
                    className={classes.customNobilityImageStyle}
                  />
                  <Typography
                    variant="h4"
                    component="span"
                    className={classes.customNobilityTitleStyle}
                  >
                    {row.nobility}
                  </Typography>
                </Box>
              </td>
              <td>
                <Box>{row.status}</Box>
              </td>
              <td>
                <Box className={classes.regiDateStyle}>{row.regiDate}</Box>
              </td>
              <td>
                <Box className={classes.customActionStyle}>
                  <Box
                    className={classes.customActionButtonStyle}
                    onClick={() => navigate('/wealth/team/general/detail')}
                  >
                    <GroupsIcon
                      sx={{
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </Box>
                  <Box
                    className={classes.customActionButtonStyle}
                    onClick={() => navigate('/wealth/team/general/member')}
                  >
                    <VisibilityIcon
                      sx={{
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </Box>
                </Box>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Root>
  );
};

export default Table;
