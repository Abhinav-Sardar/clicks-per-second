const click = document.getElementById('click')! as HTMLButtonElement ; 
let time:number = 0 ; 
let cps:number =0 ; 
let clicks:number = 0 ;
const content = document.querySelectorAll('.content') ; 
let isStarted:boolean = false ; 
let statusString:string = "Click here to start testing"
const resultsContainer = document.getElementById('results')!
interface Result {
    src:string , 
    animal:string , 
}


const results:Result[] = [
    {
        src:"https://media.tenor.com/images/5dd275408bdf64d6ff214ace0ae1ddaa/tenor.gif" , 
        animal:"Turtle"
    } , 
    {
        src:"https://media.tenor.com/images/6ad48709427972fd5027749958c9afff/tenor.gif" , 
        animal:"Rabbit"
    } , 
    {
        src:"https://media.tenor.com/images/ca2c64574a02483d28da2a3b8168f760/tenor.gif" , 
        animal:"Horse"
    } , 
    {
        src:"" , 
        animal:""
    }
]

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
                        statusString = "Click here to start playing" ; 
                        setTimeout(() =>{window.scrollBy({
                            top:900000  , 
                            behavior:"smooth"
                        }) ; 
                        
                    } , 500) ; 
                    setTimeout(() => {
                        isStarted = false ; 
                        time = 0 ; 
                        cps = 0 ; 
                        clicks = 0 ; 
                        click.disabled = false
                    }  , 800)
                    }
            } , 1000)
        } , 1000) ; 

    }
    else {
        clicks++ ; 
    }
}



click.addEventListener('click' , handleClick) ;

let a = document.querySelectorAll('a') ; 
a.forEach(el => {
    el.href= "" ; 
    el.onclick = () => console.log('HI')
})

