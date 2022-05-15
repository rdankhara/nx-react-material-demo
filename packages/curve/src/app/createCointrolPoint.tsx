import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea, CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel, FormHelperText, IconButton, Input, InputLabel, MenuItem, Select, TextField,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface ControlPointProps {
  title: string;
  name?: string;
  currency?: string;
  category?: string;
  description?: string;
  onCloseHandler: () => void;
}

export const CreateControlPoint: React.FC<ControlPointProps> = (props) => {
  const { title, currency, onCloseHandler } = props;
  const handleCurrencyChange = () => {
  };

  return (
    <Card sx={{ width: 'auto' }}>
      <CardHeader
        title={'Create New Control Point'}
        action={
          <IconButton aria-label='Close' onClick={() => {
            console.log('Close clicked');
            onCloseHandler();
          }
          }>
            <CloseIcon />
          </IconButton>
        }
      >
      </CardHeader>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel htmlFor='cp-name' sx={{ minWidth: 100 }}>Name</InputLabel>
            <FormControl fullWidth>
              <TextField id={'cp-name'} type={'text'} variant='standard' placeholder='Name'></TextField>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel sx={{ minWidth: 100 }}>Currency</InputLabel>
            <FormControl fullWidth>
              <Select
                variant={'standard'}
                size={'small'}
                id='demo-simple-select'
                value={currency}
                label='Currency'
                onChange={handleCurrencyChange}
              >
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>GBP</MenuItem>
                <MenuItem value={30}>JPY</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel htmlFor='cp-description' sx={{ minWidth: 100 }}>Description</InputLabel>
            <FormControl fullWidth>
              <TextField id={'cp-description'} type={'text'} variant='standard' placeholder='Description'></TextField>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel htmlFor='cp-expression' sx={{ minWidth: 100 }}>Expression</InputLabel>
            <FormControl fullWidth>
              <TextField id={'cp-expression'} type={'text'} variant='standard' placeholder='Expression'></TextField>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputLabel htmlFor='cp-description' sx={{ minWidth: 100 }}>Description</InputLabel>
            <FormControl fullWidth>
              <TextField id={'cp-category'} type={'text'} variant='standard' placeholder='Category'></TextField>
            </FormControl>
          </Box>
        </Box>
        <CardActionArea>
          <CardActions>
            <Button variant={'contained'} size={'small'} color={'primary'}>Save</Button>
            <Button size={'small'} color={'secondary'}>Clear</Button>
            <Button size={'small'} color={'secondary'}>Cancel</Button>
          </CardActions>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};
