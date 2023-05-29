let tableData=[{heading:'Udhayasooriyan Skill Set'},
{course:'Course',percentage:'Percentage of Knowledge'},
{course:'HTML', percentage:'95%'},
{course:'CSS', percentage:'95%'},
{course:'JavaScript', percentage:'80%'},
{course:'Bootstrap', percentage:'50%'},
{course:'SAAS', percentage:'10%'}];
/************/
// div creation
let div=document.createElement('div');
div.classList.add('container','mt-4');
document.body.prepend(div);
// table creation
let tableDOM=document.createElement('table');
tableDOM.id='table';
tableDOM.className=`table table-info table-striped table-hover text-center`;
div.appendChild(tableDOM);
let tableText='';
tableData.forEach((table)=>{
    if(table.heading){
      // let heading=document.createElement('caption');
      // heading.textContent=table.heading;
      // heading.className='text-decoration-underline text-dark';
      // heading.style.fontWeight='600';
      // tableDOM.appendChild(heading);
      tableText+=`  <caption
      style="font-weight: 600"
      class="text-decoration-underline text-light"
    >
      ${table.heading}
    </caption>`
    }else{
      // let tr=document.createElement('tr');
      // let th=document.createElement('th');
      // let td=document.createElement('td');
      // th.textContent=table.course;
      // td.textContent=table.percentage;
      // tr.append(th,td);
      // tableDOM.appendChild(tr);
      tableText+=`  <tr>
      <th>${table.course}</th>
      <td>${table.percentage}</td>
    </tr>`
    }
})
tableDOM.innerHTML=tableText;