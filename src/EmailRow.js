import React from 'react';
import './EmailRow.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {useNavigate} from 'react-router-dom'

const EmailRow = ({ id , title , subject , description , time }) => {

    const history = useNavigate()
    return (
        <div className="emailRow" onClick={() => history("/mail")}>
            <div className="emailRow_options">
            <IconButton>
                <CheckBoxOutlineBlankIcon/>
                </IconButton>
                <IconButton>
                <StarBorderIcon/>
                </IconButton>
                <IconButton>
                <LabelImportantIcon/>
                </IconButton>
            </div>

            <div className="emailRow_title">
            <h3 className="emailRow_title">{title}</h3>
            </div>
            <div className="emailRow_message">
                <h4 className="emailRow_message">{subject} 
                <span className="emailRow_description">{description}

                </span>
                </h4>
            </div>
            <div className="emailRow_time">
            {time}
            </div>
        </div>
    );
};

export default EmailRow;