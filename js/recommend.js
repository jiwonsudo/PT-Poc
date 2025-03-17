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
		inner : '<input id="input-1" type="number" placeholder="키(cm)"/>'
		 				+ '<input id="input-2" type="number" placeholder="몸무게(kg)"/>'
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
		inner : '<input id="input" type="number" placeholder="나이(세)"/>'
	},
	4 : {
		title : '님의 일주일 평균 운동 강도는 어떤가요?',
		subtitle : '1은 산책 정도, 5는 호흡이 매우 가빠질 정도의 운동 강도예요.',
		alert: '운동 강도를 알려주세요.',
		inner : '<div class="rating-container">'
       			+'<input class="intensity-input" type="range" id="rating" min="1" max="5" value="3">'
       			+ '<div class="intensity-result">'
            +'운동 강도: <span id="selected-value" class="intensity-value">3단계</span>'
        		+'</div>'
    				+'</div>'
	},
	5 : {
		title: '님의 운동 목표는 무엇인가요?',
		subtitle : '운동 목표에 따라 단백질 보충제 추천이 달라져요. 가장 중요한 하나만 골라주세요.',
		alert: '운동 목표를 알려주세요.',
		inner : '<div class="goal-container">'
        		+'<div><label class="goal-label"><input class="goal-input" type="radio" name="goal" value="체중 감량">체중 감량</label>'
            +'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="근육 증가">근육 증가</label>'
            +'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="지구력 향상">지구력 향상</label>'
						+'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="유연성 향상">유연성 향상</label>'
						+'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="균형과 코어 강도 증가">균형과 코어 강도 증가</label>'
						+'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="심폐 기능 향상">심폐 기능 향상</label>'
						+'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="스트레스 해소 및 정신 건강">스트레스 해소 및 정신 건강</label>'
            +'<label class="goal-label"><input class="goal-input" type="radio" name="goal" value="부상 예방 및 회복">부상 예방 및 회복</label></div>'
        		+'<div class="goal-result">선택된 운동 목표: <span id="selected-goal" class="selected-goal">없음</span></div></div>'
	},
	6 : {
		title: '님에게 해당하는 사항들을 모두 골라주세요.',
		subtitle : '몸에 맞지 않는 성분을 걸러내는 데 필요해요.\n해당하는 항목을 모두 골라주세요.',
		alert: '신체 정보를 알려주세요.',
		inner : '<div class="phy-container">'
						+'<div><label class="phy-label"><input class="phy-input" type="checkbox" hidden name="phy" value="0">유당불내증 또는 잦은 소화불량</label>'
            +'<label class="phy-label"><input class="phy-input" type="checkbox" hidden name="phy" value="1">우유 단백질 알레르기</label>'
            +'<label class="phy-label"><input class="phy-input" type="checkbox" hidden name="phy" value="2">대두 알레르기</label>'
            +'<label class="phy-label"><input class="phy-input" type="checkbox" hidden name="phy" value="3">달걀 단백질 알레르기</label>'
						+'<label class="phy-label"><input class="phy-input" type="checkbox" hidden name="phy" value="4">신장 문제</label>'
						+'<label class="phy-label"><input class="phy-input" type="checkbox" hidden name="phy" value="5">카페인 과민 또는 불면증</label>'
						+'<label class="phy-label"><input class="phy-input" type="checkbox" hidden name="phy" value="6">탈수 또는 변비</label>'
						+'<label class="phy-label"><input class="phy-input" type="checkbox" hidden name="phy" value="7">채식주의(비건)</label></div>'
						+'<div class="phy-result">선택된 신체 정보: <span id="selected-phy" class="selected-phy">없음</span></div></div>'
	},
	7: {
		title: '님이 선호하는 맛을 모두 골라주세요.',
		subtitle : '선호하는 맛을 기반으로 질리지 않게 서비스해 드려요.',
		alert: '원하시는 맛은 하나 이상 선택해야 해요.',
		inner : '<div class="flavor-container">'
						+'<div><label class="flavor-label"><input class="flavor-input" type="checkbox" hidden name="초콜릿" value="0">초콜릿</label>'
            +'<label class="flavor-label"><input class="flavor-input" type="checkbox" hidden name="딸기" value="1">딸기</label>'
            +'<label class="flavor-label"><input class="flavor-input" type="checkbox" hidden name="바닐라" value="2">바닐라</label>'
            +'<label class="flavor-label"><input class="flavor-input" type="checkbox" hidden name="바나나" value="3">바나나</label>'
						+'<label class="flavor-label"><input class="flavor-input" type="checkbox" hidden name="커피" value="4">커피</label>'
						+'<label class="flavor-label"><input class="flavor-input" type="checkbox" hidden name="쿠키 & 크림" value="5">쿠키 & 크림</label>'
						+'<label class="flavor-label"><input class="flavor-input" type="checkbox" hidden name="민트 & 초콜릿" value="6">민트 & 초콜릿</label></div>'
						+'<div class="flavor-result">선택한 맛: <span id="selected-flavor" class="selected-flavor">없음</span></div></div>'
	},
}

const user = {
	name: "", // idx 0
	weight: "", // idx 1
	height: "", // idx 1
	gender: "", // idx 2
	age: "", // idx 3
	exer_intensity: "", // idx 4
	exer_goal: "", // idx 5
	phy_char: [0, 0, 0, 0, 0, 0, 0, 0], // idx 6
	// lactose intol / milk al / soy al / egg al / kidney prob / caffe toxic / dehyd or consti / vegan
	flavor: [0, 0, 0, 0, 0, 0, 0], // idx 7
	// choco / strawberry / vanila / banana / coffee / cookie & cream / mintchoco
}

// start page = count;
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
		} else {
			alertContainer.classList.add('show');
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
					selectedValue.textContent = ratingInput.value + '단계';
			});
		} else {
			alertContainer.classList.add('show');
		}
	}	else if (count === 4) {
		user.exer_intensity = document.getElementById('selected-value').textContent;
		count++;
		setNextQuestion();
		
		const radioButtons = document.querySelectorAll('.goal-input');
		const selectedGoal = document.getElementById('selected-goal');

		radioButtons.forEach(radio => {
			radio.addEventListener('change', (event) => {
				const input = event.currentTarget;
				const label = input.parentNode;
				selectedGoal.textContent = radio.value;
				console.log(input.value);
				radioButtons.forEach((r) => {
					r.parentNode.classList.remove('selected');
				});
				if (input.checked) label.classList.add('selected');
			});
		});
	} else if (count === 5) {
		user.exer_goal = document.getElementById('selected-goal').textContent;
		count ++;
		
		setNextQuestion();
		
		document.querySelectorAll('.phy-label').forEach((label) => {
			label.addEventListener('click', (event) => {
				const label = event.currentTarget;
				const checkbox = label.firstChild;
				const selected = document.getElementById('selected-phy');
				
				if (checkbox.checked) {
					user.phy_char[checkbox.value] = 0;
					checkbox.checked = false;
				} else if (!checkbox.checked){
					user.phy_char[checkbox.value] = 1;
					checkbox.checked = true;
				}
    		label.classList.toggle("active", checkbox.checked);
				
				selected.innerText = "";
				
				for (let i=0;i < 8;i++) {
					if (user.phy_char[i] === 1) {
						if (selected.innerText === "") {
							selected.innerText += label.parentNode.childNodes[i].innerText;
						} else {
							selected.innerText += (', ' + label.parentNode.childNodes[i].innerText);
						}
					}
				}
			});
		});
	} else if (count === 6) {
		count ++;
		
		setNextQuestion();
		
		btnNext.innerText = "AI 추천 받기";
		
		document.querySelectorAll('.flavor-label').forEach((label) => {
			label.addEventListener('click', (event) => {
				const label = event.currentTarget;
				const checkbox = label.firstChild;
				const selected = document.getElementById('selected-flavor');
				
				if (checkbox.checked) {
					user.flavor[checkbox.value] = 0;
					checkbox.checked = false;
				} else if (!checkbox.checked){
					user.flavor[checkbox.value] = 1;
					checkbox.checked = true;
				}
    		label.classList.toggle("active", checkbox.checked);
				
				selected.innerText = "";
				
				for (let i=0;i < 7;i++) {
					if (user.flavor[i] === 1) {
						if (selected.innerText === "") {
							selected.innerText += label.parentNode.childNodes[i].innerText;
						} else {
							selected.innerText += (', ' + label.parentNode.childNodes[i].innerText);
						}
					}
				}
			});
		});
	} else if (count === 7) {
		if (user.flavor.includes(1)) {
			const loadingPopup = document.getElementById('loadingPopup');
			
			alertContainer.classList.remove('show');
			loadingPopup.style.display = 'flex';
			count++;
			
			// AI 추천 시간 3s
			setTimeout(() => {
      loadingPopup.style.display = 'none';
    }, 3000);
		} else {
			alertContainer.classList.add('show');
		}
	}
	
});

setNextQuestion();