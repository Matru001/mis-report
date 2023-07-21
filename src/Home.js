import * as React from "react";
import PropTypes from "prop-types";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Dashboard from "./components/Dashboard";
// import AccessibilityIcon from "@mui/icons-material/Accessibility";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { pink, yellow } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import Profile from "./components/Profile";
// import Profile from "./components/Profile";

const drawerWidth = 240;

function Home(props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const listItem = [
    {
      text: "Dashboard",
      link: "/home/dashboard",
      icon: <DashboardIcon color="secondary" />,
    },
    {
      text: "Fellows",
      link: "/home/fellows",
      icon: <PeopleAltIcon color="primary" />,
    },
    {
      text: "TimeSpend Details",
      link: "/home/TimeSpendDetails",
      icon: <AccessTimeIcon color="success" />,
    },
    {
      text: "Training Details",
      link: "/home/TrainingDetails",
      icon: <AcUnitIcon color="secondary" />,
    },
    {
      text: "NSDC Status",
      link: "/home/NsdcStatus",
      icon: <AllInclusiveIcon sx={{ color: pink[500] }} />,
    },
    {
      text: "Schools",
      link: "/home/Schools",
      icon: <AddHomeWorkIcon sx={{ color: "lightgreen" }} />,
    },
    {
      text: "Anganbadi",
      link: "/home/Anganbadi",
      icon: <FontDownloadIcon sx={{ color: "blue" }} />,
    },
    {
      text: "PGE Students",
      link: "/home/PgeStudents",
      icon: <AccessibilityIcon sx={{ color: "yellow" }} />,
    },
    {
      text: "ECE Students",
      link: "/home/EceStudents",
      icon: <AccessibilityIcon color="secondary" />,
    },
    {
      text: "Fln",
      link: "/home/Fln",
      icon: <InboxIcon color="green" />,
    },

    {
      text: "PromotedStudent",
      link: "/home/PromotedStudent",
      icon: <PeopleAltIcon sx={{ color: "red" }} />,
    },
     {
       text: "Feedback",
       link: "/home/Feedback",
       icon: <PeopleAltIcon sx={{ color: "red" }} />,
    },
    {
      text: "Log out",
      link: "/",
      icon: <LogoutIcon color="secondary" />,
    },
   
  ];

  const handleNavigate = (link) => {
    if (link === "/") {
      localStorage.removeItem("login");
    }
    navigate(link)
  }

  const drawer = (
    <div>
      <Toolbar>
        <h1
          style={{
            letterSpacing: "2px",
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "transparent",
            textAlign: "center",
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(310deg,#2152ff,#21d4fd)",
          }}
        >
          THINKZONE
        </h1>
      </Toolbar>

      <Divider />
      <List>
        {listItem.map((element, index) => (
          <Link to={element.link} style={{ textDecoration: "none" }}>
            <ListItem key={element.text} disablePadding onClick={() => handleNavigate(element.link)} >
              <ListItemButton>
                <ListItemIcon>
                  {element.icon}
                  {/* {index % 3 === 0 ? <InboxIcon /> : <MailIcon />  } */}
                </ListItemIcon>
                <ListItemText primary={element.text} sx={{ color: "gray" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ textTransform: "uppercase" }}
          >
            {pathname.split("/")[2]}
          </Typography>
          
          <Profile />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
