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
				"OttoPecz14Thumb120.jpg",
				"OttoPecz03Thumb120.jpg",
				"OttoPecz15Thumb120.jpg",
				"OttoPecz05Thumb120.jpg",
				"OttoPecz07Thumb120.jpg",
				"OttoPecz11Thumb120.jpg",				
				"OttoPecz09Thumb120.jpg",
				"OttoPecz04Thumb120.jpg",
				"OttoPecz10Thumb120.jpg",
				"OttoPecz08Thumb120.jpg",
				"OttoPecz12Thumb120.jpg",
				"OttoPecz06Thumb120.jpg",
				"OttoPecz13Thumb120.jpg",
				"OttoPecz02Thumb120.jpg"				
				);
				
$portraits = array(
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
									
for ($i=0; $i<15; $i++)
{
	echo '
	<div class="item">
		<img src="images/photos/'.$thumbs[$i].'" class="photo" width="120px" height="120px" alt="Otto Pecz - headshot" />
		<img onclick="lightBox({index: '.$i.', content: \'portraits\'})" src="images/carousel_138_default.png" class="top" width="138px" height="138px" alt="Otto Pecz - headshot - border" />
	</div>';
}
?>
</div> <!-- slider ends -->
</div> <!-- carousel-in ends-->
<div class="control-prev">
<div class="control-arrow-prev"></div>
</div>
<div class="control-next">
<div class="control-arrow-next"></div>
</div>
</div> <!-- carousel-out ends -->
<div id="stage_photos" class="carousel-out">
<div class="carousel-in">
<div class="slider">
<?php
$stage_thumbs = array(
				"stage01Thumb120.jpg",
				"stage02Thumb120.jpg",
				"stage03Thumb120.jpg",
				"stage04Thumb120.jpg",
				"stage05Thumb120.jpg",
				"stage06Thumb120.jpg",
				"stage07Thumb120.jpg",				
				"stage08Thumb120.jpg",
				"stage09Thumb120.jpg",
				"stage10Thumb120.jpg",
				"stage11Thumb120.jpg",
				"stage12Thumb120.jpg",
				"stage13Thumb120.jpg",
				"stage14Thumb120.jpg",
				"stage15Thumb120.jpg"				
				);
				
$stage_photos = array(
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
					
for ($i=0; $i<15; $i++)
{
	echo '
	<div class="item">
		<img src="images/photos/'.$stage_thumbs[$i].'" class="photo" width="120px" height="120px" alt="Otto Pecz - stage photo" />
		<img onclick="lightBox({index: '.$i.', content: \'stage_photos\'})" src="images/carousel_138_default.png" class="top" width="138px" height="138px" alt="Otto Pecz - headshot - border" />
	</div>';
}
?>
</div> <!-- slider ends -->
</div> <!-- carousel-in ends-->
<div class="control-prev">
<div class="control-arrow-prev"></div>
</div>
<div class="control-next">
<div class="control-arrow-next"></div>
</div>
</div> <!-- carousel-out ends -->
<?php
include_once $_SERVER['DOCUMENT_ROOT']."/personal/"."/includes/footer.inc.php";
?>
