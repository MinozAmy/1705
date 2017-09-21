<?php
	
	$id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
	$id2 = isset($_REQUEST['id2']) ? $_REQUEST['id2'] : '';

	// 读取json文件
	$file_path = 'data/review.json';

	// 打开文件fopen
	$file = fopen($file_path, 'r');

	// 读取文件fread()
	// 第一个参数：打开的文件
	// 第二个参数：读取内容的长度
	// 返回字符串


	// 读取文件内容长度filesize(path)
	$content = fread($file, filesize($file_path));
	echo ($content);
	// 把json字符串转成数组/对象
	$res = json_decode($content);
	
	// 读取内容后，关闭文件
	fclose($file);
	// 保存修改的信息
	// 找到id对应消息，把点赞数量+1
	$current;
	foreach ($res as $item) {
		if($item->id == $id){
			$item->ding++;

			$current = $item;
		}
		if($item->id == $id2){
			$item->cai++;

			$current = $item;
		}
	}


	// 重新写入文件
	// 写入前要打开文件
	$file = fopen($file_path, 'w');
	fwrite($file, json_encode($res,JSON_UNESCAPED_UNICODE));

	// 写入内容后，关闭文件
	fclose($file);



	// 把修改的消息返回前端
	// JSON_UNESCAPED_UNICODE:防止中文转码
	echo json_encode($current,JSON_UNESCAPED_UNICODE);

?>