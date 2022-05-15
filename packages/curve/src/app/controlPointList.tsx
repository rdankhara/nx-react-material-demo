import React from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel, IconButton, Paper,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

import { ControlPoint } from './appState';
import { ColDef } from 'ag-grid-community';

export interface ControlPointProps {
  title: string;
  onCloseHandler: () => void;
  items?: ControlPoint[];
}

const getColumnDefs = (): ColDef[] => {
  return [
    {field: 'name'},
    {field: 'currency'},
    {field: 'category'},
    {field: 'description'}
  ]
}

export const ControlPointList: React.FC<ControlPointProps> = (props) => {
  const {title, onCloseHandler, items} = props;
  return (
    <Card>
      <CardHeader
        title={<Paper>{title}<Button startIcon={<AddIcon />} sx={{marginLeft: 10}}>Create</Button></Paper>}
        action={<IconButton title={'Close'} onClick={onCloseHandler}><CloseIcon /></IconButton>}
      >
      </CardHeader>
      <CardContent sx={{height: 500, width: '100%'}}>
        <AgGridReact
          columnDefs={getColumnDefs()}
          rowData={items}
          animateRows={true}
        >
        </AgGridReact>
      </CardContent>
    </Card>
  )
}
