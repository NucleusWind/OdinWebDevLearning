var gridSize = 50;
var randomColor = false;
var option = "default";

$(document).ready(function(){
	initGrid();
	drawGrid();
});

$(".clear").click(function(){
	clearGrid();
	$(".cell").remove();
	squaresPerRow = parseInt(prompt("Enter number of squares (1-64): ",50),10);
	if (squaresPerRow > 0 && squaresPerRow <= 64)
	{
		gridSize = squaresPerRow;
		randomColor = false;
		option = "default";
		initGrid();	
		drawGrid();
	}
	else
	{
		alert("Sorry that was not a valid input.");
	}
});

$(".trail").click(function(){
	clearGrid();
	$(".cell").unbind('mouseenter');
	option = "trail";
	drawGrid();
});

$(".randomColor").click(function(){
	$(this).toggleClass('highlighted');
	if (randomColor){
		randomColor = false;
	}
	else{
		randomColor = true;
	}
	drawGrid();
});

$(".default").click(function(){
	$(".cell").unbind('mouseenter mouseout');
	option = "default";
	drawGrid();
});

function clearGrid(){
	$(".cell").css({
		"background-color": "#E8E8E8",
		"opacity": 1});
}

function initGrid(){
	
	var $grid = document.getElementById("grid");
	for (var i = 0; i < gridSize; i++){
		for (var j = 0; j < gridSize; j++) {
			var $cell = document.createElement("div");
			$cell.setAttribute("class","cell");
			$grid.appendChild($cell);
		}
	}

	var width = ($("#wrapper").width())/ gridSize;  
	$(".cell").css({"width":width ,"height":width});
	$(".grid_label").html("drawing over a " + gridSize + " X " + gridSize + " grid");
	//$("tr").css({"height":width});

	//console.log("drawGrid:" + option);
	//console.log(option === "trail");
	
}

function drawGrid(){
	var color = getColor();
	if (!randomColor){
		color = "black";
	}
	if (option === "trail"){
		//console.log("inside");
		
		$("#grid").css("background-color", color);
		
		$(".cell").hover(
			function(){
				//console.log("in function"); 
				$(this).css("opacity", 0);
			},
			function(){
				//console.log("fading"); 
				$(this).fadeTo("fast",1);
			}
		);
	}
	else{
		//console.log("inside");
		$(".cell").mouseenter(
		function(){
			//console.log("blacking"); 
			$(this).css("background-color", color);
		});
	}
}

function getColor(){
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i=0; i<6; i++){
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}