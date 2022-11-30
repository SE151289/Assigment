import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button, Stack} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import '../css/Form.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';

import { SendApplication } from '../features/SendApplication';
import { useDispatch } from 'react-redux';



export default function Form() {
    const dispatch = useDispatch();
    const listApplication = useSelector((state) => state.applications.value)

    const listOfType =
        [
            'Đơn xin nghỉ học',
            'Đơn xin giấy báo miễn nghĩa vụ quân sự' ,
            'Đơn xin bảo lưu' ,
            'Đơn xin rút học bạ' ,
            'Đơn thẩm định' ,
            'Đơn đăng kí học chậm kì' ,
            'Đơn xin học vượt kì' ,
        ]

    const formik = useFormik({
        initialValues: {
            id: 3,
            studentname: '',
            email: '',
            phone: '',
            typeAppli: '',
            message: '',
            agree: false,
        }, onSubmit: (values) => {
            // alert(JSON.stringify(formik.values))
            alert('Send report success')
        },
        
        validationSchema: Yup.object({
            studentname: Yup.string().required('required!!').min(3, 'at least 3 character').max(20, 'max 20 character'),
            email: Yup.string().required('required!!').email('This Email is invalid !'),
            phone: Yup.number().required('required!!').integer().typeError('Invalid phone!'),
            typeAppli: Yup.string().oneOf([listOfType], "Invalid place! Please try again."),
            message: Yup.string().required('required!!').min(5, 'at least 5 character').max(200, 'max 200 character'),
            agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
        })
    })
    const checkDisabled = (studentname, email, phone, typeAppli, messenge, agree) => {
        if (studentname !== '' && email !== '' && phone !== '' && typeAppli!== '' && messenge !== '' && agree) {
            return false;
        } else {
            return true;
        }
    }

    
    return (
    
        <div className='all-form'>
            <div className='contact-left' >
                <div className='contact-address' >
                    <span> Address: </span>
                    <p>Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh</p>
                </div>
                <div className='contact-phone'>
                    <span>  Phone: </span>
                    <p>028 7300 1866</p>
                </div>
                <div className='contact-email'>
                    <span> Email: </span>
                    <p>daihocfpt@fpt.edu.vn</p>
                </div>
            </div>
            <div className='form-right'>
                <form onSubmit={formik.handleSubmit}>
                    <h2 className='Heading'> Send your application to us</h2>
                    <Stack>
                    <Box ccomponent="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}>
                        <TextField style={{width: 400}} className='form-input' name='studentname' label="Studentname" onChange={formik.handleChange} onBlur={formik.handleBlur} variant="standard" />
                        {formik.errors.studentname && formik.touched.studentname && (
                            <p className='contact-error'>{formik.errors.studentname}</p>
                        )}<br/>
                        <TextField style={{width: 400}} className='form-input'
                            name='email' label="Email"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} variant="standard" />
                        {formik.errors.email && formik.touched.email && (
                            <p className='contact-error'>{formik.errors.email}</p>
                        )}<br/>
                        <TextField style={{width: 400}} className='form-input' name='phone' label="Phone"
                            onChange={formik.handleChange} onBlur={formik.handleBlur} variant="standard" />
                        {formik.errors.phone && formik.touched.phone && (
                            <p className='contact-error'>{formik.errors.phone}</p>
                        )}<br/>

                        <Select
                            
                            style={{width: 400}}
                            multiple={false}
                            placeholder="type application"
                            label="Choose type application"
                            name="typeAppli"
                            value={formik.values.typeAppli}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        >
                            <MenuItem
                                disabled
                                value='0'
                            >
                                Please select
                            </MenuItem>
                            {listOfType.map(typeAppli =>
                                <MenuItem value={typeAppli} >{typeAppli}</MenuItem>
                            )}
                        </Select>
                        {formik.errors.typeAppli && (
                            <p className='contact-error'>{formik.errors.typeAppli}</p>
                        )}<br/>

                        <TextareaAutosize
                            name='message'
                            className='mess'
                            aria-label="empty textarea"
                            placeholder="text"
                            style={{ width: 400, height: 200 }}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.message && formik.touched.message && (
                            <p className='contact-error'>{formik.errors.message}</p>
                        )}<br/>
                        <div className="agree">
                            <Switch
                                name="agree"
                                onLabel="Agree to terms and conditions"
                                value={formik.values.agree}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.agree && formik.touched.agree && (
                        <p className='contact-error'>{formik.errors.agree}</p>
                    )}
                        </div>
                        <Button sx={{color: "#F6F6C9", backgroundColor: "#FF97C1"}} type='button' className='submit'
                            disabled={checkDisabled(
                                formik.values.studentname,
                                formik.values.email,
                                formik.values.phone,
                                formik.values.typeAppli,
                                formik.values.message,
                                formik.values.agree)}
                            onClick={() => {
                                dispatch(SendApplication({
                                    id: listApplication.length,
                                    studentname: formik.values.studentname,
                                    email: formik.values.email,
                                    phone: formik.values.phone,
                                    typeAppli: formik.values.typeAppli,
                                    message: formik.values.message,
                                    switch: formik.values.agree,
                                }));
                            }}
                        >
                            <SendIcon sx={{ marginRight: 1 }}/> Send
                        </Button>
                        <Link to='/application' className='contact-link' >
                            <Button type='button' sx={{color: "#F6F6C9", backgroundColor: "#FF97C1"}} className='Button_view'>
                                <VisibilityIcon sx={{ marginRight: 1 }}/> View
                            </Button>
                        </Link>
                    </Box>
                    </Stack>
                </form>
            </div>
        </div>
    )
}