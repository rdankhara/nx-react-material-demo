import React from 'react';
import { AppBar, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { AddTileMenu } from './addMenu';
import AdbIcon from '@mui/icons-material/Adb';
export interface HeaderProps {
  title: string;
  onAddControlPoint: () => void;
  onAddCreateControlPoint: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const {title, onAddControlPoint, onAddCreateControlPoint} = props;

  return (
    <AppBar position='static'>
      <Toolbar>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography variant='h6' >
          {title}
        </Typography>
        <AddTileMenu onAddControlPoint={onAddControlPoint} onAddCreateControlPoint={onAddCreateControlPoint}/>
      </Toolbar>
    </AppBar>
  )
}
