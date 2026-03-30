function trackPackage(){
  const code = document.getElementById("trackingInput").value.trim();

  fetch('tracking.json')
    .then(res => res.json())
    .then(data => {
      const resultDiv = document.getElementById("result");

      if(data[code]){
        const info = data[code];
        resultDiv.innerHTML = `
          <h3>Status: ${info.status}</h3>
          <p><strong>Location:</strong> ${info.location}</p>
          <p><strong>Updated:</strong> ${info.date}</p>
        `;
      } else {
        resultDiv.innerHTML = "<p style='color:red;'>Tracking number not found.</p>";
      }
    });
}
