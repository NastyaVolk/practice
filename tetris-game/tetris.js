//Возвращает ссылку на элемент по его идентификатору(id)
const canvas = document.getElementById('tetris');
//Этот метод генерирует контекст рисования, который будет связан с указанным холстом
const context = canvas.getContext('2d');

//Определяем масштаб (делаем его в 20 раз больше)
context.scale(20,20);

//Блок в форме буквы Т
const matrix = [
[0,0,0],
[1,1,1],
[0,1,0],
];

//Рисуем блоки
function draw() {
context.fillStyle = '#000';
context.fillRect(0,0, canvas.width, canvas.height);
drawMatrix(player.matrix, player.pos);	
}

//Функция получает матрицу и смещение
//Если значение в матрице равно 1, то зарисовываем кубик красным
function drawMatrix(matrix, offset) {
matrix.forEach((row,y) => {
	row.forEach((value,x) => {
		if (value !== 0) {
			context.fillStyle = 'red';
			context.fillRect(x + offset.x,
							 y + offset.y,
							 1, 1);
		}
	});
});	
}

let dropCounter = 0;      //Счетчик времени
let dropInterval = 1000;  //Кубик падает чутка через каждую секунду

let lastTime = 0;         //Последнее значение времени

function update(time = 0) {
	constdeltaTime = time - lastTime;
	lastTime = time;
	//К счетчику прибывляем постаянно разницу времени
	dropCounter += constdeltaTime;
	//Если значение счетчика больше секунды спускаем блок вниз
	if (dropCounter > dropInterval) {
		player.pos.y++;
		dropCounter = 0;
	}
	//Перерисовываем
	draw();
	requestAnimationFrame(update);
}

const player = {
	pos: {x: 5, y: 5},
	matrix: matrix,
}

update();

