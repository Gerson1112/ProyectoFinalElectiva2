const btnReports = document.getElementById('reports');
const btnClose = document.getElementById('close');
const reportsContainer = document.getElementById('table-container');

console.log(btnClose);
console.log(btnReports);

btnReports.addEventListener('click', () =>{
    reportsContainer.classList.remove('hidden');
});

btnClose.addEventListener('click', () =>{
    reportsContainer.classList.add('hidden');
});