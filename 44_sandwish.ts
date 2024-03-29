function makesandwish (item: string[]){
    console.log('making your sandwich with:\n');
item.forEach(element => console.log("-" + element ));
console.log('enjoy your sandwish !\n');
}
makesandwish(['ham','cheese','lettuce']);

makesandwish(['ham','cheese',]);

makesandwish(['ham','cheese','lettuce']);