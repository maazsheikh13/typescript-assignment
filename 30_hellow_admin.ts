const username: string[]=['admin','ahzam','ahzam X wasay','ahzam X zeeshan,'];
for(let i=0; i<username.length;i++){
    if(username[i]=== 'admin'){
        console.log('hello admin,would you like to see a status report?');
    }
    else{
        console.log(`hellow ${username[i]}, thank you for logging in again.`)
    }
}