import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import AdminHospitalService from '../Admin-service/AdminHospitalService';

const ViewHospital = () => {
    const [hospitals, setHospitals] = useState([])
    const [selection, setSelection] = useState('Search Text')
    const [text, setText] = useState('')
    


    useEffect(() => { getAllHospitals(); }, [])

    const getAllHospitals = () => {
        AdminHospitalService.getAllHospitals().then((response) => {
            setHospitals(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
        
    }

    const searchHospitals = () => {
        if (selection == 'Type') {
            AdminHospitalService.searchHospitalByType(text).then((response) => {
                setHospitals(response.data)
                if (response.data.length === 0) {
                    alert("No Hospitals with Type : " + text)
                }
                else {
                    console.log(response.data);
                }
            }).catch(error => {
                alert('Enter Search Hospital Type')
                console.log(error);
            })
        }
        else if (selection == 'Name') {
            AdminHospitalService.searchHospitalByName(text).then((response) => {
                setHospitals(response.data)
                if (response.data.length === 0) {
                    alert("No Hospital with Title : " + text)
                }
                else {
                    console.log(response.data);
                }
            }).catch(error => {
                alert('Enter Search Title')
                console.log(error);
            })
        }
        else {
            alert('Select Search Type')
        }
    }

    const deleteHospital = (id) => {
        AdminHospitalService.deleteHospital(id).then((response) => {
            alert("Hospital Deleted")
            getAllHospitals()
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div><NavBar />
            <div className='container-fluid row p-5 ' style={{ backgroundColor: 'azure' }}>
                <center>
                    <FormControl>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" className='pe-5'>
                            <FormControlLabel value="type" control={<Radio />} label="Hospital Type" onClick={(e) => setSelection('Type')} />
                            <FormControlLabel value="name" control={<Radio />} label="Hospital Name" onClick={(e) => setSelection('Name')} />
                        </RadioGroup>
                    </FormControl>
                    <TextField id="search" label={selection} variant="outlined" value={text} onChange={(e) => setText(e.target.value)} className='pe-5'></TextField>
                    <IconButton color="primary" aria-label="add to shopping cart" className='pe-5' onClick={() => searchHospitals()}>
                        <SearchIcon fontSize='large' /> 
                    </IconButton>
                    <Button variant='outlined' color='info' onClick={() => getAllHospitals()}>Display All</Button>
                </center>
            </div>
            <div className='row' style={{ backgroundColor: 'azure' }}>
                {hospitals.map(hospital =>
                    <Card sx={{ minWidth: 275 ,  backgroundColor: 'azure' }} className='col-4 m-5 jcard'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {hospital.hname}
                            </Typography>
                            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                                City : {hospital.hcity}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                State : {hospital.hstate}
                                <br />
                                Type : {hospital.htype}
                            </Typography>
                            <Typography variant="body2">
                                Address : {hospital.haddress}
                                <br />
                                Number : {hospital.hnumber}
                            </Typography>
                        </CardContent>
                        <CardActions className='row'>
                            <div className='col-6'>
                            <Link className="btn btn-outline-success" to={`/updateHospital/${hospital.hid}`} >Update Hospital</Link>
                            <Button size="medium" variant='outlined' color='error' onClick={() => deleteHospital(hospital.hid)} className='mt-3'>Delete</Button>
                            </div>
                            <div className='col-4'>
                            <Link className="btn btn-outline-success " to={`addBed/${hospital.hname}`} >Add Bed</Link>
                            <Link className="btn btn-outline-info ms-3 mt-3" to={`viewBed/${hospital.hname}`} >View Beds</Link>
                            </div>
                        </CardActions>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default ViewHospital