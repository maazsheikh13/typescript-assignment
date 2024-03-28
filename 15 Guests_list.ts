

let Guest_list :string[] = ['Maheen ayaz','Razia ayaz', 'ayaz',' MAAZ'];

for(let i=0; i<Guest_list.length; i++){
console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\nit is my pleasure to invite you in our party.\n\nthank You!\n\n')
} 

let absent_Guest:string = 'ayaz';

let new_Guest:string = ' JAAN';

Guest_list[0]= new_Guest ; 
for(let i=0; i<Guest_list.length; i++){
    console.log(' Dfear Mr. ' + Guest_list[i] + ', \n\nit is my pleasure to invite you in our party.\n\nthank You!\n\n')
    } 
;
    console.log(`Mr.${absent_Guest} is not coming to the party.`)