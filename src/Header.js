import React from 'react';
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './firebase';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut = () => {
        auth.signOut()
        dispatch(logout())
    }

    return (
        <div className="header">
            <div className="header_left">
            <IconButton><MenuIcon/></IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="" />
            
            </div>
            <div className="header_middle">
            <SearchIcon/>
            <input placeholder="Search email"  type="text"/>
            <ArrowDropDownIcon className="header_inputCaret"/>
            </div>

            <div className="header_right">
            <IconButton>
            <AppsIcon/>
            </IconButton>
            <IconButton>
            <NotificationsIcon/>
            </IconButton>
            <IconButton onClick={signOut}>
            <Avatar src={user.photoUrl}/>
            </IconButton>
            </div>
        </div>
    );
};

export default Header;