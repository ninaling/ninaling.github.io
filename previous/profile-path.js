var img = new Image;
img.onload = function(){
    var canvas = document.getElementById("profile_pic_canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(0, 100);
    context.lineTo(100, 340);
    context.lineTo(380, 290);
    context.lineTo(330, 0);
    context.closePath();

    context.save();
    context.clip();
    context.drawImage(img, 0, 0, 380, 340);

    context.strokeStyle='#F9F5F4';
    context.stroke();
    context.restore();
};
img.src = "files/profile_cropped.jpg";