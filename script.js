let companies = [];
var answerSet = {
	"Teilnehmer": "",
	"LanaLabs": "",
	"Userlane": "",
	"iWelcome": "",
	"Agorize": "",
	"LeanIX": "",
	"Contiamo": "",
	"Acellere": "",
	"OneDot": "",
	"CrossEngage": "",
	"Innoactive": "",
	"NoMagic": "",
	"Chronext": "",
	"Statice": ""
}

// HTML Elements
const moreButtons = document.querySelectorAll('.more');
const addButtons = document.querySelectorAll('.add');
const close = document.getElementById('close');
const list = document.getElementById('list');
const nameInput = document.querySelector('nameInput');
const companiesSection = document.querySelector('.companies');
const loading = document.querySelector('.loading');
const thanks = document.querySelector('.thanks');
const slide = document.querySelector('#slide');
const title = document.querySelector('.modal-title');

// actions
function toggleModal(elem){
	const modal = document.getElementById('modal-id');
	if(modal.classList.length > 1){
		modal.classList.remove('active')
	} else {
		const company = elem.dataset.value;
		const file = `./assets/details/${company}.PNG`;
		slide.src = file;
		title.textContent = company;
		// console.log('Open ', company)
		modal.classList.add('active')
	}
}

function toggleList(){
	const modal = document.getElementById('list');
	if(modal.classList.length > 1){
		modal.classList.remove('show')
	} else {
		modal.classList.add('show')
	}
}

function alert_custom(){
	const alert = document.querySelector('.alert');
	// console.log('Alert: ', alert.classList)
	if(alert.classList.length > 1){
		alert.classList.remove('visible')
	} else {
		alert.classList.add('visible')
		setTimeout(() => {
			loading.classList.add('hide')
			thanks.classList.add('show')
			setTimeout(() => {
				window.location.href = 'https://www.capnamic.com';
			},2500)
		},3000)
	}
}

function checkList(){
	const modal = document.getElementById('list');
	if(companies.length > 0){
		modal.classList.add('show')
	} else {
		modal.classList.remove('show')
	}
}

function addCompany(elem){
	// push into data 
	const company = elem.dataset.value;
	companies.push(company)
	// add to HTML
	const htmlList = list.childNodes[3];
	const newLi = document.createElement('li');
	newLi.setAttribute('class', 'companyItem')
	const newEntity = `${company}<span><i class="icon icon-cross" onclick="removeCompany(this)"></i></span>`
	newLi.innerHTML = newEntity;
	htmlList.appendChild(newLi)
	// console.log('New List: ', htmlList)
	checkList()
}

function scrollIntro(){
    var element = document.getElementById('intro');
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

function removeCompany(elem){
	// console.log('Remove: ', elem.parentElement.parentElement.textContent)
	const companyItem = elem.parentElement.parentElement;
	// console.log('Item: ', companyItem)
	companyItem.remove()
	const i = companies.indexOf('LanaLabs')
	companies.splice(i,1)
	// console.log('List ', companies)
	checkList()
}

function sendAnswer(){
	console.log('Companies: ', companies)
	for(let comp in answerSet){
		const i = companies.indexOf(comp);
		console.log('Found that check:', i)
		if(i > -1) answerSet[comp] = "x"
	}
	console.log('Answers', answerSet)
	// check for name 
	if(answerSet.Teilnehmer){
		const url = "https://hooks.zapier.com/hooks/catch/3341374/aikm1l/";
		const method = "POST";
		try {
		    var xhr = new XMLHttpRequest();
		    xhr.open(method, url);
		    xhr.send(JSON.stringify(answerSet));
		    alert_custom()
		    // reset
		    answerSet = {
				"Teilnehmer": "",
				"LanaLabs": "",
				"Userlane": "",
				"iWelcome": "",
				"Agorize": "",
				"LeanIX": "",
				"Contiamo": "",
				"Acellere": "",
				"OneDot": "",
				"CrossEngage": "",
				"Innoactive": "",
				"NoMagic": "",
				"Chronext": ""
			}
			companies = [];
			checkList();
		  } catch(e) {
		    console.error(e);
		    alert('An Error Ocurred')
		  }
	} else {
		alert('Bitte gib einen Namen ein.')
	}
}

function start(){
	console.log('Element: ', companiesSection)
	companiesSection.scrollIntoView({behavior: 'smooth'});
	const val = document.querySelector('#nameInput').value
	answerSet.Teilnehmer = val;
}

// Event Listeners
close.addEventListener('click',() => {
	toggleModal()
})

moreButtons.forEach(button => {
	button.addEventListener('click', function(){
		toggleModal(button);
	})
})

addButtons.forEach(button => {
	button.addEventListener('click', function(){
		addCompany(button);
	})
})


