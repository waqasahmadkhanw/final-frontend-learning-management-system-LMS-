import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">About Our Learning Management System</h2>
      <p className="text-muted">       
Our Learning Management System (LMS) is a modern, full-stack web application built with industry-standard MERN technologies (MongoDB, Express, React, Node.js). It is designed to provide a seamless online learning experience for students, instructors, and administrators.
For Students:
Students can browse and enroll in courses, track their learning progress, and manage their profiles from a clean and intuitive dashboard. The platform makes learning engaging, organized, and accessible from any device.
For Instructors:
Instructors can create, edit, and manage courses with lessons, upload learning materials, and interact with students easily. Our LMS ensures that teaching is efficient and structured.
For Administrators:
Admins have full control over the platform—they can manage users, oversee courses, and access analytics to make data-driven decisions. Role-based access ensures security and proper control over the system.
Technology & Features:
Frontend: React JS, React Router, Axios, Bootstrap / React Bootstrap
Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Authentication & Security: JWT-based login, password hashing with Bcrypt, protected routes, role-based access
Additional Features: RESTful APIs, responsive UI, real-world project structure, clean dashboards
Our Mission:
We aim to bridge the gap between students and instructors by providing a secure, user-friendly, and scalable platform for online learning. Whether you’re learning new skills or teaching courses, our LMS offers a smooth and professional experience.

Why Choose Our LMS?
Intuitive dashboards for all user roles
Secure authentication and role-based authorization
Easy course creation and management
Accessible on desktop and mobile devices
Real-world, industry-standard architecture
      </p>
<h2>Submitted By:Waqas Ahmad khan</h2>
<h4>I confirm that this project is my own work and I have not copied it from any unauthorized source.
Student Name:_waqasahmad_
 Signature: waqas___ahmad
 Date:10-03-2026</h4>
    </Container>
  );
};

export default About;