function nLevelsAboveSink(edgeList, n) {
    const adjacencyList = convertEdgeListToAdjacencyList(edgeList);
    const sinks = getSinks(adjacencyList);
    const result = [];
  
    for (const sink of sinks) {
      let parent = getParent(sink, adjacencyList, n);
      if (parent !== null) {
        result.push(parent);
      }
    }
  
    return result.sort((a, b) => a - b);
  }
  
  function getSinks(adjacencyList) {
    const sinks = [];
  
    for (const [node, children] of adjacencyList) {
      if (children.length === 0) {
        sinks.push(node);
      }
    }
  
    return sinks;
  }
  
  function getParent(node, adjacencyList, n) {
    for (let i = 0; i < n; i++) {
      let parents = [];
      for (const [parent, children] of adjacencyList) {
        if (children.includes(node)) {
          parents.push(parent);
        }
      }
      if (parents.length === 0) {
        return null;
      }
      if (parents.length === 1) {
        node = parents[0];
      } else {
        return parents;
      }
    }
    return node;
  }
  
  function convertEdgeListToAdjacencyList(edgeList) {
    const adjacencyList = new Map();
  
    for (const [parent, child] of edgeList) {
      if (!adjacencyList.has(parent)) {
        adjacencyList.set(parent, []);
      }
      adjacencyList.get(parent).push(child);
    }
  
    return adjacencyList;
  }
  