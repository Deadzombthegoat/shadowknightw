
document.getElementById('serverForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the values from the form
    const serverName = document.getElementById('serverName').value;
    const serverIP = document.getElementById('serverIP').value;

    // Create a new list item for the server
    const li = document.createElement('li');
    li.textContent = `${serverName} - IP: ${serverIP}`;

    // Append the new server to the server list
    document.getElementById('serverList').appendChild(li);

    // Clear the form
    document.getElementById('serverForm').reset();
});
