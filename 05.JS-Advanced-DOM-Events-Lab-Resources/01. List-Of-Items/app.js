function addItem() {
    // get referances to the input and output
    // read input value
    //create new LI el and set its text content
    //append the new element to the output list
    // clear the input field

    const input = document.getElementById('newItemText');
    const list = document.getElementById('items');

    const text = input.value;

    if (!text) {
        return;
    }

    const newItem = document.createElement('li');
    newItem.textContent = text;

    list.appendChild(newItem);

    input.value = '';
}