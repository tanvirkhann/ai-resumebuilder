# Resume Builder

A modern, AI-powered resume builder application that helps users create professional resumes with multiple templates and AI-enhanced content.

## Features

- 🎨 **Multiple Templates**: Choose from Classic, Modern, Minimal, and Minimal-Image templates
- 🤖 **AI Enhancement**: Enhance professional summaries and job descriptions with AI
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔒 **User Authentication**: Secure login and registration system
- 🌐 **Public Sharing**: Share your resume with a public link
- 💾 **Auto-save**: Automatically saves your progress
- 📥 **PDF Download**: Download your resume as a PDF

## Tech Stack

### Frontend
- React + Vite
- Redux Toolkit (State Management)
- React Router DOM (Navigation)
- Tailwind CSS (Styling)
- Axios (API calls)
- Lucide React (Icons)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- OpenAI API (AI enhancements)
- ImageKit (Image hosting)
- Multer (File uploads)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- OpenAI API key
- ImageKit account

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd resume-builder
   ```

2. **Install dependencies**
   
   For the client:
   ```bash
   cd client
   npm install
   ```
   
   For the server:
   ```bash
   cd server
   npm install
   ```

3. **Environment Variables**
   
   Create a `.env` file in the `server` directory with the following:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_MODEL=gpt-4o-mini
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```
   
   Create a `.env` file in the `client` directory with:
   ```env
   VITE_BASE_URL=http://localhost:3000
   ```

4. **Run the application**
   
   Start the server:
   ```bash
   cd server
   npm run server
   ```
   
   Start the client (in a new terminal):
   ```bash
   cd client
   npm run dev
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Sign up / Login**: Create an account or log in
2. **Create Resume**: Click "Create New Resume" on the dashboard
3. **Fill Details**: Add your personal information, experience, education, projects, and skills
4. **Choose Template**: Select from available templates
5. **AI Enhancement**: Use AI to enhance your professional summary and job descriptions
6. **Save & Share**: Save your resume and share it publicly if desired
7. **Download**: Download your resume as a PDF

## Project Structure

```
resume-builder/
├── client/                 # React frontend
│   ├── src/
│   │   ├── app/           # Redux store
│   │   ├── assets/        # Static assets
│   │   ├── components/    # React components
│   │   ├── configs/       # Configuration files
│   │   └── pages/         # Page components
│   └── package.json
├── server/                # Express backend
│   ├── configs/          # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- OpenAI for AI enhancement capabilities
- ImageKit for image hosting
- All the open-source libraries used in this project
