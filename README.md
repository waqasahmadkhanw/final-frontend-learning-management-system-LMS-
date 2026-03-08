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

git clone :FRONTEND: https://github.com/waqasahmadkhanw/final-frontend-learning-management-system-LMS-
git clone :BACKEND:  https://github.com/waqasahmadkhanw/final-mern-stack-learning-management-system

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

👨‍💻 Author.............................................

Student Name: WAQAS AHMAD KHAN
Course: MERN Stack Web Development
Project: Learning Management System (LMS)
![Manage Courses](lms-frontend\public\images\ABOUTPAGE.png)

NOTE:..........................................................
------Having not enough resoures i am unable to deploy paid site  on any hosting provider---------
-------Please hunarmand team Coprate with me------------
-------I am writing steps to DEPLOY A SITE ON VPS(VIRTUAL,PRIVATE,SERVER) SERVER-----------
Steps:
Deploying MERN Stack Project on Hostinger VPS
Preparing the VPS Environment
Setting Up the MongoDB Database
Deploying the Express and Node.js Backend
Deploying the React Frontends
Configuring Nginx as a Reverse Proxy
Setting Up SSL Certificates
1. Preparing the VPS Environment
Get you VPS Hosting here : Hostinger VPS
Log in to Your VPS in Terminal

 ssh root@your_vps_ip
Update and Upgrade Your System

  sudo apt update
  sudo apt upgrade -y
Install Node.js and npm ( if not pre-installed)

  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  \. "$HOME/.nvm/nvm.sh"
  nvm install 22
Install Git

  sudo apt install -y git
2. Setting Up the MongoDB Database
If you want to setup MongoDB on VPS Follow this Guide: click here

3. Deploying the Express and Node.js Backend
Clone Your Backend Repository

 mkdir /var/www
 cd /var/www
git clone :BACKEND:  https://github.com/waqasahmadkhanw/final-mern-stack-learning-management-system
git clone :FRONTEND: https://github.com/waqasahmadkhanw/final-frontend-learning-management-system-LMS-
 cd your-repo/backend
Install Dependencies

 npm install
Create .env file & configure Environment Variables

 nano .env
add environment variables then save and exit (Ctrl + X, then Y and Enter).

Installing pm2 to Start Backend

 npm install -g pm2
 pm2 start server.js --name project-backend
Start Backend on startup

 pm2 startup
 pm2 save
Allowing backend port in firewall

 sudo ufw status
If firewall is disable then enable it using

 sudo ufw enable
 sudo ufw allow 'OpenSSH'
 sudo ufw allow 4000
4. Deploying the React Frontends
Creating Build of React Applications

 cd path-to-your-first-react-app
 npm install
If you have ".env" file in your project

Create .env file and paste the variables

 nano .env
Create build of project

 npm run build
Repeat for the second or mulitiple React app.

Install Nginx

 sudo apt install -y nginx
adding Nginx in firewall

 sudo ufw status
 sudo ufw allow 'Nginx Full'
Configure Nginx for React Frontends

 nano /etc/nginx/sites-available/yourdomain1.com.conf
 server {
    listen 80;
    server_name yourdomain1.com www.yourdomain1.com;

    location / {
        root /var/www/your-repo/frontend/dist;
        try_files $uri /index.html;
    }
}
Save and exit (Ctrl + X, then Y and Enter).

Create a similar file for the second or multiple React app.

 nano /etc/nginx/sites-available/yourdomain2.com.conf
server {
    listen 80;
    server_name yourdomain2.com www.yourdomain2.com;

    location / {
        root /var/www/react-app-2/dist;
        try_files $uri /index.html;
    }
}
Create symbolic links to enable the sites.

ln -s /etc/nginx/sites-available/yourdomain1.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/yourdomain2.com.conf /etc/nginx/sites-enabled/
Test the Nginx configuration for syntax errors.

nginx -t
systemctl restart nginx
5. Configuring Nginx as a Reverse Proxy
Update Backend Nginx Configuration

nano /etc/nginx/sites-available/api.yourdomain.com.conf
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
Create symbolic links to enable the sites.

ln -s /etc/nginx/sites-available/api.yourdomain.com.conf /etc/nginx/sites-enabled/
Restart nginx

systemctl restart nginx
Connect Domain Name with Website
Point all your domain & sub-domain on VPS IP address by adding DNS records in your domain manager

Now your website will be live on domain name

6. Setting Up SSL Certificates
Install Certbot

sudo apt install -y certbot python3-certbot-nginx
Obtain SSL Certificates

certbot --nginx -d yourdomain1.com -d www.yourdomain1.com -d yourdomain2.com -d api.yourdomain.com
Verify Auto-Renewal

certbot renew --dry-run