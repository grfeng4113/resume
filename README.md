# Portfolio Website

A multi-page responsive portfolio website built as part of Boston University MET CS601 coursework.  
The site showcases academic projects, web development skills, and contact information using semantic HTML5, modern CSS3, JavaScript, and React.

---

## 🌐 Live Demo

🔗 https://grfeng4113.github.io/resume/

---

## 🧩 Features

### 🎨 Modern UI / UX  
- Responsive layout using **Flexbox & CSS Grid**  
- Sticky sidebar for improved navigation  
- Light/Dark theme toggle stored in `localStorage`  
- Clean typography using Google Fonts (Inter)  

### 🖥️ Multi-Page Structure  
Includes:  
- `index.html` – Home page overview  
- `about.html` – Personal introduction & education  
- `projects.html` – Coursework & web development projects (React powered)  
- `contact.html` – Contact form with validation  
- `resume.html` – Online résumé + downloadable PDF  

### ⚙️ JavaScript and React Integration  
- Vanilla JS for navigation toggle, theme toggle, form validation, smooth scroll  
- React-based dynamic rendering on Projects page (filterable project list)  
- Component-based UI, state management, event handling, JSX  

### 📱 Fully Responsive & Accessible  
- Works on desktop, tablet, and mobile screens  
- Semantic HTML5 elements, accessible navigation and form  
- Good contrast, responsive images, friendly layout  

---

## 📁 Project Structure

portfolio-website/
│── index.html
│── about.html
│── projects.html
│── contact.html
│── resume.html
│── README.md
│
├── css/
│ └── styles.css
├── js/
│ └── main.js
└── assets/
├── profile.jpg
├── smart-fridge.png (or other project screenshots)
├── inventory.png
├── portfolio.png
└── resume.pdf (optional)


---

## 🛠️ Tech Stack

| Part | Technologies & Tools |
|------|----------------------|
| Markup & Layout | **HTML5**, **CSS3** (Flexbox, Grid), Media Queries |
| Styling & Theme | Google Fonts, CSS Variables, Dark/Light Theme, Responsive Design |
| Interactivity | **JavaScript**, DOM APIs, Event Handling, LocalStorage |
| Dynamic UI | **React** (via CDN + Babel), ReactDOM, JSX, State & Conditional Rendering |
| Tools | VS Code / any code editor, Git & GitHub, GitHub Pages for deployment |

---

## 📧 Contact Form Validation (in `contact.html`)

- Required fields: Name, Email, Message  
- Email format validation with regex  
- Displays user-friendly messages (error or success)  
- Uses vanilla JS and DOM manipulation (no external library)  

---

## 🚀 Deployment

Deployed using GitHub Pages:  
- Repository: https://github.com/grfeng4113/resume  
- Live site: https://grfeng4113.github.io/resume/  
- No build tools required — plain HTML/CSS/JS + optional React via CDN  

---

## 🎯 How This Meets Course Requirements & Extra Credit

- ✅ Multi-page website (5+ pages)  
- ✅ Semantic HTML5 & accessible structure  
- ✅ Responsive design, layout, styling — meets rubric Layout & Design requirements  
- ✅ Interactivity (navigation, theme toggle, form validation) — meets JS / DOM / Mechanics rubric  
- ✅ Projects list dynamically rendered with React — satisfies extra credit for using modern frontend framework  
- ✅ Clear project documentation in README  