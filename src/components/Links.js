import React from 'react'
const link1 = "https://thinkzone.in/"
const link2 = "https://thinkzone.in/about-us/";
const link3 = "https://thinkzone.in/blog/";
const Links = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <a href={link1} target="none" style={{ textDecoration: "none" }}>
          <h4>2023 @Thinkzone</h4>
        </a>
        <div style={{display:"flex",}}>
          <a href={link2} style={{ textDecoration: "none",marginRight:50 }}>
            <h4>About us</h4>
          </a>
          <a href={link3} style={{ textDecoration: "none" }}>
            <h4>Blog</h4>
          </a>
        </div>
      </div>
    </>
  );
}

export default Links

