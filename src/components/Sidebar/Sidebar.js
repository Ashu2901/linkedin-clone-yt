import React from 'react'
import "./Sidebar.css"
import {Avatar} from '@material-ui/core';
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            <p>{topic}</p>

        </div>
    )

    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img  src="https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg" alt="" />
                <Avatar className="sidebar__avatar" src={user?.photoURL}>{user?.email[0]}</Avatar>
                <h2>{user?.name}</h2>
                <h4>{user?.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>

                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                    <p className="sidebar__statNumber">2,543</p>


                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("Design")}
                {recentItem("Engineering")}
                {recentItem("Programming")}
                {recentItem("Software")}


            </div>

            
        </div>
    )
}

export default Sidebar
