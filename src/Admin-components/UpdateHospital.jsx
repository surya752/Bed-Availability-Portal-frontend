import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import UpgradeSharpIcon from '@mui/icons-material/UpgradeSharp';
import NavBar from './NavBar'
import { Button, TextField, Typography } from '@mui/material';
import AdminHospitalService from '../Admin-service/AdminHospitalService';

const UpdateHospital = () => {
    const {id} = useParams()
    const history=useHistory()
    const [hospital,setHospital] =useState({
        hstate:'',
        hcity:'',
        haddress:'',
        hname:'',
        htype:'',
        hnumber:''
    })
    useEffect(() => {
        if (id) {
           getHospitalById(id)
        }
     },[])
  
     const getHospitalById = async (id) => {
        let hospital = await (await AdminHospitalService.getById(id)).data;
        setHospital(hospital)
     }
     const handleChange = (e) => {
        setHospital({ ...hospital, [e.target.placeholder]: e.target.value });
     }
     const handleSubmit = async (event) => {
        event.preventDefault();
        if (!hospital.hname.length) {
           return;
        }
        const newItem = { ...hospital };
        AdminHospitalService.editHospital(newItem, id);
        alert('Hospital Updated Successfully')
        history.push('/viewHospital')
     }
  return (
    <div><NavBar/>
      <div className="container-fuild row m-5 pt-5 ps-5">
            <div className='col-5 row m-2'>
               <Typography className='col-4 p-3' variant='button' fontSize={'large'} >Name :</Typography>
               <TextField placeholder='hname' variant="outlined" value={hospital.hname} onChange={handleChange} className='pe-5 col-6' />
            </div>
            <div className='col-5 row m-2'>
               <Typography className='col-4 p-3' variant='button' fontSize={'large'} >City :</Typography>
               <TextField placeholder="hcity" variant="outlined" value={hospital.hcity} onChange={(e) => handleChange(e)} className='pe-5 col-6'></TextField>
            </div>
            <div className='col-5 row m-2'>
               <Typography className='col-4 p-3' variant='button' fontSize={'large'} >State :</Typography>
               <TextField placeholder="hstate" variant="outlined" value={hospital.hstate} onChange={(e) => handleChange(e)} className='pe-5 col-6'></TextField>
            </div>
            <div className='col-5 row m-2'>
               <Typography className='col-4 p-3' variant='button' fontSize={'large'} >Address :</Typography>
               <TextField placeholder="haddress" variant="outlined" value={hospital.haddress} onChange={(e) => handleChange(e)} className='pe-5 col-6'></TextField>
            </div>
            <div className='col-5 row m-2'>
               <Typography className='col-4 p-3' variant='button' fontSize={'large'} >Type :</Typography>
               <TextField placeholder="htype" variant="outlined" value={hospital.htype} onChange={(e) => handleChange(e)} className='pe-5 col-6'></TextField>
            </div>
            <div className='col-5 row m-2'>
               <Typography className='col-4 p-3' variant='button' fontSize={'large'} >Number :</Typography>
               <TextField placeholder="hnumber" variant="outlined"  value={hospital.hnumber} onChange={(e) => handleChange(e)} className='pe-5 col-6'></TextField>
            </div>
            <div className='col-5 m-2 p-3'>
               <Button variant="contained" color="success" onClick={(e) => handleSubmit(e)} className='col-4 m-3'>Update <UpgradeSharpIcon/></Button>
               <Button variant='contained' color='error' href='/viewHospital' className='link col-4 m-3' >Cancel <ClearSharpIcon/></Button>
            </div>
         </div>
    </div>
  )
}

export default UpdateHospital