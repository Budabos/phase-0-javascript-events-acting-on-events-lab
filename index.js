function moveDodgerLeft(){
  const leftNum = dodger.style.left.replace("px", "")
  const left = parseInt(leftNum, 10)

  if(left > 0){
      dodger.style.left = `${left-1}px`
  }
}

function moveDodgerRight(){
  const rightNum = dodger.style.left.replace("px", "");
  const right  = parseInt(rightNum);

  if(right > 0){
      dodger.style.left = `${right+1}px`
  }
}