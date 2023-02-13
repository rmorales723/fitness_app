// import React from 'react'
import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, Textfield, Typography } from '@mui/material'
import { TextField } from '@material-ui/core';

const SearchExercises = () => {
    const [search, setSearch] = useState('')

  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{
        fontSize: {lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center">
        Exercises You Should Know

        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{
                input: { fontWeight: '700',
                border: 'none',
                borderRadius:'4px'
            },
            width: { lg: '1170px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
            }}
                height="76px"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
            />
        </Box>
    </Stack>
  )
}

export default SearchExercises