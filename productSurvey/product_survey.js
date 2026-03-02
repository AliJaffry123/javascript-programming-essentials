let username , age, email , job , designation , productType , feedback;

function submitFeedback(){
    username = document.getElementById('name').value;
    age = document.getElementById('age').value;
    email = document.getElementById('email').value;
    job = document.getElementById('job').value;
    designation = document.getElementById('designation').value;
    productType = document.getElementById('productType').value;
    feedback = document.getElementById('feedbackText').value;

    alert('Thank you for your valuable feedback')

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';

}

const submitButton = document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
      submitFeedback();
    }
  });
 
