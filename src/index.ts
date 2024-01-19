
function fillTable(users) {
 
  const table = document.getElementById('user-table');

  const tableHead = document.createElement('thead');
  const tableHeadRow = document.createElement('tr');
  const tableHeadCells = ['ID', 'Name', 'Username', 'Email', 'Phone', 'Website'];
  tableHeadCells.forEach(cell => {
    const th = document.createElement('th');
    th.textContent = cell;
    tableHeadRow.appendChild(th);
  });
  tableHead.appendChild(tableHeadRow);

 
  const tableBody = document.createElement('tbody');
  users.forEach(user => {
    const tableRow = document.createElement('tr');
    const tableDataCells = [user.id, user.name, user.username, user.email, user.phone, user.website];
    tableDataCells.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tableRow.appendChild(td);
    });
    tableBody.appendChild(tableRow);
  });

  table.appendChild(tableHead);
  table.appendChild(tableBody);
}
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    fillTable(users);
    console.log(users);
  });