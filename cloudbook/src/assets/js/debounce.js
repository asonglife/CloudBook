export function deBounce(fn, delay = 500){

  let timer  = null

  return function(){

        if(timer){
            clearTimeout(timer)
          }

          let self = this

          timer = setTimeout(function(){
            fn()
            console.log(self)
            timer = null
          },delay)

  }


}