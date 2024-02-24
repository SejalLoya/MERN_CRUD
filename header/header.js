import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          <Link to="/" style={{color:'white',textDecoration:'none'}}>CRUD Application</Link>
          </Typography>
          <Button><Link to="/" style={{color:'white',textDecoration:'none'}}>Dashboard</Link></Button>
          <Button color="inherit"><Link to="/user" style={{color:'white',textDecoration:'none'}}>Post User</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
