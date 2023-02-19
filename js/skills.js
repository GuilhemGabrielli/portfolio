var mesSkills = []

var requestURLSkills = 'https://raw.githubusercontent.com/GuilhemGabrielli/portfolio/dev/json/skills.json';

var requestSkills = new XMLHttpRequest();

requestSkills.open('GET', requestURLSkills);

requestSkills.responseType = 'json';
requestSkills.send();

requestSkills.onload = function() {
    mesSkills = requestSkills.response;
    console.log(mesSkills);
    loadSkills();
}


function loadSkills() {
    const marqueeSkills = document.getElementById('scroll-skills')
    for (let i=0; i<mesSkills.length; i++) {
        const newSkill = document.createElement('img')
        newSkill.src = mesSkills[i]["URLImage"]
        newSkill.alt = mesSkills[i]["altImage"]
        newSkill.title = mesSkills[i]["altImage"].replace('Logo ', '')
        newSkill.className = "img-skills"
        marqueeSkills.appendChild(newSkill)
    }
}