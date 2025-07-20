# G.R.I.M.O.I.R.E: Dungeons & Dragons Game Master Web Project

> **Game Reference Interactive Management Orchestrator for Immersive Roleplay Experiences**

GRIMOIRE is an advanced web application designed to be the ultimate Game Master (GM) assistant for Dungeons & Dragons (D&D) campaigns. It leverages AI (Google Gemini API), powerful offline capabilities, and a robust Virtual Tabletop (VTT) to streamline campaign management, automate content extraction, and enhance storytelling.

---

## 🚀 Key Features

- **AI-Powered Game Master (Gemini API Integration):**
  - Dynamic story, NPC dialogue, and quest generation
  - Rule enforcement and clarification
  - Immersive descriptions and character interaction simulation
  - Real-time campaign updates and suggestions
  - Secure, user-provided API key

- **Content Extraction from PDFs/EPUBs:**
  - Client-side and optional server-side parsing
  - Structured extraction of characters, lore, locations, monsters, spells, items, quests
  - Semantic understanding and categorization

- **Data Management & Persistence (PWA & Offline First):**
  - Full PWA with offline mode
  - Flexible storage: IndexedDB (default), Google Drive, AWS S3
  - In-browser SQLite (via WebAssembly/IndexedDB)
  - Asset storage and campaign version control

- **Virtual Tabletop (VTT) Functionality:**
  - Interactive, multi-layered map display (tactical, role-playing, global views)
  - Dynamic fog of war, vision types, environmental effects
  - 3D dice rolling with physics and customization
  - Token management, turn order, and real-time collaboration
  - Integrated voice/video chat and modular plugin system

- **User Interface & Experience:**
  - Campaign dashboard and content browsing
  - AI interaction panel and document management
  - Powerful search/filtering, responsive design, and theming
  - Custom content creation and sharing

---

## 🛠️ Technical Stack

- **Frontend:** Next.js v15 (App Router), React, TypeScript
- **UI:** shadcn/ui (Radix UI + Tailwind CSS), next-themes
- **Styling:** Tailwind CSS
- **Database:** SQLite (WebAssembly, IndexedDB)
- **Cloud Storage:** Google Drive API, AWS SDK v3
- **AI Integration:** Google Gemini API (via secure proxy)
- **Document Parsing:** PDF.js, epub.js
- **3D Graphics:** Three.js
- **Physics Engine:** Cannon.js (or Rapier.js)
- **State Management:** React Context API or Zustand
- **Data Fetching:** React Query (TanStack Query)
- **PWA:** Workbox or custom service worker

---

## 📦 Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/grimoire-dnd-vtt.git
   cd grimoire-dnd-vtt
   ```

2. **Install dependencies:**

   ```sh
   bun install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in required values (e.g., Gemini API key proxy settings).

4. **Run the development server:**

   ```sh
   bun run dev
   ```

5. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧑‍💻 Usage

- **First Launch:**
  - The app will prompt for your Gemini API key (kept secure and never exposed to the client).
- **Upload Documents:**
  - Use the document management interface to upload D&D PDFs/EPUBs for extraction.
- **Explore & Manage Content:**
  - Browse extracted characters, monsters, spells, and more.
  - Use the campaign dashboard to manage multiple campaigns.
- **Virtual Tabletop:**
  - Access the VTT for map display, token management, dice rolling, and fog of war.
- **AI Interaction:**
  - Chat with the Gemini-powered GM for story ideas, rules, and immersive content.
- **Offline & Cloud Sync:**
  - Works offline by default; configure cloud sync in settings for Google Drive or AWS S3.

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on setting up your environment, coding standards, commit conventions, and submitting pull requests.

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

## 📚 Documentation

- [API Documentation](./docs/api.md)
- [Component Documentation](./docs/components.md)
- [Database Schema](./docs/database-schema.md)
- [Architecture Overview](./docs/architecture.md)
- [Feature Guides](./docs/)

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a history of major changes and releases.

---

## 📢 Acknowledgements

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Gemini API](https://ai.google.dev/gemini-api/docs)
- [Three.js](https://threejs.org/)
- [Cannon.js](https://schteppe.github.io/cannon.js/)
- [PDF.js](https://mozilla.github.io/pdf.js/)
- [epub.js](https://github.com/futurepress/epub.js/)

---

> For questions, suggestions, or support, please open an issue or contact the maintainers.
