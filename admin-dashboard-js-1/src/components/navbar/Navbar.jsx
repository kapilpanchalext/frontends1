import React from 'react';
import { useDispatch } from 'react-redux';
import FlexBetween from '../flexbetween/FlexBetween';
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';
import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from '@mui/icons-material';
import { setMode } from '../../store';

const Navbar = ({ isSideBarOpen, setIsSideBarOpen }) => {

    const dispatch = useDispatch();
    const { palette } = useTheme();
  
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}>

      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => console.log("open/close sidebar")}>
            <MenuIcon/>
          </IconButton>
          <FlexBetween
            bgcolor={palette.primary.light}
            borderRadius= '9px'
            gap= '3rem'
            p="0.1rem 1.5rem">
            <InputBase placeholder="Search..."/>
              <IconButton>
                <Search/>
              </IconButton>
          </FlexBetween>
        </FlexBetween>
        
        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {palette.mode === "dark" ? (<DarkModeOutlined sx={{fontSize: "25px"}}/>) : 
                                       (<LightModeOutlined sx={{fontSize: "25px"}}/>)}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{fontSize: "25px"}}/>
          </IconButton>

        </FlexBetween>

      </Toolbar>

    </AppBar>
  )
}

export default Navbar;