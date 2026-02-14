// create a block which will hold a constructor function
//a function to calculate the hash
//and a mine function

class Block {
      constructor(timestamp, data){
        this.index = 0;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash ="0";
        this.hash = this.calculateHash();
        this.nonce=0;

     }

     calculateHash(){

     }

     mineBlock(difficulty){
        
     }

}
   