<h1 align="center">🚀 TASKFLOW</h1>

<p align="center">
  <b>Organize. Assign. Deliver.</b><br>
  <i>Task management & team performance platform for modern teams</i>
</p>

<p align="center">
  <img src="https://socialify.git.ci/Divyanshu11010/TaskManager/image?custom_description=Organize.Assign.Deliver.&description=1&language=1&name=1&owner=1&stargazers=1&theme=Auto" alt="project-banner">
</p>

---

<p align="center">
  <a href="https://github.com/Divyanshu11010/TaskManager"><img src="https://img.shields.io/github/stars/Divyanshu11010/TaskManager?style=for-the-badge&logo=github" alt="Stars"></a>
  <a href="https://github.com/Divyanshu11010/TaskManager/fork"><img src="https://img.shields.io/github/forks/Divyanshu11010/TaskManager?style=for-the-badge&logo=github" alt="Forks"></a>
  <a href="https://task-manager-45y6.vercel.app/"><img src="https://img.shields.io/badge/Live-Demo-blueviolet?style=for-the-badge&logo=vercel" alt="Live Demo"></a>
  <img src="https://img.shields.io/badge/PRs-Welcome-success?style=for-the-badge&logo=github" alt="PRs Welcome">
</p>

---

## 🌍 Live Demo

🔗 **App URL:** [task-manager-45y6.vercel.app](https://task-manager-45y6.vercel.app/)

🧪 **Demo Credentials:** Log in with these accounts to explore all features.

| Role    | Email                | Password    |
| ------- | -------------------- | ----------- |
| 👨‍💼 Admin | `admin@taskflow.dev` | `Admin@123` |
| 👷 User  | `user2@taskflow.dev` | `User2@123` |

---

## 📸 Screenshots

| Landing Page                                                                                                   | Sign Up                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![](https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/landing.png?raw=true) | ![](https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/sign_up.png?raw=true) |

| Admin Dashboard                                                                                                        | Manage Tasks                                                                                                       | Team Members                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| ![](https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/admin_dashboard.png?raw=true) | ![](https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/admin_tasks.png?raw=true) | ![](https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/team_members.png?raw=true) |

| User Dashboard                                                                                                        | Task View                                                                                                         | Task Update                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![](https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/user_dashboard.png?raw=true) | ![](https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/user_tasks.png?raw=true) | ![](https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/user_update_task.png?raw=true) |

| Spreadsheet View                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------ |
| ![](https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/spreadsheet.png?raw=true) |

---

## ✨ Features

✔️ Role-Based Access (Admin / User) via JWT
✔️ Interactive Dashboards (Admin & User)
✔️ Task Assignment, Updates & Completion Tracking
✔️ Team Member Performance Metrics
✔️ Spreadsheet View for Admins
✔️ Secure Authentication with Bcrypt
✔️ Fully Responsive UI with TailwindCSS

---

## 🛠️ Tech Stack

| Category     | Technologies                                    |
| ------------ | ----------------------------------------------- |
| **Frontend** | React, Vite, TailwindCSS, Axios                 |
| **Backend**  | Node.js, Express.js, MongoDB (Mongoose)         |
| **Auth**     | JWT, bcrypt                                     |
| **Hosting**  | Vercel (Frontend), Render / Localhost (Backend) |

---

## ⚙️ Local Setup

> Clone, install dependencies, configure env, and run!

### 🔁 Clone Project

```bash
git clone https://github.com/Divyanshu11010/TaskManager
cd TaskManager
```

### 💡 Install Frontend Dependencies

```bash
cd client/TaskManager
npm install
```

### 🧠 Install Backend Dependencies

```bash
cd ../../backend
npm install
```

### 🔐 Generate JWT Secret

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 📦 Configure Environment Variables

#### `.env` for **Backend**

```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_generated_secret
ADMIN_INVITE_TOKEN=custom_token
SERVER_PORT=5000
CLIENT_URL=http://localhost:5173
```

#### `.env` for **Frontend**

```env
VITE_SERVER_URL=http://localhost:5000
```

### 🚀 Start Development Servers

#### Frontend

```bash
cd client/TaskManager
npm run dev
```

#### Backend

```bash
cd ../../backend
npm run dev
```

---

## 📁 Project Structure

```
TaskManager/
├── backend/             # Node + Express API
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   └── routes/
├── client/TaskManager/src  # React App with TailwindCSS
│   ├── components/
│   ├── pages/
│   └── context/
└── README.md
```

---

## 🚧 Future Improvements

* 📬 Email Notifications on Task Assignment
* 🗓️ Task Deadline Reminders
* 📊 Advanced Analytics Dashboard
* 🧩 Multi-team Support for Organizations

---

## 🤝 Contributing

We love contributions!

```bash
git checkout -b feature-name
git commit -m "Add some feature"
git push origin feature-name
```

Then create a Pull Request 🚀

---

## 👨‍💻 Author

Made with ❤️ by [Divyanshu11010](https://github.com/Divyanshu11010)

---

## ⭐ Support

If you found this project useful, don’t forget to leave a ⭐ and share it!
