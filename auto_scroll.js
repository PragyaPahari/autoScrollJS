var docHeight= document.documentElement.scrollHeight;

var cliHeight =document.documentElement.clientHeight;

var height=docHeight-cliHeight;

var scrolldelay;

var tgl=false;

document.addEventListener("keypress", function(event) {
	if (event.keyCode == 13) {
		if(tgl==false){	
                        console.log('enter pressed, toggle false');
			stopScroll();
			tgl=true;
		}
		else{
			console.log('enter pressed, toggle true');
                        pageScroll();
			tgl=false;
		}
  	}
});


window.addEventListener('load', (event) => {
        pageScroll();
});

function pageScroll() { 
        if (window.pageYOffset<height)
        {
                window.scrollBy({
                    top:2,
                    left:0,
                    behavior: 'smooth'
                    });
                scrolldelay = setTimeout('pageScroll()',10);
        }
        else {
                console.log('stopping now');
                stopScroll();
                topScroll();
        }
}

function stopScroll() {
    	clearTimeout(scrolldelay);
}

function topScroll(){
        if (window.pageYOffset>0)
        {
                window.scrollTo({
                        top:0,
                        left:0,
                        behavior: 'smooth'
                })
                scrolldelay = setTimeout('topScroll()',5);
        }
        else{
                console.log('stopping again');
                stopScroll();
                pageScroll();
        }
}
