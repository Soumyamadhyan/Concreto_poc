# Concreto POC (Proof of Concept)

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Fast_Builds-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Flow](https://img.shields.io/badge/React_Flow-Diagramming-FF0072?style=for-the-badge&logo=react&logoColor=white)

Concreto POC is an interactive, node-based workspace designed to test and validate visual workflow mechanics. It acts as a foundational sandbox for rendering, connecting, and managing custom data nodes on an infinite 2D canvas.

---

##  Project Overview
This tool allows users to visually map out ideas, logic flows, or architectures using a drag-and-drop node interface. It is strictly typed with TypeScript for robust code quality and built on top of Vite for immediate developer feedback via Hot Module Replacement (HMR).

**Key Features:**
* **Interactive Canvas:** Pan, zoom, and navigate the workspace smoothly.
* **Custom Nodes:** Utilizes specialized `ConceptNode` components for customized data display and interaction, rather than standard text boxes.
* **Dynamic Edges:** Bezier-curve connection lines that automatically route between source and target nodes.

---

## Prerequisites & Troubleshooting

Ensure you have **Node.js** (v18+) installed.

**Windows PowerShell Users:**
If you encounter an error stating `npm.ps1 cannot be loaded because running scripts is disabled`, your Windows Execution Policy is blocking the script. To fix this, open PowerShell as an Administrator or Current User and run:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Installation & Local DevelopmentNavigate to the project directory:Make sure your terminal is inside the correct folder before running commands.PowerShellcd C:\src\Concreto_poc
Install all required packages:PowerShellnpm install
Spin up the local dev server:PowerShellnpm run dev
View the application:Hold Ctrl and click the http://localhost:5173/ link in your terminal to open the canvas in your browser. Project StructureHere is an overview of how the code is organized:PlaintextCONCRETO_POC/
├── public/               # Static assets (favicons, etc.)
├── src/                  
│   ├── assets/           # Images, icons, and local media
│   ├── App.tsx           # Main application entry point & React Flow canvas
│   ├── ConceptNode.tsx   # Custom React Flow node component UI & logic
│   ├── index.css         # Global stylesheet (cleared for fullscreen canvas)
│   ├── main.tsx          # React DOM rendering script
│   └── vite-env.d.ts     # TypeScript declarations for Vite
├── package.json          # Project metadata and dependency list
├── tsconfig.json         # TypeScript configuration rules
└── vite.config.ts        # Vite build and plugin configuration
System Architecture (How it works)The application is built on a unidirectional data flow model, managed primarily within src/App.tsx.1. State ManagementThe canvas relies on two synchronized pieces of React State:nodes: An array of objects defining the coordinates (x, y), unique id, and payload data of every box on the screen. We use the applyNodeChanges hook to track when a user drags a node across the screen.edges: An array defining the connection lines linking a source ID to a target ID. We use the applyEdgeChanges hook to maintain these lines as nodes move.2. Custom Node System (ConceptNode.tsx)React Flow passes data props down from App.tsx directly into the ConceptNode.Inside ConceptNode.tsx, we define React Flow <Handle /> components. These act as the physical connection ports (the dots you click and drag to draw lines between nodes).Available ScriptsCommandActionnpm run devStarts the Vite development server with hot-reloading.npm run buildCompiles TypeScript and creates a production-ready /dist folder.npm run lintRuns strict ESLint checks across the .ts and .tsx files.npm run previewBoots up a local web server to preview your production build.
