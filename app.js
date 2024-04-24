

let h1 =document.querySelector('h1');

function toss(btn){
    // console.log(`toss-app`);

    let num= Math.ceil(Math.random()*2)

    console.log(num);

    if (btn === 'masjid' && num === 1 || btn === 'chand' && num === 2) {
        // console.log('won');
        h1.innerHTML = " You won the toss " 
        
    }
    else {
    //  console.log('loss');   
     h1.innerHTML = " You loss the toss " 

    }

}