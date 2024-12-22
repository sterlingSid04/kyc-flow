Personal Details Form with Astro, React, and Tailwind CSS
This project is a demonstration of a personal details form built with Astro, React, and Tailwind CSS. The form collects basic personal details and demonstrates the usage of API calls with Mocky and localStorage for storing form data temporarily.

🚀 Getting Started
To get started with this project, follow these steps:

1. Clone the Repository
First, clone the repository to your local machine:

sh
Copy code
git clone <your-repository-url>
2. Install Dependencies
Navigate into the project directory and install the necessary dependencies:

sh
Copy code
cd <project-directory>
npm install
3. Start the Development Server
Once the dependencies are installed, you can start the development server:

sh
Copy code
npm run dev
The app will be available at http://localhost:4321.

4. Building for Production
To build the project for production:

sh
Copy code
npm run build
5. Preview the Build
Preview the production build locally:

sh
Copy code
npm run preview
🧑‍💻 Project Overview
This project is structured as follows:

text
Copy code
/
├── public/                # Static assets like images, fonts, etc.
├── src/
│   ├── components/        # React components (e.g., InputComponent, PrimaryButton)
│   ├── pages/             # Astro pages
│   │   └── index.astro    # Main page for the app
│   └── styles/            # Tailwind CSS and custom styles
│       └── globals.css
└── package.json           # Project metadata and dependencies
🌍 API & Data Handling
Mock API (Mocky): The project uses Mocky to simulate API calls. When the form is submitted, the data is sent to the mock API endpoint and logged in the console.

API Endpoint:
https://run.mocky.io/v3/5938a5e1-276f-4b4f-9df2-554f265ce8c2

localStorage: The form data is temporarily stored in the browser's localStorage. This allows the user to retrieve the data even after navigating away from the page.

🌐 Deployment
For deployment, we are using Netlify. You can deploy your app to Netlify by following these steps:

Push your changes to your GitHub repository.
Create a new site on Netlify.
Link your GitHub repository to Netlify.
Configure the build settings:
Build command: npm run build
Publish directory: dist
Click Deploy Site and your app will be live!
📑 Features
React Components: The form uses React components such as InputComponent, PrimaryButton, and SecondaryButton to handle user input and interaction.
Tailwind CSS: Styling is done using Tailwind CSS for utility-first design.
Mock API: Form submission is simulated with Mocky, allowing the form data to be posted to an API endpoint.
localStorage: Form data is saved in the browser's localStorage for demonstration purposes.
📦 Tech Stack
Astro: A static site generator with support for React and other front-end frameworks.
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Mocky: A mock API service used for simulating API calls.
🛠️ Development
To contribute to the development of this project:

Fork the repository and clone it to your local machine.
Create a new branch for your feature/bug fix.
Install dependencies using npm install.
Make your changes and run the development server using npm run dev.
Commit your changes and push the branch to your fork.
Create a pull request to the main repository.
