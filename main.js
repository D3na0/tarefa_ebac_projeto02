document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
    const tableBody = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
  
    const nameCell = newRow.insertCell();
    nameCell.textContent = name;
  
    const phoneCell = newRow.insertCell();
    phoneCell.textContent = phone;
  
    document.getElementById('contactForm').reset();

    })

    