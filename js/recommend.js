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
		inner : '<input id="input-1" type="text" placeholder="키(cm)"/>'
		 + '<input id="input-2" type="text" placeholder="몸무게(kg)"/>'
	},
	2 : { 
		title : '님의 성별은 무엇인가요?',
		subtitle : '신체에 무리를 주지 않는 단백질 제공량 파악에 필요해요.',
		alert: '성별은 필수 항목이예요.',
		inner : '<div class="gender-options">'
            +'<input type="radio" id="male" name="gender" value="male">'
            +'<label for="male" class="gender-label">남성</label>'
            +'<input type="radio" id="female" name="gender" value="female">'
            +'<label for="female" class="gender-label">여성</label>'
        		+'</div>'
	},
	3 : {
		title : '님의 나이를 알려주세요.',
		subtitle : '소화 기능과 칼로리 소모량 파악에 필요해요.',
		alert: '나이는 필수 항목이예요.',
		inner : '<input id="input" type="text" placeholder="나이(세)"/>'
	},
	4 : {
		title : '님의 운동 강도는 어떤가요?',
		subtitle : '1은 산책 정도, 5는 호흡이 매우 가빠질 정도의 운동 강도예요.',
		alert: '운동 강도를 알려주세요.',
		inner : '<div class="rating-container">'
        +'<div>1 ~ 5 선택 바</div>'
       +'<input type="range" id="rating" min="1" max="5" value="3">'
       + '<div class="result">'
            +'선택한 값: <span id="selected-value" class="value">3</span>'
        +'</div>'
    		+'</div>'
	},
	5 : {
		title: '님의 운동 목표는 무엇인가요?',
		subtitle : '운동 목표에 따라 단백질 보충제 추천이 달라져요.',
		alert: '운동 목표를 알려주세요.',
		inner : '<div class="goal-container">'
        +'<div><label class="goal-label"><input class="goal-input" type="radio" name="goal" value="체중 증가"> 체중 증가</label>'
            +'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="체중 감소">체중 감소</label>'
            +'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="근육 증가">근육 증가</label>'
            +'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="뼈 건강">뼈 건강</label></div>'
        +'<div class="goal-result">선택된 운동 목표: <span id="selected-goal" class="selected-goal">없음</span></div></div>'
	},
}

const user = {
	name: "", // idx 0
	weight: "", // idx 1
	height: "", // idx 1
	gender: "", // idx 2
	age: "", // idx 3
	exer_level: "", // idx 4
	exer_goal: "", // idx 5
}

let count = 0;

const setNextQuestion = () => {
	if (count == 0) {
		title.innerText = pages[count].title;
		subtitle.innerText = pages[count].subtitle;
		alert.innerText = pages[count].alert;
		inputContainer.innerHTML = pages[count].inner;
	} else {
		title.innerText = user.name + pages[count].title;
		subtitle.innerText = pages[count].subtitle;
		alert.innerText = pages[count].alert;
		inputContainer.innerHTML = pages[count].inner;
	}
	
}

btnNext.addEventListener('click', () => {
	if (count === 0) {
		if (document.getElementById('input').value.trim() !== "" &&
				document.getElementById('input').value.trim() !== null) {
			alertContainer.classList.remove('show');
			count++;
			user.name = document.getElementById('input').value.trim();
			setNextQuestion();
		} else {
			alertContainer.classList.add('show');
		}
	} else if (count === 1) {
		if ((document.getElementById('input-1').value.trim() !== "" &&
				document.getElementById('input-1').value.trim() !== null) &&
				(document.getElementById('input-2').value.trim() !== "" &&
				document.getElementById('input-2').value.trim() !== null)) {
			alertContainer.classList.remove('show');
			count++;
			user.height = Number(document.getElementById('input-1').value.trim()).toFixed().toString();
			user.weight = Number(document.getElementById('input-2').value.trim()).toFixed().toString();
			setNextQuestion();
		}
	} else if (count === 2) {
		const maleRadio = document.getElementById('male');
		const femaleRadio = document.getElementById('female');
		if (maleRadio.checked) {
			alertContainer.classList.remove('show');
			count++;
			user.gender = "male";
			setNextQuestion();
		} else if (femaleRadio.checked) {
			alertContainer.classList.remove('show');
			count++;
			user.gender = "female";
			setNextQuestion();
		} else {
			alertContainer.classList.add('show');
		}
	} else if (count === 3) {
		if (document.getElementById('input').value.trim() !== "" &&
				document.getElementById('input').value.trim() !== null) {
			alertContainer.classList.remove('show');
			count++;
			user.age = document.getElementById('input').value.trim();
			setNextQuestion();
			
			const ratingInput = document.getElementById('rating');
			const selectedValue = document.getElementById('selected-value');

			ratingInput.addEventListener('input', () => {
					selectedValue.textContent = ratingInput.value;
			});
		} else {
			alertContainer.classList.add('show');
		}
	}	else if (count === 4) {
		user.exer_level = document.getElementById('selected-value').textContent;
		count++;
		setNextQuestion();
		const radioButtons = document.querySelectorAll('.goal-input');
			const selectedGoal = document.getElementById('selected-goal');

			radioButtons.forEach(radio => {
					radio.addEventListener('change', () => {
							selectedGoal.textContent = radio.value;
					});
			});
	} else if (count === 5) {
		user.exer_goal = document.getElementById('selected-goal').textContent;
		count ++;
		Object.keys(user).forEach(item => console.log(user[item]));
	}
	
});

setNextQuestion();