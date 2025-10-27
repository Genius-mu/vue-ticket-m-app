# 🎫 Ticket Management App (Vue.js Version)

A simple yet powerful **Ticket Management System** built with **Vue.js 3**, **TailwindCSS**, and **Vite**.  
This project allows users to **sign up, log in, create, update, and delete tickets**, all stored in **localStorage**.  
It was built as part of my **HNG Internship Frontend Task**.

---

## 🚀 Features

- 🔐 **Full Authentication Flow**
  - Signup and Login pages
  - Password match validation
  - Show/Hide password toggle
  - Session-based route protection using localStorage
- 🎟️ **Ticket Management**
  - Create, Read, Update, Delete (CRUD) tickets
  - Inline editing and filtering by status
  - Real-time dashboard statistics (Total, Open, In Progress, Closed)
- 💾 **Persistent Storage**
  - All data saved automatically in localStorage
  - Reactive global state shared between Dashboard and Tickets pages
- 💅 **UI**
  - Styled with TailwindCSS
  - Clean and responsive layout

---

## 🧱 Project Structure

src/
├── assets/ # Images, icons, wave background, etc.
├── components/ # Shared components (Header, ProtectedRoute, etc.)
├── composables/ # Custom hooks (useAuth.js, useTickets.js)
├── pages/ # All main pages (Landing, Login, Signup, Dashboard, Tickets)
├── router/ # Vue Router setup and route guards
└── main.js # App entry file

---

## 🧰 Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)

---

## ⚙️ Setup and Installation

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone this repository
git clone https://github.com/Genius-mu/vue-ticket-m-app.git

# 2️⃣ Move into the project directory
cd ticket-management-vue

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev

## 👨‍💻 Author

**Mustapha Adegbite** – Frontend Developer & HNG Intern

🔗 [LinkedIn](https://www.linkedin.com/in/mustaphaadegbite/) | [GitHub](https://github.com/Genius-mu) | [Twitter](https://x.com/mustaphAdegbite)

---

## 🏁 Acknowledgements

Special thanks to the **HNG Internship** for providing hands-on learning tasks that sharpen real-world development skills.
```
