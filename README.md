# CodeRoom – Real-Time Collaborative Code Editor

---

## 1. Overview
**CodeRoom** is a web-based collaborative code editor that enables multiple users to write, edit, and share code together in real time. It features a **Monaco Editor** interface (same as VS Code), supporting live synchronization, typing indicators, and user authentication with profile management.

---

## 2. Features
- Real-time multi-user code editing with instant updates  
- Syntax highlighting and autocompletion via **Monaco Editor**  
- User authentication with signup/login and profile image upload  
- Dark/light theme support synced with global app state (**Redux**)  
- Typing indicators to show active collaborators  
- Fullscreen mode for distraction-free coding  
- Responsive UI with live profile image preview  

---

## 3. Tech Stack

### Frontend
- **React**  
- **Redux** for state management  
- **Monaco Editor** for code editing  
- **Socket.IO client** for real-time communication  
- **CSS & Framer Motion** for styling and animations  

### Backend
- **Node.js** with **Express.js**  
- **Socket.IO server** for real-time events  
- **MongoDB** with **Mongoose** for data storage (user info, sessions)  
- Password hashing and authentication with **crypto** and **JWT**  

### Deployment
- Hosted via cloud platforms (e.g., **Render**, **Netlify**)  

---

## 4. Installation & Setup
1. Clone the repository  
2. Install dependencies:
   - Backend: `npm install` inside `/Backend`  
   - Frontend: `npm install` inside `/Frontend`  
3. Configure environment variables in `.env` for DB connection and JWT secrets  
4. Start backend server:  
   ```bash
   npm run start
   npm run start
``` inside `/Frontend`  

   # or
   node server.js


### live
code-lab-beta-eight.vercel.app
