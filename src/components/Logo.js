import React from "react";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: "20px", // Optional: Add some margin to the top of the image
      }}
    >
      <img
        src="https://cleargov-common.s3.amazonaws.com/img/common/no-data-available.png"
        width="250"
        height="250"
        alt="No data available"
       
      />
    </div>
  );
};

export default Logo;


