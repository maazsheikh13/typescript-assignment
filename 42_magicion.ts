let megicion :string[]=['harry potter','hermione granger',' ron wesley',' albus dumbledore'];
function make_great (megicionArray: string[]){
for(let i=0; i<megicionArray.length; i++){
  megicion[i] =  ' the great '  +  megicionArray[i]
}
}



function show_magicions(megicion :string[]){
    megicion.forEach(element => {
    console.log(element);    
    });
}
make_great(megicion);
show_magicions(megicion)
