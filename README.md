🎓 Learning Management System (LMS) — Frontend

A modern React.js frontend for a Full Stack MERN Learning Management System.
This application allows students, instructors, and administrators to interact with the LMS platform through a clean and responsive interface.

The frontend communicates with the Node.js + Express backend APIs to manage users, courses, enrollments, and analytics.

 Technologies Used

Frontend technologies used in this project:

⚛️ React JS

🧭 React Router DOM

📡 Axios

🎨 React Bootstrap

🔔 React Toastify

🔐 JWT Authentication (via backend)

⚙️ Context API (AuthContext)

📂 Frontend Project Structure
frontend
│

best frontyend ✅  FINAL FRONTEND FOLDER STRUCTURE 
frontend/
│
├── public/
│
├── src/
│   │
│   ├── api/                         # Axios API service layer
│   │   ├── axiosInstance.js
│   │   ├── user.api.js
│   │   ├── course.api.js
│   │   ├── lesson.api.js
│   │   ├── enrollment.api.js
│   │   └── admin.api.js
│   │
│   ├── context/                     # Global state management
│   │   └── AuthContext.jsx
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── common/                  # Reusable UI components
│   │   │   ├── Loader.jsx
│   │   │   ├── ConfirmModal.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   └── roleRoutes/              # Role-based route guards
│   │       ├── InstructorRoute.jsx
│   │       └── AdminRoute.jsx
│   │
│   ├── pages/
│   │   │
│   │   ├── public/                  # Public pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── CourseList.jsx
│   │   │   ├── CourseDetails.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── student/
│   │   │   ├── StudentDashboard.jsx
│   │   │   ├── MyCourses.jsx
│   │   │   └── LessonDetails.jsx
│   │   │
│   │   ├── instructor/
│   │   │   ├── InstructorDashboard.jsx
│   │   │   ├── CreateCourse.jsx
│   │   │   ├── EditCourse.jsx
│   │   │   ├── ManageCourses.jsx
│   │   │   ├── CreateLesson.jsx
│   │   │   └── ManageLessons.jsx
│   │   │
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── ManageUsers.jsx
│   │   │   ├── ManageCourses.jsx
│   │   │   ├── CreateInstructor.jsx
│   │   │   └── Analytics.jsx
│   │   │
│   │   └── profile/
│   │       ├── UpdateProfile.jsx
│   │       └── ChangePassword.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── styles/
│   │   └── custom.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
👥 User Roles

The LMS supports three different roles:

👨‍🎓 Student

Students can:

Register and Login

Browse all courses

View course details

Enroll in courses

View enrolled courses

👨‍🏫 Instructor

Instructors can:

Create new courses

Manage their courses

Edit course details

Upload lessons

🛠 Admin

Admins can:

View system analytics

Manage users

Manage courses

Create instructor accounts

📄 Implemented Pages
🌍 Public Pages

Home Page

About Page

Course Listing Page

Course Detail Page

Login Page

Register Page

👨‍🎓 Student Dashboard

My Courses

Profile Page

👨‍🏫 Instructor Dashboard

Create Course

Manage Courses

Upload Lessons

🛠 Admin Dashboard

Admin Analytics Dashboard

Manage Users

Manage Courses

Create Instructor

🔗 Backend API Integration

Frontend communicates with backend using Axios APIs.

Example API usage:

import axiosInstance from "./axiosInstance";

export const getAllCourses = () => {
  return axiosInstance.get("/courses");
};

export const enrollCourse = (courseId) => {
  return axiosInstance.post("/enroll", { courseId });
};
🔐 Authentication Flow

Authentication is handled using JWT tokens.

Steps:

1️⃣ User logs in
2️⃣ Backend returns JWT token
3️⃣ Token stored in localStorage
4️⃣ Axios sends token in Authorization header

Example:

Authorization: Bearer TOKEN

Protected routes are controlled through AuthContext.

📸 Frontend Screenshots

Recommended screenshots for the project submission.

Public Pages

Home Page

About Page

Course Listing

Course Details

Authentication

Login Page

Register Page

Dashboards

Student Dashboard

Instructor Dashboard

Admin Dashboard

Admin Panels

Manage Users

Manage Courses

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/yourusername/lms-project.git

Go to lms-frontend folder:

cd lms-frontend

Install dependencies:

npm install

Run development server:

npm run dev

Frontend will run on:

http://localhost:5173
🌐 Environment Variables

Create a .env file in the frontend folder:

VITE_API_BASE_URL=http://localhost:8000/api
📊 Features

✔ Role-based UI
✔ Responsive design
✔ Course enrollment system
✔ Instructor course management
✔ Admin analytics dashboard
✔ Toast notifications
✔ Protected routes

🧪 Testing

Test the frontend by:

Registering a new user

Logging in as student

Enrolling in courses

Creating courses as instructor

Managing users as admin

📦 Deployment 

Frontend can be deployed using:

<!-- Vercel

Netlify

Render -->
hostinger

Example build command:

npm run build
📜 License

This project is created for educational purposes as part of the MERN Stack Web Development Final Project Supported by HUNARMAND PUNJAB.

👨‍💻 Author

Student Name: WAQAS AHMAD KHAN
Course: MERN Stack Web Development
Project: Learning Management System (LMS)
