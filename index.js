

 const wrap  = document.getElementById('wrapper')
 const container  = document.getElementById('container')
 const opacityTitle  = document.getElementById('opacity-title')

 console.log(wrap)

    
 let opacity  = 1


 var rgb 



function range(e) {
    
    var xPercentage = Math.round((e.clientX / wrap.clientHeight) * 100)
    var yPercentage = Math.round((e.clientY / wrap.clientWidth) * 255)
    var xPlusY = Math.round((xPercentage + yPercentage) / 2)
    
    
    if(e.deltaY < 0){
        if(opacity >=0 && opacity < 1){
            opacity += 0.1
        }
       

        console.log(opacity) 
        
    }else if(e.deltaY > 0) {
        if(opacity > 0.1 ){
            opacity -= 0.1
        }
       
        console.log(opacity) 
    }

     rgb = `rgba(${xPlusY},${xPercentage},${yPercentage},${opacity})`

   /*  console.log(rgb) */

    /* console.log(`x${xPercentage}`) 
    console.log(`y${yPercentage}`)  */
   

   
    wrap.style.backgroundColor = rgb
    opacityTitle.innerHTML = `Opacity: ${opacity.toFixed(2)}`

}


function newColor() {
    console.log(rgb)

    const newDiv = document.createElement('div')
    newDiv.style.width = "100px"
    newDiv.style.height = "100%"
    newDiv.style.backgroundColor = rgb

    console.log(newDiv)
    container.appendChild(newDiv)

}




 wrap.addEventListener('mousemove', range)
 wrap.addEventListener('wheel', range)
 wrap.addEventListener('click', newColor)