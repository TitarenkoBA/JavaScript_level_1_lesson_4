/* 1 - Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, надо получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

/*
var numToObject = function () {
	let a;
	let object = {};
	while (a != true) {
		b = + prompt ('Введите число от 0 до 999');
		if (b >= 0 && b < 1000 && isNaN(b) != true) {
			console.log (b);
			object.hundreds = Math.floor (b / 100);
			object.tens = Math.floor (b % 100 / 10);
			object.units = Math.floor (b % 10);
			console.log (object);
			a = true;
		} else if (b >= 1000) {
			alert ('Вы ввели число больше 999');
			console.log (object);
			a = true;
		} else continue;
	}
}

numToObject ();
*/






/* 2 - Продолжить работу с интернет-магазином:
		a.	В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
		b.	Реализуйте такие объекты.
		c.	Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

/*
var socks = {
	name: 'носки',
	color: 'red',
	price: 100
};
var underpants = {
	name: 'трусы',
	color: 'blue',
	price: 200
};
var hat = {
	name: 'шапка',
	color: 'black',
	price: 500
};
var jacket = {
	name: 'куртка',
	color: 'brown',
	price: 3000
};
var pants = {
	name: 'штаны',
	color: 'yellow',
	price: 1000
};
var scarf = {
	name: 'шарф',
	color: 'pink',
	price: 300
};

var a = [socks, underpants, hat, pants, jacket, scarf]; // Каталог товаров магазина
var c = [];											    // Корзина
var d = 1;
var e = 0;
var i;
var g = '';

while ((d > 0 && d <= 6) && isNaN (d) != true) {
	d = + prompt ('Товары в корзине: ' + g + '\n1 - носки, 2 - трусы, 3 - шапка, 4 - штаны, 5 - куртка, 6 - шарф \n0 - выход');
	if ((d > 0 && d <= 6) && isNaN (d) != true) {
		c.push (a[d-1]);
		g += a[d-1].name + ', ';
	} else if (d == 0) {
		break;
	} else {
		d = 1;
		continue;
	}
} 

console.log ('Товары в корзине: ');
console.log (c);

var countBasketPrice = function () {
	for (i = 0; i < c.length; i++) {
		e += c[i].price;
	}
}

countBasketPrice ();
console.log ('Сумма к оплате: ' + e);
*/






// 2 Кто хочет стать миллионером

/*
var QUESTIONS = [
	{
		number : 1,
		text : 'Кто проживает на дне океана?',
		answers : ['Спанч Боб', 'Патрик Стар', 'Сквидвард', 'Рано или поздно все мы там окажемся'],
		correct : 1,
	},
	{
		number : 2,
		text : 'Из  каких частей состоит котопес?',
		answers : ['Кот и пес', 'Корова и овес', 'Кровь из нос', 'Собака и пылесос'],
		correct : 1,
	},
	{
		number : 3,
		text : 'Если есть в кармане пачка сигарет...',
		answers : ['Пора бросать курить', 'Значит все не так уж плохо', 'Бэн Афлек - жирный бэтмен', 'Все идет по плану'],
		correct : 2,
	},
	{
		number : 4,
		text : 'Какой звук издает Гомер Симпсон, когда злится?',
		answers : ['Ауч', 'Тля', 'Угх', 'Арррр'],
		correct : 4,
	},
	{
		number : 5,
		text : 'Hey, nigga!',
		answers : ['Whatsuuupp, man', 'Do you have money?', 'Put your gun down!', 'yo-yo-yo'],
		correct : 1,
	},
	{
		number : 6,
		text : 'Какая фраза подходит Винни Пуху - драг диллеру?',
		answers : ['no money, no honey','Пятачок, тащи ружье', 'Это какой-то неправильный мёд', 'В голове моей опилки'],
		correct : 1,
	},
	{
		number : 7,
		text : 'Сколько раз был женат Росс Геллер?',
		answers : ['1','2', '3', '4'],
		correct : 3,
	},
	{
		number : 8,
		text : 'Почему человек-паук не ест мух?',
		answers : ['Потому что он протух','Не умеет готовить', 'Некогда их ловить, весь в делах', 'Они для него слишком маленькие'],
		correct : 4,
	},
	{
		number : 9,
		text : 'О чем гласит теория струн?',
		answers : ['О струнах, ясно дело','Это уроки игры на гитаре', 'О том, что частицы, вовсе не частицы, а в многомерном пространстве они струны, ну что-то вроде того, я краем уха слышал', 'Стивен Хокинг по этом вопросу говорил следующее: "бип боп бип бип боп"'],
		correct : 3,
	},
	{
		number : 10,
		text : 'Кому принадлежит фраза "Святая корова!"?',
		answers : ['Раджеш Кутрапалли', 'Говард Воловец', 'Леонард Ховстедр', 'Кураж-Бамбей'],
		correct : 1,
	}
];
	
var game = function (mas) {

	let play = true;
	let round = 0;

	while (play == true && round < mas.length) {
		let question = generateQuestion (mas, round);
		let answer = prompt (question.questionText);
		play = check (answer, round);
		round++;
	}
};

var generateQuestion = function (mas, round) {
	let answers = '';

	for (let i = 0; i < 4; i++) {
		answers = answers + (i + 1) + ' - ' + mas[round].answers[i] + '\n';
	}

	let text = mas[round].text + '\n';
	let correctAnswer = mas[round].correct;

	return {
		questionText : text + answers + 'Введите правильный ответ',
		rightAnswer : correctAnswer
	}
};

var check = function (answer, round) {
	if (answer == QUESTIONS[round].correct) {
		alert ('Правильно! Продолжим игру.');
		return true;
	} else {
		alert ('Это неверный ответ. Вы проиграли! \nВы прожержались ' + round + ' раунд(-ов,-a) и заработали ' + (round * 1000) + ' рублей');
		return false;
	}
};

game (QUESTIONS);
*/






// 3 Практикум из четвертого урока "квест". 

/*
var works = {
    0: {
        text: 'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
        'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
        'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
        answer: {
            1: '1 - Поспать до обеда\n',
            2: '2 - Пойти прогуляться\n'
        },
        jump: {
            1: 1,
            2: 2
        }
    },
    1: {
        text: 'Вы решили поспать до обеда.\n' +
        'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
        'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
        answer: {
            1: '1 - Пойти прогуляться\n',
            2: '2 - Пойти пообедать\n'
        },
        jump: {
            1: 3,
            2: 4
        }
    },
    2: {
        text: 'Вы решили пойти прогуляться.\n' +
        'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
        'Вы решаете дойти до озера, полюбоваться его красотой.\n' +
        'С одной стороны тропинки Вы видите пшеничное поле, за которым виднеется лес.\n' +
        'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
        'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
        'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
        answer: {
            1: '1 - Подождать обед в столовой\n',
            2: '2 - Поколоть дров перед обедом\n'
        },
        jump: {
            1: 5,
            2: 6
        }
    },
    3: {
        text: 'Вы решили пойти прогуляться.\n' +
        'Вы выходите из своего дома и видите вдалеке голубое озеро.\n' +
        'Сегодня выдался прекрасный солнечний денёк, слегка прохлатный ветерок помогает Вам проснуться.\n' +
        'Вы осматриваетесь по сторонам и видите перед поленницей много берёзовых пеньков.\n' +
        'До обеда ещё есть время и Вы решаете ...\n',
        answer: {
            1: '1 - Подождать обед в столовой\n',
            2: '2 - Поколоть дров перед обедом\n'
        },
        jump: {
            1: 5,
            2: 6
        }
    },
    4: {
        text: 'Вы решили пойти пообедать.\n' +
        'Вы заходите в столовую и ощущаете прекрасные ароматы, от которых Вы сразу просыпаетесь.\n' +
        'Вам предлагают помочь накрыть стол к обеду.\n' +
        'Также Вы вспоминаете, что на дворе полно берёзовых пеньков, да и погодка сегодня отличная.\n' +
        'Немного подумав, Вы решаете ...\n',
        answer: {
            1: '1 - Помочь накрыть на стол\n',
            2: '2 - Поколоть дров перед обедом\n'
        },
        jump: {
            1: 7,
            2: 6
        }
    },
    5: {
        text: 'Вы решили подождать обед в столовой.\n' +
        'Вы заходите в столовую и ощущаете прекрасные ароматы, обед уже почти готов.\n' +
        'Вы предлагаете помочь накрыть стол к обеду, чтобы обед поскорее уже настал.\n' +
        'С Вашей помощью получилось очень быстро накрыть на стол.\n' +
        'Обед получился просто шикарный, было большое количество очень вкусных блюд.\n' +
        'Было всё так аппетитно, что Вы попробовали всё.\n' +
        'После вкусного и сытного обеда Вы думаете ...\n',
        answer: {
            1: '1 - Пойти прогуляться\n',
            2: '2 - Отдохнуть дома\n'
        },
        jump: {
            1: 8,
            2: 9
        }
    },
    6: {
        text: 'Вы решили поколоть дров перед обедом.\n' +
        'Вы берёте из кладовой колун и идёте к поленнице.\n' +
        'Когда Вы подходите к поленнице и видите эти горы берёзовых пеньков, то понимаете, что здесь всё за один день не переколоть.\n' +
        'Вы берёте сначала пенёчек поменьше, чтобы разогреться.\n' +
        'Пенёк раскалывается напополам с первого же удара, Вы берёте следующий и продолжаете.\n' +
        'Через некоторое время Вы слышите из дома голос: "Обед готов, идите кушать!".\n' +
        'Вы быстренько докалываете пенёк и понимаете, что раскололи с десяток пеньков и очень проголодались.\n' +
        'Вы идёте умыться и вымыть руки, после направляетесь в столовую, откуда доносятся манящие ароматы.\n' +
        'Вы заходите в столовую и видите шикарный обед, большое количество блюд ещё больше возбуждает Ваш аппетит.\n' +
        'Было всё так аппетитно, что Вы попробовали всё.\n' +
        'После вкусного и сытного обеда Вы думаете ...\n',
        answer: {
            1: '1 - Пойти прогуляться\n',
            2: '2 - Отдохнуть дома\n'
        },
        jump: {
            1: 8,
            2: 9
        }
    },
    7: {
        text: 'Вы решили помочь накрыть на стол.\n' +
        'Вы помогаете быстрее приготовить все блюда и, по мере готовности, относите их на стол.\n' +
        'Пока Вы готовили и носили блюда, у Вас разыгрался очень сильный аппетит.\n' +
        'С Вашей помощью получилось очень быстро накрыть на стол.\n' +
        'Обед получился просто шикарный, было большое количество очень вкусных блюд.\n' +
        'Было всё так аппетитно, что Вы попробовали всё.\n' +
        'После вкусного и сытного обеда Вы думаете ...\n',
        answer: {
            1: '1 - Пойти прогуляться\n',
            2: '2 - Отдохнуть дома\n'
        },
        jump: {
            1: 8,
            2: 9
        }
    },
    8: {
        text: 'Вы решили пойти прогуляться.\n' +
        'Вы выходите из дома и сразу на глаза попадается озеро и Вы решаете прогуляться к нему.\n' +
        'По дороге к озеру Вы встечаете знакомого рыбака, который тоже идёт к озеру.\n' +
        'Рыбак рассказывает Вам, что сейчас лучшее время, чтобы отдохнуть под деревом у озера.\n' +
        'Послушав совет рыбака Вы идёте к этому самому дереву.\n' +
        'Это огромная ветла, тень от которой падает на зелёный склон перед озером.\n' +
        'С озера веет прохладный ветерок и Вы не замечаете как засыпаете.\n' +
        'Просыпаетесь Вы уже только под вечер.\n' +
        'Вы очень хорошо отдохнули и решаете ...\n',
        answer: {
            1: '1 - Пойти домой\n',
            2: '2 - Посидеть ещё немножко\n'
        },
        jump: {
            1: 10,
            2: 11
        }
    },
    9: {
        text: 'Вы решили отдохнуть дома.\n' +
        'Вы идёте в комнату в восточной части дома.\n' +
        'В этой комнате Вы ощущаете прохладный ветерок и знаете, что вечером в ней будет ещё лучше.\n' +
        'Вы решаете прилечь и засыпаете.\n' +
        'Просыпаетесь Вы уже только вечером.\n' +
        'Вы хорошо отдохнули и решаете ...\n',
        answer: {
            1: '1 - Выйти во двор\n',
            2: '2 - Отдохнуть ещё немножко\n'
        },
        jump: {
            1: 12,
            2: 13
        }
    },
    10: {
        text: 'Вы решили пойти домой.\n' +
        'Вы приходите домой и начинаете помогать по хозяйству.\n' +
        'Работа заканчивается только ночью.\n' +
        'Появляются звёзды и Вы решаете ...\n',
        answer: {
            1: '1 - Полюбоваться звёздами\n',
            2: '2 - Пойти спать\n'
        },
        jump: {
            1: 14,
            2: 15
        }
    },
    11: {
        text: 'Вы решили посидеть ещё немножко.\n' +
        'Вечернее озеро выглядело очень красиво, чуть позже Вы возвращаетесь домой.\n' +
        'Вы приходите домой и начинаете помогать по хозяйству.\n' +
        'Работа заканчивается только ночью.\n' +
        'Появляются звёзды и Вы решаете ...\n',
        answer: {
            1: '1 - Полюбоваться звёздами\n',
            2: '2 - Пойти спать\n'
        },
        jump: {
            1: 14,
            2: 15
        }
    },
    12: {
        text: 'Вы решили выйти во двор.\n' +
        'Вечером стало попрохладнее, в самый раз для вечерней работы.\n' +
        'Вы начинаете помогать по хозяйству.\n' +
        'Работа заканчивается только ночью.\n' +
        'Появляются звёзды и Вы решаете ...\n',
        answer: {
            1: '1 - Полюбоваться звёздами\n',
            2: '2 - Пойти спать\n'
        },
        jump: {
            1: 14,
            2: 15
        }
    },
    13: {
        text: 'Вы решили отдохнуть ещё немножко.\n' +
        'Прохладный вечерний ветерок веет в окошко и, недолго размышляя, Вы выходите во двор.\n' +
        'Вечером стало попрохладнее, в самый раз для вечерней работы.\n' +
        'Вы начинаете помогать по хозяйству.\n' +
        'Работа заканчивается только ночью.\n' +
        'Появляются звёзды и Вы решаете ...\n',
        answer: {
            1: '1 - Полюбоваться звёздами\n',
            2: '2 - Пойти спать\n'
        },
        jump: {
            1: 14,
            2: 15
        }
    },
    14: {
        text: 'Вы решили полюбоваться звёздами.\n' +
        'Ночное небо прекрасно, видны множества созвездий, кажется, что ночное небо сияет.\n' +
        'Вы понимаете, что сегодня Вы хорошо поработали.\n' +
        'Время уже позднее, пора ложиться спать, завтра предстоит много работы.\n',
        answer: {
        },
        jump: {
        }
    },
    15: {
        text: 'Вы решили пойти спать.\n' +
        'Сегодня Вы хорошо поработали.\n' +
        'Завтра предстоит ещё много работы, лучше сегодня лечь пораньше.\n',
        answer: {
        },
        jump: {
        }
    },
};

var round = 0;
var play = true;

var game = function (mas) {

	while (play == true && round < 20) {
		let question = generateQuestion (mas, round);
		let answer = prompt (question.questionText);
		check (answer, round);
	}
};

var generateQuestion = function (mas, round_) {
	let answers = '';

	for (let i = 1; i < 3; i++) {
		answers = answers + mas[round_].answer[i] + '\n';
	}

	let text = mas[round_].text + '\n';
	question = {
		questionText : text + answers + 'Введите ответ',
	};
	round = round_;
	return round, play, question;
};

var check = function (answer, round_) {
	if (answer == 1) {
		round = works[round].jump[1];
		play = true;
	} else if (answer == 2) {
		round = works[round].jump[2];
		play = true;
	} else {
		play = false;
	}
	return play, round;
};

game (works);
*/