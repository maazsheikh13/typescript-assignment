let corrent_user:string[]=['wasay','zeeshan','ahzamx wasay','basim','ahzamloveall juniorboy',];
let new_user:string[]=['ahzamx wasay','wasay','ahzamludo','ather','ariz'];
new_user.forEach(newusername =>{
    let lowerCase :string =newusername.toLowerCase();
    if(corrent_user.map(c_user =>c_user.toLowerCase ()).includes(lowerCase)){
console.log(`the username ${newusername}is not available.please write a diffrent username`);
    }
    else{
        console.log(`the username${newusername} is available `)
    }
})
