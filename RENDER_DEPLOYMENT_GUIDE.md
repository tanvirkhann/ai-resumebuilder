# 🚀 Render Deployment Guide - Resume Builder

## 📋 Prerequisites
- GitHub account with your code pushed
- Render account (free tier works)
- MongoDB Atlas account (for database)
- OpenAI API key
- ImageKit account

---

## 🔧 Step 1: Backend Deployment (Server)

### 1.1 Create Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:

```
Name: resume-builder-api
Region: Singapore (or closest to you)
Branch: main
Root Directory: server
Runtime: Node
Build Command: npm install
Start Command: npm start
Instance Type: Free
```

### 1.2 Add Environment Variables

Click **"Environment"** tab and add these variables:

```
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_strong_random_secret_key
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
NODE_VERSION=20.11.0
```

> **Important:** Replace all `your_*` values with actual credentials

### 1.3 Deploy Backend

1. Click **"Create Web Service"**
2. Wait for deployment (5-10 minutes)
3. Copy your backend URL (e.g., `https://resume-builder-api.onrender.com`)

---

## 🌐 Step 2: Frontend Deployment (Client)

### Option A: Deploy on Netlify (Recommended for Frontend)

#### 2.1 Install Netlify CLI (Optional)
```bash
npm install -g netlify-cli
```

#### 2.2 Deploy via Netlify Dashboard

1. Go to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect GitHub repository
4. Configure build settings:

```
Base directory: client
Build command: npm run build
Publish directory: client/dist
```

#### 2.3 Add Environment Variables in Netlify

Go to **Site settings** → **Environment variables** → **Add a variable**:

```
VITE_BASE_URL=https://your-backend-url.onrender.com
```

Replace with your actual Render backend URL from Step 1.3

#### 2.4 Deploy

Click **"Deploy site"** and wait for build to complete.

---

### Option B: Deploy Frontend on Render

#### 2.1 Create Static Site on Render

1. Go to Render Dashboard
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository
4. Configure:

```
Name: resume-builder-frontend
Branch: main
Root Directory: client
Build Command: npm install && npm run build
Publish Directory: client/dist
```

#### 2.2 Add Environment Variables

```
VITE_BASE_URL=https://your-backend-url.onrender.com
```

#### 2.3 Add Redirect Rules

Create `client/public/_redirects` file:

```
/*    /index.html   200
```

This ensures React Router works properly.

---

## 🗄️ Step 3: MongoDB Atlas Setup

### 3.1 Create Database

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user with password
4. Whitelist IP: `0.0.0.0/0` (Allow from anywhere)

### 3.2 Get Connection String

1. Click **"Connect"** → **"Connect your application"**
2. Copy connection string
3. Replace `<password>` with your database user password
4. Replace `<dbname>` with `resume-builder`

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/resume-builder?retryWrites=true&w=majority
```

Use this as `MONGODB_URI` in Render environment variables.

---

## 🔑 Step 4: Get API Keys

### 4.1 OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create new API key
3. Copy and save it (you won't see it again)

### 4.2 ImageKit Credentials

1. Go to [ImageKit Dashboard](https://imagekit.io/dashboard)
2. Get:
   - Public Key
   - Private Key
   - URL Endpoint

### 4.3 JWT Secret

Generate a random secret key:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Or use any strong random string (min 32 characters).

---

## ✅ Step 5: Verify Deployment

### 5.1 Test Backend

Visit your backend URL:
```
https://your-backend-url.onrender.com/
```

You should see: `Server is live...`

### 5.2 Test Frontend

1. Visit your frontend URL
2. Try to sign up / login
3. Create a resume
4. Test AI features

---

## 🐛 Common Issues & Fixes

### Issue 1: "Cannot connect to database"
**Fix:** Check MongoDB connection string and whitelist IP `0.0.0.0/0`

### Issue 2: "CORS Error"
**Fix:** Ensure backend `cors()` is enabled (already done in your code)

### Issue 3: "Environment variables not working"
**Fix:** 
- For Vite variables, use `VITE_` prefix
- Redeploy after adding environment variables

### Issue 4: "Build failed - dependency error"
**Fix:** Already fixed! Removed `"resume-builder": "file:.."` dependency

### Issue 5: "404 on page refresh"
**Fix:** 
- Netlify: `netlify.toml` already configured ✅
- Render: Add `_redirects` file in `client/public/`

### Issue 6: "Render free tier sleeps"
**Fix:** 
- Free tier sleeps after 15 min inactivity
- First request takes 30-60 seconds to wake up
- Upgrade to paid tier for always-on service

---

## 🎯 Quick Checklist

Before deploying, ensure:

- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas cluster created
- [ ] All API keys obtained
- [ ] Environment variables ready
- [ ] `package.json` files fixed (no local dependencies)
- [ ] Backend deployed on Render
- [ ] Frontend deployed on Netlify/Render
- [ ] Environment variables added to both services
- [ ] Tested signup/login
- [ ] Tested resume creation
- [ ] Tested AI features

---

## 📞 Need Help?

If deployment still fails, check:
1. **Build logs** on Render/Netlify dashboard
2. **Browser console** for frontend errors
3. **Network tab** to see API calls

Common error locations:
- Build errors → Check `package.json` and dependencies
- Runtime errors → Check environment variables
- API errors → Check backend logs on Render

---

## 🎉 Success!

Once deployed:
- Backend URL: `https://your-backend.onrender.com`
- Frontend URL: `https://your-frontend.netlify.app`

Share your resume builder with the world! 🚀
