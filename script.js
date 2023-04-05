function calculate() {
  // get input values
  const PT = Number(document.getElementById("PT").value);
  const OOP = Number(document.getElementById("OOP").value);
  const Networking = Number(document.getElementById("Networking").value);
  const WST = Number(document.getElementById("WST").value);
  const DSA = Number(document.getElementById("DSA").value);
  const IM = Number(document.getElementById("IM").value);
  const SIA = Number(document.getElementById("SIA").value);

  // compute GWA
  const total = PT + OOP + Networking + WST + DSA + IM + SIA;
  const gwa = total / 7;

  // compute grade and descriptor
  let grade = "";
  let descriptor = "";
  if (gwa < 75) {
    grade = "Below 75";
    descriptor = "Did not meet expectations";
  } else if (gwa >= 75 && gwa <= 79) {
    grade = "75-79";
    descriptor = "Fairly Satisfactory";
  } else if (gwa >= 80 && gwa <= 84) {
    grade = "80-84";
    descriptor = "Satisfactory";
  } else if (gwa >= 85 && gwa <= 89) {
    grade = "85-89";
    descriptor = "Very Satisfactory";
  } else if (gwa >= 90 && gwa <= 100) {
    grade = "90-100";
    descriptor = "Outstanding";
  } else {
    grade = "Above 100";
    descriptor = "Does not exist";
  }

  // set output values
  document.getElementById("ave").textContent = gwa.toFixed(2);
  document.getElementById("Descriptor").textContent = descriptor;
  document.getElementById("remark").textContent = (grade === "Below 75") ? "Failed" : (grade === "Above 100") ? "Does not exist" : "Passed";
}




































    
    
    
    

  


  