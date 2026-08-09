# EquiVet Practice - Specialist Equine Veterinary Care

EquiVet Practice is a premium, mobile equine veterinary services web application built for a practice operating across Germany. It provides comprehensive information on sports medicine, lameness evaluation, diagnostic imaging, dentistry, and 24/7 emergency care.

## 🚀 Features

- **Modern & Responsive UI**: Built with Tailwind CSS and Framer Motion for a seamless, animated user experience.
- **Internationalization (i18n)**: Support for multiple languages using `next-intl`.
- **Authentication**: Secure user authentication using `next-auth` (v5) and `bcryptjs`.
- **Database Integration**: MongoDB connection via `mongoose` for managing data.
- **Form Handling & Validation**: Robust forms powered by `react-hook-form` and `zod`.
- **Media Management**: Integrated with `cloudinary` for handling images and media.
- **Data Visualization**: Charts and statistics rendered with `recharts`.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Authentication**: [Auth.js (NextAuth)](https://authjs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun
- MongoDB Database (Local or Atlas)
- Cloudinary Account

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd horse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Variables:**
   Create a `.env.local` or `.env` file in the root directory and add the necessary environment variables:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Next Auth
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000

   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable React components (UI, Layout, Home sections).
- `lib/`: Utility functions, database connection, and configurations.
- `public/`: Static assets like images and icons.

## 📄 License

This project is licensed under the MIT License.
