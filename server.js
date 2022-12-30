const  express=require ('express')
const app=express();
app.get('/',(req,res)=>{
    console.log("welcome");
    app.send(res);
    app.listen('/home',(req,res)=>{
        var person={firstname:'Manisha',lastname:'Singh'};
        app.send(res);
    })
})