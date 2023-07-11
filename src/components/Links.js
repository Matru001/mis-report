import React from "react";
const links = "https://thinkzone.in/about-us/";
const blogs = "https://thinkzone.in/blog/";
const home = "https://thinkzone.in/";

const Links = () => {
  return (
    <div
      style={{
        display: "flex",
        textDecoration:"none",
        
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginLeft: 50,
        gridGap: 50,
        
        
        
        
      }}
    >
      <div>
        <a href={home} target="home">
          <p>@2023 ThinkZone</p>
        </a>
      </div>
      <div style={{ display: "flex",gridGap:60, marginRight:100,textDecoration:"none" }}>
        <a href={links} target="thinkzone">
          <p>About us</p>
        </a>
        <a href={blogs} target="blogs">
          <p>Blogs</p>
        </a>
      </div>
    </div>
  );
};

export default Links;
