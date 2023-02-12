import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625"
        fontWeight="600" fontsize="26px">
            Fitness Club
        </Typography>
        <Typography>
            Do The Hard Stuff
        </Typography>
        <Typography>
            Check out the most effective exercises
        </Typography>
    </Box>
  )
}

export default HeroBanner