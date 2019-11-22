const homelist = function(req,res){
    res.render('index',{title:'Welome to Book Store'});
};

const listdisplay = function(req,res){
    
    res.render('list_display',{books:bookArray });
};


var bookArray=[
    {
    title:"Faith Hunter",
    author:"Hunter Faith"
},
 
{
    title:"Imaginary Friend",
    author:"Chbosky Stephen"
},

{
    title:"History Of Bees",
    author:"Maja Lunde"
}
];


module.exports={
    homelist,
    listdisplay
   };