import axios from 'axios';

window.onload=()=>{
        console.log('Window Loaded and viewport is:'+window.innerHeight);
        loadburger();
        (async function(){
            const data=await axios.get(`https://www.azlyrics.com/lyrics/justinbieber/sorry.html`);
            try{
        const dataItem=data.data
        console.log(dataItem);
            }
            catch(error){
                console.log(error)
            }
        })();
        
    }

    var worker = () => {
            if (a === 0) {
                var height= window.innerHeight;
                console.log(height)
                document.querySelector(".center").style.transform = "translateX(67%)"
                document.querySelector('.overlay').style.display = "block";
                let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
               document.documentElement.style.setProperty('--vh', `${vh}px`);
                console.log('Hello 2x')
                a++;
            }
            else if(a===1) {
                document.querySelector(".center").style.transform = "translateX(200%)";
                document.querySelector('.overlay').style.display = "none";
                console.log('Hello 3x')
                a--;
            }
        }

        document.querySelector('.overlay').addEventListener('click',worker)


    var a =0;
    var loadburger=()=>{
        var a = 0
        console.log('Hello')
        document.querySelector('.ham').addEventListener('click', worker)

        
    }
    document.querySelector('.centertags').addEventListener('click',()=>{
        if(a===1){
            worker();
        }
    })
