const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const alert = document.getElementById('alert-msg');
const alertContainer = document.getElementById('alert-container');
const inputContainer = document.getElementById('input-container');
const btnNext = document.getElementById('btn-next');

const pages = {
	0 : {
		title : 'PT와 여정을 함께할 고객님의 성함은 무엇인가요?',
		subtitle : 'PT가 고객님을 불러 드릴 이름이예요. 닉네임도 괜찮아요.',
		alert: '이름은 필수 항목이예요.',
		inner : '<input id="input" type="text" placeholder="이름"/>'
	},
	1 : {
		title : '님의 키와 몸무게는 얼마인가요?',
		subtitle : '신체에 무리를 주지 않는 단백질 제공량 파악에 필요해요.',
		alert: '키, 몸무게 둘 다 입력해 주세요.',
		inner : '<input id="input" type="text"/><input id="input" type="text"/>'
	},
	2 : {
		title : '님의 나이를 알려주세요.',
		subtitle : '소화 기능과 칼로리 소모량 파악에 필요해요.',
		alert: '나이는 필수 항목이예요.',
		inner : '<input id="input" type="text"/>'
	},
	3 : {
		title : '님의 운동 강도는 어떤가요?',
		subtitle : '일주일 기준 평균적인 운동 강도를 알려주세요.',
		alert: '운동 강도를 알려주세요.',
		inner : '<input id="input" type="text"/>'
	},
	4 : {
		title: '님의 운동 목표는 무엇인가요?',
		subtitle : '운동 목표에 따라 단백질 보충제 추천이 달라져요.',
		alert: '운동 목표를 알려주세요.',
		inner : '<input id="input" type="text"/>'
	},
}

const user = {
	name: "", // idx 0
	weight: "", // idx 1
	height: "", // idx 1
	age: "", // idx 2
	exer_level: "", // idx 3
	exer_goal: "", // idx 4
}

let count = 0;

const setNextQuestion = () => {
	if (count == 0) {
		title.innerText = pages[count].title;
		subtitle.innerText = pages[count].subtitle;
		alert.innerText = pages[count].alert;
		inputContainer.innerHTML = pages[count].inner;
	}
	if (count == 1) {
		user.name = document.getElementById('input').value.trim();
		title.innerText = user.name + pages[count].title;
		subtitle.innerText = pages[count].subtitle;
		alert.innerText = pages[count].alert;
		inputContainer.innerHTML = pages[count].inner;
	}
	
}

btnNext.addEventListener('click', () => {
	if (document.getElementById('input').value.trim() !== "" && document.getElementById('input').value.trim() !== null) {
		alertContainer.classList.remove('show');
		count++;
		setNextQuestion();
	} else {
		alertContainer.classList.add('show');
	}
});

setNextQuestion();