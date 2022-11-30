import React, { useState } from "react";
import { Divider, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Stack } from "@mui/system";
import { TextField } from '@mui/material';
import { deleteApplication, updateApplication } from '../features/SendApplication';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../css/Application.css'

export default function Application() {
    const dispatch = useDispatch();
    const listApplication = useSelector((state) => state.applications.value)
    console.log(listApplication)
    const [newPhone, setNewPhone] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const reversed = [...listApplication].reverse();

    return (
        <div className="all">
            {reversed.map((application) => (
                <Box key={application.id}>
                    <Accordion sx={{ width: 800 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Stack>
                                <Typography sx={{ color: "#FF8787", fontSize: 23, fontWeight: 600 }}>{application.studentname}</Typography>
                                <Typography sx={{ color: '#E97777' }}>{application.typeAppli}</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography >
                                {application.email}
                            </Typography>
                            <Typography >
                                {application.phone}
                            </Typography>
                            <Typography>
                                {application.message}
                            </Typography>

                            <div>
                                <TextField sx={{ marginTop: '20px' }}
                                    variant="filled"
                                    label="email"
                                    name="email"
                                    defaultValue={application.email}
                                    onChange={(e) => { (setNewEmail(e.target.value)) }}
                                />

                                <TextField sx={{ marginTop: '20px', marginLeft: '20px' }}
                                    variant="filled"
                                    label="phone"
                                    name="phone"
                                    defaultValue={application.phone}
                                    onChange={(e) => { (setNewPhone(e.target.value)) }}
                                />
                            </div>

                            <Button
                                onClick={() => { dispatch(updateApplication({ id: application.id, phone: newPhone, email: newEmail })) }}
                                style={{ marginTop: 20, marginRight: 40, color: 'white', backgroundColor: '#FFACC7', fontWeight: '700' }}>
                                <UpgradeIcon sx={{margin: 1 }} />Update
                            </Button>

                            <Button style={{ marginTop: 20, color: 'white', backgroundColor: '#FFACC7', fontWeight: '700' }}
                                onClick={() => { dispatch(deleteApplication({ id: application.id })) }}
                            >
                               <DeleteForeverIcon sx={{margin: 1 }}/> Delete
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                    <Divider sx={{width: 800}}/>
                </Box>
            ))}
        </div>

    )
}