import { features } from "process"

function storeCarinfo(manufacturor:string, modelName:string, ...extraOption:{[key : string ] : any } [] ): object {
    const carinfo = {
        manufacturor,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carinfo
}

  let answer =storeCarinfo('honda','civic',{color : 'black'},{features:['navigation','power window']})

console.log(answer)
