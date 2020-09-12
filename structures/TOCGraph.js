import TOCArray from "./TOCArray"

export default class TOCGraph{
    constructor(){
        this.graph = new Map();
    }

    addVertex(vertex){
        if(this.graph.get(vertex) !== undefined)
            return false;

        this.graph.set(vertex, new Set());
        return true;
    }

    addEdge(vertex, edge){
        if(this.graph.get(vertex) === undefined || this.graph.get(edge) === undefined)
            return false;
        if(this.graph.get(vertex).has(edge))
            return false;
        if(vertex === edge)
            return false;
        this.graph.get(vertex).add(edge);
        this.graph.get(edge).add(vertex);
        return true
    }

    removeVertex(vertex){
        if(this.graph.get(vertex) === undefined)
            return false;
        let edges = this.graph.get(vertex);

        for (let edge of edges){
            this.graph.get(edge).delete(vertex)
        }

        this.graph.delete(vertex)
        return true;
    }

    removeEdge(vertex, edge){
        if(this.graph.get(vertex) === undefined || this.graph.get(edge) === undefined)
            return false;
        if(!this.graph.get(vertex).has(edge))
            return false;
        this.graph.get(vertex).delete(edge);
        this.graph.get(edge).delete(vertex);
        return true
    }

    getVertices(){
        let vertices = new TOCArray(this.size());
        let index = 0;
        for(let vertex of this.graph.keys()){
            vertices.set(index, vertex);
            index++;
        }
        return vertices;
    }

    getEdges(vertex){
        let edges = this.graph.get(vertex);
        if(edges === undefined)
            return undefined;
        
        let temp = new TOCArray(edges.size);
        let index = 0;
        for(let edge of edges){
            temp.set(index, edge);
            index++;
        }
        return temp;
    }
    
    size(){
        return this.graph.size;
    }
}