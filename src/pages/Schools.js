import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Select2 from "../components/Select2";
import Filter from "../components/Filter";
import Select from "../components/Select";
import Logo from "../components/Logo";
import Links from "../components/Links";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Schools() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="School Wise Student Details" {...a11yProps(0)} />
          <Tab label="Class Wise Student Details" {...a11yProps(1)} />
          <Tab label="Student Call Record Details" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div
          style={{
            // display: "flex",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
            // marginTop: 30,
            // marginLeft: 15,
            // marginRight: 15,
            paddingBottom: 40,
            flexWrap: "wrap",
          }}
        >
          <h3 style={{ marginLeft: 15 }}>Download SchoolWise Data</h3>

          <div
            style={{ display: "flex", width: 300, gridGap: 12, marginLeft: 15, flexWrap:"wap" }}
          >
            <Select2 Age="Select passcode" />
            <Select2 Age="Select School" />
            <Select2 Age="Select Class" />
            <Filter
              details="Get Details"
              style={{ marginTop: -45, width: 200 }}
            />
          </div>
          <div style={{ marginTop: 20, marginLeft: 15, marginRight: 15 }}>
            <Select2 Age="School name" />
          </div>
        </div>
        <Logo />
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        Class wise student details will be available on next update
        <Logo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          style={{
            // display: "flex",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
            // marginTop: 30,
            // marginLeft: 15,
            // marginRight: 15,
            paddingBottom: 40,
            // flexWrap: "wrap",
          }}
        >
          <h3 style={{ marginLeft: 15 }}>Student call Responce Details</h3>

          <div
            style={{ display: "flex", width: 300, gridGap: 12, marginLeft: 15 }}
          >
            <Select2 Age="Select passcode" />
            <Select2 Age="Select School" />
            <Select2 Age="Select Class" />

            <Filter
              details="Get Details"
              style={{ marginTop: -45, width: 200 }}
            />
          </div>
          <div style={{ marginTop: 20, marginLeft: 15, marginRight: 15 }}>
            <Select2 Age="School name" />
          </div>
          <Select />
        </div>
        <Logo/>
      </TabPanel>
      <Links/>
    </Box>
  );
}
