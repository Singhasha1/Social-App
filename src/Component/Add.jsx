import React, { useState} from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Fab, Box,Typography, Stack} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DateRangeIcon from '@mui/icons-material/DateRange';

const MyModal = styled(Modal)({
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
})

const MyBox = styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:"10px",
})

function Add() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={e=>setOpen(true)}
    title="Add Post" 
    sx={{
        position:"fixed",
        bottom:20,
        width:40,
         height:40,
        left:{xs:"calc(50% -25px)", md:30},
    }}
    >
    <Fab color="primary"  aria-label="add">
        <AddIcon  />
      </Fab> 
    </Tooltip>
    <MyModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={300} bgcolor={"background.default"}  color={"text.primary"} p={3} borderRadius={5}> 
         <Typography variant ="h6" color = "gray" textAlign = "center" >
          Create Post
         </Typography>
         <MyBox>
         <Avatar sx={{width:30, height:30}} 
         alt="Asha" 
         src="/static/images/avatar/2.jpg" />
        <Typography variant='span' fontWeight={500}>Alice</Typography>
         </MyBox>
         <TextField 
         sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What is On Your Mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <SentimentSatisfiedAltIcon
          color="primary"
          />
        <AddAPhotoIcon
        color="seceondry"
        />
      <VideoCameraFrontIcon
      color="success"
      />
      <PersonAddIcon
      color="error"
      />
        </Stack>
      <ButtonGroup variant="contained" fullWidth aria-label="outlined primary button group">
      <Button>Post</Button>
      <Button sx={{width:"100px"}}>
        <DateRangeIcon/>
      </Button>
    </ButtonGroup>
          </Box>
        </MyModal>.
          
    </>
  )
}

export default Add