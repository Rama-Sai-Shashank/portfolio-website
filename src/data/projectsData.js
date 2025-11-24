// src/data/projectsData.js
export const projects = [
  {
    title: "QuickNotes – PHP Notes Manager",
    url: "/assets/quicknotes-main.png", // thumbnail for the card
    description:
      "A simple yet powerful PHP + MySQL notes manager where users can create, edit, delete, and search notes in a clean web UI.",
    images: [
      {
        url: "/assets/quicknotes-1.png",
        description:
          "The main QuickNotes dashboard showing all saved notes in a clean list, pulled dynamically from the MySQL database using PHP."
      },
      {
        url: "/assets/quicknotes-2.png",
        description:
          "The add / edit note interface where users can quickly create or update notes. Form submissions are handled by PHP and stored in MySQL."
      },
      {
        url: "/assets/quicknotes-3.png",
        description:
          "Search and filter functionality that lets users instantly find notes by title or content, implemented using PHP queries and basic frontend scripting."
      }
    ],
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    liveDemo: "#", // replace with deployed URL if you have one
    github: "#",   // replace with your GitHub repo URL
    category: "Web",
  },
  {
    title: "Weather Application",
    url: "/assets/Weather.png", // Thumbnail image for the project card
    description:
      "A modern, dark-themed weather application that provides real-time conditions, hourly, and 5-day forecasts for any searched city.",
    images: [
      {
        url: "/assets/Weather-1.jpg", // (Nellore - Main View)
        description: `
I built this UI using React.js ⚛️, creating a primary component to hold all the weather data.

I used React Hooks (useState) to manage the application's state, including the user's search query (city) and the response from the API (weatherData).

To fetch the data, I used Axios for an asynchronous GET request to the OpenWeatherMap "Current Weather" API. All the main details (e.g., "Nellore, IN", "25°C") are dynamically rendered from this state.

I used CSS Grid to create the clean, six-item layout for "Feels Like," "Humidity," "Wind Speed," and "Pressure."

To display the local time ("11:15:46 AM"), I fetched the timezone offset from the API, ensuring the time shown is always accurate for the searched location, not the user's local machine.

For the "Sunrise" and "Sunset" times 🌇, I wrote a JavaScript helper function to parse the API's complex UNIX timestamps and reformat them into a simple, readable HH:MM format.
        `,
      },
      {
        url: "/assets/Weather-2.jpg", // (Nellore - Forecast View)
        description: `
This part of the application shows the hourly and 5-day forecasts, which required a more complex API strategy. 📈

This data doesn't come from the "Current Weather" API. To get it, I first took the **latitude and longitude** from the initial API response.

I then triggered a **second API call** using these coordinates to the **OpenWeatherMap "One Call" API**. This powerful endpoint provides detailed 'hourly' and 'daily' forecast arrays in a single response.

For the "Hourly Forecast," I used the .map() function to render a component for each hour and styled the container with 'overflow-x: auto' to create the smooth horizontal scrolling effect. 📜

I used the same .map() method on the 'daily' array to build the "5-Day Forecast," creating a clean, vertical list.
        `,
      },
      {
        url: "/assets/Weather-3.jpg", // (Cañada - Main View)
        description: `
This image demonstrates the app's core strength: its ability to dynamically update all components with new data. ⚡️

When a new city like "Cañada, ES" is searched, my 'fetchWeather' function is called again, updating the 'weatherData' state.

Because the entire UI is built in React, all components "react" to this state change and automatically re-render without a page refresh.

I also implemented a **dynamic background** feature. My logic checks the API's weather icon code (which includes 'd' for day ☀️ or 'n' for night 🌙) and adds a CSS class to the main container. This changes the background gradient, giving the user immediate visual feedback on the atmosphere.
        `,
      },
      {
        url: "/assets/Weather-4.jpg", // (Cañada - Forecast View)
        description: `
This screenshot confirms that the entire application, including the complex forecast sections, is fully reactive. 🔄

My code is structured to ensure that when the primary "Current Weather" search for "Cañada" is successful, it *automatically* triggers the "One Call" API fetch for the new coordinates.

This single search action updates *all* relevant states: 'weatherData', 'hourlyData', and 'dailyData'.

This demonstrates that the application is a true **Single Page Application (SPA)**. All components are interconnected through state, allowing for a fast, modern user experience where all data is updated in sync without ever needing to reload the browser.
        `,
      },
    ],
    tags: ["React.js", "Axios", "OpenWeatherMap API", "CSS Grid", "JavaScript (ES6+)"],
    liveDemo: "https://weather-application-rose-three.vercel.app/",
    github: "https://github.com/Rama-Sai-Shashank/weather-app.git",
    category: "Web",
  },
  {
    title: "MediVault – Digital Health Vault",
    url: "/assets/medivault-main.png", // thumbnail for the card
    description:
      "A secure digital health vault that connects patients and clinics, with OTP login, encrypted record storage, and AWS S3-backed file handling.",
    images: [
      {
        url: "/assets/medivault-1.png",
        description:
          "The MediVault landing / auth screen showing separate flows for patients and clinics, with OTP-based registration and JWT-secured login."
      },
      {
        url: "/assets/medivault-2.png",
        description:
          "The patient dashboard and vault view, where users can upload, download, and manage their medical reports stored securely on AWS S3 via a FastAPI backend."
      },
      {
        url: "/assets/medivault-3.png",
        description:
          "The admin / clinic management interface with the ability to view patients, reset passwords, and manage access, demonstrating role-based authorization and real-world healthcare workflows."
      }
    ],
    tags: ["React.js", "FastAPI", "AWS S3", "JWT Auth", "OTP Verification"],
    liveDemo: "#", // replace with deployed URL if you host it
    github: "#",   // replace with your MediVault repo URL
    category: "Web",
  },
  {
  title: "NovaVision - AI Powered Image Generator",
  url: "/assets/Ai-image-gen-main.jpg",
  description:
    "NovaVision is a full-stack AI Image Generator built using FastAPI (Python) and React. It converts natural text prompts into high-quality AI-generated images using Hugging Face’s FLUX model, with a clean UI, smooth animations, and downloadable PNG output.",
  images: [
    {
      url: "/assets/Ai-image-gen-2.jpg",
      description:
        "The NovaVision initial screen showing the futuristic pastel UI with an elegant prompt box and generate button, where users can describe the image they want to create."
    },
    {
      url: "/assets/Ai-image-gen-1.jpg",
      description:
        "An example of a successfully generated AI image — a realistic boy enjoying the breeze at the beach — displayed inside the stylish output card with options to download the image or generate a new one."
    }
  ],
  tags: ["React.js", "FastAPI", "Hugging Face AI", "FLUX Model", "AI Tools"],
  liveDemo: "https://rama-sai-ai-img-gen.vercel.app/",
  github: "https://github.com/Rama-Sai-Shashank/ai-image-generation.git",
  category: ["Web", "AI"]
},
{
  title: "JobApplyPro – Job Autofill Chrome Extension",
  url: "/assets/jobapplypro-main.jpg",
  description:
    "JobApplyPro is a smart Chrome Extension that saves your job profile once and automatically fills job application forms across different websites with a single click. It reduces repetitive typing and speeds up the job-application process with clean UI and intelligent field detection.",
  images: [
    {
      url: "/assets/jobapplypro-1.png",
      description:
        "The JobApplyPro popup UI where users can enter and save their complete job profile — name, email, phone number, LinkedIn URL, portfolio URL, skills, and summary — all stored securely using Chrome Storage."
    }
  ],
  tags: ["Chrome Extension", "JavaScript", "Manifest V3", "Automation", "Productivity"],
  github: "https://github.com/Rama-Sai-Shashank/job-apply-pro.git",
  category: "Automation"
},
];
