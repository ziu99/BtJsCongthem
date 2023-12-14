function tinhAll() {
  let tenPhim = document.getElementById("tenPhim").value;

  let soVeNgLon = parseInt( document.getElementById("soVeNgLon").value);

  let giaVeNgLon = document.getElementById("giaVeNgLon").value;

  let soVeTrEm =parseInt( document.getElementById("soVeTrEm").value);

  let giaVeTrEm = document.getElementById("giaVeTrEm").value;

  let soNguyenGop = document.getElementById("soNguyenGop").value;

  let soVeBan =soVeTrEm + soVeNgLon;

  let doanhThu = soVeNgLon * giaVeNgLon + soVeTrEm * giaVeTrEm;
  console.log("doanh thu là ", doanhThu);

  let tuThien = doanhThu * ( soNguyenGop/100) ;
  console.log("tiền từ  thiện ", tuThien);

  let tongThu = doanhThu - tuThien;
  console.log("tổng thu : ", tongThu);

  document.getElementById("ketQuaTong").innerHTML =
    "<br> Tên phim : " + tenPhim + "<br> Số vé đã bán : " + soVeBan + "<br> Doanh thu : " + doanhThu + "<br> Trích % từ thiện : " + soNguyenGop + "<br> Tổng tiền trích từ thiện : " + tuThien +"<br> Tổng thu được sau khi trừ : " + tongThu ;
}
