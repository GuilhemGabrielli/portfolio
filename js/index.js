// document.getElementById('submit').addEventListener(
//     'click',
//     function (event) {
//         event.preventDefault()
//         if (document.getElementById('message-mail').value == "test") {
//             window.location.href="https://www.google.com"
//         }
//     }
// )







var mesSkills = []

var requestURLSkills = 'https://raw.githubusercontent.com/GuilhemGabrielli/portfolio/main/json/skills.json';

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
    const marqueeSkills = document.getElementById('marquee-skills')
    for (let i=0; i<mesSkills.length; i++) {
        const newSkill = document.createElement('img')
        newSkill.src = mesSkills[i]["URLImage"]
        newSkill.alt = mesSkills[i]["altImage"]
        newSkill.className = "img-skills"
        marqueeSkills.appendChild(newSkill)
    }
}