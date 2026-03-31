import { Handle, Position } from 'reactflow';

export default function ConceptNode({ data }: { data: any }) {
  return (
    <div style={{
      background: '#ffffff',
      border: '2px solid #2b2b2b',
      borderRadius: '8px',
      minWidth: '220px',
      fontFamily: 'sans-serif',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      {/* Target handle for incoming connections (Top) */}
      <Handle type="target" position={Position.Top} style={{ background: '#555', width: '10px', height: '10px' }} />
      
      {/* Node Header */}
      <div style={{ 
        background: '#2b2b2b', 
        color: '#ffffff', 
        padding: '10px', 
        borderTopLeftRadius: '5px', 
        borderTopRightRadius: '5px', 
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        {data.label}
      </div>
      
      {/* Node Properties / Fields */}
      <div style={{ padding: '12px', fontSize: '14px' }}>
        {data.properties.map((prop: any, index: number) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            borderBottom: '1px solid #f0f0f0', 
            padding: '6px 0' 
          }}>
            <span style={{ fontWeight: 500 }}>{prop.name}</span>
            <span style={{ color: '#0066cc', fontSize: '12px', marginLeft: '15px' }}>{prop.type}</span>
          </div>
        ))}
      </div>

      {/* Source handle for outgoing connections (Bottom) */}
      <Handle type="source" position={Position.Bottom} style={{ background: '#555', width: '10px', height: '10px' }} />
    </div>
  );
}