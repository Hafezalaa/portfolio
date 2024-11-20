import { NavLink } from "react-router-dom"
import Alaa from '../../images/Alaa.webp'
const Sidebar = () => {
  return (
    
    <div className="text-black fixed left-0 bottom-0 z-50 h-full w-[120px] bg-stone-400 md:hidden pt-10  ">
        <div><img className="w-[90px] rounded-full ml-4 shadow-xl shadow-stone-900/95" src={Alaa} alt="" /></div>
        <nav>
            <ul className="flex flex-col  mt-10 place-items-center">
                <NavLink className='my-4' to='/' >Home</NavLink>
                <NavLink className='my-4' to='Technologies'>Technologies</NavLink>
                <NavLink className='my-4' to='games'>Games</NavLink>
                <NavLink className='my-4'>4</NavLink>
                <NavLink className='my-4' to="contact" >Contact</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar