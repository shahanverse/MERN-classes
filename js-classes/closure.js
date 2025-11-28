// closure = A funn defined inside of another fun 
//           the inner fun has access to the variables and scope 
//            of the outer fun 
//           Allow for provate variables and state maintenance
//           used frequently in js frameworks : React , Vue , angular


function outer(){
  let x = 10 

  function inner(){
    console.log(x);
    
  }
  return inner
}

const fn = outer()

fn()

//another expl

function out(){
  let x = 10

  function inner1
}