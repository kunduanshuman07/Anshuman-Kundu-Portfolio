import React from 'react'
import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import HomePage from "../pages/HomePage";
import AboutPage from '../pages/AboutPage';
import WorkPage from '../pages/WorkPage';
import ConnectPage from '../pages/ConnectPage';
import SkillPage from '../pages/SkillPage';
const Layout = () => {
    return (
        <Root>
            <ResponsiveAppBar />
            <main style={{ width: "100%" }}>
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/work' element={<WorkPage />} />
                        <Route path='/skills' element={<SkillPage />} />
                        <Route path='/connect' element={<ConnectPage />} />
                    </Routes>
                </div>
            </main>
        </Root>
    )
}
const Root = styled.div`
background-color: #252A40;
`
export default Layout