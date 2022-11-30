import React from "react";
import { AppBar, Button, Stack, Typography } from '@mui/material'
import '../css/Navigation.css';
import { Link } from "react-router-dom";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function Navigation() {
    return (
        <div className="Body">
            <AppBar  color="inherit" >
                <Stack>
                <Typography textAlign="center">
                    <Link to='/form'><Button sx={{ marginRight: 12, color: 'brown'}}><FormatAlignJustifyIcon/>Form</Button></Link>
                    <Link to= '/application'><Button sx={{color: 'brown'}}><FormatListBulletedIcon/>Application</Button></Link>
                </Typography>
                        <h3> Welcome to send Application of FPTU </h3>
                </Stack>
            </AppBar>
            
        </div>
    )
}