var main = document.createElement('div');

main.id = 'main';
main.style.height = '550px';
main.style.width = '250px';
//=============================================OUTSIDE================================================

let outs = ["1 to 18", "Evens", "Red", "Black", "Odds", "19 to 39"];

var outside = document.createElement('div');
outside.className = 'upper';

for(let i = 0; i < 6; i++){
    let halves = document.createElement('div');
    halves.className = 'fiftyfifty';
    halves.innerHTML = outs[i];
    
    if (outs[i] == "Red" || outs[i] == "Black"){
        halves.style.background = outs[i];
    }

    outside.appendChild(halves);
}
//================================================MIDDLE================================================

let threes = ["1st 12", "2nd 12", "3rd 12"];

var middle = document.createElement('div');
middle.className = 'upper';

for(let i = 0; i < 3; i++){
    let third = document.createElement('div');
    third.className = 'thirds';
    third.innerHTML = threes[i];
    
    middle.appendChild(third);
}
//==============================================INSIDE===================================================

var inside = document.createElement('div');

inside.id = 'inside';
inside.className = 'upper';

let count = 1;
//======================TOP ZERO ============================
for (let i = 0; i < 14; i++){
    let line = document.createElement('div');
    line.className = 'lines';
    
    if (i == 0){
        
        let zero = document.createElement('div');
        zero.className='singles';
        zero.innerHTML = i.toString();
        line.appendChild(zero);
 //=================MAIN SINGLE NUMBERS======================       
    }else if (i > 0 && i < 13){
        
        let red = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
        let black = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
        
        for (let x = 1; x < 4; x++){
            let single = document.createElement('div');
            single.className = 'singles';
            single.innerHTML = count.toString();
            
            if (red.includes(count)){
                single.style.background = 'red';
            }else{
                single.style.background = 'black';
            }
            
            line.appendChild(single);
            
            count++;
        }
 //================BOTTOM 2 to 1 LINES =======================     
    }else{
        for(let x = 1; x < 4; x++){
            
            let lineBet = document.createElement('div');
            lineBet.className = 'bottom';
            lineBet.innerHTML = "2 to 1";
            
            line.appendChild(lineBet);
        }
    }
 // ========MAIN INSIDE=========
    
    inside.appendChild(line);
}
//=======================================================MAIN==========================================
main.appendChild(outside);
main.appendChild(middle);
main.appendChild(inside);

document.body.appendChild(main);