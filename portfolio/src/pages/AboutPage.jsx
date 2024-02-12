import React from 'react'
import styled from "styled-components";
import { Box, IconButton, Typography } from "@mui/material";
import TechDescImg from "../assets/TechDesc.jpg";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const AboutPage = () => {
    return (
        <Root>
            <Box className='container'>
                <Box className='left'>
                    <Typography className='desc'>
                        👋 Hey there! I'm Anshuman Kundu, a passionate Full Stack Developer with a knack for crafting immersive web experiences. With a solid foundation in Computer Science from NIT Bhopal, where I graduated in [Year], I've been delving into the world of technology since the moment I stepped into the classroom.

                        During my time at NIT Bhopal, I honed my skills in software development, learning the ins and outs of algorithms, data structures, and the latest programming languages. Armed with this knowledge, I embarked on a journey to explore the vast landscape of web development.

                        Fast forward to today, and I've had the privilege of building and contributing to numerous MERN stack websites, leveraging the power of MongoDB, Express.js, React, and Node.js. With each project, I strive not only to deliver functionality but also to create seamless, intuitive user experiences that leave a lasting impression.

                        Whether it's architecting databases, crafting responsive front-end interfaces, or optimizing server performance, I thrive on the challenges that come with building full-stack applications. My passion for technology drives me to stay up-to-date with the latest trends and best practices, ensuring that my work remains at the forefront of innovation.

                        Beyond coding, I'm a firm believer in the importance of collaboration and continuous learning. I thrive in dynamic team environments, where brainstorming ideas and tackling problems together lead to groundbreaking solutions.

                        When I'm not busy typing away at my keyboard, you can find me exploring new hiking trails, experimenting with new recipes in the kitchen, or diving into a good book.

                        Thanks for stopping by, and feel free to reach out if you'd like to chat about all things tech or collaborate on an exciting project!
                    </Typography>
                </Box>
                <Box className='right'>
                    <IconButton className='icon'>
                        <KeyboardBackspaceIcon className='btn'/>
                    </IconButton>
                    <Typography className='about'>About me</Typography>
                    <img src={TechDescImg} alt='Description' className='tech-img'/>
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
    }
    .left{
        width: 50%;
        color: white;
        padding: 10px;
        cursor: pointer;
        margin: auto;
    }
    .right{
        width: 30%;
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-left: 10px;
    }
    .tech-img{
        width: 300px;
        height: 300px;
        border-radius: 150px;
        margin: 0px auto;
    }
    .desc{
        font-size: 12px;
        text-align: center;
        margin: 40px auto;
    }
    .about{
        color: white;
        text-align: center;
        border-radius: 20px;
        font-size: 40px;
        font-weight: bold;
        margin-top: -20px;
    }
    .icon{

    }
    .btn{
        font-size: 80px;
        color: #FF7426;
    }
`

export default AboutPage