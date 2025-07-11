export type Project = {
  title: string;
  organization: string;
  date: string;
  details: string[];
  tags: string[];
  link: string;
  slug: string;
};

export const projects: Project[] = [
  {
    title: 'Association Website',
    organization: 'Physics Association, IITR',
    date: 'May 2025 - Present',
    details: [
      'Developed a full-stack web application for IIT Roorkee Physics Association using React TypeScript frontend with Material-UI components and Node.js/Express backend, featuring responsive design with light/dark theme toggle',
      'Implemented faculty profile management system with search functionality, research area showcase, and events calendar - serving 3 faculty members with detailed profiles including publications, education history, and research areas',
      'Deployed production-ready application on Netlify (frontend) and Render (backend) with RESTful API endpoints, CORS configuration, and JSON-based data management for faculty, research, and events information'
    ],
    tags: ['React', 'TypeScript', 'Material-UI', 'Node.js', 'Express', 'REST API', 'Netlify', 'Render', 'CORS', 'JSON'],
    link: '#',
    slug: 'association-website',
  },
  {
    title: 'Reading and Watch-List Dashboard Web App',
    organization: 'GDSC, IITR',
    date: 'June 2025 - July 2025',
    details: [
      'Built a Chrome extension and React web app that tracks browsing history for articles/videos and exports data as JSON for import into a Flask backend with SQLAlchemy database',
      'Implemented local AI summarization using llama-cpp-python with TinyLlama-1.1B model running on CPU to generate content summaries without external API calls',
      'Created full-stack data pipeline from browser content tracking → JSON export/import → web visualization → local ML inference, demonstrating React, Flask, browser extension development, and privacy-focused AI processing'
    ],
    tags: ['Chrome Extension', 'React', 'Flask', 'SQLAlchemy', 'llama-cpp-python', 'TinyLlama', 'AI', 'Privacy'],
    link: '#',
    slug: 'reading-watchlist-dashboard',
  },
  {
    title: 'Chrome Extension for Real-Time Email Tracking',
    organization: 'GDSC, IITR',
    date: 'June 2025 - July 2025',
    details: [
      'Built Chrome extension that integrates with Gmail\'s web interface to add email tracking functionality via injected tracking pixels and displays read receipts with blue checkmarks',
      'Developed Node.js backend API deployed on Render cloud platform that serves tracking pixels, logs email opens, and provides REST endpoints for read status verification',
      'Implemented OAuth2 authentication with Gmail API for secure email sending and created popup interface showing tracked email status with real-time backend communication'
    ],
    tags: ['Chrome Extension', 'Node.js', 'Render', 'REST API', 'OAuth2', 'Gmail API'],
    link: '#',
    slug: 'email-tracking-extension',
  },
  {
    title: 'Custom Input-Box Everywhere Extension',
    organization: 'GDSC, IITR',
    date: 'June 2025 - July 2025',
    details: [
      'Developed Firefox extension with floating input bar that syncs with text fields and integrates LLM APIs for page summarization and dynamic CSS styling',
      'Built browser extension using Manifest V3 with dual-mode functionality, keyboard shortcuts, and popup interface for API key management.',
      'Implemented DOM manipulation and event handling for real-time UI synchronization, drag-and-drop functionality, and cross-origin content script injection'
    ],
    tags: ['Firefox Extension', 'Manifest V3', 'LLM API', 'DOM', 'CSS', 'JavaScript'],
    link: '#',
    slug: 'input-box-everywhere',
  },
  {
    title: 'Data-Driven Flight Delay Forecasting',
    organization: 'SocBiz, IIT Roorkee',
    date: 'June 2025',
    details: [
      'Analyzed 178,997 flight records to train a Random Forest classifier (AUC-ROC 0.89; recall 0.98) and multi-output regressor (MAE 0.92–173.16 min).',
      'Created an Operational Adjustability Index (mean 6.06/100, σ=13.91) to quantify controllable delays and guide targeted interventions.',
      'Used SHAP explainability to reveal that 95% of delays are under 200 min, identify key root causes, and recommend changes projecting a 15–20% reduction in actionable delays.'
    ],
    tags: ['Random Forest', 'Regression', 'SHAP', 'Python', 'Data Analysis'],
    link: '#',
    slug: 'flight-delay-forecasting',
  },
  {
    title: 'Classification of Stars using Machine Learning',
    organization: 'Physics Association, IITR',
    date: 'June 2025',
    details: [
      'Developed a Python ML pipeline (Random Forest & XGBoost) that classifies six star types with 99.93% cross‑validated accuracy using engineered features (temperature, luminosity, radius, spectral class).',
      'Cleaned and transformed numerical/categorical data (imputation, one‑hot encoding, feature selection), then deployed an interactive Streamlit app for real‑time predictions.',
      'Produced clear model interpretability outputs (confusion matrix, feature importance, SHAP) to surface key astrophysical insights.'
    ],
    tags: ['Python', 'Random Forest', 'XGBoost', 'Streamlit', 'Data Cleaning', 'SHAP'],
    link: '#',
    slug: 'star-classification-ml',
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
    tags: ['Python', 'SMOTE', 'Random Forest', 'Feature Engineering', 'Classification', 'AUC-ROC'],
    link: '#',
    slug: 'credit-card-behaviour',
  },
  {
    title: 'ML techniques for PSD in Scintillation detectors',
    organization: 'IIT Roorkee',
    date: 'May 2024 - July 2024',
    details: [
      'Designed and trained a TensorFlow/Keras neural network on BC501A detector waveforms for pulse shape discrimination, achieving 100% accuracy in neutron vs. gamma‑rays classification.',
      'Processed raw pulse data into normalized feature vectors (tail/total ratios, rise times) using NumPy/Pandas to optimize model input quality.'
    ],
    tags: ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Neural Network', 'Signal Processing'],
    link: '#',
    slug: 'psd-scintillation-detectors',
  },
  {
    title: 'Fake News Detector',
    organization: "Makers'23, IIT Roorkee",
    date: 'Feb 2023 - Mar 2023',
    details: [
      'Developed an end‐to‐end RAG prototype with a FastAPI backend and React/TypeScript frontend (Vite, Tailwind) to extract claims from articles and verify them via vector search.',
      'Used sentence embeddings (all‐MiniLM‐L6‐v2) and a FAISS index over a curated news corpus to retrieve supporting evidence from BBC, Reuters, and NYT.',
      'Integrated an OpenAI GPT-3.5 Turbo endpoint to analyze each claim against retrieved evidence, returning REAL/FAKE verdicts with confidence scores and concise chain‐of‐thought explanations.'
    ],
    tags: ['FastAPI', 'React', 'TypeScript', 'Vite', 'Tailwind', 'FAISS', 'OpenAI', 'MiniLM'],
    link: '#',
    slug: 'fake-news-detector',
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
    tags: ['Node.js','Express','MongoDB Atlas','React','Vite','Tailwind CSS','FastAPI','DistilBERT','Docker' ],
    link: '#',
    slug: 'crypto-sentiment-analyzer',
  },
  {
    title: 'Retail Shelf Detection System',
    organization: 'Computer Vision Project',
    date: 'Dec 2024 - Jan 2025',
    details: [
      'Implemented YOLOv5-based object detection system for retail shelf monitoring.',
      'Developed and compared multiple model architectures (small and medium variants).',
      'Created data preprocessing pipeline and training framework.'
    ],
    tags: ['YOLOv5', 'Object Detection', 'Computer Vision', 'Python'],
    link: '#',
    slug: 'retail-shelf-detection',
  },
  {
    title: 'Analysis and Market Entry Strategy for an OTT Platform',
    organization: 'SocBiz, IITR',
    date: 'Jan 2023',
    details: [
      'A detailed case study on Analyzing the OTT market in India and creating a growth strategy and a pricing model for a company.'
    ],
    tags: ['Case Study', 'Market Analysis', 'Strategy', 'OTT'],
    link: '#',
    slug: 'ott-market-strategy',
  },
]; 