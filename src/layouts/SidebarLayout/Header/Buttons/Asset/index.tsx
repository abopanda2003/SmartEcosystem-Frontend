import { Box, Avatar, Popover, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import CustomCard from 'src/components/Card';
import ColumnBox from 'src/components/Box/ColumnBox';
import RowBox from 'src/components/Box/RowBox';

const assetButton = {
  name: 'asset',
  avatar: '/static/img/header/asset.svg',
  desc: 'assetIconButton'
};

const keyIcon = {
  name: 'keyIcon',
  path: '/static/img/header/key.svg',
  desc: 'LP Token Key Icon'
};

const HeaderNotifications = () => {
  const ref = useRef<any>(null);

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Avatar
        variant="rounded"
        alt={assetButton.name}
        src={assetButton.avatar}
        sx={{ width: '24px', height: '23.61px', cursor: 'pointer' }}
        ref={ref}
        onClick={handleOpen}
      />
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        PaperProps={{
          style: {
            background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
            borderRadius: '20px',
            marginTop: '10px'
          }
        }}
      >
        <ColumnBox padding="20px">
          <Typography
            fontSize="24px"
            height="29px"
            color="#E0A501"
            fontWeight="700"
          >
            Asset
          </Typography>
          <ColumnBox marginTop="20px">
            <CustomCard
              height={'130px'}
              width={'280px'}
              background={'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)'}
              border={'none'}
            >
              <ColumnBox padding="10px">
                <Typography height="17px" color="#EDEDED" fontSize="14px">
                  SMT Balance
                </Typography>
                <Typography
                  height="59px"
                  color="#E0A501"
                  fontSize="48px"
                  fontWeight="700"
                >
                  1,000
                </Typography>
                <Typography
                  height="17px"
                  color="#E0A501"
                  fontSize="14px"
                  fontWeight="700"
                >
                  SMT
                </Typography>
              </ColumnBox>
            </CustomCard>

            <CustomCard
              height={'130px'}
              width={'280px'}
              background={'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)'}
              border={'none'}
              marginTop="10px"
            >
              <ColumnBox padding="10px">
                <Typography height="17px" color="#EDEDED" fontSize="14px">
                  SMT Balance
                </Typography>
                <Typography
                  height="59px"
                  color="#E0A501"
                  fontSize="48px"
                  fontWeight="700"
                >
                  10
                </Typography>
                <Typography
                  height="17px"
                  color="#E0A501"
                  fontSize="14px"
                  fontWeight="700"
                >
                  SMTC
                </Typography>
              </ColumnBox>
            </CustomCard>

            <CustomCard
              height={'150px'}
              width={'280px'}
              background={'linear-gradient(180deg, #5A5A5A 0%, #212121 100%)'}
              border={'none'}
              marginTop="10px"
            >
              <ColumnBox padding="10px">
                <RowBox justifyContent="center">
                  <Typography height="17px" color="#EDEDED" fontSize="14px">
                    LP Token
                  </Typography>
                  <Box
                    component="img"
                    src={keyIcon.path}
                    alt={keyIcon.name}
                    marginLeft="10px"
                  />
                </RowBox>
                <Typography
                  height="59px"
                  color="#E0A501"
                  fontSize="48px"
                  fontWeight="700"
                >
                  13.5
                </Typography>
                <Typography
                  height="17px"
                  color="#E0A501"
                  fontSize="14px"
                  fontWeight="700"
                >
                  SMT - BNB LP
                </Typography>
                <Typography
                  height="29px"
                  color="#E0A501"
                  fontSize="24px"
                  fontWeight="700"
                >
                  ($ 300)
                </Typography>
              </ColumnBox>
            </CustomCard>
          </ColumnBox>
        </ColumnBox>
      </Popover>
    </>
  );
};

export default HeaderNotifications;
