import {
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { FaBars, FaHome } from 'react-icons/fa';
import { RiCloseLargeLine } from 'react-icons/ri';
import { IoDocumentText } from 'react-icons/io5';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack
        direction="row"
        sx={{
          padding: 2,
          justifyContent: 'flex-end',
        }}
      >
        <RiCloseLargeLine onClick={toggleDrawer(false)} />
      </Stack>
      <List>
        <ListItemButton href="/">
          <Box component="span">
            <FaHome /> Home
          </Box>
        </ListItemButton>
        <ListItemButton href="resume">
          <Box component="span">
            <IoDocumentText /> Resume
          </Box>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Container maxWidth="xl">
      <Stack
        component="header"
        direction="row"
        sx={{
          padding: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h5">Resume Builder</Typography>
        </Box>
        <Box>
          <Box sx={{ display: { md: 'none' } }}>
            <FaBars onClick={toggleDrawer(true)} />
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
              {DrawerList}
            </Drawer>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button href="/">Home</Button>
            <Button href="resume">Resume</Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Header;
