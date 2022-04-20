const EventEmitter=require('events');
const myEmitter=new EventEmitter()
class sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmitter = new sales();
myEmitter.on('newSale',(()=>{
    console.log('There was a new sale!');
}));
myEmitter.on('newSale',(()=>{
    console.log('customer name:Muskan Valmikee')
}));
myEmitter.on('newSale',stock =>{
    console.log(`there are now ${stock} items left in stock.`)
})
myEmitter.emit('newSale',9)
