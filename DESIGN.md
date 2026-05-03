# PORTFOLIO — AI ENGINEER
## Design System & Layout Architecture 
**Version:** 1.0 | **Aesthetic:** Technical Brutalism / Swiss Engineering
**Palette:** Strictly Monochromatic — `#000000` + `#FFFFFF` only
**No exceptions. No grays. No AI tropes.**

---

## 0. DESIGN SYSTEM FOUNDATION

### 0.1 Color Tokens
```
--color-ground:   #FFFFFF  /* Page substrate */
--color-mass:     #000000  /* All ink, borders, fills */
--color-void:     #FFFFFF  /* Intentional empty space — treated as a design element */
```
> Rule: Every component is either BLACK on WHITE or WHITE on BLACK. Inversion is the only allowed accent mechanic.

### 0.2 Typography Scale

**Display / Hero (Structural)**
- Font: `"Neue Haas Grotesk Display"` or `"ABC Whyte"` — heavy weight 900
- Fallback: `"Helvetica Neue"`, `"Arial Black"`
- Usage: Section anchors, hero headline, oversized labels
- Rendering: Tracked tight at `letter-spacing: -0.04em` for display sizes

**Body / Editorial**
- Font: `"Suisse Int'l"` or `"LL Unica77"` — regular/medium weight
- Fallback: `"Helvetica Neue"`
- Usage: Paragraphs, descriptions, navigation

**Technical / Metadata**
- Font: `"IBM Plex Mono"` or `"Söhne Mono"`
- Fallback: `"Courier New"`, monospace
- Usage: Code labels, version tags, coordinates, file paths, schema annotations, timestamps
- Style: Always uppercase, `letter-spacing: 0.08em`, `font-size` capped at 11px for metadata

**Type Scale (rem-based, fluid)**
```
--t-meta:    0.6875rem   /* 11px — mono labels, coordinates */
--t-caption: 0.75rem     /* 12px — mono captions */
--t-body:    1rem         /* 16px — body sans */
--t-lead:    1.25rem     /* 20px — lead paragraphs */
--t-sub:     1.5rem      /* 24px — subheadings */
--t-h3:      2rem         /* 32px — section markers */
--t-h2:      3.5rem      /* 56px — section titles */
--t-h1:      6rem         /* 96px — hero display */
--t-display: clamp(5rem, 14vw, 12rem)  /* Fluid oversized display */
```

### 0.3 Grid Architecture
- Base: 12-column grid with `column-gap: 2.5vw`
- Margin: `max(4vw, 32px)` on left/right — never centered with auto margins
- Asymmetric bias: Primary content anchored to columns 1–8; metadata/annotations anchor to columns 9–12
- Vertical rhythm unit: `8px` base — all spacing is a multiple of `8px`
- Section padding: `min(160px, 14vh)` top and bottom
- **No card shadows. No border-radius. No gradients.**

### 0.4 Border Language
- All dividers: `1px solid #000000`
- Structural frames: `1px solid #000000` — used to define modular logic blocks
- Interactive hover state: invert fill (black block, white text) — no transition delay, instant swap
- Focus state: `2px solid #000000` outline, `outline-offset: 4px`

### 0.5 Motion Principles
- Philosophy: Motion is structural, not decorative. It reveals hierarchy.
- Allowed: Entrance reveals (fade + translate Y, `duration: 400ms`, `easing: cubic-bezier(0.16, 1, 0.3, 1)`)
- Allowed: Instant fill inversion on hover (0ms — hard cut, no easing)
- Allowed: Horizontal ticker/marquee for overflow labels at `60px/s` constant velocity
- Forbidden: Parallax, glows, blurs, scale transforms that distort the grid

---

## 1. GLOBAL NAVIGATION

**Layout:** Full-width fixed header, `height: 56px`, `border-bottom: 1px solid #000000`
**Background:** `#FFFFFF` — no blur, no transparency
**Padding:** `0 max(4vw, 32px)`

**Left anchor — Logotype:**
- Text: `[LAST_NAME, FIRST] / AI ENGINEER`
- Font: IBM Plex Mono, 11px, uppercase, `letter-spacing: 0.1em`
- Format: Treat as a file path or terminal identifier, not a logo

**Right anchor — Navigation Links:**
- Items: `WORK_`, `STACK_`, `PROCESS_`, `CONTACT_`
- Font: IBM Plex Mono, 11px, uppercase
- Separator: A single `·` character between items (monospace middot, `color: #000`)
- Hover: Instant underline (`text-decoration: underline`, `text-underline-offset: 3px`) — no color change
- Active state: Wrap in `[ ]` brackets — e.g., `[WORK_]`

**Scroll behavior:** On scroll past 100px, add a `border-bottom: 1px solid #000` if not already present (it always is). No shrink animation. No color change. Navigation stays fixed and identical — brutal consistency.

---

## 2. HERO SECTION

**Viewport:** Full-screen, `min-height: 100svh`
**Layout:** CSS Grid, 12 columns
**Background:** `#FFFFFF`
**No imagery. No illustrations. No icons.**

### 2.1 Primary Headline Block
- **Position:** Columns 1–10, starts at `padding-top: 180px` from top of section
- **Content:**

```
BUILDING
SYSTEMS
THAT THINK.
```

- **Typesetting:** Each word on its own line. Font: Display sans-serif (Neue Haas Grotesk Display), weight 900
- **Size:** `clamp(5rem, 13vw, 11rem)` — fluid, fills the column width
- **Letter-spacing:** `-0.04em`
- **Line-height:** `0.92` — lines nearly touch, creating a dense typographic mass
- **Color:** `#000000`

### 2.2 Annotation Strip (Right column)
- **Position:** Columns 11–12, vertically centered alongside the headline
- **Content block (stacked, mono font, 10px):**
```
PORTFOLIO v3.1
──────────────
DISCIPLINE
AI ENGINEERING
RAG / AGENTS
MULTI-SYSTEM

LOCATION
[CITY, COUNTRY]

LAST UPDATED
[YYYY-MM-DD]
```
- **Font:** IBM Plex Mono, `--t-meta`
- **Color:** `#000000`
- **Border-left:** `1px solid #000000` with `padding-left: 16px`

### 2.3 Role Descriptor Line
- **Position:** Columns 1–8, directly below the headline, `margin-top: 48px`
- **Content:** `RAG Architectures — Generative AI Frameworks — Multi-Agent Systems`
- **Font:** Body sans-serif, weight 400, `--t-lead`
- **Style:** Plain, no punctuation flourishes. Separated by em-dashes with single spaces.

### 2.4 Bottom Anchor Bar
- **Position:** Pinned to `bottom: 0` of the hero section, full-width
- **Height:** `48px`
- **Border-top:** `1px solid #000000`
- **Layout:** Flex row, space-between
- **Left content (mono, 10px):**
  `SCROLL TO EXPLORE ↓` — static, no animation
- **Right content (mono, 10px):**
  `001 / HERO` — section counter, right-aligned
- **Background:** `#FFFFFF`

---

## 3. PROJECT SHOWCASE — "TECHNICAL SCHEMATICS"

**Section ID:** `WORK_`
**Background:** Alternating — the entire section background is `#000000`
**Section padding:** `min(160px, 14vh)` top and bottom

### 3.1 Section Header
- **Layout:** Full-width, `border-bottom: 1px solid #FFFFFF`
- **Left:** Section label — `SELECTED WORK` — Font: Display sans, 900, `--t-h1`, `color: #FFFFFF`
- **Right:** Counter — `[003 PROJECTS]` — Font: IBM Plex Mono, `--t-meta`, `color: #FFFFFF`, aligned to bottom of the headline

### 3.2 Project Schematic Unit (Repeat per project)

Each project is rendered NOT as a card but as a **Technical Schematic Block** — a full-width, horizontally-divided modular unit that visually resembles a system architecture diagram cross-referenced with an engineering spec sheet.

**Outer container:**
- Full width: columns 1–12
- `border: 1px solid #FFFFFF`
- `margin-bottom: 2px` (the 2px gap between units is the only visual breath)
- Background: `#000000`

**On hover:** Full container background inverts to `#FFFFFF`. All text and borders invert to `#000000`. Instant, no transition.

**Internal layout — 3-zone horizontal split:**

---

**ZONE A — Project Index + Meta** (width: `16%`, `border-right: 1px solid #FFFFFF`)
```
[01]
──────────────
TYPE
RAG SYSTEM

STATUS
PRODUCTION

YEAR
2024
```
- Font: IBM Plex Mono, `--t-meta`, `color: #FFFFFF`
- Padding: `40px 32px`
- Vertical: Top-aligned

---

**ZONE B — Schematic Diagram** (width: `48%`, `border-right: 1px solid #FFFFFF`)
- This zone renders a **pure CSS/SVG logic-flow diagram** of the project architecture
- The diagram uses only `1px solid` lines, `#FFFFFF` on dark bg (inverts on hover)
- Node boxes: `border: 1px solid currentColor`, no fill (transparent), monospace labels inside
- Arrow connectors: Simple right-angled lines (no curves) with `▶` arrowhead characters at terminus
- The flow should visualize the actual system: e.g., for a RAG system:

```
┌───────────────┐     ┌──────────────┐     ┌─────────────────┐
│  USER QUERY   │────▶│ TRANSFORMER  │────▶│ VECTOR RETRIEVAL│
└───────────────┘     └──────────────┘     └─────────────────┘
                                                    │
                              ┌─────────────────────┘
                              ▼
                    ┌──────────────────┐     ┌──────────────┐
                    │  CONTEXT WINDOW  │────▶│  LLM SYNTH   │
                    └──────────────────┘     └──────────────┘
```

- Diagram is rendered in SVG or styled `<pre>` block using monospace box-drawing characters
- Padding: `40px 48px`
- Overflow: `hidden` — no scroll

---

**ZONE C — Project Specification** (width: `36%`)
```
PROJECT NAME                          ← sans-serif, --t-h3, weight 700
Full title here

DESCRIPTION                           ← mono label
One or two sentence technical
description of the system built.

TECHNICAL STACK                       ← mono label
Python / LangGraph / Amazon Bedrock
Tavily / PostgreSQL / FastAPI

ARCHITECTURE PATTERN                  ← mono label
Multi-agent ReAct Loop
Query Decomposition → RAG → Synthesis

VIEW SCHEMATIC →                      ← CTA, bottom of zone
```
- Project Name: sans-serif, `--t-h3`, weight 900, `color: #FFFFFF`
- Labels: IBM Plex Mono, `--t-meta`, `color: #FFFFFF`, uppercase, `letter-spacing: 0.1em`, `margin-bottom: 4px`
- Values: Body sans-serif, `--t-body`, weight 400, `color: #FFFFFF`
- CTA `VIEW SCHEMATIC →`: IBM Plex Mono, `--t-caption`, underlined, sits at the bottom via `margin-top: auto`
- Padding: `40px 40px 40px 48px`
- Zone C uses flexbox column with `justify-content: space-between`

---

**Project List (3 projects minimum):**

**Project 01 — ICCN Knowledge Agent**
- Type: RAG SYSTEM / CHATBOT
- Stack: Python, LangGraph, Amazon Nova Lite, PostgreSQL, pgvector
- Pattern: Document Ingestion → Chunking → Embedding → Vector Retrieval → LLM Synthesis
- Status: PRODUCTION

**Project 02 — Ganusa Research Agent**
- Type: MULTI-AGENT SYSTEM
- Stack: Python, LangGraph, Amazon Nova Pro, DeepSeek-Chat, Tavily
- Pattern: Planner → ReAct Reasoner Loop → Synthesizer → Markdown/PDF Export
- Status: ACTIVE DEVELOPMENT

**Project 03 — [Third project — scalable placeholder]**
- Type: GENERATIVE AI / PIPELINE
- Stack: [Define per project]
- Pattern: [Architecture-specific]
- Status: [Status]

---

## 4. TECH STACK — "THE ARSENAL"

**Section ID:** `STACK_`
**Background:** `#FFFFFF`
**Section padding:** `min(160px, 14vh)` top and bottom

### 4.1 Section Header
- Left: `THE ARSENAL` — Display sans, 900, `--t-h1`, `color: #000000`
- Right: `[TOOLS & INFRASTRUCTURE]` — IBM Plex Mono, `--t-meta`, baseline-aligned to the bottom of the headline

### 4.2 Stack Layout — Horizontal Registry Table

Render the stack NOT as icon grids or tag clouds. Render it as a **technical registry** — a structured table that looks like a dependency manifest or specification sheet.

**Table structure:**
- Full-width, `border: 1px solid #000000`
- No rounded corners
- `border-collapse: collapse`
- Each row: `border-bottom: 1px solid #000000`
- Each cell: `padding: 20px 24px`

**Columns:**
```
CATEGORY        │ TOOL / FRAMEWORK       │ ROLE                          │ PROFICIENCY
────────────────┼────────────────────────┼───────────────────────────────┼─────────────────
ORCHESTRATION   │ LangGraph              │ Multi-agent state machine      │ ████████████░░░ EXPERT
                │ LangChain              │ Chain composition, tooling     │ ████████████░░░ EXPERT
────────────────┼────────────────────────┼───────────────────────────────┼─────────────────
LLM PROVIDERS   │ Amazon Bedrock         │ Nova Pro / Nova Lite models    │ ████████████░░░ EXPERT
                │ DeepSeek               │ Reasoning, code generation     │ ██████████░░░░░ ADVANCED
                │ OpenAI API             │ GPT-4o integration             │ ██████████░░░░░ ADVANCED
────────────────┼────────────────────────┼───────────────────────────────┼─────────────────
RETRIEVAL       │ pgvector               │ Vector similarity search       │ ████████████░░░ EXPERT
                │ Tavily                 │ Real-time web search API       │ ██████████░░░░░ ADVANCED
                │ FAISS                  │ Embedding index prototype      │ ████████░░░░░░░ PROFICIENT
────────────────┼────────────────────────┼───────────────────────────────┼─────────────────
INFRASTRUCTURE  │ Python 3.11+           │ Primary language               │ ████████████░░░ EXPERT
                │ FastAPI                │ API layer, async endpoints     │ ██████████░░░░░ ADVANCED
                │ PostgreSQL             │ Persistent storage, RAG data   │ ██████████░░░░░ ADVANCED
                │ Docker                 │ Containerization               │ ████████░░░░░░░ PROFICIENT
```

- **Column: CATEGORY** — IBM Plex Mono, `--t-meta`, uppercase, `color: #000`, `width: 18%`
- **Column: TOOL** — Body sans-serif, `--t-body`, weight 700, `width: 22%`
- **Column: ROLE** — Body sans-serif, `--t-body`, weight 400, `width: 40%`
- **Column: PROFICIENCY** — IBM Plex Mono, `--t-meta` with a custom bar:
  - Bar: A series of `█` and `░` unicode block characters — filled blocks = black, empty = very light gray (#E0E0E0)
  - Label after bar: `EXPERT` / `ADVANCED` / `PROFICIENT` in mono caps
  - `width: 20%`
- **Row hover:** Background inverts to `#000000`, all text inverts to `#FFFFFF`. Hard, instant inversion.
- **Category rows with multiple entries:** Category cell spans multiple rows (`rowspan`), centered vertically

### 4.3 Stack Footer Note
- Below the table, `margin-top: 32px`
- Font: IBM Plex Mono, `--t-meta`, `color: #000`
- Content: `* PROFICIENCY ASSESSED: [YYYY-MM-DD] — STACK CONTINUOUSLY UPDATED`

---

## 5. PROCESS — "COGNITIVE ARCHITECTURE"

**Section ID:** `PROCESS_`
**Background:** `#000000`
**Section padding:** `min(160px, 14vh)` top and bottom

### 5.1 Section Header
- Left: `HOW I BUILD` — Display sans, 900, `--t-h1`, `color: #FFFFFF`

### 5.2 Layout: Vertical Process Flow

Four sequential process stages rendered as a vertical pipeline — each stage is a full-width row with `border-bottom: 1px solid #FFFFFF`.

**Each process row structure (columns 1–12):**

```
┌────────────────┬───────────────────────────────────┬──────────────────────────────┐
│ [01]           │ STAGE NAME                        │ Description text here        │
│ DEFINE         │                                   │ Approach, methodology, and   │
│                │ "The architecture precedes        │ tooling philosophy written   │
│ 3–4 WEEKS      │  the code. Always."               │ in plain, precise language.  │
└────────────────┴───────────────────────────────────┴──────────────────────────────┘
```

- **Left cell** (16% width): Stage index `[01]`, stage label, duration — IBM Plex Mono, `--t-meta`, `color: #FFFFFF`, top-aligned, `border-right: 1px solid #FFFFFF`
- **Center cell** (42% width): Stage Name — Display sans, `--t-h2`, weight 900, `color: #FFFFFF`; below it: a "philosophy quote" in italic body sans, `--t-lead`, `color: #FFFFFF`, `border-right: 1px solid #FFFFFF`
- **Right cell** (42% width): Descriptive paragraph — Body sans, `--t-body`, `color: #FFFFFF`, weight 400

**The 4 stages:**

**[01] DEFINE**
- Label: `PROBLEM ARCHITECTURE`
- Quote: *"The system model precedes the codebase."*
- Body: Decomposing the problem into data flows, knowledge boundaries, and agent responsibilities. Every RAG system begins as a flowchart, not a file.

**[02] DESIGN**
- Label: `SYSTEM DESIGN`
- Quote: *"Interfaces are contracts. Agent boundaries are laws."*
- Body: Defining agent interfaces, retrieval schemas, prompt contracts, and state machine transitions using LangGraph before a single line of Python is written.

**[03] BUILD**
- Label: `ITERATIVE CONSTRUCTION`
- Quote: *"Ship the skeleton. Flesh is earned."*
- Body: Node-by-node implementation with constant evaluation loops. Each agent is tested in isolation before integration. Prompt engineering treated as a first-class engineering discipline.

**[04] EVALUATE**
- Label: `BENCHMARK & ITERATE`
- Quote: *"Intuition is validated by data."*
- Body: RAG evaluation using custom test suites, latency profiling, and LLM-as-judge scoring. Systems are production-ready only when they pass structured failure scenarios.

---

## 6. ABOUT / PHILOSOPHY — "THE OPERATOR"

**Section ID:** `ABOUT_`
**Background:** `#FFFFFF`
**Section padding:** `min(160px, 14vh)` top and bottom

### 6.1 Layout: Asymmetric Two-Column Split

**Left column (columns 1–5) — The Anchor Label:**
```
THE
OPERATOR
```
- Font: Display sans, 900, `--t-display` (fluid oversized)
- `writing-mode: horizontal-tb` — standard
- Positioned so the text mass fills the column height
- Below it: A single `1px solid #000000` horizontal line, full column width

Below the line, a metadata block:
```
NAME
[Full Name]

DISCIPLINE
AI Engineering / System Architecture

BASE
[City, Country]

AVAILABLE FOR
Consulting · Full-time · Research Collaborations
```
- Font: IBM Plex Mono, `--t-meta` for labels, `--t-body` body sans for values
- Row spacing: `24px` between entries

**Right column (columns 7–12) — The Statement:**

A single editorial text block — no bullet points, no headers, just two or three dense paragraphs that read like a technical manifesto.

> Font: Body sans-serif, `--t-lead`, weight 400, `line-height: 1.6`

Sample text structure:
```
Paragraph 1 — The Technical Premise:
I build cognitive systems — software architectures designed to 
retrieve, reason, and synthesize information autonomously. My 
work sits at the intersection of information retrieval theory, 
large language model engineering, and distributed agent design.

Paragraph 2 — The Design Philosophy:
I treat AI engineering as a precision discipline. Every prompt 
is a specification. Every agent boundary is a contract. The 
complexity of the system is hidden from the user; the clarity 
of the output is the only metric that matters.

Paragraph 3 — The Operating Principle:
I do not build AI features. I design AI infrastructure — 
systems that are maintainable, evaluable, and built to be 
replaced by something better.
```

### 6.2 Currently Reading / Following (Optional Subrow)
- **Below the two-column grid**, a full-width row with `border-top: 1px solid #000000`
- **Layout:** Horizontal scrolling ticker — monospace text, `font-size: --t-meta`
- **Content:** `CURRENTLY READING: [PAPER TITLE] — [AUTHOR] · [PAPER TITLE] — [AUTHOR] · INFLUENCED BY: Chain-of-Thought Prompting · ReAct · DSPy · LangGraph Conceptual Docs · ` (loops)
- **Animation:** `animation: marquee 60s linear infinite` — left to right

---

## 7. CONTACT — "INITIATE CONTACT"

**Section ID:** `CONTACT_`
**Background:** `#000000`
**Min-height:** `100svh` — full viewport
**Layout:** Centers a single massive CTA block vertically and horizontally

### 7.1 Central Block
```
READY TO
BUILD
SOMETHING
PRECISE.
```
- Font: Display sans, 900, `clamp(4rem, 11vw, 9rem)`
- `color: #FFFFFF`
- Letter-spacing: `-0.04em`
- Line-height: `0.9`

Below it, `margin-top: 64px`:
- A single full-width `1px solid #FFFFFF` horizontal rule
- Below the rule, `padding-top: 32px`:

**Contact links (inline, separated by `·`):**
```
EMAIL_          ·          GITHUB_          ·          LINKEDIN_          ·          RESUME.PDF_
```
- Font: IBM Plex Mono, `--t-sub` (24px), uppercase
- `color: #FFFFFF`
- Hover: Each link block gets a full white fill with black text (inversion) — the link becomes a filled rectangle
- Padding on hover state: `8px 16px` — the fill box appears around the text

### 7.2 Footer Strip
- Full-width, `border-top: 1px solid #FFFFFF`, `height: 56px`
- Flex row, `space-between`
- Left: `© [YEAR] — [FULL NAME]` — IBM Plex Mono, `--t-meta`, `color: #FFFFFF`
- Right: `DESIGNED IN [CITY]. ENGINEERED IN PYTHON.` — IBM Plex Mono, `--t-meta`, `color: #FFFFFF`

---

## 8. GLOBAL INTERACTION STATES

### 8.1 Cursor
- Default cursor: Custom CSS cursor — a simple `+` crosshair shape, `24x24px`, black on white sections / white on black sections
- Implementation: SVG cursor data URI, two variants

### 8.2 Scroll Progress Indicator
- A `1px` vertical bar on the far right edge of the viewport
- Fills from top to bottom as the user scrolls (progress bar)
- Color: `#000000` fill on white sections — implemented as a fixed `position: fixed, right: 0` element
- Width: exactly `1px`
- No label

### 8.3 Page Entrance Animation
- On load: All content starts at `opacity: 0, transform: translateY(24px)`
- Stagger: Each above-fold element enters with `animation-delay` increments of `80ms`
- Duration: `400ms`, `easing: cubic-bezier(0.16, 1, 0.3, 1)`
- Sections below fold: Triggered by IntersectionObserver at `threshold: 0.1`

### 8.4 Selection Color
```css
::selection {
  background: #000000;
  color: #FFFFFF;
}
```

---

## 9. RESPONSIVE BREAKPOINTS

### Desktop (1280px+) — Primary target
- Full 12-column grid, all zones active
- Schematic diagrams fully visible
- All 3-zone project layouts rendered horizontally

### Tablet (768px–1279px)
- 8-column grid
- Project schematics: Zone A and Zone C stack vertically; Zone B (diagram) collapses to full width above Zone C
- Stack table: PROFICIENCY column hidden; collapses to 3 columns
- Hero: Annotation strip moves below the role descriptor

### Mobile (< 768px)
- 4-column grid, `margin: 0 24px`
- Navigation: Collapses to hamburger — full-screen overlay on open, white background, black text, full-height stacked links in display type
- Project schematics: Render as stacked single-column — Zone A (meta), Zone B (simplified diagram, ASCII-only), Zone C (spec)
- Stack table: Render as stacked definition list — CATEGORY becomes a bold header, rows below it
- Hero headline: `clamp(3rem, 14vw, 5rem)` — constrained for mobile
- All `border: 1px solid` rules maintained — brutalism does not break at mobile

---

## 10. ACCESSIBILITY REQUIREMENTS

- All text elements meet WCAG AA contrast ratio minimums (pure black/white guarantees 21:1)
- All interactive elements have visible focus states (`outline: 2px solid #000`, `outline-offset: 4px` / white variant on dark backgrounds)
- Navigation accessible via keyboard Tab sequence
- SVG diagrams in project schematics include `<title>` and `<desc>` elements for screen readers
- `prefers-reduced-motion` media query: Disables entrance animations, stops marquee tickers, leaves only hover inversion (which is instant and non-motion-based)
- All links have discernible text — no icon-only links without `aria-label`

---

## 11. DESIGN CONSTRAINTS SUMMARY (FOR STITCH)

| Parameter | Value |
|---|---|
| Color palette | `#000000` and `#FFFFFF` ONLY — zero exceptions |
| Typography: Display | Neue Haas Grotesk Display / Helvetica Neue — weight 900 |
| Typography: Body | Suisse Int'l / Helvetica Neue — weight 400/500 |
| Typography: Technical | IBM Plex Mono — all metadata, labels, annotations |
| Border style | 1px solid — sharp, geometric, no radius |
| Border-radius | 0px — everywhere, without exception |
| Box shadows | None |
| Gradients | None |
| Imagery | None — zero photography, zero illustration |
| Icons | None — text and unicode characters only |
| Animation | Entrance reveals + instant hover inversion only |
| Grid | 12-column asymmetric, left-anchored |
| AI tropes | STRICTLY FORBIDDEN — no brains, nodes, circuits, neon |
| Spatial philosophy | Extreme intentional whitespace; layout breathes |
| Design reference | Swiss International Typographic Style + Engineering Blueprint |

---


