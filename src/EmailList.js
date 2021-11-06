import React from 'react';
import './EmailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';



const EmailList = () => {
    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <IconButton>
                        <CheckBoxOutlineBlankIcon/>
                    </IconButton>
                    <IconButton>
                    <ArrowDropDownIcon/>   
                    </IconButton>
                    <IconButton>
                    <RedoIcon/>   
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>   
                    </IconButton>
                </div>
                <div className="emailList_settingsRight">
                <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                    <ChevronRightIcon/>   
                    </IconButton>
                    <IconButton>
                    <KeyboardHideIcon/>   
                    </IconButton>
                    <IconButton>
                    <SettingsIcon/>   
                    </IconButton>
                </div>
                
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title= "Primary" color="red" selected/>
                <Section Icon={PeopleIcon} title= "Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title= "Promotions" color="green" />
                </div>
            <div className="emailList_List">
            <EmailRow title="Medfadel" subject="lorem ipsum" description="this is a test" time="10pm"/>
            <EmailRow title="Medfadel" subject="lorem ipsum" description="this is a test" time="10pm"/>
            <EmailRow title="Medfadel" subject="lorem ipsum" description="this is a test" time="10pm"/>
            <EmailRow title="Medfadel" subject="lorem ipsum" description="this is a test" time="10pm"/>

            </div>
        </div>
    );
};

export default EmailList;