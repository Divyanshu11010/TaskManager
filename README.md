<h1 align="center" id="title">TASKFLOW</h1>

<p align="center"><img src="https://socialify.git.ci/Divyanshu11010/TaskManager/image?custom_description=Organize.Assign.Deliver.&amp;description=1&amp;language=1&amp;name=1&amp;owner=1&amp;stargazers=1&amp;theme=Auto" alt="project-image"></p>

<p id="description">This full-stack platform enables project managers to efficiently assign manage and evaluate team member performance using an interactive dashboard. Team members receive assigned tasks and can provide updates upon completion giving leaders real-time progress visibility.</p>

<h2>🚀 Demo</h2>

- [https://task-manager-45y6.vercel.app/](https://task-manager-45y6.vercel.app/)
- Demo Account Login :
  - Admin : Email = admin@taskflow.dev, Password = Admin@123
  - User : Email = user2@taskflow.dev, Password = User2@123

<h2>Project Screenshots:</h2>

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/landing.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/sign_up.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/admin_dashboard.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/task_list.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/admin_tasks.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/admin_update_task.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/team_members.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/user_dashboard.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/user_tasks.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/user_update_task.png?raw=true" alt="project-screenshot" width="1080" height="720/">

<img src="https://github.com/Divyanshu11010/TaskManager/blob/main/client/TaskManager/snapshots/spreadsheet.png?raw=true" alt="project-screenshot" width="1080" height="720/">

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   JWT Authorized Access (RBAC)
*   Dashboard for members performance evaluation
*   Managers can assign manage tasks to members
*   Members can update assigned task to them
*   Real time tracking of members work

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone Project</p>

```
git clone https://github.com/Divyanshu11010/TaskManager
```

<p>2. Open Root Directory</p>

```
cd TaskManager
```

<p>3. Install Frontend Requirements</p>

```
cd client/TaskManager; npm install
```

<p>4. Install Backend Requirements</p>

```
cd backend; npm install
```

<p>5. Generate JWT Secret</p>

```
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

<p>6. Start Frontend</p>

```
cd client/TaskManager; npm run dev
```

<p>7. Start Backend</p>

```
cd backend; npm run dev
```

<p>8. Update Server env</p>

```
MONGO_URI JWT_SECRET ADMIN_INVITE_TOKEN SERVER_PORT CLIENT_URL
```

<p>9. Update Frontend env</p>

```
VITE_SERVER_URL
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   MongoDB
*   Express
*   React
*   Node.js
*   Axios
*   jwt
*   bcrypt
*   Tailwindcss