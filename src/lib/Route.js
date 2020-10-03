const DirectedGraph = require('graphology');
const crypto = require('crypto');

export const randomEdge = () => {
  return crypto.randomBytes(8).toString('hex');
};

export const Route = (start, finish, distance) => {
  return new DirectedGraph();
};

const graph = new DirectedGraph();

graph.addNode('node1');
graph.addNode('node2');
graph.addDirectedEdge('node1', 'node2');
graph.addDirectedEdge('node2', 'node1');

console.log(graph.size);
