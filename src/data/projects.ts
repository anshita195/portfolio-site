export type Project = {
  title: string;
  oneLiner: string;
  description: string[];
  tags: string[];
  slug: string;
};

export const projects: Project[] = [
  {
    title: 'Crypto Sentiment Analyzer — SDSLabs, IIT Roorkee',
    oneLiner: 'Full-stack platform analyzing real-time crypto sentiment from Reddit.',
    description: [
      'Built a full-stack platform (Node.js/Express, MongoDB Atlas, React/Vite, Tailwind) that ingests real-time price data from CoinGecko and Reddit posts via Pushshift.io.',
      'Implemented lightweight sentiment scoring on Reddit content using keyword-based analysis in TensorFlow.js, storing results with compound indexes for efficient time-series queries.',
      'Developed interactive Recharts dashboards and a dynamic feed highlighting top positive/negative posts, all containerized with Docker Compose for easy deployment.',
    ],
    tags: ['Node.js', 'Express', 'MongoDB Atlas', 'React', 'Vite', 'Tailwind CSS', 'TensorFlow.js', 'Docker Compose', 'Recharts'],
    slug: 'crypto-sentiment-analyzer',
  },
  {
    title: 'Fake News Detector (Makers\'23) — SDSLabs',
    oneLiner: 'RAG prototype to extract and verify claims from news articles.',
    description: [
      'Developed an end-to-end RAG prototype with a FastAPI backend and React/TypeScript frontend (Vite, Tailwind) to extract claims from articles and verify them via vector search.',
      'Used sentence embeddings (all-MiniLM-L6-v2) and a FAISS index over a curated news corpus to retrieve supporting evidence from BBC, Reuters, and NYT.',
      'Integrated an OpenAI GPT-3.5 Turbo endpoint to analyze each claim against retrieved evidence, returning REAL/FAKE verdicts with confidence scores and concise chain-of-thought explanations.',
    ],
    tags: ['FastAPI', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'FAISS', 'OpenAI GPT-3.5 Turbo', 'Sentence Embeddings'],
    slug: 'fake-news-detector',
  },
  {
    title: 'Retail Shelf Detection System — Computer Vision Project',
    oneLiner: 'YOLOv5-based object detection for retail shelf monitoring.',
    description: [
      'Implemented YOLOv5-based object detection system for retail shelf monitoring.',
      'Developed and compared multiple model architectures (small and medium variants).',
      'Created data preprocessing pipeline and training framework.',
      'Implemented model evaluation metrics and performance analysis.',
      'Technologies: Python, PyTorch, YOLOv5, Computer Vision, Deep Learning.',
    ],
    tags: ['YOLOv5', 'Python', 'PyTorch', 'Computer Vision', 'Data Preprocessing', 'Model Training'],
    slug: 'retail-shelf-detection',
  },
  {
    title: 'Credit Card Behaviour Score Prediction — Finance Club, IIT Roorkee',
    oneLiner: 'Classification model to predict credit card defaults.',
    description: [
      'Built a classification model to flag next-month defaults for 30K+ credit-card customers.',
      'Performed EDA on payment status, bill amounts, utilization ratios and delinquency trends.',
      'Engineered features such as rolling utilization metrics and consecutive late-payment streaks.',
      'Balanced the dataset with SMOTE and class weights; benchmarked Logistic Regression, XGBoost and LightGBM, tuning thresholds via AUC-ROC.',
      'Generated production-style predictions on a validation set and interpreted them using SHAP.',
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering', 'Classification Models', 'Exploratory Data Analysis'],
    slug: 'credit-card-behavior',
  },
  {
    title: 'ML techniques for PSD in Scintillation detectors — IIT Roorkee',
    oneLiner: 'Deep learning for pulse shape discrimination in detectors.',
    description: [
      'Utilising Deep Learning for Pulse Shape Discrimination (PSD) between neutron/gamma rays by developing a Neural Network Model modelled on the training dataset BC501.',
      'Currently working on improving the accuracy of the algorithm.',
    ],
    tags: ['Deep Learning', 'Neural Networks', 'Python', 'Pulse Shape Discrimination', 'BC501 Dataset'],
    slug: 'ml-techniques-psd',
  },
  {
    title: 'Analysis and Market Entry Strategy for an OTT Platform — SocBiz, IITR',
    oneLiner: 'Market analysis and strategy for an OTT platform in India.',
    description: [
      'Conducted a detailed case study analyzing the OTT market in India and produced a growth strategy and a pricing model for a company.',
      'A detailed case study on Analyzing the OTT market in India and creating a growth strategy and a pricing model for a company. so absically fo teh individual paegs that open afetr lcicking learn mroe iw ant the decsriptino to be i n abtetr format liek thi s in fomr of csaml ulelt potins and in page center proep rlayout',
    ],
    tags: ['Market Research', 'Strategy', 'Pricing Model', 'OTT Analysis', 'Case Study'],
    slug: 'ott-platform-strategy',
  },
]; 