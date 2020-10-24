window.onload=()=>{
        console.log('Window Loaded and viewport is:'+window.innerHeight);
        loadburger();
    }

    var worker = () => {
            if (a === 0) {
                document.querySelector(".center").style.transform = "translateX(67%)"
                document.querySelector('.overlay').style.display = "block";
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