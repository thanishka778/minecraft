var canvas= new fabric.Canvas("myCanvas");
var block_img_width=30;
var block_img_height=30;
var player_x=30;
var player_y=30;
var player_object="";
var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
key_pressed=e.keyCode;
console.log(key_pressed);
if(e.shiftKey==true && key_pressed=="80")
{
    console.log("shift and p pressed together");
    block_img_width=block_img_width+10;
    block_img_height=block_img_height+10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
}
if(e.shiftKey==true && key_pressed=="77")
{
    console.log("shift and m pressed together");
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
}
if(key_pressed=="38")
{
    up();
    console.log("up");
}

if(key_pressed=="40")
{
    down();
    console.log("down");
}

if(key_pressed=="39")
{
    right();
    console.log("right");
}

if(key_pressed=="37")

{
    left();
    console.log("left");
}

if(key_pressed=="67")
{
new_image("cloud.jpg");
console.log("c");
}

if(key_pressed=="68")
{
new_image("dark_green.png");
console.log("d");
}

if(key_pressed=="71")
{
new_image("ground.png");
console.log("g");
}

if(key_pressed=="76")
{
new_image("light_green.png");
console.log("l");
}

if(key_pressed=="82")
{
new_image("roof.jpg");
console.log("r");
}

if(key_pressed=="84")
{
new_image("trunk.jpg");
console.log("t");
}

if(key_pressed=="85")
{
new_image("unique.png");
console.log("u");
}

if(key_pressed=="87")
{
new_image("wall.jpg");
console.log("w");
}

if(key_pressed=="89")
{
new_image("yellow_wall.png");
console.log("y");
}
}

function up(){
    if(player_y>0){
        player_y=player_y-block_img_height;
        console.log("block image height="+block_img_height);
        console.log("when up arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=350){
        player_y=player_y+block_img_height;
        console.log("block image height="+block_img_height);
        console.log("when down arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_img_width;
        console.log("block image width="+block_img_width);
        console.log("when left arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=650){
        player_x=player_x+block_img_width;
        console.log("block image width="+block_img_width);
        console.log("when right arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}