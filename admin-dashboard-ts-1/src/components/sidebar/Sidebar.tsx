import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flexbetween/FlexBetween';
import { AdminPanelSettingsOutlined, CalendarMonthOutlined, ChevronLeft, ChevronRightOutlined, Groups2Outlined, HomeOutlined, PieChartOutlined, PointOfSaleOutlined, PublicOutlined, ReceiptLongOutlined, SettingsOutlined, ShoppingCartOutlined, TodayOutlined, TrendingUpOutlined } from '@mui/icons-material';
import profileImage from "../../assets/smith.png";

type Props = {
    user: any,
    isNonMobile: boolean,
    drawerWidth: string 
    isSidebarOpen: boolean, 
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>,
    children?: React.ReactNode,
};

const Sidebar = ({ user, isNonMobile, drawerWidth, isSidebarOpen, setIsSidebarOpen }: Props) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState<string | undefined>();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    const navItems = [
      {
        text: "Dashboard",
        icon: <HomeOutlined />,
      },
      {
        text: "Client Facing",
        icon: null,
      },
      {
        text: "Products",
        icon: <ShoppingCartOutlined />,
      },
      {
        text: "Customers",
        icon: <Groups2Outlined />,
      },
      {
        text: "Transactions",
        icon: <ReceiptLongOutlined />,
      },
      {
        text: "Geography",
        icon: <PublicOutlined />,
      },
      {
        text: "Sales",
        icon: null,
      },
      {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
      },
      {
        text: "Daily",
        icon: <TodayOutlined />,
      },
      {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
      },
      {
        text: "Breakdown",
        icon: <PieChartOutlined />,
      },
      {
        text: "Management",
        icon: null,
      },
      {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
      },
      {
        text: "Performance",
        icon: <TrendingUpOutlined />,
      },
      {
        text: "Status",
        icon: <TrendingUpOutlined />,
      }
    ];

    return (
        <Box component="nav">
            {isSidebarOpen && (
              <Drawer
                  open={isSidebarOpen}
                  onClose={() => setIsSidebarOpen(false)}
                  variant="persistent"
                  anchor="left"
                  sx={{
                      width: drawerWidth,
                      "& .MuiDrawer-paper": {
                      color: theme.palette.secondary[200],
                      backgroundColor: theme.palette.primary[700],
                      boxSixing: "border-box",
                      borderWidth: isNonMobile ? 0 : "2px",
                      width: drawerWidth,
                      '&:hover': {
                          overflowY: 'auto',
                          transition: 'overflow-y 0.3s ease-in-out 2s',
                        },
                        '&::-webkit-scrollbar': {
                          display: 'none',
                        },
                      },
                  }}>
                  <Box width="100%">
                      <Box m="1.5rem 2rem 2rem 3rem">
                          <FlexBetween color={theme.palette.secondary.main}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            sx={{ textAlign: 'center' }}
                          >
                            <Typography variant="h4" fontWeight="bold">
                                Dashboard App
                            </Typography>
                          </Box>
                              {!isNonMobile && (
                              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                  <ChevronLeft />
                              </IconButton>
                              )}
                          </FlexBetween>
                      </Box>
                      <List>
                          {navItems.map(({ text, icon }) => {
                              if (!icon) {
                              return (
                                  <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                    {text}
                                  </Typography>
                              );
                              }
                              const lcText = text.toLowerCase();

                              return (
                                  <ListItem key={text} sx={{}}>
                                      <ListItemButton
                                        onClick={() => {
                                            navigate(`/${lcText}`);
                                            setActive(lcText);
                                        }}
                                        sx={{
                                            backgroundColor:
                                            active === lcText
                                                ? theme.palette.secondary[300]
                                                : "transparent",
                                            color:
                                            active === lcText
                                                ? theme.palette.primary[600]
                                                : theme.palette.secondary[100],
                                        }}
                                      >
                                      <ListItemIcon
                                        sx={{
                                        ml: "2rem",
                                        color:
                                            active === lcText
                                            ? theme.palette.primary[600]
                                            : theme.palette.secondary[200],
                                        }}
                                      >
                                        {icon}
                                      </ListItemIcon>
                                      <ListItemText primary={text} />
                                        {active === lcText && (
                                            <ChevronRightOutlined sx={{ ml: "auto" }} />
                                        )}
                                      </ListItemButton>
                                  </ListItem>
                              );
                          })}
                      </List>
                  </Box>
                  <Box position="relative" bottom="2rem">
                      <Divider sx={{marginTop:"30px"}}/>
                      <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem"> 
                        <Box
                          component="img"
                          alt='profile'
                          src={profileImage}
                          height="40px"
                          width="40px"
                          borderRadius="50%"
                          sx={{ objectFit: "cover" }}
                        />
                          <Box textAlign={"left"}>
                            <Typography fontWeight="bold" fontSize="0.9rem" sx={{ color: theme.palette.secondary[100] }} >{user.name} </Typography>
                            <Typography fontSize="0.8rem" sx={{ color: theme.palette.secondary[200] }} >{user.occupation} </Typography>
                          </Box>
                          <SettingsOutlined sx={{color: theme.palette.secondary[300], fontSize: "25px"}}/>                         
                      </FlexBetween>
                  </Box>
              </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;