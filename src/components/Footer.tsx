import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ padding: 2 }}>
      <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
        © 2024 Asrul Kadir. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
