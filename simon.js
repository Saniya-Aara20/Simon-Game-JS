let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let score=0;
let max=0;

let h2=document.querySelector('h2');
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        
        started=true;

        levelUp();
    }

    
});

function levelUp()
{
    userSeq=[];
    level++;
    score++;
    h2.innerText="Level "+level;

    //random button
    let randIndex=Math.floor(Math.random()*3);
    let randColor=btns[randIndex];
    let randbtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
};
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");
},200);
};

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
{
    btn.classList.remove("userflash");
},200);
};


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}


function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

function checkAns(idx)
{
    
    
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
         setTimeout(levelUp,1000);
        }
    }
    else 
    {
        if(score>max)
        {
            max=score;
        }
        h2.innerHTML=`Game Over! You score was ${level} <br> Highest Score: ${max} <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }


}




function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    score=0;
}