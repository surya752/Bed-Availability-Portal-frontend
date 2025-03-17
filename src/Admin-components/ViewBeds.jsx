import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AdminHospitalService from '../Admin-service/AdminHospitalService'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import NavBar from './NavBar'

const ViewBeds = () => {
    const [beds,setBeds] = useState([])
    const {hname} = useParams()
    useEffect(() => { getAllBeds(); }, [])

    const getAllBeds = () => {
            AdminHospitalService.getAllBeds().then((response) => {
                if(response.data.length==0){
                    alert('No Beds')
                }
                else{
                    setBeds(response.data)
                    console.log(response.data);  
                }
                 
        }).catch(error => {
            console.log(error);
        })   
    }
    const deleteBed=(id)=>{
        AdminHospitalService.deleteBed(id).then((response) => {
            alert("Bed Deleted")
            window.location.reload();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <NavBar/>
            <div className='row' style={{backgroundColor:'azure'}}>
        {beds.map(bed => {
          if (bed.hname == hname) {
            return (
              <Card sx={{ minWidth: 275,backgroundColor:'azure' }} className='col-3 m-5 jcard' >
              <CardContent>
              <Typography variant="h5" component="div">
                ID :{bed.bedId}
                </Typography>
                <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                Type : {bed.bedType}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Availability : {bed.bedAvailability}
                </Typography>
                <Typography variant="body2">
                  Price :{bed.bedPrice}
                </Typography>
              </CardContent>
              <CardActions>
                   <Button size="medium" variant='outlined' color='error' onClick={()=>deleteBed(bed.bedId)} className='ms-5'>Delete</Button>
              </CardActions>
            </Card>
            );
          }
        })}
      </div>
        </div>
    )
}

export default ViewBeds
