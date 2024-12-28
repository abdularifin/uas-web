// TODO Fungsi untuk menangani pencarian barang berdasarkan kode
const search = (e) => {
  e.preventDefault();

  const searchValue = document
    .getElementById("kode_barang")
    .value.trim()
    .toUpperCase();

  const namaBarangField = document.getElementById("nama_barang");
  const hargaBarangField = document.getElementById("harga_barang");

  if (searchValue === "A001") {
    namaBarangField.value = "Televisi Samsung 50 inch";
    hargaBarangField.value = "5000000";
  } else if (searchValue === "A002") {
    namaBarangField.value = "VCD Player Sony";
    hargaBarangField.value = "750000";
  } else if (searchValue === "A003") {
    namaBarangField.value = "Compor Mini";
    hargaBarangField.value = "2300000";
  } else {
    alert("Barang tidak ditemukan");
  }
};
// TODO Menambahkan event listener pada form
document.getElementById("searchForm").addEventListener("submit", search);

// TODO Fungsi untuk menghitung total harga, diskon, dan total bayar
const calculate = (e) => {
  e.preventDefault();
  if (
    document.getElementById("jumlah_barang").value === "" ||
    document.getElementById("kode_barang").value === ""
  ) {
    alert("masukkan kode barang terlebih dahulu");
    return;
  }
  const total =
    parseInt(document.getElementById("jumlah_barang").value) *
    parseInt(document.getElementById("harga_barang").value);
  document.getElementById("total_harga").value = total;

  const jumlah_barang = parseInt(
    document.getElementById("jumlah_barang").value
  );

  const diskonField = document.getElementById("diskon");
  const total_bayar = document.getElementById("total_bayar");

  if (jumlah_barang < 10) {
    diskonField.value = ((10 / 100) * total).toString();
    total_bayar.value = (total - parseInt(diskonField.value)).toString();
  } else if (jumlah_barang >= 10 && jumlah_barang <= 15) {
    diskonField.value = ((15 / 100) * total).toString();
    total_bayar.value = (total - parseInt(diskonField.value)).toString();
  } else {
    diskonField.value = ((20 / 100) * total).toString();
    total_bayar.value = (total - parseInt(diskonField.value)).toString();
  }
};

// TODO Menambahkan event listener pada form
document.getElementById("calculateForm").addEventListener("submit", calculate);

const cetak = () => {
  if (
    document.getElementById("kode_barang").value === "" ||
    document.getElementById("jumlah_barang").value === ""
  ) {
    alert("Masukkan kode barang dan jumlah barang terlebih dahulu");
    return;
  }
  let hargaBarang = document.getElementById("harga_barang").value;
  let totalHarga = document.getElementById("total_harga").value;
  let totalBayar = document.getElementById("total_bayar").value;

  document.getElementById("kode_barang_nota").textContent =
    document.getElementById("kode_barang").value;
  document.getElementById("nama_barang_nota").textContent =
    document.getElementById("nama_barang").value;
  document.getElementById("harga_barang_nota").textContent =
    formatRupiah(hargaBarang);
  document.getElementById("jumlah_barang_nota").textContent =
    document.getElementById("jumlah_barang").value;
  document.getElementById("total_harga_nota").textContent =
    formatRupiah(totalHarga);
  document.getElementById("diskon_nota").textContent = formatRupiah(
    document.getElementById("diskon").value
  );
  document.getElementById("total_bayar_nota").textContent =
    formatRupiah(totalBayar);

  window.print();
};

const formatRupiah = (angka) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(angka);
};
