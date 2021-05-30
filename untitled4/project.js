const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.cursor="none";
let background = new Image();
let ship = new Image();
let bullet1 = new Image();
let bullet2 = new Image();
let enemy = new Image();
let shipX = 0;
let shipY = 0;
let posy = 0;
let count = 0;
let y =0;
let y2 =0;
let y3 =0;
let y4 =0;
let war1=new Image();
let war2=new Image();
let war3=new Image();
let war4=new Image();
let warb1 = new Image();
let warb2 = new Image();
let warb3 = new Image();
let warb4 = new Image();
let rand1 = Math.floor(Math.random()*window.innerWidth);
let rand2 = Math.floor(Math.random()*window.innerWidth);
let rand3 = Math.floor(Math.random()*window.innerWidth);
let rand4 = Math.floor(Math.random()*window.innerWidth);
let by = y;
let by2 = y2;
let by3 =y3;
let by4 = y4;
let bulletY = shipY - 40;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
background.src = "image/papers.co-md65-star-dark-space-galaxy-23-wallpaper.jpg";
ship.src="image/kisspng-spaceshipone-spacecraft-pixel-art-pixel-art-5ac592e5b174b0.8647288615228976377269.png";
bullet1.src="image/Lovepik_com-401493596-red-bullet-effect.png";
bullet2.src="image/Lovepik_com-401493596-red-bullet-effect.png";
war1.src = "image/space-invaders-ship-png-png-image-340355.png";
war2.src = "image/space-invaders-ship-png-png-image-340355.png";
war3.src = "image/space-invaders-ship-png-png-image-340355.png";
war4.src = "image/space-invaders-ship-png-png-image-340355.png";
warb1.src = "image/light-blue-laser-blue-beam-c4e6b7a9e5b8e7ead5feed42846c51f1.png";
warb2.src = "image/light-blue-laser-blue-beam-c4e6b7a9e5b8e7ead5feed42846c51f1.png";
warb3.src = "image/light-blue-laser-blue-beam-c4e6b7a9e5b8e7ead5feed42846c51f1.png";
warb4.src = "image/light-blue-laser-blue-beam-c4e6b7a9e5b8e7ead5feed42846c51f1.png";
document.addEventListener("mousemove",pos);
function pos(e) {
    shipX = e.pageX;
    shipY = e.pageY;
}
function draw()
{

    ctx.drawImage(background,0,posy,window.innerWidth,500,0,0,window.innerWidth,window.innerHeight);
    ctx.drawImage(war1,rand1,y,50,50);
    ctx.drawImage(war2,rand2,y2,50,50);
    ctx.drawImage(war3,rand3,y3,50,50);
    ctx.drawImage(war4,rand4,y4,50,50);
    ctx.drawImage(warb1,rand1,by + 10,50,50);
    ctx.drawImage(warb2,rand2,by2 + 10,50,50);
    ctx.drawImage(warb3,rand3,by3 + 10,50,50);
    ctx.drawImage(warb4,rand4,by4 + 10,50,50);
    y+=0.5;
    y2+=0.5;
    y3+=0.5;
    y4+=0.5;
    by+=2;
    by2+=2;
    by3+=2;
    by4+=2;
    let r = (shipX - rand1) / (shipX  + rand1);
    let r2 = (shipX - rand2) / ((shipX - 15) + rand2);
    let r3 = (shipX  - rand3) / (shipX + rand3);
    let r4 = (shipX - rand4) / (shipX  + rand4);
    if(bulletY < y && r < 0.02 )
    {
        y=0;
        rand1 = Math.floor(Math.random()*window.innerWidth);
    }
    else if(bulletY < y && r2< 0.02 )
    {
        y2=0;
        rand2 = Math.floor(Math.random()*window.innerWidth);
    }
    else if(bulletY < y && r3 < 0.02 )
    {
        y3=0;
        rand3 = Math.floor(Math.random()*window.innerWidth);
    }
    else if(bulletY < y && r4 < 0.02 )
    {
        y4=0;
        rand4 = Math.floor(Math.random()*window.innerWidth);
    }
    posy+=0.5;
    count+=1;
    if(count >1000)
    {
        posy -=2;
    }
    else
    {
        y+=1;
        y2+=1;
        y3+=1;
        y4+=1;
    }
    if(posy <1)
    {
        count = 0;
    }

    ctx.drawImage(ship,shipX,shipY,50,50);
    if(y > shipY)
    {
        y=0;
        by=0;
    }
    else if(y2 > shipY)
    {
        y2=0;
        by2=0;
    }
    else if(y3 > shipY)
    {
        y3=0;
        by3=0;
    }
    else if(y4 > shipY)
    {
        y4=0;
        by4=0;
    }
}
function bulletdraw()
{
    const r = (shipX - rand1) / (shipX  + rand1);
    let r2 = (shipX - rand2) / ((shipX - 15) + rand2);
    let r3 = (shipX  - rand3) / (shipX + rand3);
    let r4 = (shipX - rand4) / (shipX  + rand4);
    for(let x=0;x<5;x++) {
        ctx.drawImage(bullet1, shipX - 15, bulletY, 50, 50);
        ctx.drawImage(bullet2, shipX + 15, bulletY, 50, 50);
        bulletY -= 1;
        if (bulletY < 1) {
            bulletY = shipY - 40;
            bulletY -= 1;
        }
    }

    if(bulletY < y && r <= 0.02 && r >= -0.01 )
    {
        bulletY = shipY - 40;
    }
    else if(bulletY < y2 && r2<= 0.02 && r2 >= -0.01 )
    {
        bulletY = shipY - 40;
    }
    else if(bulletY < y3 && r3 <= 0.02 && r3 >= -0.01 )
    {
        bulletY = shipY - 40;
    }
    else if(bulletY < y4 && r4 <= 0.02 && r4 >= -0.01)
    {
        bulletY = shipY - 40;
    }
    console.log(bulletY);
}
setInterval(function ()
{
    draw();
    bulletdraw();
},10)


