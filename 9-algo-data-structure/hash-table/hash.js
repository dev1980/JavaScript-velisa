// create a HashTable class with table and size initial properties.
// add hash() function
// set(), get() method for adding and retriving key/value pairs from the table.

// how to resolve the issue if there is index collision or index collision.

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 1;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.lenght; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);

    if(this.table[index]) {
        for(let i = 0; i < this.table[index].length; i++) {
            if(this.table[index][i][0] === key){
                this.table[index][i][1] = value;
                return
            }
        }
        // in case not found
        this.table[index].push([key, value]);
    } else {
        this.table[index] = [];
        this.table[index].push([key, value])
    }
   
    this.size++;
  }

  get(key) {
    const traget= this._hash(key);
    if(this.table[traget]){
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[traget][i][0] === key) {
                return this.table[traget][i][1];
            }
        }
    }

    return undefined;
  }

  // delete method

  remove(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      for(let i = 0; i < this.table.length; i++) {
        if(this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
        }
      }
  } else {
    return false;
  }

}

display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }


}

const ht = new HashTable();

ht.set("France", 111);
ht.set("Nepal", 203);
ht.set("India", 300);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]