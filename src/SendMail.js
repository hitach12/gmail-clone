import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { IconButton } from '@mui/material';

const SendMail = () => {
    const {register , handleSubmit , watch , formState: { errors }} = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                
                <CloseIcon className="sendMail_close"
                onClick={() => dispatch(closeSendMessage())} 
               />
                
                
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder='to' type="text" {...register("to" , { required: true }) }/>
                {errors.to && <p className="sendMail_error"> to is Required!</p>}
                <input  placeholder='Subject' {...register("subject" , { required: true })} />
                {errors.subject && <p className="sendMail_error"> Subject is Required!</p>}
                <input  placeholder="Message..." type="text" className="sendMailMessage" {...register("message", { required: true })}/>
                {errors.message && <p className="sendMail_error"> Message is Required!</p>}
                <div className="sendMail_options">
                    <Button
                    className="sendMail_send"
                    variant='contained'
                    color='primary'
                    type='submit'
                    >Send</Button>
                </div>
            </form>
            
        </div>
    );
};

export default SendMail;