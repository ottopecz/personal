<?php
$image = $_REQUEST['image'];
$size = getimagesize("../images/photos/".$image);
$return = array(
				'width' => $size[0],
				'height' => $size[1]
				);
echo json_encode($return);
?>
