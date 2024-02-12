import { Avatar, Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import AvatarImg from "../assets/Avatar.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
const HomePage = () => {
  return (
    <Root>
      <Box className='container'>
        <Box className='left'>
          <Typography className='hi'>Anshuman Kundu</Typography>
          <Typography className='prof'>Full stack Software Developer</Typography>
          <Typography className='prof'>Current Employer <span className='employer'>Incedo</span></Typography>
          <Typography className='prof'>1+ years of experience</Typography>
        </Box>
        <Box className='right'>
          <Avatar src={AvatarImg} className='avatar' />
          <Box className='social-links'>
            <IconButton className='links'>
              <GitHubIcon className='link-btn' />
            </IconButton>
            <IconButton className='links'>
              <LinkedInIcon className='link-btn' sx={{color: "#0A66C2"}}/>
            </IconButton>
            <IconButton className='links'>
              <AttachEmailIcon className='link-btn' sx={{color: "red"}}/>
            </IconButton>
            <IconButton className='links'>
              <TwitterIcon className='link-btn' sx={{color: "#0066CC"}}/>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Root>
  )
}

const Root = styled.div`
.container{
  background-color: #252A40;
  width: 100%;
  height: 490px;
  display: flex;
}
.left{
  width: 60%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  height: 300px;
  margin: auto 0px auto 90px;
}
.right{
  width: 40%;
  margin: 50px auto;
}
.hi{
  font-weight: bold;
  font-size: 50px;
  color: white;
}
.prof{
  border-left: 2px solid #d0d7de;
  padding-left: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: white;
  width: 260px;
}
.employer{
  color: #FF7426;
  font-weight: bold;
  font-size: 20px;
}
.avatar{
  width: 200px;
  height: 200px;
  margin-left: 20px;
}
.social-links{
  display: flex;
  margin-top: 50px;
  margin-left: 5px;
  background-color: white;
  width: 200px;
  padding: 10px 20px;
  border-radius: 20px;
}
.links{
  margin: auto;
}
`

export default HomePage