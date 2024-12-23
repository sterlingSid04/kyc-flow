# KYC Flow App


## 🚀 Getting Started

### Deployed link - 

(https://kyc-atro-flow.netlify.app/)

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
### This project uses the following technologies:

- **Astro**: A static site generator that enables the creation of fast, optimized websites using JavaScript frameworks like React.  
- **React**: A JavaScript library for building user interfaces, used here to manage the state and render components.  
- **Tailwind CSS**: A utility-first CSS framework for creating modern, responsive designs.  
- **Mocky**: A mock API service used for simulating API calls.


## 🗂️ Project Structure

The project follows the structure below:

```plaintext
/
├── public/                # Static assets like images, fonts, etc.
├── src/
│   ├── components/        # React components (e.g., InputComponent, PrimaryButton)
│   ├── pages/             # Astro pages
│   │   └── index.astro    # Main page for the app
│   └── styles/            # Tailwind CSS and custom styles
│       └── globals.css
└── package.json           # Project metadata and dependencies
```

## 📑 Features

- **React Components**: Components such as `InputComponent` and `PrimaryButton` enhance modularity and reusability.
- **Tailwind CSS**: Styling is done using **Tailwind CSS** for utility-first design.
- **Mock API**: Form submission is simulated with **Mocky**, allowing the form data to be posted to an API endpoint.
- **LocalStorage**: Form data is saved in the browser's `localStorage` for demonstration purposes.


## Deployment

This project is deployed on Netlify. The live version of the application can be accessed using the following link:

[**KYC Flow - Live Demo**](https://kyc-atro-flow.netlify.app/)

### Steps to Deploy on Netlify

1. **Create a Netlify Account**:
   - Go to [Netlify](https://www.netlify.com/) and sign up or log in to your account.

2. **Connect your Git Repository**:
   - Push your `kyc-flow` project to a Git repository (GitHub, GitLab, Bitbucket).
   - In the Netlify dashboard, click on "New site from Git".
   - Choose the Git provider and authorize Netlify to access your repository.
   - Select the repository that contains your `kyc-flow` project.

3. **Configure Build Settings**:
   - **Branch to deploy**: Select the branch you want to deploy (usually `main` or `master`).
   - **Build Command**: Enter `npm run build` (or `astro build` if using Astro CLI).
   - **Publish Directory**: Set this to `dist` (Astro's default output directory).

4. **Deploy the Site**:
   - Click "Deploy Site" and Netlify will build and deploy your application.
   - Once deployed, you will receive a live URL, such as [https://kyc-atro-flow.netlify.app/](https://kyc-atro-flow.netlify.app/), which you can use to access the deployed version.

### Continuous Deployment

Netlify offers continuous deployment, meaning every time you push changes to your connected Git repository, the site will automatically rebuild and redeploy. This makes it easy to keep your app up to date with the latest changes.




