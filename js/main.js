$(document).ready(function(){
	
	// thumbnail border animation
	$("div.item img.top").hover(
		function () {
			$(this).attr("src", "images/carousel_138_hover.png");
		}, 
		function () {
			$(this).attr("src", "images/carousel_138_default.png");
		}
	);
	
	// carousel control arrow animation
	$("div.control-arrow-prev").hover(
		function () {
			$(this).css("background-position", "-68px 0px");
		},
		function () {
			$(this).css("background-position", "-102px 0px");
		}
	).mousedown(function(){
		$(this).css("background-position", "-34px 0px");
	}).mouseup(function(){
		$(this).css("background-position", "-68px 0px")
	});

	// carousel control arrow animation
	$("div.control-arrow-next").hover(
		function () {
			$(this).css("background-position", "-34px 0px");
		},
		function () {
			$(this).css("background-position", "0px 0px");
		}
	).mousedown(function(){
		$(this).css("background-position", "-68px 0px");
	}).mouseup(function(){
		$(this).css("background-position", "-34px 0px")
	});
	
$("div.lightbox_content").hover(
		function () {
			$("img.close-button").fadeIn('slow', function() {
				$(this).click(function() {
					$('#lightbox_content').hide();
					$('#lightbox_content').children().remove();
					$('#lightbox').hide();																								
				});
			});
		}, 
		function () {
			$("img.close-button").fadeOut('slow');
		});

portraits = new Array(
					"OttoPecz01.jpg",
					"OttoPecz14.jpg",				
					"OttoPecz03.jpg",
					"OttoPecz15.jpg",
					"OttoPecz05.jpg",
					"OttoPecz07.jpg",
					"OttoPecz11.jpg",					
					"OttoPecz09.jpg",
					"OttoPecz04.jpg",
					"OttoPecz10.jpg",
					"OttoPecz08.jpg",
					"OttoPecz12.jpg",
					"OttoPecz06.jpg",
					"OttoPecz13.jpg",
					"OttoPecz02.jpg"					
					);
					
stage_photos = new Array(
					"stage01.jpg",
					"stage02.jpg",				
					"stage03.jpg",
					"stage04.jpg",
					"stage05.jpg",
					"stage06.jpg",
					"stage07.jpg",					
					"stage08.jpg",
					"stage09.jpg",
					"stage10.jpg",
					"stage11.jpg",
					"stage12.jpg",
					"stage13.jpg",
					"stage14.jpg",
					"stage15.jpg"					
					);					
});

function lightBox(opts) {
	var content = opts.content;
	var index = opts.index;			
				
	if (content == "portraits")
		var imgArray = portraits;
	else if (content == "stage_photos")
		var imgArray = stage_photos;
	
	$.getJSON('scripts/get_image_info.php', { image: imgArray[index] }, function(json){
			
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			
			var widthRatio = windowWidth / json.width;
			var heightRatio = windowHeight / json.height;
			
			if ((widthRatio <= 1.25) && (heightRatio >= 1.25)) {
				//alert('minimize with width');
				
				var newWidth = Math.round(windowWidth / 1.25);
				var newHeight = Math.round((newWidth / json.width) * json.height);
				
				var posX = Math.round((windowWidth - newWidth) / 2);
				var posY = Math.round((windowHeight - newHeight) / 2);
				
				showPhoto({
							dimension: "width",
							value: newWidth,
							posX: posX,
							posY: posY,
							index: index,
							imgArray: imgArray
							});
			}
			else if ((widthRatio >= 1.25) && (heightRatio <= 1.25))	{
				//alert('minimize with height');
				
				var newHeight = Math.round(windowHeight / 1.25);
				var newWidth = Math.round((newHeight / json.height) * json.width);
				
				var posX = Math.round((windowWidth - newWidth) / 2);
				var posY = Math.round((windowHeight - newHeight) / 2);				
				
				showPhoto({
							dimension: "height",
							value: newHeight,
							posX: posX,
							posY: posY,
							index: index,
							imgArray: imgArray
							});
			}
			else if ((widthRatio <= 1.25) && (heightRatio <= 1.25))	{
				//alert('compare ratios and minimize with the smaller');
				
				if (heightRatio < widthRatio) {
					var newHeight = Math.round(windowHeight / 1.25);
					var newWidth = Math.round((newHeight / json.height) * json.width);
					
					var posX = Math.round((windowWidth - newWidth) / 2);
					var posY = Math.round((windowHeight - newHeight) / 2);				
					
					showPhoto({
								dimension: "height",
								value: newHeight,
								posX: posX,
								posY: posY,
								index: index,
								imgArray: imgArray
								});					
				}
				else {
					var newWidth = Math.round(windowWidth / 1.25);
					var newHeight = Math.round((newWidth / json.width) * json.height);
					
					var posX = Math.round((windowWidth - newWidth) / 2);
					var posY = Math.round((windowHeight - newHeight) / 2);
					
					showPhoto({
								dimension: "width",
								value: newWidth,
								posX: posX,
								posY: posY,
								index: index,
								imgArray: imgArray
								});					
				}					
			}
			else {
				//alert('its all right only centralize');
				
				var posX = Math.round((windowWidth - json.width) / 2);
				var posY = Math.round((windowHeight - json.height) / 2);
				
				showPhoto({
							dimension: "no",
							value: "n/a",
							posX: posX,
							posY: posY,
							index: index,
							imgArray: imgArray
							});
			}
	});
}

function showPhoto(opts) {
	var dimension = opts.dimension;
	var value = opts.value;
	var posX = opts.posX;
	var posY = opts.posY;
	var imgArray = opts.imgArray;
	var index= opts.index;
	
	if (dimension == "height") {
		var photo = document.createElement('img');
		$(photo).attr({
					src: "images/photos/"+imgArray[index],
					height: value
				}).appendTo($('#lightbox_content'));
		var closeButton = document.createElement('img');				
		$(closeButton).attr({
					className: "close-button",
					src: "images/close_button.png"
				}).appendTo($('#lightbox_content'));				
		$('#lightbox').show();
		$('#lightbox_content').css({'top': posY-15, 'left': posX-15, 'padding': '15px 15px 13px 15px'});
		$('#lightbox_content').show();				
	}
	else if (dimension == "width") {
		var photo = document.createElement('img');
		$(photo).attr({
					src: "images/photos/"+imgArray[index],
					width: value
				}).appendTo($('#lightbox_content'));
		var closeButton = document.createElement('img');
		$(closeButton).attr({
					className: "close-button",
					src: "images/close_button.png"
				}).appendTo($('#lightbox_content'));				
		$('#lightbox').show();
		$('#lightbox_content').css({'top': posY-15, 'left': posX-15, 'padding': '15px 13px 15px 15px'});
		$('#lightbox_content').show();				
	}
	else if (dimension == "no") { // no need to resize
		var photo = document.createElement('img');
		$(photo).attr({
					src: "images/photos/"+imgArray[index]
				}).appendTo($('#lightbox_content'));
		var closeButton = document.createElement('img');
		$(closeButton).attr({
					className: "close-button",
					src: "images/close_button.png"
				}).appendTo($('#lightbox_content'));				
		$('#lightbox').show();
		$('#lightbox_content').css({'top': posY-15, 'left': posX-15, 'padding': '15px 15px 15px 15px'});
		$('#lightbox_content').show();		
	}
	else {
	}
}

// main carousel animation function
function animateCarousel(opts) {
	var socket = opts.socket;
	
	$(socket+" div.control-prev div.control-arrow-prev").click(function(){
		pos = parseInt($(socket+" div.carousel-in div.slider").css('left'));
		if (pos != 0)
			next({pos: pos, socket: socket});
	});

	$(socket+" div.control-next div.control-arrow-next").click(function(){
		pos = parseInt($(socket+" div.carousel-in div.slider").css('left'));	
		if (pos != -1700)
			prev({pos: pos, socket: socket});
	});	
}

// carousel animation functions
function next(opts) {
	var socket = opts.socket;
	var pos = opts.pos + 850;
	
	$(socket+' .carousel-in .slider').animate({left: pos}, 1000 , function() {});
}
function prev(opts) {
	var socket = opts.socket;
	var pos = opts.pos - 850;
	
	$(socket+' div.carousel-in div.slider').animate({left: pos}, 1000 , function() {});
}
