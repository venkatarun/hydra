import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  ReactFlowProvider,
} from "reactflow";
import "./css/style.css";
import ButtonEdge from './ButtonEdge.js';
import Sidebar from './sideBar';

let id = 0;
const getId = () => `dndnode_${id++}`;

const initialNodes = [
  {
    id: 'ewb-1',
    type: 'input',
    data: { label: 'Input 1' },
    position: { x: 250, y: 0 },
  },
  { id: 'ewb-2', data: { label: 'Node 2' }, position: { x: 250, y: 300 } },
];

const initialEdges = [
  {
    id: 'edge-1-2',
    source: 'ewb-1',
    target: 'ewb-2',
    type: 'buttonedge',
  },
];

const edgeTypes = {
  buttonedge: ButtonEdge,
};
const proOptions = { hideAttribution: true };
const EdgeWithButtonFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: 'buttonedge' }, eds)),
    []
  );

  return (
    <div style={{height: '400px'}}>
      <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      snapToGrid={true}
      edgeTypes={edgeTypes}
      fitView
      proOptions={proOptions}
    >
      <Controls showFitView={false} showInteractive={false} position={"bottom-right"} />
      <Background />
    </ReactFlow>
    </div>
  );
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow" style={{height: '400px'}}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            proOptions={proOptions}
          >
            <Controls  showFitView={false} showInteractive={false} position={"bottom-right"} />
            <Background />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

// export default EdgeWithButtonFlow;
export default DnDFlow;
