# ProjectVault 🚀

A full-stack portfolio showcase application built with React and Node.js, designed to display and manage project information in an elegant and interactive way.

## 📋 Overview

ProjectVault is a modern portfolio platform that allows users to browse through projects with rich details including descriptions, technologies used, GitHub links, and interactive image showcases. The application features a clean, responsive design with smooth animations and intuitive navigation.

## ✨ Features

- **Interactive Project Gallery**: Browse projects with beautiful card layouts and hover effects
- **Detailed Project Views**: Each project includes comprehensive information:
  - Project descriptions and highlights
  - Technology stack with version details
  - GitHub repository links
  - Image carousels/showcases
  - Language and framework information
- **Responsive Design**: Fully responsive interface that works seamlessly across devices
- **Modern UI Components**: Includes custom components like:
  - Coverflow displays
  - Slideshow presentations
  - Interactive accordions
  - Smooth scroll animations
- **RESTful API Backend**: Express.js backend with SQL Server database integration

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - UI framework
- **React Router DOM 6.22.2** - Client-side routing
- **Material-UI (MUI)** - Component library
- **Emotion** - CSS-in-JS styling
- **Mantine** - Additional UI components
- **Swiper 11.1.1** - Modern touch slider
- **Axios** - HTTP client
- **Styled Components** - CSS styling

### Backend

- **Node.js** - Runtime environment
- **Express.js 4.19.2** - Web framework
- **MSSQL 10.0.4** - SQL Server database driver
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing

## 📁 Project Structure

```
ProjectVault/
├── backend/                 # Backend API server
│   ├── controllers/        # Request handlers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── server.js          # Express server setup
├── projectvault/          # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── assets/        # Images, icons, logos
│       ├── commons/       # Reusable components
│       │   ├── components/
│       │   └── css/
│       └── pages/         # Page components
│           ├── about page/
│           ├── home page/
│           └── projects page/
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- SQL Server (for database)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ProjectVault.git
   cd ProjectVault
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

3. **Set up the Backend**

   ```bash
   cd backend
   npm install
   ```

4. **Configure environment variables**

   - Copy `.env.example` to `.env` in the backend folder

   ```bash
   cp .env.example .env
   ```

   - Update the `.env` file with your database credentials:

   ```env
   DB_USER=your_database_username
   DB_PASSWORD=your_database_password
   DB_SERVER=localhost\SQLEXPRESS
   DB_NAME=ProjectVault
   PORT=5000
   ```

5. **Set up the Frontend**
   ```bash
   cd ../projectvault
   npm install
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   npm start
   ```

   The API will be available at `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd projectvault
   npm start
   ```
   The application will open at `http://localhost:3000`

## 📊 Database Setup

The application uses SQL Server with the following main tables:

- `Projects` - Main project information
- `Github` - GitHub repository details and images
- `Swiper` - Showcase images for project carousels
- `Languages` - Programming languages and frameworks used
- `Language` - Individual language details with versions and logos

_Note: Database schema and migration scripts can be provided upon request._

## 🔌 API Endpoints

- `GET /api/projects` - Fetch all projects
- `GET /api/projects/:id` - Fetch specific project details including related data (GitHub, images, languages)

## 🎨 Key Components

- **Coverflow**: 3D image carousel effect
- **SlideShow**: Automated image slideshow
- **Header/Footer**: Navigation and site information
- **ProjectDetail**: Comprehensive project information display
- **AboutPV**: About Project Vault section
- **ShowcasePrj**: Project showcase carousel

## 📝 Available Scripts

### Frontend (in `projectvault/` directory)

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

### Backend (in `backend/` directory)

- `npm start` - Starts the Express server
- `npm test` - Runs tests

## 🔒 Security Notes

- Database credentials are stored in environment variables (never committed to version control)
- CORS is enabled for cross-origin requests
- Trust server certificate option is enabled for local SQL Server development

## 🤝 Contributing

This is a portfolio project. If you have suggestions or find issues, please feel free to open an issue or contact me directly.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Gaboruu**

## 📸 Screenshots

_Screenshots and demo GIFs will be added here to showcase the application's features and user interface._

---

## 🌟 Acknowledgments

- Material-UI for the excellent component library
- Swiper.js for the smooth carousel functionality
- Create React App for the initial project setup

## 📞 Contact

For interviews or inquiries, please reach out through:

- GitHub: [Your GitHub Profile]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn Profile]

---

**Note for Interviewers**: This project demonstrates full-stack development capabilities including:

- Modern React development with hooks and component composition
- RESTful API design and implementation
- Database design and SQL queries
- Responsive web design
- State management and routing
- Integration of third-party libraries
- Environment configuration and security best practices
