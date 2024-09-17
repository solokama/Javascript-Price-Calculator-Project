// JavaScript for calculating the price
function calculatePrice() {
    const academicLevel = document.getElementById('academicLevel').value;
    const pages = parseInt(document.getElementById('pages').value);
  
    let pricePerPage;
  
    // Determine price per page based on academic level
    switch (academicLevel) {
      case 'highschool':
        pricePerPage = 9.50;
        break;
      case 'college':
        pricePerPage = 12;
        break;
      case 'undergraduate':
        pricePerPage = 14;
        break;
      case 'masters':
        pricePerPage = 16;
        break;
      case 'phd':
        pricePerPage = 18;
        break;

      case 'Online Research':
       pricePerPage = 10;
       break;
       case 'Proofreading and Editing':
        pricePerPage = 10;
        break;
       case 'Formatting':
        pricePerPage = 14;
        break;
       case 'Humanizing':
        pricePerPage = 90;
        break;
       case 'AI Check Reports':
        pricePerPage = 5;
        break;
       case 'Similarity Check Reports':
        pricePerPage = 5;
        break;


      default:
        pricePerPage = 10;
    }
  
    // Calculate total price
    const totalPrice = pricePerPage * pages;
  
    // Display the result
    document.getElementById('result').innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
  }
  