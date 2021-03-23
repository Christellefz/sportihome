function comp(a, b){
    a.sort();
    b.sort();
    if (!b 
          || !a
          || a.length !== b.length
          || a===[]
          || b===[])
          
          
    {
    return false
}else if 
   ( a.map(num=> num*num).reduce((acc, currentvalue)=>acc+currentvalue)=== b.reduce((acc, currentvalue)=>acc+currentvalue)){

    return true
}else {
    return false
}
}
