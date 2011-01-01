<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/JavaScript" src="js/main.js"></script>
</div> <!-- main ends -->
<?php	
	// Additional page-specific js files
	if (isset($page_js_files))
		echo $page_js_files;
?>
<div id="lightbox" class="lightbox"></div>
<div id="lightbox_content" class="lightbox_content"></div>
</body>
</html>
