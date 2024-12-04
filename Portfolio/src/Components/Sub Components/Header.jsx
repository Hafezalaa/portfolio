import { NavLink } from "react-router-dom"
import Alaa from '../../images/Alaa.webp'
const Header = () => {
   
  return (
    <div className="text-black hidden md:flex place-content-between place-items-center pl-10 pr-16 bg-stone-400 h-[120px] fixed top-0 left-0 right-0 ">
        <div><img className="w-[100px] rounded-full shadow-xl shadow-stone-900/95" src={Alaa} alt="" /></div>
        <nav className="w-[60%]">
            <ul className="flex place-content-between">
                <NavLink className=""  to='/'>Home</NavLink>
                <NavLink className="" to='Technologies'>Technologies</NavLink>
                {/* <NavLink className="" to='games'>Games</NavLink> */}
                {/* <NavLink className="" >About</NavLink> */}
                {/* <NavLink className=""  to="contact">Contact</NavLink> */}
            </ul>
        </nav>
    </div>
   
  )
}

export default Header