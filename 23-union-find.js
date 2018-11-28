class UnionFind{
  constructor(n) {
    this.arr = Array(n).fill().map((element, index) => {
      return index;
    })
  }

  find(p) {
    const index = this.arr.indexOf(p)
    return index === -1 || index;
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  union(p, q) {
    
  }
}