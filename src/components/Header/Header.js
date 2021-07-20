import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import  SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import {useDispatch} from "react-redux";
import {logout} from '../../features/userSlice';
import {auth} from "../../firebase";



function Header() {
    const dispatch=useDispatch();

    const logoutofApp=()=>{
         dispatch(logout());
         auth.signOut();
    }
    return (
        <div className="header">

            <div className="header__left">
                <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg" alt="" />
                <div className="header__search">
                    <SearchIcon />

                    <input type="text" placeholder="Search"/>

                </div>


            </div>
            <div className="header__right">

                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationIcon} title="Notifications" />
                <HeaderOption avatar="1" title="me" onClick={logoutofApp} />




            </div>
            
        </div>
    )
}

export default Header
