import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import ProtectedPath from './layouts/ProtectedPath'

import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import NewPassword from './pages/NewPassword'
import ConfirmAccount from './pages/ConfirmAccount'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import Projects from './pages/Projects'

import { AuthProvider } from './context/AuthProvider'


function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element= {<Layout/>}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blogarticle" element={<BlogArticle />} />
          </Route>
          <Route path="" element={<AuthLayout />}>
            <Route path="login" index element={<Login />}/>
            <Route path="register" element={<Register />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="new-password" element={<NewPassword />} />
            <Route path="forget-password/:token" element={<NewPassword />} />
            <Route path="confirmed/:id" element={<ConfirmAccount />} />
          </Route>
          <Route path="/projets=" element={<ProtectedPath />}>
             <Route index element={<Projects />} />

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
