const DirectedGraph = require('graphology');
const crypto = require('crypto');

const randomEdge = () => {
  return crypto.randomBytes(8).toString('hex');
};

const Route = function(distance, start, finish) {
  const route = new DirectedGraph();
  this.start = start || randomEdge();
  this.finish = finish || randomEdge();

  route.addNode(this.start);
  route.addNode(this.finish);
  route.addDirectedEdge(this.start, this.finish);
  route.setAttribute('distance', distance);

  this.proto = route;
};

Route.prototype.distance = function(distance) {
  if (distance) {
    this.proto.setAttribute('distance', distance);
  } else {
    return this.proto.getAttribute('distance');
  }
};

Route.prototype.addRouteToStart = function(distance, start) {
  const Start = start || randomEdge();
  this.proto.addNode(Start);
  this.proto.addDirectedEdge(Start, this.proto.nodes()[0]);
  this.distance(distance);
};

const route1 = new Route(500, 'A1', 'A2');
route1.addRouteToStart(200);
console.log(route1.proto.edges());

module.exports = Route;
