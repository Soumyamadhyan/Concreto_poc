import { useCallback, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
  type Connection
} from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css'; // This ensures your attractive CSS is loaded

import ConceptNode from './ConceptNode';

// 1. Register our custom node type
const nodeTypes = {
  concept: ConceptNode,
};

// 2. Updated initial data with 4 Attractive Boxes
const initialNodes: Node[] = [
  {
    id: 'node-1',
    type: 'concept',
    position: { x: 150, y: 100 },
    data: { 
      label: 'Concept: Person',
      properties: [
        { name: 'firstName', type: 'String' },
        { name: 'lastName', type: 'String' },
        { name: 'age', type: 'Integer' }
      ]
    },
  },
  {
    id: 'node-2',
    type: 'concept',
    position: { x: 150, y: 450 },
    data: { 
      label: 'Concept: Address',
      properties: [
        { name: 'street', type: 'String' },
        { name: 'city', type: 'String' },
        { name: 'zipCode', type: 'String' }
      ]
    },
  },
  {
    id: 'node-3',
    type: 'concept',
    position: { x: 600, y: 100 },
    data: { 
      label: 'Concept: Company',
      properties: [
        { name: 'name', type: 'String' },
        { name: 'taxId', type: 'String' },
        { name: 'industry', type: 'String' }
      ]
    },
  },
  {
    id: 'node-4',
    type: 'concept',
    position: { x: 600, y: 450 },
    data: { 
      label: 'Concept: Transaction',
      properties: [
        { name: 'amount', type: 'Double' },
        { name: 'currency', type: 'String' },
        { name: 'status', type: 'String' }
      ]
    },
  }
];

export default function App() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const handleExportData = () => {
    const exportedSchema = {
      models: nodes.map(node => ({
        id: node.id,
        name: node.data.label,
        properties: node.data.properties,
        relations: edges.filter(e => e.source === node.id).map(e => e.target)
      }))
    };
    console.log("Exported JSON:", JSON.stringify(exportedSchema, null, 2));
    alert("Data exported! Check the Console (F12) to see the JSON.");
  };

  return (
    <div className="app-wrapper">
      
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <h2 className="nav-title">Concerto Visual Editor</h2>
        <button onClick={handleExportData} className="export-button">
          Export JSON
        </button>
      </div>

      {/* The Interactive Canvas */}
      <div className="canvas-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background color="#334155" gap={20} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}