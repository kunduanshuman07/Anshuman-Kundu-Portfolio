import React from 'react'
import styled from "styled-components";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
const ConnectPage = () => {
    return (
        <Root>
            <Box className='container'>
                <Typography className='header'>Contact me</Typography>
                <Box className='content'>
                    <InputLabel className='labels' required>Name</InputLabel>
                    <TextField
                        placeholder='Enter your name'
                        size='small'
                    />
                    <InputLabel className='labels' required>Email</InputLabel>
                    <TextField
                        placeholder='Enter your email'
                        size='small'
                    />
                    <InputLabel className='labels' required>Message</InputLabel>
                    <TextField
                        placeholder='Write your message...'
                        size='small'
                        multiline
                    />
                    <Button className='send'>Send</Button>
                </Box>
            </Box>
        </Root>
    )
}

const Root = styled.div`
    .container{
        display: flex;
        padding: 20px;
        height: 450px;
        flex-direction: column;
    }
    .header{
        margin: 10px auto;
        font-size: 25px;
        color: white;
        font-weight: bold;
    }
    .content{
        display: flex;
        flex-direction: column;
        width: 400px;
        margin: 10px auto;
        padding: 20px;
        cursor: pointer;
        background-color: white;
        border-radius: 20px;
    }
    .labels{
        margin: 10px 0px;
        color: #252A40;
        font-weight: bold;
    }
    .send{
        color: #252A40;
        margin-top: 20px;
        font-weight: bold;
        text-transform: none;
    }
`

export default ConnectPage