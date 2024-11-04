function deleteByEmail() {
    //select input
    //read input value
    //select all table rows
    //find all matching rows and remove them
    //clear the input field
    //case when nothing is written ( happy path)
    const input = document.querySelector('[name ="email"]');
    const pattern = input.value.toLocaleUpperCase();
    const output = document.getElementById('result');

    if(!pattern) {
        output.textContent = "Not found.";
        return;
    }

    const rows = document.querySelectorAll('#customers tbody tr');
    let found = false;
    for (let i = 0; i< rows.length; i++){
        const currentRow = rows[i];
        if (currentRow.textContent.toLocaleUpperCase().includes(pattern)) {
            currentRow.remove();
            found = true;
        }
    }

    input.value = '';
    if (found){
        output.textContent = 'Deleted.';
    } else {
        output.textContent = 'Not found.';
    }
}