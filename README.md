# Task Tracking Tool

## Description
Task Tracking Tool is a simple web application that imitates Jira. It allows users to manage tasks efficiently. Each task has a description, assignee, creator, estimates, and comments.

## Tech Stack
- **Frontend:** React + Vite, JavaScript, React Router DOM
- **Testing:** Vitest, JSDOM, React Testing Library
- **Backend:** SoftUni Practice Server ([GitHub Repository](https://github.com/softuni-practice-server/softuni-practice-server))
- **Package Manager:** npm

## Installation & Setup
### Prerequisites
- Node.js (latest stable version recommended)
- npm (comes with Node.js)

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd task-tracking-tool
   ```
2. Install dependencies for the client:
   ```sh
   cd client
   npm install
   ```
3. In a separate terminal, navigate to the `server` directory and start the backend:
   ```sh
   cd server
   node server.js
   ```
4. Start the client:
   ```sh
   npm run dev
   ```

## Features
- User authentication (register, login, logout)
- Task management:
  - Create tasks
  - Edit tasks
  - Assign tasks
  - Add comments
- Dashboard to view tasks
- Prepopulated data for testing (available in `server/data`)

## Project Structure
```
/task-tracking-tool
│── client/
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── styles.css
│   ├── test-config/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│── server/
│   ├── server.js
│   ├── data/
│── README.md
```

## Usage Instructions
1. Register an account or log in.
2. View the dashboard with a list of tasks.
3. Create new tasks, edit existing tasks, and assign them to users.
4. Add comments to tasks.

## Environment Variables
No `.env` configuration is required.

## Contribution
Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute.

## License
This project is licensed under the MIT License.

