📊 Sales Dashboard – Next.js

A modern Sales Dashboard application built using Next.js 15, TypeScript, Tailwind CSS, and Atomic Design principles.
The dashboard visualizes yearly sales data (2022–2024) with interactive charts and filters.

🚀 Project Overview

This project demonstrates how to:
Structure a frontend project using Atomic Design (Atoms, Molecules, Organisms)
Build reusable UI components
Visualize sales data using charts
Apply filters to dynamically update data
Create a clean and modern dashboard UI
The application displays sales performance using:
Summary cards
Bar / Line / Pie charts
User-defined sales filters

🧱 Tech Stack Used

Next.js 15 (App Router)
TypeScript
Tailwind CSS
Recharts (for charts)
React Hooks
Git & GitHub

🧩 Project Structure (Atomic Design)
app/
 ├── components/
 │   ├── atoms/
 │   │   ├── Button.tsx
 │   │   └── Input.tsx
 │   ├── molecules/
 │   │   ├── FilterInput.tsx
 │   │   ├── SalesCard.tsx
 │   │   └── ChartToggle.tsx
 │   └── organisms/
 │       ├── DashboardLayout.tsx
 │       └── SalesChart.tsx
 │
 ├── dashboard/
 │   └── page.tsx
 │
 ├── data/
 │   └── salesData.ts
 │
 ├── layout.tsx
 ├── page.tsx
 └── globals.css

📈 Features Implemented
✅ Core Features

Sales data for 2022, 2023, 2024
Responsive dashboard layout
Atomic design-based component structure
Sales summary cards
Chart visualization using Recharts

✨ Enhancements

Custom sales threshold filter
Multiple chart types (Bar, Line, Pie)
Smooth gradient background (blue / green / yellow)
Clean, modern UI inspired by professional dashboards

📊 Data Used

Sales values are derived from Kaggle datasets
Data is preprocessed externally
Final values are stored locally in salesData.ts as mock data for frontend usage

Example:
export const salesData = [
  { year: 2022, value: 1373574 },
  { year: 2023, value: 1510931 },
  { year: 2024, value: 1694075 },
];

⚙️ How to Setup the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/YOUR_USERNAME/sales-dashboard.git
cd sales-dashboard

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev

4️⃣ Open in Browser
http://localhost:3000/dashboard

🌐 Live Demo

👉 Deployed on Vercel

https://sales-dashboard.vercel.app/dashboard

📌 What I Learned
Proper usage of Next.js App Router
Component reusability using Atomic Design
Handling client components and hydration issues
Data visualization using Recharts
Project structuring for real-world dashboards

📄 Future Improvements
API-based live data fetching
Authentication & protected routes
Download reports as CSV/PDF
Dark mode toggle

👤 Author

Parnavi Thalkar
Frontend / UI Developer
GitHub: https://github.com/parnavithalkar