// src/data/projectsData.js
export const projects = [
  {
  title: "QuickNotes – Minimal Cloud Notes App",
  url: "/assets/quicknotes-main.jpg",
  description:
    "QuickNotes is a lightweight, secure PHP + MySQL cloud notes app built for students and developers. It provides personal note storage, hashed password authentication, clean UI, and mobile-friendly responsive pages — all deployed for free on InfinityFree hosting.",
  images: [
    {
      url: "/assets/quicknotes-1.png",
      description:
        "The landing page of QuickNotes showing the minimal blue gradient hero section with Login, Create Account buttons, and highlighted features like hashed authentication, clean UI, and InfinityFree deployment."
    },
    {
      url: "/assets/quicknotes-2.png",
      description:
        "The notes dashboard showing the create-note area with Title and Content fields, along with the user's saved notes displayed in a neat card layout."
    },
    {
      url: "/assets/quicknotes-3.png",
      description:
        "The edit note page where the user can update existing notes using a clean card UI with input fields and Save Changes button."
    },
    {
      url: "/assets/quicknotes-4.png",
      description:
        "The empty notes screen indicating the user has not created any notes yet, with a clean and spacious UI encouraging them to add their first note."
    }
  ],
  tags: ["PHP", "MySQL", "Web App", "Authentication", "InfinityFree"],
  liveDemo: "https://quicknotes.infinityfree.me/",
  github: "https://github.com/YOUR-USERNAME/quicknotes-php",
  category: ["Web"]
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
  title: "MediVault – Secure Digital Health Vault",
  url: "/assets/medivault-main.jpg",
  description:
    "MediVault is a full-stack digital health vault where patients can securely store medical records in the cloud and connect with clinics for real-time consultations. Built with React and FastAPI, it provides separate dashboards for patients and clinics, OTP-based onboarding, AWS S3 storage for reports, and a live chat + prescription panel for remote treatment.",
  images: [
    {
      url: "/assets/medivault-1.png",
      description:
        "The futuristic MediVault landing screen with a glowing neon welcome message and top navigation bar, introducing patients and clinics to the secure digital health vault."
    },
    {
      url: "/assets/medivault-2.png",
      description:
        "The Clinic Dashboard home view showing three modern cards for Patient Records, Appointments, and Clinic Profile, where hospital staff can manage their complete practice from a single screen."
    },
    {
      url: "/assets/medivault-3.png",
      description:
        "The Patient Dashboard displaying connected clinics as stylish cards with location and specialties, allowing users to quickly find and connect with nearby hospitals and doctors."
    },
    {
      url: "/assets/medivault-4.png",
      description:
        "The real-time chat interface between clinic and patient, with a side-by-side prescription note editor where doctors can type and save medical prescriptions during the conversation."
    }
  ],
  tags: [
    "React.js",
    "FastAPI",
    "AWS S3",
    "JWT Auth",
    "OTP Verification",
    "WebSockets",
    "Healthcare"
  ],
  github: "https://github.com/Rama-Sai-Shashank/Medi-Vault.git",
  category: ["Web"]
}
,
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
