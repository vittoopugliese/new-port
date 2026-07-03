import React, {useState} from "react";
import {SectionTitle} from "../Shared/SectionTitle";

export const Certificates = () => {
  const [more, setMore] = useState(false);

  return (
    <>
      <SectionTitle iconClass={"fa-solid fa-certificate"} title="Certificates" />
      <p style={{margin: "0.2em 0em 1em 0em"}}> These are some of my certifications... </p>
      <p style={{margin: "0.2em 0em 1em 0em"}}> I am waiting for my degree to be validated by the university to put on this list! </p>
      <div className="certificates-container">
        <img src="./certificates/1.webp" alt="freeCodeCamp Certificate" />
        <img src="./certificates/3.webp" alt="freeCodeCamp Certificate" />
        {more && (
          <>
            <img src="./certificates/2.webp" alt="freeCodeCamp Certificate" />
            <img src="./certificates/4.webp" alt="freeCodeCamp Certificate" />
            <img src="./certificates/5.webp" alt="freeCodeCamp Certificate" />
          </>
        )}
      </div>
      <div className="certificates-toggle">
        <button type="button" className="button" onClick={() => setMore((prev) => !prev)}>
          <i className={`button__icon fa-solid fa-chevron-${more ? "up" : "down"}`} aria-hidden="true" />
          <span className="button__label">{more ? "Show less" : "Show more"}</span>
        </button>
      </div>
    </>
  );
};
