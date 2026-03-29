# Squaretype Blog

A full-stack MERN blog platform with JWT authentication and responsive UI.

## Tech Stack

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- BCrypt password hashing

**Frontend:**
- React 18
- React Router v6
- Sass/SCSS
- Axios

## Prerequisites

- Node.js >= 24.4.0
- npm >= 11.9.0
- MongoDB (local or Atlas)

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/alexhcj/squaretype.git
cd squaretype
```

2. **Install all dependencies**
```bash
npm install-all
```

3. **Environment Setup**

   For backend create `.env` file in `/squaretype/config` directory:
```env
# Server Configuration
PORT=5000

# Database
DB_NAME=db_name
DB_SERVER=cluster_name
DB_USER=user_name
DB_PASSWORD=user_password

# JWT
JWT_SECRET=secret_string
JWT_EXPIRES_IN=expiration_date

# API
API_URL=http://localhost:
API_PREFIX=api
API_VERSION=v1
```

   For client create `.env` file in `/squaretype/client` directory:
```env
REACT_APP_BASE_URL=http://localhost:3000
REACT_APP_API_URL=http://localhost:5000/api/v1
```

## Running the Application

**Development mode (both servers):**
```bash
npm run dev
```

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

**Production:**
```bash
npm start
```

## Project Structure
```
squaretype/
├── client/          # React frontend
│   ├── public/
│   └── src/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── models/          # MongoDB models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── index.js         # Server entry point
└── package.json
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run both backend and frontend |
| `npm run server` | Run backend with nodemon |
| `npm run client` | Run frontend dev server |
| `npm start` | Run production server |


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'add: amazing-feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC