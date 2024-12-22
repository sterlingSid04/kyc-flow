
## 🚀 Deployed Link

The deployed app can be accessed [here](https://kyc-flow.netlify.app/).

## 🚀 Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```sh
git clone <your-repository-url>


---

### 2. **Tech Stack Used**

```markdown
## 📦 Tech Stack

This project uses the following technologies:

- **Astro**: A static site generator that enables the creation of fast, optimized websites using JavaScript frameworks like React.
- **React**: A JavaScript library for building user interfaces, used here to manage the state and render components.
- **Tailwind CSS**: A utility-first CSS framework for creating modern, responsive designs.
- **Mocky**: A mock API service used for simulating API calls.

## 🧑‍💻 Project Structure

The project has the following structure:

```text
/
├── public/                # Static assets like images, fonts, etc.
├── src/
│   ├── components/        # React components (e.g., InputComponent, PrimaryButton)
│   ├── pages/             # Astro pages
│   │   └── index.astro    # Main page for the app
│   └── styles/            # Tailwind CSS and custom styles
│       └── globals.css
└── package.json           # Project metadata and dependencies


---

### 4. **Features**

```markdown
## 📑 Features

- **React Components**: The form uses React components such as `InputComponent`, `PrimaryButton`, and `SecondaryButton` to handle user input and interaction.
- **Tailwind CSS**: Styling is done using **Tailwind CSS** for utility-first design.
- **Mock API**: Form submission is simulated with **Mocky**, allowing the form data to be posted to an API endpoint.
- **localStorage**: Form data is saved in the browser's `localStorage` for demonstration purposes.


## 🌐 Deployment

For deployment, we are using **Netlify**. You can deploy your app to Netlify by following these steps:

1. Push your changes to your GitHub repository.
2. Create a new site on [Netlify](https://www.netlify.com/).
3. Link your GitHub repository to Netlify.
4. Configure the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site** and your app will be live!