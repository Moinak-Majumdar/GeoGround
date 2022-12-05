import ArchitectureIcon from '@mui/icons-material/Architecture';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css'


const Navbar = () => {

    const liStyle = 'text-teal-400 hover:text-gray-200 hover:underline font-semibold text-xl';
    return(
    <>
        <nav className='z-10 fixed top-0 left-0 bg-gray-800 h-auto min-w-full shadow-2xl shadow-slate-900'>
            <div className="w-full flex flex-wrap justify-between items-center px-4 md:px-40 py-2">
                <span className="flex items-center">
                    <ArchitectureIcon fontSize='large' className='text-teal-400'/>
                    <h1 className="self-center text-xl font-semibold whitespace-nowrap text-white">
                        <span className='animate-pulse'>Geo</span><span className='text-cyan-400'>Ground</span>
                    </h1>
                </span>
                <div>
                    <ul className='flex items-center'>
                        <li className={liStyle}>
                            <NavLink exact='true' to='/home' className='mx-2 md:mx-5' activeclassname='active' >App</NavLink>
                        </li>
                        <li className={liStyle}>
                            <NavLink exact='true' to='/about' className='mx-2 md:mx-5' activeclassname='active' >About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}

export default Navbar;