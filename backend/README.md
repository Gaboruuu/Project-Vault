# ProjectVault Backend API

Express.js backend server for the ProjectVault application, providing RESTful API endpoints for project data management.

## 🚀 Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` with your database credentials.

3. **Start the server**

   ```bash
   npm start
   ```

   Or for development with auto-reload:

   ```bash
   npm run dev
   ```

## 📋 Environment Variables

Create a `.env` file in this directory with the following variables:

```env
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_SERVER=localhost\SQLEXPRESS
DB_NAME=ProjectVault
PORT=5000
```

**⚠️ Important**: Never commit your `.env` file to version control!

## 🔌 API Endpoints

### Projects

#### Get All Projects

```
GET /api/projects
```

Returns a list of all projects.

**Response:**

```json
[
  {
    "ProjectId": 1,
    "title": "Project Name",
    "description": "Project description",
    ...
  }
]
```

#### Get Project by ID

```
GET /api/projects/:id
```

Returns detailed information for a specific project, including GitHub links, showcase images, and technology stack.

**Response:**

```json
{
  "ProjectId": 1,
  "title": "Project Name",
  "description": "Project description",
  "gitLink": "https://github.com/...",
  "language1_name": "JavaScript",
  "language1_version": "ES6",
  ...
}
```

## 🗄️ Database Schema

The API connects to a SQL Server database with the following structure:

- **Projects** - Main project information
- **Github** - GitHub repository details and images
- **Swiper** - Carousel/showcase images
- **Languages** - Links projects to their technology stack
- **Language** - Individual technology details (name, version, logo)

## 🛠️ Tech Stack

- **Express.js** - Web framework
- **MSSQL** - SQL Server database driver
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing

## 📁 Project Structure

```
backend/
├── controllers/
│   └── projectController.js   # Business logic for projects
├── models/
│   └── Project.js             # Database models
├── routes/
│   └── projectRoutes.js       # API route definitions
├── .env.example               # Environment variables template
├── package.json               # Dependencies and scripts
└── server.js                  # Express server setup
```

## 🔒 Security

- Database credentials are stored in environment variables
- CORS is enabled for cross-origin requests
- Trust server certificate option for local SQL Server development
- Input parameters are sanitized using mssql parameterized queries

## 🚧 Development

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon (auto-reload)
- `npm test` - Run tests (to be implemented)

### Adding New Endpoints

1. Create/update controller in `controllers/`
2. Add route in `routes/`
3. Register route in `server.js`

## 📝 Notes

- The server runs on port 5000 by default (configurable via `.env`)
- SQL queries use JOIN operations to fetch related data efficiently
- Error handling returns appropriate error messages to the client

## 🐛 Troubleshooting

### Connection Issues

- Verify SQL Server is running
- Check database credentials in `.env`
- Ensure SQL Server accepts TCP/IP connections
- Verify firewall allows connections to SQL Server

### Port Already in Use

- Change the PORT in `.env` file
- Or kill the process using port 5000

## 📄 License

MIT License - see LICENSE file in the root directory.
