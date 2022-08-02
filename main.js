let table = document.querySelector('.table');
// document.addEventListener('DOMContentLoaded');
let n = 200;
let m = 300;

for (let i = 0; i < n; i++) { 
    let tr = document.createElement('tr');
    for (let j = 0; j < m; j++) { 
        let td = document.createElement('td');
        // th.textContent = '#';
        td.style.backgroundColor = 'black';
        td.style.margin = '0px';
        td.style.padding = '0px';

        tr.appendChild(td); 
    }
    table.appendChild(tr);
}

console.log(n)