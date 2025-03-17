import React from 'react'
import { useState,useEffect } from 'react'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddIcon from '@mui/icons-material/Add';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { useHistory, useParams } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material'
import NavBar from './NavBar'
import AdminHospitalService from '../Admin-service/AdminHospitalService';

const AddBed = () => {
    const {hname} = useParams()
    const history = useHistory()
    const [bedType,setBedType] = useState('')
    const [bedAvailability,setBedAvailability] = useState('')
    const [bedPrice,setBedPrice] = useState('')
    const initialValues = { bedType: "", bedAvailability: "", bedPrice: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const insertBed = (e)=>{
        const bed={bedType,bedAvailability,bedPrice,hname}
        setFormErrors(validate(bed));
        setIsSubmit(true);
        AdminHospitalService.addBed(bed).then((response) =>{

            console.log(response.data)
            alert('Bed has been Added')

            history.push('/viewHospital');

        }).catch(error => {
            console.log(error)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const resetFields=(e)=>{
        window.location.reload()
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("success");
        }
    }, [formErrors]);
    
    const validate = (bed) => {
         const errors = {};
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
         const name_regex = /^[a-zA-Z ]{2,30}$/i;
         if (!bed.bedType) {
             errors.bedType = "Bed is required!";
         }
         else if (!name_regex.test(bed.bedType.length > 0)) {
             errors.bedType = "Bed Not required!";
         }
         if (!bed.bedAvailability) {
             errors.bedAvailability = "This is required!";
         } else if (!name_regex.test(bed.bedAvailability.length > 0)) {
            errors.bedAvailability = "This is not required!";
        }
         if (!bed.bedPrice) {
             errors.bedPrice = "Price is required!";
         } else if (!name_regex.test(bed.bedPrice.length > 0)) {
             errors.bedPrice = "Price is not required!";
         }
         return errors;
     };
    return (
        <div>
            <NavBar/>
            <form onSubmit={handleSubmit} >
            <div className='container-fuild row m-5 pt-5 ps-5'>
                <div className='col-5 row m-2'>
                    <Typography className='col-6 p-3' variant='button' fontSize={'large'} >Hospital Name :</Typography>
                    <div><TextField variant="outlined" id='outlined-read-only-input' value={hname}  className='pe-5 col-6' />
                    {formErrors.hname}</div>
                </div>
                <div className='col-5 row m-2'>
                    <Typography className='col-6 p-3' variant='button' fontSize={'large'} >Type :</Typography>
                   <div> <TextField variant="outlined" value={bedType} onChange={(e) => { setBedType(e.target.value) }} className='pe-5 col-6' />
                    {formErrors.bedType}</div>
                </div>
                <div className='col-5 row m-2'>
                    <Typography className='col-6 p-3' variant='button' fontSize={'large'} >Availability :</Typography>
                  <div><TextField variant="outlined" value={bedAvailability}  onChange={(e) => { setBedAvailability(e.target.value) }}  className='pe-5 col-6' />
                  {formErrors.bedAvailability}</div>
                </div> 
                <div className='col-5 row m-2'>
                    <Typography className='col-6 p-3' variant='button' fontSize={'large'} >Price :</Typography>
                   <div> <TextField variant="outlined" value={bedPrice} onChange={(e) => { setBedPrice(e.target.value) }} className='pe-5 col-6' />
                    {formErrors.bedPrice}</div>
                </div>
                <div className='col-8 m-2 p-3'>
               <Button variant="outlined" color="success" className='col-3 m-3' onClick={(e)=>{insertBed(e)}}>ADD <AddIcon/></Button>
               <Button variant='outlined' color='info'  className='col-3 m-3' onClick={(e)=>{resetFields(e)}}>RESET <RestartAltIcon/></Button>
               <Button variant='outlined' color='error' className='col-3 m-3' href='/viewHospital'  >Cancel <ClearSharpIcon/></Button>
            </div>
            </div>
            </form>
        </div>
    )
}
export default AddBed
