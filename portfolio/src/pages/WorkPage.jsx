import React from 'react'
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
const WorkPage = () => {
    return (
        <Root>
            <Box className='container'>
                <Box className='left'>
                    <Box className='grid-item-left'>
                        <Typography className='incedo'>Incedo</Typography>
                        <Typography className='designation'>Software Engineer</Typography>
                        <Typography className='location'>Pune, Maharashtra, India</Typography>
                    </Box>
                    <Typography className='time-right'>July 2023 - <span>Present</span></Typography>
                </Box>
                <Box className='right'>
                    <Typography className='time-left'>January 2023 - June 2023</Typography>
                    <Box className='grid-item-right'>
                        <Typography className='incedo'>Incedo</Typography>
                        <Typography className='designation'>Software Engineer Intern</Typography>
                        <Typography className='location'>Pune, Maharashtra, India</Typography>
                    </Box>
                </Box>
                <Box className='left'>
                    <Box className='grid-item-left'>
                        <Typography className='smartknower'>SmartKnower</Typography>
                        <Typography className='designation'>Software Developer Intern</Typography>
                        <Typography className='location'>Remote</Typography>
                    </Box>
                    <Typography className='time-right'>May 2022 - June 2022</Typography>
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
    .left{
        display: flex;
        margin: auto;
        margin-left: 200px;
    }
    .right{
        display: flex;
        margin: auto;
        margin-right: 400px;
    }
    .grid-item-left{
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        height: 90px;
        width: 300px;
        margin-left: 200px;
    }
    .grid-item-right{
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        height: 90px;
        width: 300px;
    }
    .incedo{
        color: #FF7426;
        font-weight: bold;
        font-size: 20px;
    }
    .smartknower{
        color: #0066CC;
        font-weight: bold;
        font-size: 20px;
    }
    .time-left{
        font-size: 13px;
        color: white;
        font-weight: bold;
        border-right: 2px solid #d0d7de;
        padding-right: 20px;
        margin: auto 20px;
    }
    .time-right{
        font-size: 13px;
        color: white;
        font-weight: bold;
        border-left: 2px solid #d0d7de;
        padding-left: 20px;
        margin: auto 20px;
    }
    .location:{
        font-size: 15px;
    }
    .designation{
        font-size: 25px;
    }
`

export default WorkPage