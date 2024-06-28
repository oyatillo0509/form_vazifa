document.getElementById("sign").addEventListener("submit", function (e) {
  e.preventDefault();

  const f_name = document.getElementById("firstName").value;
  const l_name = document.getElementById("lastName").value;
  const p_num = document.getElementById("mobileNumber").value;
  const email = document.getElementById("email").value;
  const table = document
    .getElementById("t_table")
    .getElementsByTagName("tbody")[0];
  const new_t = table.insertRow();

  const f_name_td = document.createElement("td");
  f_name_td.innerHTML = f_name;
  new_t.appendChild(f_name_td);

  const l_name_td = document.createElement("td");
  l_name_td.innerHTML = l_name;
  new_t.appendChild(l_name_td);

  const p_num_td = document.createElement("td");
  p_num_td.innerHTML = p_num;
  new_t.appendChild(p_num_td);

  const email_td = document.createElement("td");
  email_td.innerHTML = email;
  new_t.appendChild(email_td);
});
