function burger() {
    navbar = document.querySelector(".navbar-ul");
    if (navbar.style.display !== "none") {
        //navbar.style.height == "0px";
        navbar.style.display = "none";
        navbar.style.transition = "0.5s";
    }
    else {
        navbar.style.transition = "0.5s";
        //navbar.style.height == "90%";
        navbar.style.display = "block";
    }
}

function darkmode() {
    body = document.querySelector(".body");
    whole_navbar = document.querySelector(".whole-navbar");
    a = document.querySelector(".navbar_ul");
    // afternav = document.querySelector(".after_nav_ul_li");
    if (body.style.background !== "white") {
        body.style.background = "white";
        body.style.transition = "0.5s";
        whole_navbar.style.background = "white";
        // whole_navbar.style.boxShadow = "box-shadow: 0px 0px 0px 0px #111111";
    }
    else {
        body.style.transition = "0.5s";
        body.style.background = "black";
        whole_navbar.style.background = "rgb(34 34 34)";
        a.style.color = "white";
        whole_navbar.style.boxShadow = "box-shadow: 0px 15px 20px -15px black";
        // afternav.style.boxShadow = "5px 5px 20px rgba(0, 0, 0, 0)";
    }
}
function yellowmode() {
    body = document.querySelector(".body");
    whole_navbar = document.querySelector(".whole-navbar");

    if (body.style.background !== "white") {
        body.style.background = "white";
        body.style.transition = "0.5s";
        whole_navbar.style.background = "white";
        // whole_navbar.style.boxShadow = "box-shadow: 0px 0px 0px 0px #111111";
    }
    else {
        body.style.transition = "0.5s";
        body.style.background = "#DDE6ED";
        whole_navbar.style.background = "#DDE6ED";
        // whole_navbar.style.color = "black";
        whole_navbar.style.boxShadow = "box-shadow: 0px 15px 20px -15px black";
        // afternav.style.boxShadow = "5px 5px 20px rgba(0, 0, 0, 0)";
    }
}



window.addEventListener("load", function () {
    // Hide the preloader
    document.querySelector('.preloader').style.display = 'none';

    // Display the main content
    document.querySelector('.content').style.display = 'block';
});

function submitForm() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      var formData = {
        name: name,
        email: email,
        message: message
      };

      fetch('https://script.google.com/macros/s/AKfycbxuVMXeoF9nl3bZPFN7MTgadbAb4aTOX4vzvVz0t6LOa6AqnV-Yiz7-y8ZBV8-R5TCfOg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (response.ok) {
          console.log('Form submitted successfully');
          // Add any success handling code here
        } else {
          console.error('Error submitting form');
          // Add any error handling code here
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }