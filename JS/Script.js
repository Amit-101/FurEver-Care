//Index
document.getElementById("userForm").addEventListener("submit", function(event) {
      event.preventDefault(); 
      
      const selected = document.querySelector('input[name="category"]:checked');
      
      if (!selected) {
        alert("Please select a category.");
        return;
      }
      
      // Redirect depending on choice
      if (selected.value === "Pet Owner") {
        window.location.href = "addNewPet.html"; 
      } else if (selected.value === "Veterinarian") {
        window.location.href = "vet.html"; 
      } else if (selected.value === "Shelter") {
        window.location.href = "shelter.html"; 
      }
    });

    //This navigates you to the dashboard
  document.getElementById("petForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop default form submission
    
    if (this.checkValidity()) {
      // ✅ If form is valid, go to another page
      window.location.href = "dashboard.html";
    } else {
      // ❌ If form is invalid, show browser’s validation
      this.reportValidity();
    }
  });

  //This navigates you to the veterenarian page

    document.getElementById("vetForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop default form submission
    
    if (this.checkValidity()) {
      // ✅ If form is valid, go to another page
      console.log("passed")
      window.location.href = "vetenarian_page.html";
    } else {
      // ❌ If form is invalid, show browser’s validation
      this.reportValidity();
    }
  });