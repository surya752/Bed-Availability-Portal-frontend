import { Button, TextField, Typography } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddIcon from '@mui/icons-material/Add';
import React, { useState,useEffect  } from 'react'
import NavBar from './NavBar'
import { useHistory } from 'react-router-dom';
import AdminHospitalService from '../Admin-service/AdminHospitalService';

const AddHospital = () => {
    const [hname, setHname] = useState()
    const [hcity,setHcity] = useState()
    const [hstate,setHstate] = useState()
    const [htype,setHtype] = useState()
    const [haddress,setHaddress] = useState()
    const [hnumber,setHnumber] = useState()
    const history = useHistory()
    const hospital={hname,hcity,hstate,htype,haddress,hnumber}
    const initialValues = { hname: "", hcity: "", hstate: "", htype: "", haddress: "", hnumber: "",};
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});


    const insertHospital = (e)=>{
        const hospital={hname,hcity,hstate,htype,haddress,hnumber}
        setFormErrors(validate(hospital));
        setIsSubmit(true);
        AdminHospitalService.addHospital(hospital).then((response) =>{

            console.log(response.data)
            alert('Hospital has been Added')

            history.push('/viewHospital');

        }).catch(error => {
            console.log(error)
        })

    }
    const resetFields = (e)=>{
       window.location.reload()
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("success");
        }
    }, [formErrors]);
    const validate = (hospital) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const name_regex = /^[a-zA-Z ]{2,30}$/i;
        if (!hospital.hname) {
            errors.hname = "Hospital name is required!";
        }
        else if (!name_regex.test(hospital.hname.length > 0)) {
            errors.hname = "Hospital name Not required!";
        }
        if (!hospital.hcity) {
            errors.hcity = "City is required!";
        } else if (!name_regex.test(hospital.hcity.length > 0)) {
           errors.hcity = "City not required!";
       }
        if (!hospital.hstate) {
            errors.hstate = "State is required!";
        } else if (!name_regex.test(hospital.hstate.length > 0)) {
            errors.hstate = "State not required!";
        }
        if (!hospital.htype) {
            errors.htype = "Type is required!";
        } else if (!name_regex.test(hospital.htype.length > 0)) {
            errors.htype = "Type not required!";
        }
        if (!hospital.haddress) {
            errors.haddress = "Address is required!";
        } else if (!name_regex.test(hospital.haddress.length > 0)) {
            errors.haddress = " Hospital Address not required!";
        }
        if (!hospital.hnumber) {
            errors.hnumber = "Number is required!";
        } else if (!name_regex.test(hospital.hnumber.length > 0)) {
            errors.hnumber = "Number not required!";
        }
        return errors;
    };
    return (
        <div><NavBar />
         <form onSubmit={handleSubmit} >
            <div className='container-fuild row m-5 pt-5 ps-5'>
                <div className='col-5 row m-2'>
                    <Typography className='col-4 p-3' variant='button' fontSize={'large'} >Name :</Typography>
                    <div><TextField variant="outlined" value={hname} onChange={(e) => { setHname(e.target.value) }} className='pe-5 col-6' />
                    {formErrors.hname}</div>
                </div>
                <div className='col-5 row m-2'>
                    <Typography className='col-4 p-3' variant='button' fontSize={'large'} >City :</Typography>
                   <div><TextField variant="outlined" value={hcity} onChange={(e) => { setHcity(e.target.value) }} className='pe-5 col-6' />
                   {formErrors.hcity}</div>
                </div>
                <div className='col-5 row m-2'>
                    <Typography className='col-4 p-3' variant='button' fontSize={'large'} >State :</Typography>
                    <div><TextField variant="outlined" value={hstate} onChange={(e) => { setHstate(e.target.value) }} className='pe-5 col-6' />
                    {formErrors.hstate}</div>
                </div>
                <div className='col-5 row m-2'>
                    <Typography className='col-4 p-3' variant='button' fontSize={'large'} >Address :</Typography>
                    <div><TextField variant="outlined" value={haddress} onChange={(e) => { setHaddress(e.target.value) }} className='pe-5 col-6' />
                    {formErrors.haddress}</div>
                </div>
                <div className='col-5 row m-2'>
                    <Typography className='col-4 p-3' variant='button' fontSize={'large'} >Type :</Typography>
                   <div> <TextField variant="outlined" value={htype} onChange={(e) => { setHtype(e.target.value) }} className='pe-5 col-6' />
                   {formErrors.htype}</div>
                </div>
                <div className='col-5 row m-2'>
                    <Typography className='col-4 p-3' variant='button' fontSize={'large'} >Number :</Typography>
                    <div><TextField variant="outlined" value={hnumber} onChange={(e) => { setHnumber(e.target.value) }} className='pe-5 col-6' />
                    {formErrors.hnumber}</div>
                </div>
                <div className='col-5 m-2 p-3'>
               <Button variant="outlined" color="success" className='col-4 m-3' onClick={(e)=>{insertHospital(e)}}>ADD <AddIcon/></Button>
               <Button variant='outlined' color='error'  className='col-4 m-3' onClick={(e)=>{resetFields(e)}}>RESET <RestartAltIcon/></Button>
            </div>
            </div>
            </form>
        </div>
    )
}

export default AddHospital