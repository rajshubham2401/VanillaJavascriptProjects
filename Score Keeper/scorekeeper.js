var score1 = 0;
var ps1 = document.querySelector("#player1_score");
var pb1 = document.querySelector("#player1_submit");

var score2 = 0;
var ps2 = document.querySelector("#player2_score");
var pb2 = document.querySelector("#player2_submit");

var rb = document.querySelector("#reset_button");

pb1.addEventListener("click",function(){

     var limit = document.querySelector("#limit").value;
     if(limit==""){
          alert("Please Set Score Limit First");
     }
     else if(limit==0){
          alert("Score Limit Must Be Greater Than 0")
     }
     else{
          score1++;
          ps1.innerHTML = score1;
          if(score1==limit){
               if(score1>score2){
                    document.querySelector("#winner_container").style.display = "block";
                    document.querySelector("#winner").innerHTML="Player 1";
                    ps1.style.color = "green";
                    pb1.setAttribute("disabled",true);
                    pb2.setAttribute("disabled",true);
               }
          }
     }
})

pb2.addEventListener("click",function(){

     var limit = document.querySelector("#limit").value;
     if(limit==""){
          alert("Please Set Score Limit First");
     }
     else if(limit==0){
          alert("Score Limit Must Be Greater Than 0")
     }
     else{
          score2++;
          ps2.innerHTML = score2;
          if(score2==limit){
               if(score2>score1){
                    document.querySelector("#winner_container").style.display = "block";
                    document.querySelector("#winner").innerHTML="Player 2";
                    ps2.style.color = "green";
                    pb2.setAttribute("disabled",true);
                    pb1.setAttribute("disabled",true);
               }
          }
     }
})

rb.addEventListener("click",function(){

     score1 = 0;
     ps1.innerHTML = score1;
     ps1.style.color = "white";
     score2 = 0;
     ps2.innerHTML = score2;
     ps2.style.color = "white";
     
     document.querySelector("#winner_container").style.display = "none";
     document.querySelector("#winner").innerHTML="";
     pb1.removeAttribute("disabled");
     pb2.removeAttribute("disabled");
     limit.value = 5;

})