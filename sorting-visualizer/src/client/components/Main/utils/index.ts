export const generateRandomArray = (len: number): number[] =>  {
    let res = [];
    
    for(var i = 0; i < len; i++) {
        res.push(Math.floor((Math.random() * 50)));
    }

    return res;
}