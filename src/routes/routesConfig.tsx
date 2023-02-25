import  { Home } from '../pages/Home' 
import { Store } from '../pages/Store'
import { About } from '../pages/About'

const routesConfig = [
    {   path: '/',
        element: <Home/>
    },
    {   path: '/store',
        element: <Store/>
    },  
    {   path: '/about',
        element: <About/>
    }
]

export default routesConfig