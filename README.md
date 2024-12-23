# KYC Flow App

## 🚀 Deployed Link

The deployed app can be accessed [here](https://kyc-flow.netlify.app/).

## 🚀 Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```sh
git clone <your-repository-url>


```
### 2. Install Dependencies (Navigate to the project directory and install the required dependencies:)
```sh
cd your-repository-name
npm install
```

### 3.  Run the Development Server (Start the development server to view the app locally:)
```sh
npm run dev
```




📦 Tech Stack
This project uses the following technologies:

Astro: A static site generator that enables the creation of fast, optimized websites using JavaScript frameworks like React.
React: A JavaScript library for building user interfaces, used here to manage the state and render components.
Tailwind CSS: A utility-first CSS framework for creating modern, responsive designs.
Mocky: A mock API service used for simulating API calls.

🧑‍💻 Project Structure
The project has the following structure:

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

📑 Features
React Components: Components such as InputComponent and PrimaryButton enhance modularity and reusability.
Tailwind CSS: Styling is done using Tailwind CSS for utility-first design.
Mock API: Form submission is simulated with Mocky, allowing the form data to be posted to an API endpoint.
LocalStorage: Form data is saved in the browser's localStorage for demonstration purposes.




