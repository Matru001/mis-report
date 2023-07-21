import React, { useEffect,useState } from 'react'
import Text from "../components/Text";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Api from "../envirment/Api";
import Logo from '../components/Logo';



const managerSet = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "guru@thinkzone.in",
    label: "guru@thinkzone.in",
  },
  {
    value: "nischintakoili4@thinkzone.in",
    label: "nischintakoili4@thinkzone.in",
  },

  {
    value: "RajeshSwain",
    label: "RajeshSwain",
  },
  {
    value: "aman",
    label: "aman",
  },
];

const managerTypeSet = [
  {
    value: "manager",
    label: "manager",
  },
  {
    value: "fellow",
    label: "fellow",
  },
  {
    value: "worker",
    label: "worker",
  },
  {
    value: "Helper",
    label: "Helper",
  },
];

const passcodeSet = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "GURUBBS0323",
    label: "GURUBBS0323",
  },
  {
    value: "BHAGYAN0223",
    label: "BHAGYAN0223",
  },
  {
    value: "rajesh@123",
    label: "rajesh@123",
  },
  {
    value: "smruti@123",
    label: "smruti@123",
  },
];

const year = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "2022",
    label: "2022",
  },

  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2024",
    label: "2024",
  },
];

const PromotedStudent = () => {
 const [selectedYear, setSelectedYear] = useState("");
 const [manager, setManager] = useState("");
 const [managerType, setManagerType] = useState("");
 const [passcode, setPasscode] = useState("");


      const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
      };

      const handleManagerChange = (event) => {
        setManager(event.target.value);
      };
      const handleManagerTypeChange = (event) => {
        setManagerType(event.target.value);
      };

      const handlePasscodeChange = (event) => {
        setPasscode(event.target.value);
      };

  const promotedS = async () => {
     if (
       selectedYear === "" ||
       manager === "" ||
       passcode === ""
     ) {
       return alert("Please select some filters to preceed");
     }
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        year: selectedYear,
        managerid: manager,
        passcode: passcode,
      };
      try {
        const res = await Api.post(`getPromotedStudentsReport`, body, config);
          if (res.status === 200) {
        
        }
      
      } catch (error) {}
  };
  

   

  return (
    <>
      <div>
        <div
          style={{
            marginTop: "20px",
            padding: "30px 20px",
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
          }}
        >
          <Text
            name="Select year"
            currencies={year}
            handleChange={handleYearChange}
          />
          <Text
            name="Select manager-type"
            currencies={managerTypeSet}
            handleChange={handleManagerTypeChange}
          />
          <Text
            name="Select manager"
            currencies={managerSet}
            handleChange={handleManagerChange}
          />

          <Text
            name="Select passcode"
            currencies={passcodeSet}
            handleChange={handlePasscodeChange}
          />
          <Stack spacing={2} direction="row">
            
            <Button
              variant="contained"
              onClick={promotedS}
              style={{ width: 250, height: 40, marginTop: 5 }}
            >
              Filter
            </Button>
          </Stack>
        </div>
      </div>
      {DataTransfer.length > 0 ? null : <Logo/>}
    
    </>
  );
}

export default PromotedStudent
