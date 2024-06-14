import React, { useEffect, useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRightOutlined, HomeOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import FlexBetween from '../flexbetween/FlexBetween';

const Sidebar = ({ isNonMobile, drawerWidth, isSideBarOpen, setIsSideBarOpen }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    const navItems = [
        {
            text: "Dashboard",
            icon: <HomeOutlined/>,
        }, 
        {
            text: "Client Facing",
            icon: null,
        },
        {
            text: "Products",
            icon: <ShoppingCartOutlined/>,
        }, 
    ];

  return (
    <Box component="nav"> 
    {isSideBarOpen && (
        <Drawer 
            open={isSideBarOpen} 
            onClose={() => setIsSideBarOpen(false)} 
            variant='persistent' 
            anchor='left'
            sx={{
                width: drawerWidth,
                ".& mui-drawer-paper": {
                    color: theme.palette.secondary.main,
                    backgroundColor: theme.palette.background.alt,
                    boxSizing: "border-box",
                    borderWidth: isNonMobile ? 0 : "2px",
                    width: drawerWidth
                }
            }}
            >
            <Box width="100%">
                <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween color={theme.palette.secondary.main}>
                        <Box display="flex" alignItems="center" gap="0.5rem">
                            <Typography variant="h4" fontWeight="bold">ADMIN DASHBOARD</Typography>
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}> 
                                    <ChevronLeft />
                                </IconButton> 
                            )}
                        </Box>
                    </FlexBetween>
                </Box>
                <List>
                    {navItems.map(({ text, icon }) => {
                        if (!icon) {
                            return (
                                <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                    {text}
                                </Typography>
                            )
                        }
                        const lcText = text.toLowerCase();
                        return (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => { 
                                    navigate(`/${lcText}`);
                                    setActive(lcText)
                                    }} 
                                    sx={{
                                        backgroundColor: active === lcText ? theme.palette.secondary.main : "transparent",
                                    }}>
                                    <ListItemIcon sx={{ml: "2rem", color: active === lcText ? theme.palette.secondary.main : theme.palette.secondary.dark}}>{icon}</ListItemIcon>
                                    <ListItemText primary={text} sx={{ml: "1rem"}}/>
                                    {active === lcText && <ChevronRightOutlined sx={{color: theme.palette.secondary.main}} />}
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
        </Drawer>
    )}    
    </Box>
  )
};

export default Sidebar;