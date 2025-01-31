# Nurse Educator Portal

## Overview

The **Nurse Educator Portal** is a web-based platform designed to assist in the training, education, and management of nursing staff. It provides various features like nurse call booking, articles, FAQs, reminders, and much more. The portal offers an intuitive layout with a clean user interface to make navigation simple and efficient.

---

## Getting Started

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone <repository-url>
cd nurse-educator-portal
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

This will start the Vite development server.

### 4. Production build

```bash
npm run build
```

### 5. Run the build

```bash
npm run preview
```

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Tech Stack

The **Nurse Educator Portal** is built using modern technologies that offer fast, scalable, and efficient web development. Below is the tech stack used in this project:

### Frontend

- **React**:  
  A popular JavaScript library for building user interfaces, React allows us to create dynamic, component-based structures. It's the core library for rendering UI in this project.
- **Vite**:  
  A fast and modern build tool that provides a better development experience by offering features like fast hot module replacement (HMR), optimized builds, and a smooth workflow.

- **TypeScript**:  
  TypeScript is used for type safety, ensuring better maintainability and fewer runtime errors. It adds static typing to JavaScript, improving code quality and developer experience.

- **SCSS**:  
  SASS/SCSS is used for writing stylesheets with advanced features like variables, nested rules, and mixins. It enhances the CSS development process and makes styling easier to manage.

- **Bootstrap**:  
  Bootstrap is a frontend framework that helps in creating responsive, mobile-first web designs quickly. It is used for styling and responsive layout features.

### Backend & API Interaction

- **Axios**:  
  Axios is a promise-based HTTP client that is used for making API requests. It simplifies the process of sending and receiving data between the frontend and backend.

- **React Query**:  
  React Query is a powerful data-fetching and state management tool for React. It helps in handling server state, data caching, synchronization, and background updates seamlessly.

### Linting & Code Quality

- **ESLint**:  
  ESLint is used for linting the JavaScript/TypeScript code, ensuring code consistency and identifying potential issues during development.

- **Prettier**:  
  Prettier is an opinionated code formatter that ensures consistent code style across the project by automatically formatting code according to a set of rules.

### Development Tools

- **Vite Plugin for React**:  
  A plugin for integrating React with Vite, optimizing the development workflow.

- **SASS**:  
  SASS/SCSS preprocessor enables advanced styling features that make managing styles more efficient and organized.

- **ESLint Plugins for React**:  
  ESLint plugins specifically for React code (like hooks and refresh) help in maintaining best practices while working with React.

## Usage

To run the **Nurse Educator Portal** locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org).

---

## Project Structure

The project follows a modular structure that divides the code into various sections for better maintainability and scalability. Below is the breakdown of the directory structure:

### Main Folders:

- **`.vscode/`**  
  Contains settings specific to Visual Studio Code (IDE configuration).

- **`public/`**  
  Contains static assets such as fonts, media (images, videos), and API folders for features like home, user, and features.

  - `api/`
    - `features/`, `home/`, `user/` — API data definitions for respective features.
  - `fonts/`
    - `frutiger-lt-std-font/` — The font used in the application.
  - `media/`
    - `images/`, `videos/` — Static media files for the portal.

- **`src/`**  
  Contains the main source code for the project.

  - `apis/`  
    Contains code for API calls for features like home, user, and features.
  - `assets/`  
    Stores images and other assets for the frontend.
  - `components/`  
    Modular UI components are categorized into:
    - `common/` — Common components like `ArticleCard`, `ChatWithUs`, `FAQButton`, etc.
    - `layout/` — Layout components such as `NavBar`, `Containers`, and `CoBG`.
    - `utility/` — Utility components such as `Buttons`, `Tabs`, `VideoPlayer`, and error handling components.
  - `features/`  
    Contains feature-specific components and functionality:
    - `ArticleList`, `FAQList`, `NurseCallBooking`, `Reminders`.
  - `globals/`  
    Stores global variables, styles, and constants.
  - `hooks/`  
    Contains custom React hooks for the features (home, user, features).
  - `pages/`  
    Contains the pages and their child components for different sections like `Home`, `Dashboard`, `GettingStarted`, etc.
  - `scss/`  
    Contains all the global SCSS files for the application.

---
