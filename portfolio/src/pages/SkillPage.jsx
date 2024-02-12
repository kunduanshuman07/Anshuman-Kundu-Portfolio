import React from 'react'
import styled from "styled-components";
import { Box, Rating, Typography } from "@mui/material";
const SkillPage = () => {
    return (
        <Root>
            <Box className='container'>
                <Typography className='cont-header'>Skills</Typography>
                <Box className='act-content'>
                    <Box className='front'>
                        <Typography className='header'>Frontend Development</Typography>
                        <Box className='content'>
                            <Typography className='skill'>HTML</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                        <Box className='content'>
                            <Typography className='skill'>CSS</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                        <Box className='content'>
                            <Typography className='skill'>Javascript</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                        <Box className='content'>
                            <Typography className='skill'>React.js</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                    </Box>
                    <Box className='back'>
                        <Typography className='header'>Backend Development</Typography>
                        <Box className='content'>
                            <Typography className='skill'>Node.js</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                        <Box className='content'>
                            <Typography className='skill'>Express.js</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                        <Box className='content'>
                            <Typography className='skill'>MongoDB</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                        <Box className='content'>
                            <Typography className='skill'>SQL Databases</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                    </Box>
                    <Box className='gen'>
                        <Typography className='header'>General Programming</Typography>
                        <Box className='content'>
                            <Typography className='skill'>C++</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                        <Box className='content'>
                            <Typography className='skill'>Python</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                    </Box>
                    <Box className='other'>
                        <Typography className='header'>Other Techincal Skills</Typography>
                        <Box className='content'>
                            <Typography className='skill'>DSA</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                        <Box className='content'>
                            <Typography className='skill'>Problem Solving</Typography>
                            <Rating readOnly size='small' className='rating' value={5} />
                        </Box>
                    </Box>
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
        cursor: pointer;
        flex-direction: column;
    }
    .cont-header{
        margin: 20px auto 50px auto;
        font-size: 30px;
        color: white;
        font-weight: bold;
    }
    .act-content{
        display: flex;
    }
    .content{
        display: flex;
        padding: 5px;
    }
    .skill{
        color: #252A40;
        font-size: 15px;
        margin-left: 5px;
        margin-top: 5px;
    }
    .front{
        padding: 20px;
        margin: auto 10px;
        background-color: white;
        border-radius: 20px;
    }
    .back{
        padding: 20px;
        margin: auto 10px;
        background-color: white;
        border-radius: 20px;
    }
    .gen{
        padding: 20px;
        margin: auto 10px;
        background-color: white;
        border-radius: 20px;
    }
    .other{
        padding: 20px;
        margin: auto 10px;
        background-color: white;
        border-radius: 20px;
    }
    .rating{
        color: #84228f;
        margin: auto 5px auto auto;
    }
    .header{
        font-size: 20px;
        text-align: center;
        color: #FF7426;
        font-weight: bold;
        padding: 5px 10px 20px 10px;
    }
`

export default SkillPage