import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './container/Layout';
const RoutesJS = () => {
    return (
        <Routes>
            <Route path='/*' element={<Layout />} />
        </Routes>
    )
}

export default RoutesJS