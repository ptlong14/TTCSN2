import './App.scss'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Categories from './pages/Categories/Categories'
import CourseDetailPage from './pages/CourseDetail/Detail'
import TabPage from './pages/MyCourse/TabPage'
import MyProfile from './components/User/MyProfile'


function App() {

  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
      ],
    },
    {
      path: '/signIn',
      element: <Login />
    },
    {
      path: '/signUp',
      element: <Register />
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/category/:categoryId',
          element: <Categories />
        },
      ]
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/courses/:courseId',
          element: <CourseDetailPage />
        },
      ]
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/my-course/*',
          element: <TabPage />
        },
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/my-profile',
          element:<MyProfile/>
        }

      ]
    }

  ])
  return (
    <>
      {router}
    </>
  )
}

export default App