document.addEventListener("DOMContentLoaded", function() {
    // Путь к вашему текстовому файлу
    var filePath = "name.txt";

    // Загрузка данных из текстового файла
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Разбиваем текст на строки
            var lines = data.split("\n");

            // Получаем ссылку на выпадающий список
            var select = document.getElementById("data-select");

            // Добавляем каждую строку в качестве опции в список
            lines.forEach(function(line) {
                var option = document.createElement("option");
                option.text = line.trim(); // Убираем пробелы и переносы строки
                select.add(option);
            });
        })
        .catch(error => {
            console.error("Ошибка загрузки данных:", error);
        });
});