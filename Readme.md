release-management/
├── server/
│   ├── controllers/
│   │   ├── releaseController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Release.js
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/
│   │   ├── releaseRoutes.js
│   │   ├── taskRoutes.js
│   │   └── userRoutes.js
│   ├── .env
│   └── server.js
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginForm.js
│   │   │   ├── TaskBoard.js
│   │   │   └── ReleaseForm.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── Login.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
├── .gitignore
├── package.json
└── README.md
