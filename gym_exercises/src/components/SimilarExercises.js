import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography variant="h3">
            Exercises that target the same muscle group
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
        </Stack>

        <Typography variant="h3">
            Exercises that use the same equipment
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
        </Stack>
    </Box>
    );

export default SimilarExercises;