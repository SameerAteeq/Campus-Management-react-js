import { Copyright, Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Link, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/Context'
import { navItems } from '../navbar/Navbar'

const Footer = () => {
  const navigate = useNavigate();
  const { currentUser} = useContext(UserContext);
  return (
    <Stack gap={2} sx={{p:"12px",width:"100%",color:"#ffff",  height:"120px", backgroundColor:"#00bfa5"}}>
           <Stack  direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2}>
            <Facebook sx={{cursor:"pointer"}}/>
            <Twitter sx={{cursor:"pointer"}}/>
            <Instagram sx={{cursor:"pointer"}}/>
            <LinkedIn sx={{cursor:"pointer"}}/>
           </Stack>
           <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2} >
            {navItems.map((item)=>{
              if (item.private && !currentUser) return;
              return(
                <Link onClick={()=>navigate(item.to)} underline='false' sx={{color:'#fff', cursor:"pointer"}}>{item.title}</Link>
                )
              })}
           </Stack>
           <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={1}>
           
            <Typography sx={{display:"flex", alignItems:"center"}} variant='body2'><Copyright sx={{fontSize:"12px"}}/> 2022</Typography>
            <Typography variant='body2'>|</Typography>
            <Typography variant='body2'>All Rights Reserved</Typography>
           </Stack>
    </Stack>
  )
}

export default Footer
