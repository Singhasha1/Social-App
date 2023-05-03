import React from 'react';
import {Box, Typography} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
   <Box position="fixed" width={300}>
    <Typography variant="h6" fontWeight={400} mb={2}>
    Online Friends
    </Typography>
    <AvatarGroup max={8} >
      <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
      <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
      
    </AvatarGroup>
    <Typography variant="h6" fontWeight={400} mt={2} mb={2}>
      Latest Photos
    </Typography>
    <ImageList cols={3} rowHeight={100} gap={5}>
      <ImageListItem>
        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="breakfast" />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
         alt="burger" />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="camera" />
      </ImageListItem>
    </ImageList>
    <Typography variant="h6" fontWeight={400} mt={2} mb={1}>
      Latest Conversation
    </Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
               
     
    </List>
   </Box>
   </Box> 
  )
}

export default Rightbar