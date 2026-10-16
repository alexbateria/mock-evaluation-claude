import React from "react";
import { Link } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";

function Certifications() {
  const { certifications } = useQuizContext();

  return (
    <div className="certifications">
      <div className="intro-box">
        <div className="intro-texts">
          <h1 className="intro-title">Certification practice</h1>
          <p className="intro-description">Choose which certification you want to practice</p>
        </div>
        <div className="intro-icon">
          <i className="bi bi-mortarboard"></i>
        </div>
      </div>

      <div className="cert-boxes">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className={cert.available ? "cert-box" : "cert-box disabled"}
          >
            <div className="cert-text">
              <h2 className="cert-name">{cert.name}</h2>
              <p className="cert-description">{cert.description}</p>
            </div>
            {cert.available ? (
              <Link className="cert-link" to={`/home/${cert.id}`}>
                <span>Select</span> <i className="bi bi-arrow-right"></i>
              </Link>
            ) : (
              <span className="cert-link disabled">
                <span>Coming soon</span> <i className="bi bi-hourglass-split"></i>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
