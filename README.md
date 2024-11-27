# Culinary Compass Recipe Website.

This is a front-end eCommerce web application developed with React for selling fashionable clothes. The project includes different user roles with separate pages for administrators and users, enabling product management for the admin and product viewing for the user.

Table of Contents

1. Project Overview


2. Features


3. Getting Started


4. Installation


5. Project Structure


6. Usage


7. Future Enhancements


---

Project Overview

The application is structured to provide different user experiences for administrators and general users. The core features include a login system that routes users to specific pages based on their roles:

Admin can log in to access a dashboard, where they will eventually be able to add, edit, and delete products.

User can log in to view products listed by the admin.


The theme colors are pink, white, and black, aligning with the brand's fashionable aesthetic.

---

Features

Homepage: Provides navigation to the login pages for both admin and user.

Admin Login: Authenticates admin users and redirects them to the admin dashboard.

User Login: Authenticates general users and redirects them to the product viewing page.

Admin Dashboard: Placeholder page for product management functionality.

User Product Page: Placeholder page for displaying products.

---


Getting Started

To get a local copy up and running, follow these steps.

Prerequisites

Node.js (Version 12 or above)

npm (usually comes with Node.js)

---


Installation

*These are the steps to run the website locally.
1. Clone the repository:

git clone https://github.com/your-username/Shopper_E-commerce_App
cd Shopper_E-commerce_App


2. Install dependencies:

npm install


3. Start the development server:

npm start


4. Open http://localhost:3000 in your browser to view the app.

---

Project Structure


ecommerce-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Assets/
|   |   |   ├──
│   │   ├── Footer/
|   |   |   ├── 
│   │   ├── Hero/
|   |   |   ├── 
│   │   ├── Item/
|   |   |   ├── 
│   │   ├── Navbar/
|   |   |   ├── 
│   │   ├── NewCollections/
|   |   |   ├── 
│   │   ├── NewsLetter/
|   |   |   ├── 
│   │   ├── Offers/
|   |   |   ├── 
│   │   ├── Popular/
|   |   |   ├── 
│   │   └── UserPage.js         // User product viewing page placeholder
│   ├── App.js                  // Main application component with routes
│   ├── App.css
│   ├── index.css
│   └── index.js                // Entry point for the application
└── README.md

---

Usage & Features

1. Homepage: Access the login pages via the homepage (/ route).


2. Admin Login:

Username: admin

Password: admin123

Upon successful login, admin users are redirected to the Admin Dashboard.



3. User Login:

Username: user

Password: user123

Upon successful login, users are redirected to the User Product Page.



4. Admin Dashboard: Placeholder page where admins will manage products.


5. User Product Page: Placeholder page where users will view products.

---

Future Enhancements

Product Management for Admin: Add functionality to allow admins to add, edit, and delete products from the admin dashboard.

Product Display for Users: Display products added by the admin on the user product page.

Enhanced Authentication: Implement secure authentication methods.

Responsive Styling: Ensure the app is fully responsive on all device sizes.

Database Integration: Store user data and product information in a database to make it persistent across sessions.

#
