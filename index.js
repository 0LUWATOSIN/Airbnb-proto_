 var ele = document.getElementById('scroll1');
var scr = ele.clientWidth;

var prevbtn = document.getElementById('prev-btn');
prevbtn.onclick = function(){
    ele.scrollLeft -= scr;
}

var nextbtn = document.getElementById('next-btn');
nextbtn.onclick = function(){
    ele.scrollLeft += scr;
}

// picture scroller

function prev(eleId) {
    var imgSlider = document.getElementById(eleId);
    slide = imgSlider.clientWidth
    imgSlider.scrollLeft -=slide
}
function next(eleId) {
    var imgSlider = document.getElementById(eleId);
    slide = imgSlider.clientWidth
    imgSlider.scrollLeft +=slide
}






