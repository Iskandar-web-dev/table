const data = []


let allUser = []
let oldSchool = []
let newSchool = []

let form = document.forms.login
let table = document.querySelector('table')

let section = document.querySelector('.tables')
let ageTable = section.querySelector('table')

let ageShow = document.querySelector('.ageShow')

let btn = document.querySelector('.show')
let trs = document.querySelector('tr')
let tbody = document.querySelector('tbody')



function nameGenerate(arr) {
    tbody.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr')
        let tdnum = document.createElement('td')
        let tdName = document.createElement('td')
        let tdyear = document.createElement('td')
        let del = document.createElement('td')
        
        let delImg = document.createElement('img')

        delImg.src = './img/icon.png'

        delImg.classList.add('dell')
        tdnum.innerText = i + 1
        tdName.innerText = arr[i].name
        tdyear.innerText = arr[i].year
        tr.style.color = 'black'
        del.append(delImg)
        tr.append(tdnum, tdName, tdyear, del)
        tbody.append(tr)
        delImg.onclick = () => {
            tr.style.display = 'none'
        }
    }
    btn.onclick = (event) => {
        event.preventDefault();
        let nameInp = document.querySelector('#name').value
        let ageInp = document.querySelector('#age').value

        let user = [
            {
                id: 1,
                name: nameInp,
                year: new Date().getFullYear() - ageInp,
            }
        ]
        user.forEach(i => {
            data.push(i)
            allUser.push(i)
            if (i.year < 18) {
                newSchool.push(i)
                console.log(allUser);
                console.log(oldSchool, 'old');
                console.log(newSchool, 'young');
            } else if (i.year > 25) {
                oldSchool.push(i)
                console.log(allUser);
                console.log(oldSchool, 'old');
                console.log(newSchool, 'young');
            }

        })

        nameGenerate(data.sort((x, y) => x.year - y.year))
    }
    return
}
nameGenerate(data)

ageShow.onclick = (event) => {
    event.preventDefault()
    reload(allUser)
}

function reload(data) {
    for (let item of data) {
        console.log(item);
    }
}