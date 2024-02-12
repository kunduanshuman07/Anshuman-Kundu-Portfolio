import React from 'react'
import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import HomePage from "../pages/HomePage";
import AboutPage from '../pages/AboutPage';
const Layout = () => {
    return (
        <Root>
            <ResponsiveAppBar />
            <main style={{ width: "100%" }}>
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
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