/* ─── Shared Project Data ───
   Used by both the homepage Projects section
   and the individual /projects/[slug] detail pages.
   ──────────────────────────── */

export const PROJECTS = [
  {
    slug: "iccn-knowledge-agent",
    index: "01",
    name: "ICCN Knowledge Agent",
    type: "RAG SYSTEM / CHATBOT",
    status: "PRODUCTION",
    year: "2024",
    shortDescription:
      "Intelligent document retrieval system for Indonesian legal knowledge base. Processes regulatory documents through chunking and embedding pipelines for context-aware question answering.",
    fullDescription: [
      "The ICCN Knowledge Agent is a Retrieval-Augmented Generation system built to serve as an intelligent assistant for navigating Indonesian legal and regulatory documents. The system ingests, processes, and indexes large volumes of regulatory text, enabling users to ask natural language questions and receive accurate, context-grounded answers.",
      "The architecture follows a classic RAG pipeline: documents are ingested, split into semantically meaningful chunks, embedded using Amazon Bedrock's Titan embedding model, and stored in a PostgreSQL database with pgvector for efficient similarity search. At query time, the user's question is embedded and matched against the vector store to retrieve relevant context, which is then fed to Amazon Nova Lite for synthesis.",
      "Key engineering challenges included optimizing chunk boundaries for legal text (which has unique structural patterns), tuning retrieval precision vs. recall, and implementing a feedback loop for continuous improvement of answer quality.",
    ],
    stack: "Python / LangGraph / Amazon Nova Lite / PostgreSQL / pgvector",
    stackList: [
      "Python 3.11",
      "LangGraph",
      "LangChain",
      "Amazon Bedrock (Nova Lite)",
      "Amazon Bedrock (Titan Embeddings)",
      "PostgreSQL + pgvector",
      "FastAPI",
    ],
    pattern:
      "Document Ingestion → Chunking → Embedding → Vector Retrieval → LLM Synthesis",
    diagram: `┌───────────────┐     ┌──────────────┐     ┌─────────────────┐
│  USER QUERY   │────▶│  EMBEDDING   │────▶│ VECTOR RETRIEVAL│
└───────────────┘     └──────────────┘     └─────────────────┘
                                                    │
                              ┌──────────────────────┘
                              ▼
                    ┌──────────────────┐     ┌──────────────┐
                    │  CONTEXT WINDOW  │────▶│  LLM SYNTH   │
                    └──────────────────┘     └──────────────┘`,
  },
  {
    slug: "ganusa-research-agent",
    index: "02",
    name: "Ganusa Research Agent",
    type: "MULTI-AGENT SYSTEM",
    status: "ACTIVE DEVELOPMENT",
    year: "2025",
    shortDescription:
      "Autonomous research system with multi-agent ReAct reasoning loop. Decomposes complex queries into sub-tasks, performs iterative web research, and synthesizes comprehensive reports.",
    fullDescription: [
      "Ganusa is a multi-agent research system designed to autonomously investigate complex topics by decomposing questions, performing iterative web research, and synthesizing findings into structured reports. The system uses a ReAct (Reasoning + Acting) loop architecture orchestrated through LangGraph's state machine framework.",
      "The agent pipeline consists of three core agents: a Planner that decomposes the user's research question into sub-queries, a Reasoner that iteratively searches the web (via Tavily API), analyzes results, and determines if more research is needed, and a Synthesizer that compiles all findings into a coherent markdown or PDF report.",
      "The system supports multiple LLM backends — Amazon Nova Pro for planning and synthesis tasks, and DeepSeek-Chat for reasoning steps that benefit from its strong analytical capabilities. The architecture is designed for extensibility, allowing new tool integrations and agent types to be added without modifying the core orchestration logic.",
    ],
    stack: "Python / LangGraph / Amazon Nova Pro / DeepSeek-Chat / Tavily",
    stackList: [
      "Python 3.11",
      "LangGraph",
      "LangChain",
      "Amazon Bedrock (Nova Pro)",
      "DeepSeek-Chat API",
      "Tavily Search API",
      "FastAPI",
    ],
    pattern:
      "Planner → ReAct Reasoner Loop → Synthesizer → Markdown/PDF Export",
    diagram: `┌──────────────┐     ┌──────────────┐
│   PLANNER    │────▶│   REASONER   │◀─── LOOP
└──────────────┘     └──────┬───────┘
                            │
              ┌─────────────┼──────────────┐
              ▼             ▼              ▼
        ┌──────────┐ ┌──────────┐  ┌────────────┐
        │  SEARCH  │ │  ANALYZE │  │  EVALUATE  │
        └──────────┘ └──────────┘  └────────────┘
                            │
                            ▼
                    ┌──────────────┐
                    │ SYNTHESIZER  │────▶ PDF/MD
                    └──────────────┘`,
  },
  {
    slug: "ai-content-pipeline",
    index: "03",
    name: "AI Content Pipeline",
    type: "GENERATIVE AI / PIPELINE",
    status: "PRODUCTION",
    year: "2024",
    shortDescription:
      "Automated content processing pipeline that ingests raw media, applies AI-driven analysis, and generates structured outputs for downstream consumption.",
    fullDescription: [
      "The AI Content Pipeline is an automated system that processes raw media content — primarily audio and video — through a series of AI-powered stages to produce structured, searchable, and actionable outputs. The pipeline handles ingestion, transcription, analysis, and multi-format export.",
      "Raw media files are ingested and pre-processed using FFmpeg for format normalization and segmentation. Audio is transcribed using OpenAI's Whisper model, producing high-accuracy transcripts that serve as the foundation for downstream analysis. GPT-4o then performs content analysis, extracting key topics, summaries, timestamps, and actionable items.",
      "The system is built on FastAPI for its async capabilities, enabling concurrent processing of multiple media files. Output formats include structured JSON for API consumption, markdown for human-readable reports, and PDF for formal documentation. The pipeline is designed to be modular, allowing individual stages to be replaced or upgraded independently.",
    ],
    stack: "Python / FFmpeg / Whisper / GPT-4o / FastAPI",
    stackList: [
      "Python 3.11",
      "FFmpeg",
      "OpenAI Whisper",
      "OpenAI GPT-4o",
      "FastAPI",
      "Celery (task queue)",
    ],
    pattern: "Ingestion → Transcription → Analysis → Generation → Export",
    diagram: `┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  INGESTION   │────▶│ TRANSCRIBER  │────▶│   ANALYZER   │
└──────────────┘     └──────────────┘     └──────────────┘
                                                  │
                                                  ▼
                                          ┌──────────────┐
                                          │  GENERATOR   │
                                          └──────┬───────┘
                                                 │
                              ┌──────────────────┼──────────┐
                              ▼                  ▼          ▼
                        ┌──────────┐      ┌─────────┐ ┌────────┐
                        │   JSON   │      │   MD    │ │  PDF   │
                        └──────────┘      └─────────┘ └────────┘`,
  },
];
