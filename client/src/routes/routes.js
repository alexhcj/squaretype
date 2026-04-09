import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { ThemeProvider } from '../context/ThemeContext'
import { SidebarModalProvider } from '../context/SidebarModalContext'
import {AdminRoutes} from "../apps/admin/routes/routes";
import {PublicRoutes} from "../apps/public/routes/routes";

export const AppRoutes = () => {
  return (
    <ThemeProvider>
      <SidebarModalProvider>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<PublicRoutes />} />
        </Routes>
      </SidebarModalProvider>
    </ThemeProvider>
  )
}