const click = document.getElementById('click')! as HTMLButtonElement ; 
let time:number = 0 ; 
let cps:number =0 ; 
let clicks:number = 0 ;
const content = document.querySelectorAll('.content') ; 
let isStarted:boolean = false ; 
let statusString:string = "Click here to start testing"


setInterval(() => {
    content.forEach((element , index) => {
        element.innerHTML = String([time , cps , clicks][index]) ; 
    });
    click.innerText = statusString ; 

    if(time === 0 || clicks === 0){
        cps = 0 ; 
    }
    else {
        cps = Number((clicks/time).toFixed(2)) ; 
    }

})

const handleClick:() => void = () =>{ 
    if(isStarted === false){
        statusString = 'Click!!!'
        isStarted = true ;
        clicks++ ; 
        setTimeout(() => {
            time += 1 ; 
            let timeSetter:NodeJS.Timeout = setInterval(() => {
                    time++ ;
                    if(time === 5){
                        clearInterval(timeSetter) ; 
                        click.disabled = true ; 
                    }
            } , 1000)
        } , 1000) ; 

    }
    else {
        clicks++ ; 
    }
}



click.addEventListener('click' , handleClick) ;

