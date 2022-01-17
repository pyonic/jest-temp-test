function inCorrectClosed(string){
	let oposites = {
		'{' : '}',
		'(' : ')',
		'[' : ']'
	}
	let oposite_found = 0; // Количество закрывающихся символов
	let front_found = 0; // Количество окрывающихся символов
	let total_oposits = 0;
	for(var i = 0;i<string.length;i++){
		oposite = oposites[string[i]]; //Перебираем  символы по итерации и ищем противоположный символ в словаре
		if(oposite){ //Если текущий символ есть в словаре
			front_found++; //Увеличиваем кол.во открывающихся
			//Далее по итерации проходим по всем символам после текущей string[i] -> i
			for(var j=i; j<string.length;j++){
				if(oposite == string[j]){ //Если находим закрывающийся символ то инкрементируем oposite_found
					oposite_found++
					break //Останавливаем цикл
				}
			}
		}else{
			total_oposits++
		}
	}
	//Возвращаем false если кол.во открывающих символов и кол.во закрывающихся символов не одинаковы или если длина строки не четная
	//Если длины откр. и закр. символов равны и длина строки четна то возвращаем true
	//Cверяем найденное количество совпавших закрыв.символов и общее кол.во закрыв.символов
	return front_found-oposite_found ||  (string.length & 1) || total_oposits - oposite_found ? false : true;
}
module.exports = inCorrectClosed;
