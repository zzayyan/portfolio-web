/* ─── Shared Project Data ───
   Used by both the homepage Projects section
   and the individual /projects/[slug] detail pages.
   ──────────────────────────── */

export const PROJECTS = [
  {
    slug: "iccn-ai-agent",
    index: "01",
    name: "ICCN AI Agent Implementation",
    videoPreview: "/videos/chatbot-iccn.mp4",
    videoPoster: "/videos/posters/chatbot-iccn.jpg",
    type: "MULTI-AGENT / RAG SYSTEM",
    status: "PRODUCTION",
    year: "2026",
    demoUrl: null,
    demoLinks: [
      { label: "ICCN CHATBOT", url: "https://next.iccn.or.id/", note: "Type \"ramalan karir\" to access the gamification data collector." },
      { label: "AI RESEARCH AGENT", url: "https://next.iccn.or.id/dashboard/super-agent-ai", note: "Login required to access the AI Research Agent dashboard." },
    ],
    shortDescription:
      "Multi-agent AI system featuring a LangGraph-powered research agent with ReAct reasoning and a gamified data collection agent. Integrated with Tavily for real-time research and Redis for session management.",
    fullDescription: [
      "The ICCN AI Agent Implementation consists of two major sub-projects: an AI Research Agent and a Ramalan Agent (Gamification Data Collector), both designed to serve the needs of the ICCN organization.",
      "The AI Research Agent leverages LangGraph's multi-step reasoning with the ReAct paradigm, integrated with Tavily for real-time web research. It automates the synthesis of comprehensive Markdown reports with citations, working across multi-model LLMs for optimal results in different reasoning tasks.",
      "The Ramalan Agent is a gamified task-oriented agent designed for user profiling and data collection. It uses Redis for session management across multi-turn conversations and implements async background tasks for UI responsiveness, creating an engaging experience for users while gathering valuable data.",
    ],
    stack: "Python / LangGraph / Tavily / Redis / Multi-Model LLMs",
    stackList: [
      "Python",
      "LangGraph",
      "LangChain",
      "Tavily Search API",
      "Redis",
      "FastAPI",
      "Amazon Bedrock",
    ],
    pattern:
      "ReAct Reasoning Loop → Multi-Step Research → Report Synthesis",
    diagram: `┌──────────────┐     ┌──────────────┐
│   PLANNER    │────▶│   REASONER   │◀─── ReAct LOOP
└──────────────┘     └──────┬───────┘
                            │
              ┌─────────────┼──────────────┐
              ▼             ▼              ▼
        ┌──────────┐ ┌──────────┐  ┌────────────┐
        │  TAVILY  │ │  ANALYZE │  │  EVALUATE  │
        └──────────┘ └──────────┘  └────────────┘
                            │
                            ▼
                    ┌──────────────┐
                    │ SYNTHESIZER  │────▶ MD Report
                    └──────────────┘`,
  },
  {
    slug: "jdih-chatbot",
    index: "02",
    name: "JDIH Jawa Timur Chatbot",
    videoPreview: "/videos/jdih-chatbot.mp4",
    videoPoster: "/videos/posters/jdih-chatbot.jpg",
    type: "RAG SYSTEM / CHATBOT",
    status: "PRODUCTION",
    year: "2026",
    demoUrl: "https://jdih.jatimprov.go.id/",
    shortDescription:
      "RAG-based legal information assistant with hybrid search (semantic & lexical) using Reciprocal Rank Fusion. Features real-time ingestion pipeline reducing document availability latency from ~24h to <1 minute.",
    fullDescription: [
      "The JDIH Jawa Timur Real-Time Chatbot is a Retrieval-Augmented Generation system built to serve as an intelligent assistant for navigating legal and regulatory documents in the East Java region.",
      "The system implements Hybrid Search combining Semantic and Lexical approaches with Reciprocal Rank Fusion (RRF) to maximize retrieval accuracy. This dual-approach ensures both contextual understanding and exact term matching for legal queries.",
      "A key innovation is the real-time ingestion pipeline that reduced new legal document availability latency from approximately 24 hours to less than 1 minute. The system also features Dynamic Regex Extraction for handling complex numbered legal document identifiers.",
    ],
    stack: "Python / FastAPI / ChromaDB / Amazon Bedrock",
    stackList: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "Amazon Bedrock",
      "Hybrid Search (RRF)",
    ],
    pattern:
      "Document Ingestion → Hybrid Search (Semantic + Lexical) → RRF Fusion → LLM Synthesis",
    diagram: `┌───────────────┐     ┌──────────────┐     ┌─────────────────┐
│  USER QUERY   │────▶│  EMBEDDING   │────▶│ SEMANTIC SEARCH │
└───────────────┘     └──────────────┘     └────────┬────────┘
        │                                           │
        │             ┌──────────────┐              │
        └────────────▶│ LEXICAL SRCH │──────┐       │
                      └──────────────┘      ▼       ▼
                                     ┌──────────────────┐
                                     │    RRF FUSION    │
                                     └────────┬─────────┘
                                              ▼
                                     ┌──────────────────┐
                                     │   LLM SYNTHESIS  │
                                     └──────────────────┘`,
  },
  {
    slug: "ai-clipper",
    index: "03",
    name: "AI Clipper",
    type: "VIDEO PROCESSING / PIPELINE",
    status: "PRODUCTION",
    year: "2026",
    shortDescription:
      "End-to-end pipeline for extracting viral clips from YouTube/local video. Features Faster-Whisper transcription, Amazon Bedrock semantic analysis, and OpenCV-based smart crop for automatic 16:9 → 9:16 reframing.",
    fullDescription: [
      "AI Clipper is an end-to-end automated pipeline designed to extract viral-worthy clips from long-form YouTube or local video content, optimized for short-form social media platforms.",
      "The system uses Faster-Whisper for high-accuracy audio transcription, then leverages Amazon Bedrock for semantic analysis to identify the most engaging and viral-potential segments from the transcript.",
      "A standout feature is the 'Smart Crop' capability powered by OpenCV face detection, which automatically reframes content from landscape 16:9 to portrait 9:16 format, ensuring subjects remain centered and visible for mobile-first consumption.",
    ],
    stack: "Python / Faster-Whisper / Amazon Bedrock / OpenCV",
    stackList: [
      "Python",
      "Faster-Whisper",
      "Amazon Bedrock",
      "OpenCV",
      "FFmpeg",
    ],
    pattern:
      "Video Ingestion → Transcription → Semantic Analysis → Smart Crop → Export",
    diagram: `┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  VIDEO INPUT │────▶│  TRANSCRIBE  │────▶│   ANALYZE    │
└──────────────┘     │ Faster-Whisp │     │ Amazon Bedr. │
                     └──────────────┘     └──────┬───────┘
                                                 │
                                                 ▼
                                         ┌──────────────┐
                                         │  SMART CROP  │
                                         │   OpenCV     │
                                         └──────┬───────┘
                                                 │
                                    ┌────────────┼────────────┐
                                    ▼            ▼            ▼
                              ┌─────────┐ ┌──────────┐ ┌──────────┐
                              │  16:9   │ │   9:16   │ │  SHORTS  │
                              └─────────┘ └──────────┘ └──────────┘`,
  },
  {
    slug: "klinikhoax-ai",
    index: "04",
    name: "KlinikHoax AI",
    type: "FACT-CHECKING / CHATBOT",
    status: "COMPLETED",
    year: "2025",
    shortDescription:
      "Chatbot fact-checking system powered by LangFlow and Amazon Nova. Features AI-driven cross-referencing with Google Search in real-time and end-to-end user ticket tracking.",
    fullDescription: [
      "KlinikHoax AI is an AI-powered fact-checking chatbot built to combat misinformation by providing users with verified, evidence-based responses to their queries about potentially false claims.",
      "The system leverages LangFlow for orchestrating the AI pipeline and Amazon Nova as the core LLM. When a user submits a claim for verification, the AI Fact-Check module cross-references the report with Google Search results in real-time to validate or debunk the claim.",
      "The platform also includes a comprehensive end-to-end ticket tracking system, allowing users to submit reports, track the verification progress, and receive detailed fact-check results — creating a complete misinformation response workflow.",
    ],
    stack: "Python / LangFlow / Amazon Nova / Google Search API",
    stackList: [
      "Python",
      "LangFlow",
      "Amazon Nova",
      "Google Search API",
      "FastAPI",
    ],
    pattern:
      "User Report → AI Analysis → Real-time Cross-Reference → Fact-Check Result",
    diagram: `┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ USER REPORT  │────▶│  AI ANALYZE  │────▶│ CROSS-CHECK  │
└──────────────┘     │  LangFlow    │     │ Google Search│
                     └──────────────┘     └──────┬───────┘
                                                 │
                                                 ▼
                                         ┌──────────────┐
                                         │ FACT VERDICT │
                                         └──────┬───────┘
                                                 │
                                                 ▼
                                         ┌──────────────┐
                                         │TICKET SYSTEM │
                                         └──────────────┘`,
  },
  {
    slug: "bisindo-detection",
    index: "05",
    name: "BISINDO Sign Language Detection",
    type: "COMPUTER VISION / THESIS",
    status: "COMPLETED",
    year: "2025",
    shortDescription:
      "Instance segmentation model using YOLOv8 for detecting BISINDO (Indonesian Sign Language) alphabets. Full pipeline from data collection, annotation, cleaning, and augmentation using Roboflow.",
    fullDescription: [
      "BISINDO Sign Language Detection is a thesis project focused on building an instance segmentation model to detect and recognize Indonesian Sign Language (BISINDO) alphabet gestures in real-time.",
      "The project implements YOLOv8 instance segmentation with a complete ML pipeline: data collection, annotation using Roboflow, data cleaning, and various augmentation strategies to improve model robustness.",
      "A key contribution of the research is the evaluation of model performance across different data split scenarios and augmentation combination strategies, providing insights into optimal training configurations for sign language detection tasks.",
    ],
    stack: "Python / YOLOv8 / Roboflow / Computer Vision",
    stackList: [
      "Python",
      "YOLOv8",
      "Roboflow",
      "OpenCV",
      "Instance Segmentation",
    ],
    pattern:
      "Data Collection → Annotation → Augmentation → Training → Evaluation",
    diagram: `┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│    COLLECT   │────▶│   ANNOTATE   │────▶│   AUGMENT    │
│    Data      │     │   Roboflow   │     │  Strategies  │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                 │
                                                 ▼
                                         ┌──────────────┐
                                         │  TRAIN YOLO  │
                                         │  v8-seg      │
                                         └──────┬───────┘
                                                 │
                                                 ▼
                                         ┌──────────────┐
                                         │  EVALUATE    │
                                         │ Cross-Split  │
                                         └──────────────┘`,
  },
  {
    slug: "fitfood-classification",
    index: "06",
    name: "FitFood Image Classification",
    type: "DEEP LEARNING / MOBILE",
    status: "COMPLETED",
    year: "2024",
    shortDescription:
      "Multi-label deep learning model for 40+ Indonesian traditional foods using Transfer Learning with InceptionV3. Converted to TensorFlow Lite for Android deployment.",
    fullDescription: [
      "FitFood is a multi-label image classification system designed to identify over 40 types of Indonesian traditional foods from photographs, built as part of a health-related mobile application.",
      "The model leverages Transfer Learning with InceptionV3 as the base architecture, with fine-tuning of 60+ top layers to adapt the pre-trained features specifically for Indonesian food recognition.",
      "For mobile deployment, the trained model is converted to TensorFlow Lite (.tflite) format, enabling real-time on-device inference on Android smartphones without requiring network connectivity for predictions.",
    ],
    stack: "Python / TensorFlow / InceptionV3 / TFLite",
    stackList: [
      "Python",
      "TensorFlow",
      "InceptionV3",
      "TensorFlow Lite",
      "Android",
    ],
    pattern:
      "Transfer Learning → Fine-Tuning → TFLite Conversion → Mobile Deployment",
    diagram: `┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  DATASET     │────▶│ InceptionV3  │────▶│  FINE-TUNE   │
│  40+ Foods   │     │  Base Model  │     │  60+ layers  │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                 │
                                                 ▼
                                         ┌──────────────┐
                                         │  CONVERT     │
                                         │  → .tflite   │
                                         └──────┬───────┘
                                                 │
                                                 ▼
                                         ┌──────────────┐
                                         │  ANDROID APP │
                                         │  On-Device   │
                                         └──────────────┘`,
  },
  {
    slug: "rogue-of-logic",
    index: "07",
    name: "Rogue of Logic Game",
    type: "GAME DEVELOPMENT",
    status: "COMPLETED",
    year: "2023",
    shortDescription:
      "Game project with high-quality sound effects implementation and UI coding based on design specifications.",
    fullDescription: [
      "Rogue of Logic is a game development project where the primary contributions focused on implementing high-quality sound effects and coding the user interface based on provided design specifications.",
      "The project involved close collaboration with the design team to translate visual mockups into functional game UI elements, ensuring pixel-perfect implementation of the design vision.",
      "Sound design work included selecting, editing, and integrating audio assets to create an immersive gaming experience that complemented the visual gameplay elements.",
    ],
    stack: "Game Development / Sound Design / UI Implementation",
    stackList: [
      "Game Dev",
      "Sound Effects",
      "UI/UX Implementation",
    ],
    pattern:
      "Design Specs → UI Implementation → Sound Integration → Testing",
    diagram: `┌──────────────┐     ┌──────────────┐
│ DESIGN SPECS │────▶│  UI CODING   │
└──────────────┘     └──────┬───────┘
                            │
                            ▼
                    ┌──────────────┐
                    │ SOUND DESIGN │
                    └──────┬───────┘
                            │
                            ▼
                    ┌──────────────┐
                    │  INTEGRATE   │
                    └──────────────┘`,
  },
];
