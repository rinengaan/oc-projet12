import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './Navbar'
import Footer from './Footer'
import Project from '../pages/Project'
import About from '../pages/About'
import Error from '../pages/Error'
import { Contact } from '../pages/Contact'
import '../sass/layouts/main.scss'

function RouterProjet() {
    return (
        <Router>
            <Navbar />
            <div className='wrapper'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/project/:id' element={<Project />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}

export default RouterProjet
