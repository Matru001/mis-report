import React from 'react'
const link1 = "https://thinkzone.in/"
const link2 = "https://thinkzone.in/about-us/";
const link3 = "https://thinkzone.in/blog/";
const Links = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <a href={link1} target="none" style={{ textDecoration: "none" }}>
          <p>2023 @Thinkzone</p>
        </a>
        <div style={{ display: "flex", }}>
          <a
            href={link2}
            style={{ textDecoration: "none",  }}
          >
            <p>About us</p>
          </a>
          <a href={link3} style={{ textDecoration: "none" }}>
            <p>Blog</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Links

