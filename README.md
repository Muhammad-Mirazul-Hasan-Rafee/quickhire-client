# QuickHire - Job Portal (Client)

QuickHire is a full stack job portal web application where users can explore jobs, view job details, and apply for jobs. It includes authentication using Firebase and allows users to manage their job applications.

## 🚀 Features

- User authentication (Login, Signup, Logout) using Firebase
- Display all available jobs
- Job details page
- Apply for jobs using a job application form
- View applied jobs in a table
- Context API used for global authentication state
- Responsive UI

## 🛠 Tech Stack

- React
- React Router
- Context API
- Firebase Authentication
- Axios
- Tailwind CSS / DaisyUI

## ⚙️ Environment Variables

Create a `.env` file in the root of the client project and add the following variables:


VITE_apiKey=AIzaSyArU6Aqw68EXaGQhYcwOeIjoJcL6-x7dNs
VITE_authDomain=quick-hire-6fa81.firebaseapp.com
VITE_projectId=quick-hire-6fa81
VITE_storageBucket=quick-hire-6fa81.firebasestorage.app
VITE_messagingSenderId=366828791519
VITE_appId=1:366828791519:web:5fdf79d8b53def5887eb6a
VITE_measurementId=G-PJXLKYMDWL


These variables are used to initialize Firebase authentication.

## 📦 Installation

Clone the repository:


git clone https://github.com/Muhammad-Mirazul-Hasan-Rafee/quickhire-client.git


Go to the project directory:


cd quichire-client


Install dependencies:


npm install


Run the development server:


npm run dev


The app will run at:


http://localhost:5173


## 📂 Project Structure


src
├─ components
├─ pages
├─ context
├─ routes
├─ firebase
└─ App.jsx


## 🔗 Backend API

The client communicates with the backend server to:

- Fetch jobs
- Submit job applications
- Fetch applied jobs

## 👨‍💻 Author

Hasan Rafee