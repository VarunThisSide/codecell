# 🧠 Code-Cell

A modern, full-stack **discussion hub** built with **Next.js**, **Appwrite**, **Zustand**, and **TailwindCSS**.  
Users can post doubts, receive answers, upvote/downvote content, and build a personal reputation based on contributions — all wrapped in a fast, clean, and interactive UI.

---

## 🚀 Features

- ✅ **Post & Answer Questions** – Users can post technical doubts and receive structured, Markdown-supported answers.
- 🔼 **Upvote/Downvote System** – Community-driven voting to highlight useful content.
- 🏆 **User Ranking** – Dynamic ranking based on answers given and upvotes received.
- 🔒 **Secure Auth** – JWT-based authentication via Appwrite ensures secure user sessions.
- 🧠 **Rich Text Editor** – Integrated Markdown editor for writing structured, formatted answers.
- 🎞 **Smooth Animations** – Framer Motion and Magic UI for delightful UI transitions.
- 🗂 **Media Handling** – Upload and manage attachments in posts using Appwrite Storage.
- ⚙️ **State Management** – Lightweight and scalable state control with Zustand.
- 📦 **Typed, Structured Backend** – Appwrite Database handles queries, relationships, and user data cleanly.

---

## 🛠️ Tech Stack

| Frontend         | Backend / Services       | Styling       | Libraries / Utils       |
|------------------|---------------------------|----------------|--------------------------|
| Next.js (App Router) | Appwrite (Auth, DB, Storage) | TailwindCSS   | Zustand (state management) |
| React            | JWT Authentication        | Magic UI       | Framer Motion (animations) |
| TypeScript       | Appwrite SDK (client)     |                | Markdown Editor          |

---

## 📁 Project Structure

├── app/ # App Router routes
├── components/ # UI components (RTE, UI kit, etc.)
├── lib/ # Utilities (e.g., cn, slugify)
├── store/ # Zustand stores
├── styles/ # Global and component styles
├── public/ # Static assets
├── .env.local # Environment variables
└── README.md


---

## 🧪 Running Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/code-cell.git
   cd code-cell

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add the following:

    ```env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
    NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
    NEXT_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id

4. **Start the dev server:**
   ```bash
   npm run dev

## 📦 Deployment
    This project is optimized for deployment on Vercel.
    Set the same environment variables in your Vercel project settings before deploying.
