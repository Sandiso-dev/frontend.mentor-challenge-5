import React,{useState} from 'react'
import img1 from '../assets/images/icon-todo.svg'
import img2 from '../assets/images/icon-calendar.svg'
import img3 from '../assets/images/icon-reminders.svg'
import img4 from '../assets/images/icon-planning.svg'
import arrowDown from '../assets/images/icon-arrow-down.svg'
import arrowUp from '../assets/images/icon-arrow-up.svg'
import openMenu from '../assets/images/icon-menu.svg'
import closeMenu from '../assets/images/icon-close-menu.svg'

const Nav = () => {
    const [drop, setDrop] = useState(false);
    const [dropTwo, setDropTwo] = useState(false);
    const [dropThree, setDropThree] = useState(false);
    const [dropFour, setDropFour] = useState(false);
    const [menu, setMenu] = useState(false);

  return (
    <>

    <div className='nav'>
        <div>
         <h1>snap</h1>
        </div>

        <div className='dropdowns'>
            
           <div className="dropdown">

           <span>Features</span>
            <button onClick={()=> setDrop(!drop)}><img src={arrowDown} alt="" /></button>

            <div className={drop ? 'dropdown-options' : 'active'}>
            <a href="">
                <img src={img1} alt="" />
                Todo list
            </a>
            <a href="">
            <img src={img2} alt="" />
                Calendar
            </a>
            <a href="">
            <img src={img3} alt="" />
                Reminder
            </a>
            <a href="">
            <img src={img4} alt="" />
                PLanning
            </a>
            </div>

           </div>


            <div className="dropdown2">

            <span>Company</span>
            <button onClick={()=> setDropTwo(!dropTwo)}><img src={arrowDown} alt="" /></button>

            <div className={dropTwo ? "dropdown-options2" : 'active2'}>
            <a href="">
                
                History
            </a>
            <a href="">
            
                Our Team
            </a>
            <a href="">
            
                blog
            </a>
            
            </div>

           </div>


        </div>

        <div className="left-side">
        <h4>Careers</h4>
         <h4>About</h4>

        <div className='btn-side'>
            <button className='login'>Login</button>
            <button className='logout'>Register</button>
        </div>
        </div>
    </div>



    
        <div className={menu ? "overlay" : "overlay-active"}></div>
        
        <div className={menu ? "mobile-menu" : "mobile-active"}>

        <button onClick={()=>setMenu(!menu)} className='menu-btn'>
                <img src={! menu ? openMenu : closeMenu} alt="" />
            </button>

        <div className={menu ? 'dropdowns2' : 'dropdowns2-active'}>
            
            <div className="dropdown3">
 
            <span>Features</span>
             <button onClick={()=> setDropThree(!dropThree)}><img src={! dropThree ? arrowDown : arrowUp} alt="" /></button>
 
             <div className={dropThree ? 'dropdown-options3' : 'active3'}>
             <a href="">
                 <img src={img1} alt="" />
                 Todo list
             </a>
             <a href="">
             <img src={img2} alt="" />
                 Calendar
             </a>
             <a href="">
             <img src={img3} alt="" />
                 Reminder
             </a>
             <a href="">
             <img src={img4} alt="" />
                 PLanning
             </a>
             </div>
 
            </div>
 
 
             <div className="dropdown4">
 
             <span>Company</span>
             <button onClick={()=> setDropFour(!dropFour)}><img src={! dropFour ? arrowDown : arrowUp } alt="" /></button>
 
             <div className={dropFour ? "dropdown-options4" : 'active4'}>
             <a href="">
                 
                 History
             </a>
             <a href="">
             
                 Our Team
             </a>
             <a href="">
             
                 blog
             </a>
             
             </div>
 
            </div>
 
 
         </div>
 
         <div className={menu ? "left-side2" : "left-side2-active"}>
         <h4>Careers</h4>
          <h4>About</h4>
 
         <div className='btn-side2'>
             <button className='login2'>Login</button>
             <button className='logout2'>Register</button>
         </div>
         </div>
        </div>

    </>
  )
}

export default Nav