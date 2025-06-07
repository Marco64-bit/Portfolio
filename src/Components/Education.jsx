/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import '../styles/Education.css';
import universityImg from "../images/education.jpg"; // Make sure this image exists

const educationData = [
  {
    title: "El Sewedy University of Technology",
    subtitle: "BTech in Computer Science",
    details: "Expected Graduation: 2028",
  },
  {
    title: "Relevant Coursework",
    subtitle: "",
    details:
      "Introduction to Computer Programming, Network Basics, Object Programming, Database Management System",
  },
  {
    title: "High GPA",
    subtitle: "",
    details: "GPA: 4.0/4.3",
  },
  {
    title: "Skills Developed",
    subtitle: "",
    details: "Software Development, Teamwork, Problem Solving, Communication",
  },
];

const Education = () => {
  return (
    <div className="education-container" id="education" style={{ padding: "2rem" }}>
      <h2 className="education-title" style={{ textAlign: "center" }}>
        Education
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "0",
          flexWrap: "nowrap",
        }}
      >
        {/* Left side grid */}
        <div
          style={{
            flex: "0 0 50%",
            maxWidth: "50%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            minWidth: "320px",
            alignContent: "center",
          }}
        >
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="education-card"
              style={{
                background: "#f5f5f5",
                borderRadius: "8px",
                padding: "1rem",
                minHeight: "120px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <strong>{item.title}</strong>
              {item.subtitle && (
                <span style={{ fontSize: "0.95em", color: "#555" }}>{item.subtitle}</span>
              )}
              <span style={{ fontSize: "0.95em", color: "#555", marginTop: "0.5em" }}>
                {item.details}
              </span>
            </div>
          ))}
        </div>
        {/* Right side image */}
        <div
          style={{
            flex: "0 0 50%",
            maxWidth: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100%",
          }}
        >
          <img
            src={universityImg}
            alt="Education"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
