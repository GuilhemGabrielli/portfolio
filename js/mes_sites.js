var mesSites = []

var requestURL = 'https://raw.githubusercontent.com/GuilhemGabrielli/portfolio/main/json/mes_sites.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    mesSites = request.response;
    loadSites();
}

function loadSites() {
    for (let i=0; i<mesSites.length; i++) {
        const works = document.getElementById('works')
        const work = document.createElement("div")
        work.className = "work"

        const aWork = document.createElement('a')
        aWork.className = "a-work"
        aWork.href = mesSites[i]["lien"]

        const imgWork = document.createElement('img')
        imgWork.className = "img-work"
        imgWork.src = mesSites[i]["image"]
        imgWork.alt = mesSites[i]["altImage"]

        aWork.appendChild(imgWork)
        work.appendChild(aWork)

        addInfo(work, mesSites[i])

        works.appendChild(work)
    }
}

function addInfo(work, site) {
    const workInfo = document.createElement('div')
    workInfo.className = "work-info"

    const workName = document.createElement('div')
    workName.className = "div-work-name"

    const h3 = document.createElement('h3')
    h3.innerText = site["titre"]

    workName.appendChild(h3)

    const workDescription = document.createElement('div')
    workDescription.className = "div-work-descrip"

    const p = document.createElement('p')
    p.className = "work-descrip"
    p.innerText = site["description"]

    workDescription.appendChild(p)
    workInfo.appendChild(workName)
    workInfo.appendChild(workDescription)

    work.appendChild(workInfo)
}



  