<?php
	$pageNo = isset($_REQUEST['pageNo']) ? $_REQUEST['pageNo'] : 1;
	$qty = isset($_REQUEST['qty']) ? $_REQUEST['qty'] : 4;	

	
	$file_path = 'data/review.json';

	$file = fopen($file_path, 'r');

	$content = fread($file, filesize($file_path));

	// 把json字符串转成数组
	$arr = json_decode($content);


	
	$res = array(
		'data' => array_slice($arr, ($pageNo-1)*$qty,$qty), 
		'total' => count($arr),
		'pageNo' => $pageNo,
		'qty' => $qty
	);
	
	// 把相应的数据传给前端
	echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>