import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { Button } from '@mui/material'
import React from 'react';
import './MaterialUi.css';

function MaterialUi() {
  return (
    <div>
    <Button variant="text">Text</Button>
 <Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
 <AddBoxRoundedIcon sx={{ fontSize: 40 }}></AddBoxRoundedIcon>
</div>
  )
}

export default MaterialUi