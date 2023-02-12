import { Stack } from '@mui/system';
import React from 'react';
import {Link} from 'react-router-dom';
import Nationals from '../assets/images/Nationals.jpeg';



const Navbar = () => {
  return (
   <Stack>
    <Link to="/">
        <img src={Nationals} />
    </Link>
   </Stack>
  )
}

export default Navbar