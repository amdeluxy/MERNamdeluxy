import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import ProtectedPath from './layouts/ProtectedPath.jsx'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import NewPassword from './pages/NewPassword.jsx'
import ConfirmAccount from './pages/ConfirmAccount.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Services from './pages/Services.jsx'
import Blog from './pages/Blog.jsx'
import BlogArticle from './pages/BlogArticle.jsx'
import Projects from './pages/Projects.jsx'
import NewProject from './pages/NewProject.jsx'
import Project from './pages/Project.jsx'
import EditProject from './pages/EditProject.jsx'


import { AuthProvider } from './context/AuthProvider.jsx'
import { ProjectsProvider } from './context/ProjectsProvider.jsx'


function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <ProjectsProvider>
          
          <Routes>
            <Route path="/" element= {<Layout/>}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blogarticle/:id" element={<BlogArticle />} />
            </Route>
            <Route path="" element={<AuthLayout />}>
              <Route path="login" index element={<Login />}/>
              <Route path="register" element={<Register />} />
              <Route path="forget-password" element={<ForgetPassword />} />
              <Route path="new-password" element={<NewPassword />} />
              <Route path="forget-password/:token" element={<NewPassword />} />
              <Route path="confirmed/:id" element={<ConfirmAccount />} />
            </Route>
            <Route path="/projects" element={<ProtectedPath />}>
              <Route index element={<Projects />} />
              <Route path="create-project" element={<NewProject />} />
              <Route path=":id" element={<Project />} />
              <Route path="edit/:id" element={<EditProject />} />

            </Route>
          </Routes>
          
        </ProjectsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
