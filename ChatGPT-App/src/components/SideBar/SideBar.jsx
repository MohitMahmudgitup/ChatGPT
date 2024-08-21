import React, { useState } from 'react'
import "./SideBar.css"
import { assets } from '../../assets/assets'


function SideBar() {

    const [satNav,setSatNav] = useState(true)

  return (
    <main className='sideBar' >
        <div className="top">
            <img onClick={()=>setSatNav(p =>!p)} className='nav-icon' src={assets.menu_icon} alt="" srcset="" />
            <div className='new-titel new-titel-active'>
                <img src={assets.plus_icon} alt="" srcset="" />
                {satNav && <p>New Chat</p>}
            </div>
            {satNav && <div className="recent">
                <p>Recent</p>
                <div className='new-ditels new-titel'>
                    <img src={assets.message_icon} alt="" srcset="" />
                    <p>What is React...</p>
                </div>
            </div> 
            }
             
        </div>
        <div className="bottom ">
            <div className='help new-titel'>
                <img src={assets.question_icon} alt="" srcset="" />
                {satNav && <p>Help</p>}
                
            </div>
            <div className='activity new-titel'>
                <img src={assets.history_icon} alt="" srcset="" />
                {satNav && <p>Activity</p>}
                
            </div>
            <div className='setting new-titel'>
                <img src={assets.setting_icon} alt="" srcset="" />
                {satNav && <p>Setting</p>}
                
            </div>
        </div>
    </main>
  )
}

export default SideBar