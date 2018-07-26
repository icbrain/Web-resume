var preloaderDotsDiv = document.getElementById("preloader-dots");

showPreloader();

function hidePreloader()
{
    preloaderDotsDiv.setAttribute("class", "displaynone");
}

function showPreloader()
{
    preloaderDotsDiv.setAttribute("class", "");
}

function shiftUpPreloader()
{
	turnOffPreloaderDotsAnimation();
	$('preloaderDotsDiv').stop().animate({bottom: "100%"}, 1000, function() {hidePreloader()});
}

function turnOffPreloaderDotsAnimation()
{
	preloaderDotsDiv.setAttribute("class", "preloader-dots-static");
}