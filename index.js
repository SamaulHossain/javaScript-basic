increaseBtn = document.getElementById("increaseBtn");
decreaseBtn = document.getElementById("decreaseBtn");
resetBtn = document.getElementById("resetBtn");
countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
