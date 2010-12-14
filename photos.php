<?php
include_once $_SERVER['DOCUMENT_ROOT']."/personal/"."/includes/header.inc.php";
$page_js_files = '<script type="text/JavaScript" src="js/photos.js"></script>';
?>
<div id="portraits" class="carousel-out">
<div class="carousel-in">
<div class="slider">
<?php
$thumbs = array(
				"OttoPecz01Thumb120.jpg",
				"OttoPecz02Thumb120.jpg",
				"OttoPecz03Thumb120.jpg",
				"OttoPecz04Thumb120.jpg",
				"OttoPecz05Thumb120.jpg",
				"OttoPecz06Thumb120.jpg",
				"OttoPecz07Thumb120.jpg",
				"OttoPecz08Thumb120.jpg",
				"OttoPecz09Thumb120.jpg",
				"OttoPecz10Thumb120.jpg",
				"OttoPecz11Thumb120.jpg",
				"OttoPecz12Thumb120.jpg",
				"OttoPecz13Thumb120.jpg",
				"OttoPecz14Thumb120.jpg",
				"OttoPecz15Thumb120.jpg"
				);
				
$portraits = array(
					"OttoPecz01.jpg",
					"OttoPecz02.jpg",
					"OttoPecz03.jpg",
					"OttoPecz04.jpg",
					"OttoPecz05.jpg",
					"OttoPecz06.jpg",
					"OttoPecz07.jpg",
					"OttoPecz08.jpg",
					"OttoPecz09.jpg",
					"OttoPecz10.jpg",
					"OttoPecz11.jpg",
					"OttoPecz12.jpg",
					"OttoPecz13.jpg",
					"OttoPecz14.jpg",
					"OttoPecz15.jpg"
					);				
				
for ($i=0; $i<15; $i++)
{
	echo '
	<div class="item">
		<img src="images/photos/'.$thumbs[$i].'" class="photo" width="120px" height="120px" alt="Otto Pecz - headshot" />
		<img onclick="lightBox({index: '.$i.', content: \'portraits\'})" src="images/carousel_138_default.png" class="top" width="138px" height="138px" alt="Otto Pecz - headshot - border" />
	</div>';
}
?>
</div>
</div>
<div class="control-prev">
<div class="control-arrow-prev"></div>
</div>
<div class="control-next">
<div class="control-arrow-next"></div>
</div>
</div>
<?php
include_once $_SERVER['DOCUMENT_ROOT']."/personal/"."/includes/footer.inc.php";
?>
