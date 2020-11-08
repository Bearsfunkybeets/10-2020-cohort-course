
var currentPosition = 0;

var prevImage = function() {
    currentPosition = currentPosition + 500; 
    document.getElementById('imageslider').style.transform = 'translateX(' + currentPosition + 'px)';

}    

var nextImage = function() {
    currentPosition = currentPosition - 500; 
    document.getElementById('imageslider').style.transform = 'translateX(' + currentPosition + 'px)';

}    

//if (1 < 4) {
    //  var outcome = "if block";
}// please advise on how to add conditionals or how to block slide going too far.


setTimeout(nextImage,1000);
setTimeout(nextImage,2000);
setTimeout(nextImage,3000);


setTimeout(prevImage,3000);
setTimeout(prevImage,2000);
setTimeout(prevImage,1000);

