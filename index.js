let number = 1;

function tambahdata() {
  const namas = document.getElementById("nama").value;
  const nimo = document.getElementById("nim").value;
  const tanggalar = document.getElementById("tanggal").value;
  const Alamatt = document.getElementById("alamat").value;

  if (namas && nimo && tanggalar && tanggalar) {
    const table = document
      .getElementById("data-table")
      .getElementsByTagName("tbody")[0];
    const newrow = table.insertRow(table.rows.length);

    const cel1 = newrow.insertCell(0);
    const cel2 = newrow.insertCell(1);
    const cel3 = newrow.insertCell(2);
    const cel4 = newrow.insertCell(3);

    cel1.innerHTML = namas;
    cel2.innerHTML = nimo;
    cel3.innerHTML = tanggalar;
    cel4.innerHTML = Alamatt;
  }
}
