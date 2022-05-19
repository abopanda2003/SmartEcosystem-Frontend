import { Box, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from 'react-router-dom';

function createData(
  photoUrl,
  nickName,
  totalSale,
  totalProfit,
  teamNumber,
  lastActive
) {
  return { photoUrl, nickName, totalSale, totalProfit, teamNumber, lastActive };
}

const rows = [
  createData(
    '/static/img/wealth_team/general/photo0.svg',
    'Mark77',
    '100,000 BUSD',
    '3,000 BUSD',
    '345',
    '13:30 20/09/2021 (1 day ago)'
  ),
  createData(
    '/static/img/wealth_team/general/photo1.svg',
    'Josh51',
    '100,000 BUSD',
    '3,000 BUSD',
    '345',
    '13:30 20/09/2021 (1 day ago)'
  ),
  createData(
    '/static/img/wealth_team/general/photo2.svg',
    'Eugen333',
    '100,000 BUSD',
    '3,000 BUSD',
    '345',
    '13:30 20/09/2021 (1 day ago)'
  ),
  createData(
    '/static/img/wealth_team/general/photo3.svg',
    'Carlmeyr',
    '100,000 BUSD',
    '3,000 BUSD',
    '345',
    '13:30 20/09/2021 (1 day ago)'
  ),
  createData(
    '/static/img/wealth_team/general/photo4.svg',
    'Korrrraaa',
    '100,000 BUSD',
    '3,000 BUSD',
    '345',
    '13:30 20/09/2021 (1 day ago)'
  ),
  createData(
    '/static/img/wealth_team/general/photo5.svg',
    'Cottoncandy',
    '100,000 BUSD',
    '3,000 BUSD',
    '345',
    '13:30 20/09/2021 (1 day ago)'
  ),
  createData(
    '/static/img/wealth_team/general/photo6.svg',
    'Carole654',
    '100,000 BUSD',
    '3,000 BUSD',
    '345',
    '13:30 20/09/2021 (1 day ago)'
  ),
  createData(
    '/static/img/wealth_team/general/photo7.svg',
    'Thisisanickname',
    '100,000 BUSD',
    '3,000 BUSD',
    '345',
    '13:30 20/09/2021 (1 day ago)'
  )
];

const Root = styled('div')(
  ({ theme }) => `
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
    min-width: 768px;

    @media (max-width: 968px) {
      margin-top: 20px;
    }

    color: #EDEDED;
`
);

const Table = () => {
  const navigate = useNavigate();

  return (
    <Root>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>No</th>
            <th>Photo</th>
            <th>Nickname</th>
            <th>Total Sales Made(in BUSD)</th>
            <th>Total Profit from Direct Sales</th>
            <th>Number of Direct Team Member</th>
            <th>Last Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td
                style={{
                  width: '90px'
                }}
              >
                <Avatar
                  variant="rounded"
                  alt={row.nickName}
                  src={row.photoUrl}
                  sx={{
                    width: '50px',
                    height: '50px',
                    margin: '0 auto'
                  }}
                />
              </td>
              <td>{row.nickName}</td>
              <td
                style={{
                  width: '160px'
                }}
              >
                {row.totalSale}
              </td>
              <td
                style={{
                  width: '160px'
                }}
              >
                {row.totalProfit}
              </td>
              <td
                style={{
                  width: '145px'
                }}
              >
                <Box
                  height={'22px'}
                  width={'60px'}
                  margin={'0 auto'}
                  display={'flex'}
                  alignItems={'center'}
                >
                  <GroupsIcon
                    sx={{
                      width: '22px',
                      height: '22px',
                      color: '#E0A501'
                    }}
                  />
                  <Typography
                    variant="h3"
                    component="span"
                    fontSize={'14px'}
                    color={'#EDEDED'}
                    marginLeft={'10px'}
                  >
                    {row.teamNumber}
                  </Typography>
                </Box>
              </td>
              <td
                style={{
                  width: '170px',
                  padding: '0 20px'
                }}
              >
                {row.lastActive}
              </td>
              <td>
                <Box
                  width={'24px'}
                  height={'24px'}
                  sx={{
                    border: '1px solid #EDEDED',
                    borderRadius: '50%',
                    background: '#EDEDED',
                    color: '#000',
                    cursor: 'pointer'
                  }}
                  margin={'0 auto'}
                  onClick={() => navigate('/wealth/team/direct/detail')}
                >
                  <FormatListBulletedIcon
                    sx={{
                      width: '100%',
                      height: '100%'
                    }}
                  />
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
