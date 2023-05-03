import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InterestsIcon from '@mui/icons-material/Interests';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import  {Mail, Notifications } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

const Icons = styled(Box)(({theme}) =>({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  marginLeft: 0,
  [theme.breakpoints.up("sm")]:{
    display: "flex",
    marginLeft: theme.spacing(63),    
  }
  
}));
const UserBox = styled(Box)(({theme}) =>({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  marginLeft: 30,
  gap: '10px',
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.99),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1.25),
  },
  marginLeft: 50,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(15),
    width: '30%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'gray',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

 function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} mb={7}>
      <AppBar  sx={{ bgcolor: "#19A7CE"}} position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
            SocialApp
          </Typography>
          <InterestsIcon sx={{display:{xs:"block", sm:"none"}}} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color: "#19A7CE"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Icons>
          <Badge badgeContent={4} color="error">
          <Mail/>
          </Badge>
          <Badge badgeContent={2} color="error">
          <Notifications/>
          </Badge>
          <Avatar sx={{width:30, height:30}} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          </Icons>
          <UserBox>
          <Avatar sx={{width:30, height:30}} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Typography>Alex</Typography>  
          </UserBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar