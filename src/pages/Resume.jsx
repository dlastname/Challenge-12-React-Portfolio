import React from "react";
import { Button } from "react-bootstrap";

// TODO Make this link download a PDF instead of a word doc
const resumePDF =
  "https://drive.google.com/uc?export=download&id=1JQ8TtCyAschr7uFt0Jk2rv2OcL35Lb_l";

export default function Resume() {
  return (
    <div className="container mt-5 p-4 border rounded shadow-lg bg-white">
      <h1 className="text-center mb-4 border-bottom pb-2">Resume</h1>

      <section className="mb-4">
        <h3 className="border-bottom pb-2">
          Technical Skills & Programming Languages
        </h3>
        <ul className="list-unstyled">
          <li>
            <strong>Languages:</strong> JavaScript, HTML, CSS, SQL, NoSQL
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> React, Node.js, Express
          </li>
          <li>
            <strong>Databases:</strong> PostgreSQL, MongoDB
          </li>
          <li>
            <strong>Version Control:</strong> Git, GitHub
          </li>
          <li>
            <strong>Development Tools:</strong> VS Code, Postman, Docker
          </li>
          <li>
            <strong>Soft Skills:</strong> Team Leadership, Client Communication,
            Problem-Solving
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="border-bottom pb-2">Professional Experience</h3>
        <ul className="list-unstyled">
          <li>
            <strong>Digital Space Marketing</strong> – Account Executive (Sep
            2024 – Dec 2024)
            <p>
              Led client acquisition efforts, developed marketing strategies,
              and collaborated with development teams to optimize digital
              solutions.
            </p>
          </li>
          <hr />
          <li>
            <strong>New Relic, Inc.</strong> – Inside Sales Representative (Apr
            2023 – Oct 2023)
            <p>
              Advised businesses on performance monitoring solutions,
              translating complex technical concepts into actionable insights.
            </p>
          </li>
          <hr />
          <li>
            <strong>Menufy</strong> – Inside Sales Representative (Feb 2024 –
            Aug 2024)
            <p>
              Consulted with restaurant owners to implement digital ordering
              solutions, ensuring seamless integration with existing systems.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="border-bottom pb-2">Education & Certifications</h3>
        <ul className="list-unstyled">
          <li>
            <strong>Full Stack Web Development Bootcamp</strong> – UCF & Ed-X
            (Expected Completion: 2025)
          </li>
          <li>
            <strong>Bachelor’s in Business</strong> - University of Central
            Florida
          </li>
        </ul>
      </section>

      <section className="text-center mt-5">
        <a
          className="btn btn-primary btn-lg"
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF Resume
        </a>
      </section>
    </div>
  );
}
