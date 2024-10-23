const forminfo=document.getElementById("form");

forminfo.addEventListener('submit',function(event){
    event.preventDefault();

    const rows=document.getElementById('row').value;
    const cols=document.getElementById('col').value;
    const tableContainer=document.getElementById('table');
    const table=document.createElement('table');
    for(let i=0;i<rows;i++){
        const tr=document.createElement('tr');
        for(let j=0;j<cols;j++){
            const td=document.createElement('td');
            td.textContent='explorin';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
});




