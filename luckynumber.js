





// B Code Challenge
//   Lucky Number

// Get the modal
let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let clicks = 0;

function onClick() {
  clicks += 1;
//   document.getElementById("clicks").innerHTML = clicks;

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    let a = getRndInteger(1,10);
    // document.getElementById("random").innerHTML = a;

    if (Number(document.getElementById("age").value) != 0 && Number(document.getElementById("age").value) == a) {
        // document.getElementById("result").innerHTML = "Xin chúc mừng bạn. Bạn đã dự đoán đúng và may mắn trúng thưởng một chiếc xe Vinfast VF9!!!";
        alert("Xin chúc mừng bạn. Bạn đã dự đoán đúng và may mắn trúng thưởng một chiếc xe Vinfast VF9!!!");
    } else if (Number(document.getElementById("age").value) != 0 && Number(document.getElementById("age").value) != a){
        // document.getElementById("result").innerHTML = "Kết quả là: " + a +" .Rất tiếc bạn đã chưa đoán đúng lần này. Hãy nhập lại số dự đoán cho lần tiếp theo!!!";
        alert("Kết quả là: " + a +" .Rất tiếc bạn đã chưa đoán đúng lần này. Hãy nhập lại số dự đoán cho lần tiếp theo!!!");
    }

    if (clicks > 2) {
        document.getElementById("button").disabled = true;
        document.getElementById("age").disabled = true;
        // document.getElementById("number").innerHTML 
        alert("Bạn đã hoàn thành 3 lần dự đoán!!!");
        }
};

