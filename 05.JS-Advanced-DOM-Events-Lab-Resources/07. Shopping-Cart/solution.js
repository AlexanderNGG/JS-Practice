function solve() {
   const cart = new Set();  // Set to store unique product names
   let totalPrice = 0;      // Variable to keep track of the total price
   const outputArea = document.querySelector('textarea'); // Textarea to show the cart contents
   const addButtons = Array.from(document.querySelectorAll('.add-product')); // "Add" buttons
   const checkoutButton = document.querySelector('.checkout'); // "Checkout" button

   // Add event listeners for each "Add" button
   addButtons.forEach(button => {
       button.addEventListener('click', () => {
           const productElement = button.parentElement.parentElement;
           const productName = productElement.querySelector('.product-title').textContent;
           const productPrice = parseFloat(productElement.querySelector('.product-line-price').textContent);

           cart.add(productName);  // Add the product to the Set (only unique names)
           totalPrice += productPrice;  // Add product price to total
           outputArea.value += `Added ${productName} for $${productPrice.toFixed(2)} to the cart.\n`;  // Append product details to textarea
       });
   });

   // Add event listener for the "Checkout" button
   checkoutButton.addEventListener('click', () => {
       // Generate the list of unique products
       const productList = Array.from(cart).join(', ');
       
       // Append the total purchase information to the textarea
       outputArea.value += `You bought ${productList} for $${totalPrice.toFixed(2)}.\n`;
       
       // Disable all buttons after checkout
       addButtons.forEach(button => button.disabled = true);
       checkoutButton.disabled = true;
   });
}