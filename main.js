// create a block which will hold a constructor function
//a function to calculate the hash
//and a mine function
//self note: pass what is unique to each block like a timestamp and data inside of the block. 

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
            return SHA256(this.index + this.previousHash + this.timestamp + this.data +this.nonce).toString();
     }

     mineBlock(difficulty){

     }

}
   