let cl = document.getElementById('cel');
let fh = document.getElementById('fh');

cl.addEventListener('input',(e)=>{
    let c = e.target.value;
    let f = (c * 9/5) + 32;
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fh.value = f;
})

fh.addEventListener('input',(e)=>{
    let f = e.target.value;
    let c = ( f - 32) * 5/9 ;
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cl.value = c;
})