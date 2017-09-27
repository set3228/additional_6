module.exports = function zeros(expression) {
	var exArr = expression.split('*');
	/* Здесь будет наше произведение строкой */
	var multi = '1';
	for(var i = 0; i < exArr.length; i++) {
	  var factorial;
	  /* Определяем факториал ! или !!*/
	  if(exArr[i][exArr[i].length - 1] == exArr[i][exArr[i].length - 2]) {
		 factorial = 2;
	  } else factorial = 1;
	  /* Вырезаем число для факториала */
	  exArr[i] = +exArr[i].match(/([0-9])+/)[0];
	  /* Факториал числа строкой */
	  exArr[i] = f(exArr[i], factorial);
	  /* Вычисляем произведение всех чисел */
	  multi = multiply(multi, exArr[i]);
	}

	/* Ищем окончание из 0, если нет, то пустая строка */
	var zeros = multi.match(/0+$/) ? multi.match(/0+$/)[0] : '';
	return zeros.length;

	/* Функция факториала */
	function f(number, factorial) {
	  if(number <= factorial) return (number + '') ;
	  return multiply(number + '', f(number - factorial, factorial))
	}

	/* Функция умножения больших чисел */
	function multiply(first, second) {
		var multi = new Array(200).fill(0);
	
		for(var i = first.length - 1; i >= 0; i--) {
			var carry = 0;
			for(var j = second.length - 1; j >= 0; j--) {
				var product = +first[i] * +second[j];
				/* Определяем позицию вставки результата*/
				var answerPosition = (multi.length - 1) - (first.length - 1 - i) - (second.length - 1 - j);
	
				product += multi[answerPosition] + carry;
	
				multi[answerPosition] = product % 10;
	
				carry = Math.floor(product / 10);
			}
	
			multi[answerPosition - 1] = carry;
	
			carry = 0;
		}
		/* Убираем впереди стоящие 0 */
		multi = multi.join('').replace(/^0+/, '');
		
		return multi;
	}
}
