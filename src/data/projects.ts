export type Project = {
  title: string;
  organization: string;
  date: string;
  details: string[];
  tags: string[];
  link: string;
  slug: string;
  category: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  live?: string;
  demo?: string;
  deck?: string;
};

// Machine Learning & Data Science Projects
export const mlDataScienceProjects: Project[] = [
  {
    title: 'Data-Driven Flight Delay Forecasting',
    organization: 'Society of Business, IIT Roorkee',
    date: 'June 2025',
    details: [
      'Analyzed 178,997 flight records to train a Random Forest classifier (AUC-ROC 0.89; recall 0.98) and multi-output regressor (MAE 0.92–173.16 min).',
      'Created an Operational Adjustability Index (mean 6.06/100, σ=13.91) to quantify controllable delays and guide targeted interventions.',
      'Used SHAP explainability to reveal that 95% of delays are under 200 min, identify key root causes, and recommend changes projecting a 15–20% reduction in actionable delays.'
    ],
    tags: ['Random Forest', 'Regression Modeling', 'Time-Series Analysis', 'Feature Engineering', 'SHAP Explainability', 'Python'],
    link: '#',
    slug: 'flight-delay-forecasting',
    category: 'Machine Learning & Data Science',
    github: 'https://github.com/anshita195/Data-Driven-Flight-Delay-Forecasting',
    deck: 'https://docs.google.com/presentation/d/1M-HSnriTvXQVhrnpYVQcIZvVyc_Xchej/edit?usp=sharing&ouid=118411188640780668798&rtpof=true&sd=true'
  },
  {
    title: 'Classification of Stars using Machine Learning',
    organization: 'Physics Association, IIT Roorkulse Shape Discrimination',
    date: 'June 2025',
    details: [
      'Developed a Python ML pipeline (Random Forest & XGBoost) that classifies six star types with 99.93% cross‑validated accuracy using engineered features (temperature, luminosity, radius, spectral class).',
      'Cleaned and transformed numerical/categorical data (imputation, one‑hot encoding, feature selection), then deployed an interactive Streamlit app for real‑time predictions.',
      'Produced clear model interpretability outputs (confusion matrix, feature importance, SHAP) to surface key astrophysical insights.'
    ],
    tags: ['XGBoost', 'Random Forest', 'Feature Engineering', 'Model Interpretability', 'Streamlit Deployment', 'Python'],
    link: '#',
    slug: 'star-classification-ml',
    category: 'Machine Learning & Data Science',
    github: 'https://github.com/anshita195/Classification-of-Stars-using-Machine-Learning',
    live: 'https://starclassification.streamlit.app/'
  },
  {
    title: 'Credit Card Behaviour Score Prediction',
    organization: 'Finance Club, IIT Roorkee',
    date: 'May 2025 - June 2025',
    details: [
      'Processed 25,000 train + 5,000 validation records (19% default rate), applied SMOTE and inverse-frequency class weights, and engineered features including payment-delay statistics and credit-utilization ratios.',
      'Evaluated multiple models and optimized classification threshold (0.28) for F2 score; selected Random Forest achieving F2=0.602 and AUC-ROC=0.780.',
      'Prioritized recall (0.875) via threshold tuning to minimize false negatives, enabling early-warning strategies and targeted risk-based interventions.'
    ],
    tags: ['SMOTE & Imbalanced Data', 'Threshold Tuning', 'Random Forest', 'AUC-ROC Optimization', 'Recall-Focused Classification', 'Python'],
    link: '#',
    slug: 'credit-card-behaviour',
    category: 'Machine Learning & Data Science',
    github: 'https://github.com/anshita195/Credit-Card-Behaviour-Score-Prediction'
  },
  {
    title: 'ML techniques for PSD in Scintillation detectors',
    organization: 'IIT Roorkee',
    date: 'May 2024 - July 2024',
    details: [
      'Designed and trained a TensorFlow/Keras neural network on BC501A detector waveforms for pulse shape discrimination, achieving 100% accuracy in neutron vs. gamma‑rays classification.',
      'Processed raw pulse data into normalized feature vectors (tail/total ratios, rise times) using NumPy/Pandas to optimize model input quality.'
    ],
    tags: ['Neural Networks', 'TensorFlow/Keras', 'Signal Processing', 'Feature Engineering', 'NumPy/Pandas', 'Python'],
    link: '#',
    slug: 'psd-scintillation-detectors',
    category: 'Machine Learning & Data Science'
  }
];

// NLP & RAG Projects
export const nlpRagProjects: Project[] = [
  {
    title: 'Fake News Detector',
    organization: "Makers'23, IIT Roorkee",
    date: 'Feb 2023 - Mar 2023',
    details: [
      'Developed an end‐to‐end RAG prototype with a FastAPI backend and React/TypeScript frontend (Vite, Tailwind) to extract claims from articles and verify them via vector search.',
      'Used sentence embeddings (all‐MiniLM‐L6‐v2) and a FAISS index over a curated news corpus to retrieve supporting evidence from BBC, Reuters, and NYT.',
      'Integrated an OpenAI GPT-3.5 Turbo endpoint to analyze each claim against retrieved evidence, returning REAL/FAKE verdicts with confidence scores and concise chain‐of‐thought explanations.'
    ],
    tags: ['Retrieval-Augmented Generation (RAG)', 'FastAPI Backend', 'FAISS Vector Search', 'OpenAI GPT-3.5 Integration', 'React/TypeScript Frontend', 'Claim Verification'],
    link: '#',
    slug: 'fake-news-detector',
    category: 'NLP & RAG',
    githubFrontend: 'https://github.com/anshita195/RAG-fake-news-detector-frontend',
    githubBackend: 'https://github.com/anshita195/RAG-fake-news-detector-backend',
    live: '',
    demo: '',
    deck: ''
  },
  {
    title: 'Crypto Sentiment Analyzer',
    organization: 'SDSLabs, IIT Roorkee',
    date: 'Jan 2023',
    details: [
      'Built a full‐stack platform (Node.js/Express, MongoDB Atlas, React/Vite, Tailwind) that ingests real‐time cryptocurrency price data (CoinMarketCap) and Reddit posts via the official Reddit API.',
      'Integrated a custom FastAPI microservice (deployed on Google Cloud Platform) serving a DistilBERT transformer model, achieving 93.2% sentiment classification accuracy on cryptocurrency-related posts.',
      'Developed interactive dashboards and a dynamic feed highlighting top positive/negative posts, all containerized with Docker for easy deployment.'
    ],
    tags: ['DistilBERT NLP', 'Real-Time Data Streaming', 'FastAPI Microservice', 'React/Vite Frontend', 'Dockerized Deployment', 'Node.js/Express'],
    link: '#',
    slug: 'crypto-sentiment-analyzer',
    category: 'NLP & RAG',
    githubFrontend: 'https://github.com/anshita195/crypto-senti-frontend',
    githubBackend: 'https://github.com/anshita195/crypto-senti-backend',
    live: 'https://crypto-senti-frontend.vercel.app/'
  }
];

// Computer Vision Projects
export const computerVisionProjects: Project[] = [
  {
    title: 'Retail Shelf Detection System',
    organization: 'Computer Vision Project',
    date: 'Dec 2024 - Jan 2025',
    details: [
      'Implemented YOLOv5-based object detection system for retail shelf monitoring.',
      'Developed and compared multiple model architectures (small and medium variants).',
      'Created data preprocessing pipeline and training framework.'
    ],
    tags: ['YOLOv5 Object Detection', 'Computer Vision', 'Data Preprocessing Pipeline', 'Model Architecture Comparison', 'Python Development'],
    link: '#',
    slug: 'retail-shelf-detection',
    category: 'Computer Vision'
  }
];

// Full-Stack Web Development Projects
export const webDevProjects: Project[] = [
  {
    title: 'Physics Association Website',
    organization: 'Physics Association, IIT Roorkee',
    date: 'May 2025 - Present',
    details: [
      'Developed a full-stack web application for IIT Roorkee Physics Association using React TypeScript frontend with Material-UI components and Node.js/Express backend, featuring responsive design with light/dark theme toggle',
      'Implemented faculty profile management system with search functionality, research area showcase, and events calendar - serving 3 faculty members with detailed profiles including publications, education history, and research areas',
      'Deployed production-ready application on Netlify (frontend) and Render (backend) with RESTful API endpoints, CORS configuration, and JSON-based data management for faculty, research, and events information'
    ],
    tags: ['React', 'TypeScript', 'Material-UI', 'Node.js/Express API', 'Responsive Design', 'Light/Dark Theme Toggle'],
    link: '#',
    slug: 'association-website',
    category: 'Full-Stack Web Development',
    github: 'https://github.com/anshita195/phys_assoc_web_app',
    demo: 'https://youtu.be/0ALErEmo6Q4?si=2moSBN7ORAgKVI73'
  },
  {
    title: 'Reading and Watch-List Dashboard Web App',
    organization: 'GDSC, IIT Roorkee',
    date: 'June 2025 - July 2025',
    details: [
      'Built a Chrome extension and React web app that tracks browsing history for articles/videos and exports data as JSON for import into a Flask backend with SQLAlchemy database',
      'Implemented local AI summarization using llama-cpp-python with TinyLlama-1.1B model running on CPU to generate content summaries without external API calls',
      'Created full-stack data pipeline from browser content tracking → JSON export/import → web visualization → local ML inference, demonstrating React, Flask, browser extension development, and privacy-focused AI processing'
    ],
    tags: ['Chrome Extension', 'Flask Backend', 'Local LLM Inference (TinyLlama)', 'SQLAlchemy ORM', 'React Visualization', 'Privacy-Focused AI'],
    link: '#',
    slug: 'reading-watchlist-dashboard',
    category: 'Full-Stack Web Development',
    github: 'https://github.com/anshita195/share_reading_watch_lists_webapp',
    demo: 'https://youtu.be/CkFv9XCG7js'
  }
];

// Browser Extension Development Projects
export const browserExtensionProjects: Project[] = [
  {
    title: 'Chrome Extension for Real-Time Email Tracking',
    organization: 'GDSC, IIT Roorkee',
    date: 'June 2025 - July 2025',
    details: [
      'Built Chrome extension that integrates with Gmail\'s web interface to add email tracking functionality via injected tracking pixels and displays read receipts with blue checkmarks',
      'Developed Node.js backend API deployed on Render cloud platform that serves tracking pixels, logs email opens, and provides REST endpoints for read status verification',
      'Implemented OAuth2 authentication with Gmail API for secure email sending and created popup interface showing tracked email status with real-time backend communication'
    ],
    tags: ['Chrome Extension Development', 'OAuth2 Authentication', 'Gmail API Integration', 'Node.js Backend', 'RESTful Endpoints', 'Real-Time Read Receipts'],
    link: '#',
    slug: 'email-tracking-extension',
    category: 'Browser Extension Development',
    github: 'https://github.com/anshita195/mailTracker',
    demo: 'https://youtu.be/MEG9Mnm9t1o'
  },
  {
    title: 'Custom Input-Box Everywhere Extension',
    organization: 'GDSC, IIT Roorkee',
    date: 'June 2025 - July 2025',
    details: [
      'Developed Firefox extension with floating input bar that syncs with text fields and integrates LLM APIs for page summarization and dynamic CSS styling',
      'Built browser extension using Manifest V3 with dual-mode functionality, keyboard shortcuts, and popup interface for API key management.',
      'Implemented DOM manipulation and event handling for real-time UI synchronization, drag-and-drop functionality, and cross-origin content script injection'
    ],
    tags: ['Manifest V3', 'DOM Manipulation', 'LLM API Integration', 'Keyboard Shortcuts', 'Popup UI/UX', 'JavaScript'],
    link: '#',
    slug: 'input-box-everywhere',
    category: 'Browser Extension Development',
    github: 'https://github.com/anshita195/custom-input-box-extension',
    demo: 'https://youtu.be/2EhI-tweP4k'
  }
];

// Business & Strategy Projects
export const businessProjects: Project[] = [
  {
    title: 'Analysis and Market Entry Strategy for an OTT Platform',
    organization: 'Society of Business, IIT Roorkee',
    date: 'Jan 2023',
    details: [
      'A detailed case study on Analyzing the OTT market in India and creating a growth strategy and a pricing model for a company.'
    ],
    tags: ['Market Analysis', 'OTT Industry Research', 'Pricing Strategy', 'Growth Roadmap', 'Case Study', 'India Market Focus'],
    link: '#',
    slug: 'ott-market-strategy',
    category: 'Business & Strategy',
    deck: 'https://iitracin-my.sharepoint.com/:p:/g/personal/shivanshu_g_es_iitr_ac_in/EQjZuo66Wg5IhPrMi-CsxVQBHmw1SMk5EXOrP1V_KCR96g?e=K8A8LE'
  }
];

// Internships & Professional Experience
export const internshipProjects: Project[] = [
  {
    title: 'Software Engineering Intern',
    organization: 'Nixby Media Pvt. Ltd.',
    date: 'Mar 2025 - May 2025',
    details: [
      'Built full-stack features with React.js frontend, Django REST APIs, and PostgreSQL schemas for production applications',
      'Managed Git/GitHub workflows and Docker containerization for seamless development and deployment processes',
      'Optimized UI performance through debugging and profiling, improving user experience and application responsiveness',
      'Collaborated with development team on agile methodologies and code review processes'
    ],
    tags: ['React.js Frontend', 'Django REST APIs', 'PostgreSQL Schemas', 'Docker Containerization', 'Performance Optimization', 'Agile Collaboration'],
    link: '#',
    slug: 'nixby-media-internship',
    category: 'Internships & Professional Experience'
  },
  {
    title: 'AI/ML Intern',
    organization: 'IBM SkillsBuild',
    date: 'June 2025 - Present',
    details: [
      'Undergoing a 6-week IBM SkillsBuild internship, completing core modules in data preprocessing, supervised learning, neural network fundamentals, and Generative AI Prompt Engineering',
      'Currently developing an end-to-end employee salary-prediction model in Python, handling data cleaning, feature engineering, model training, and evaluation',
      // 'Working with IBM\'s enterprise-grade tools and methodologies for machine learning model development and deployment',
      'Learning industry best practices for AI/ML development and gaining hands-on experience with real-world datasets'
    ],
    tags: ['Data Preprocessing', 'Neural Network Fundamentals', 'Generative AI', 'Prompt Engineering', 'Feature Engineering', 'Supervised Learning'],
    link: '#',
    slug: 'ibm-skillsbuild-internship',
    category: 'Internships & Professional Experience'
  }
];

// All projects combined (for backward compatibility)
export const projects: Project[] = [
  ...internshipProjects,
  ...mlDataScienceProjects,
  ...nlpRagProjects,
  ...computerVisionProjects,
  ...webDevProjects,
  ...browserExtensionProjects,
  ...businessProjects
]; 