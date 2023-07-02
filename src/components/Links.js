import React from "react";
const links = "https://thinkzone.in/about-us/";
const blogs = "https://thinkzone.in/blog/";
const home = "https://thinkzone.in/";

const Links = () => {
  return (
    <div
      style={{
        display: "flex",
        
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginLeft: 50,
        gridGap: 50,
        
        
        
      }}
    >
      <div>
        <a href={home} target="home">
          <h3>@2023 ThinkZone</h3>
        </a>
      </div>
      <div style={{ display: "flex",gridGap:60, marginRight:100 }}>
        <a href={links} target="thinkzone">
          <h3>About us</h3>
        </a>
        <a href={blogs} target="blogs">
          <h3>Blogs</h3>
        </a>
      </div>
    </div>
  );
};

export default Links;
