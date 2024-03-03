          // Navbar 

  document.querySelector('.navOpenBtn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
  });

  document.querySelector('.navCloseBtn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.remove('show');
  });

  document.getElementById('searchIcon').addEventListener('click', function() {
    document.querySelector('.search-box').classList.toggle('active');
  });

             //   End navbar

             let counterValue = 1; // Initial counter value

             function updateCounter() {
                 // Update the content of the counter element
                 document.getElementById('counter').innerText = counterValue;
             }
     
             function increment() {
                 // Increase the counter value
                 counterValue++;
                 updateCounter();
             }
     
             function decrement() {
                 // Decrease the counter value, but not below 1
                 if (counterValue > 1) {
                     counterValue--;
                     updateCounter();
                 }
             }

             
// =================

document.addEventListener('DOMContentLoaded', function() {
  let counterValue1 = 1; // Initial counter value
  const counterElement1 = document.getElementById('counter1');

  function updateCounter1() {
      // Update the content of the counter element
      counterElement1.innerText = counterValue1;
  }

  function increment1() {
      // Increase the counter value
      counterValue1++;
      updateCounter1();
  }

  function decrement1() {
      // Decrease the counter value, but not below 1
      if (counterValue1 > 1) {
          counterValue1--;
          updateCounter1();
      }
  }

  // Initial update
  updateCounter1();
});
             