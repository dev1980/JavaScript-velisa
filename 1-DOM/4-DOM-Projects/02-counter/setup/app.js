let count = 0;

//select field
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
console.log(btns)

btns.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
      let styles = e.target.id;
      if(styles.includes("decrease")) {
        count--;
      } else if(styles.includes("increase")){
        count++;
      }else {
        count = 0;
      }

      if(count < 0) {
        value.style = "color: red";
      } else if(count > 0) {
        value.style = "color: steelblue";
      }else {
        value.style = "color: orange";
      }
      value.innerText = count;
    });
});