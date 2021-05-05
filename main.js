var canvas= new fabric.canvas("myCanvas");
hero_height=30;
hero_width=30;
heroX=10;
heroY=10;
window.addEventListener("keydown",mykeydown);
function mykeydown(key) {
    keypress=key.keyCode;
    if(keypress=="80" && key.shiftKey==true) {
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypress=="77" && key.shiftKey==true) {
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
if(keypress=="70") {
    console.log("f");
    newImage("iron_man_face.png");
}
if(keypress=="66") {
    console.log("b");
    newImage("spiderman_body.png");
}
if(keypress=="76") {
    console.log("l");
    newImage("hulk_legs.png");
}
if(keypress=="82") {
    console.log("r");
    newImage("thor_right_hand.png");
}
if(keypress=="72") {
    console.log("h");
    newImage("captain_america_left_hand");
}
if(keypress=="70") {
    console.log("up");
    up();
}
if(keypress=="70") {
    console.log("down");
    down();
}
if(keypress=="70") {
    console.log("right");
    right();
}
if(keypress=="70") {
    console.log("left");
    left();
}