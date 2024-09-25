import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TodoContainer from './components/TodoContainer.jsx'
import About from './components/About.jsx'
import TodoForm from './components/TodoForm.jsx'
import TodoShowPage from './components/TodoShowPage.jsx'
import FourOhFourNotFound from './components/FourOhFourNotFound.jsx'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <TodoContainer />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/new-todo',
                element: <TodoForm />
            },
            {
                path: '/todos/:id',
                element: <TodoShowPage />
            },
        ]
    },
    {
        path: '*',
        element: <FourOhFourNotFound />
    }
]

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
