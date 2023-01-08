<?php
setlocale(LC_ALL, 'ru_RU');
function save_file($file, $newFileName, $uploadDir, $needUnArchive) {
    $fileName = pathinfo($file['name'])['filename'];
    $fileType = end(explode(".", $file['name']));

    if (! is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    if (!empty($file)) {
        $path = $uploadDir . ($newFileName ? $newFileName : $fileName) . '.' . $fileType; // путь загрузки файла 
        if (copy($file['tmp_name'], $path)) {
            if ($needUnArchive) {
                return unzip_file($path, $uploadDir);
            }
            return json_encode(array(
                "message" => "Файл сохранен",
                "id" => $project->id
            ), JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(404);
            return json_encode(array(
                "message" => "Файл не удалось сохранить",
                "id" => $project->id
            ), JSON_UNESCAPED_UNICODE);
        };
    }
};

function unzip_file( $file_path, $dest ){
	$zip = new ZipArchive;

	if( ! is_dir($dest) ) {
        mkdir($dest, 0777, true);
    } 

	// открываем архив
	if( true === $zip->open($file_path) ) {
        
		 $zip->extractTo( $dest );

		 $zip->close();

         unlink($file_path);

		 return true;
	}
	else
        http_response_code(404);
		return json_encode(array(
            "message" => "Произошла ошибка при распаковке архива",
            "id" => $project->id
        ), JSON_UNESCAPED_UNICODE);
}

function recursiveRemoveDir($dir) {

	$includes = new FilesystemIterator($dir);

	foreach ($includes as $include) {

		if(is_dir($include) && !is_link($include)) {

			recursiveRemoveDir($include);
		}

		else {

			unlink($include);
		}
	}

	rmdir($dir);
}