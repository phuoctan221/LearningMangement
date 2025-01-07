document.addEventListener("DOMContentLoaded", function () {
  var arr = [
    {
      Id: "01",
      Name: "Nguyễn Văn A",
      Birthday: "17/10/2005",
      ChuyenCan: 10,
      BaiTapVeNha: 8,
      ThuongKy: 9,
      Giuaky: 7,
      Cuoiky: 10,
    },
    {
      Id: "02",
      Name: "Nguyễn Văn B",
      Birthday: "15/05/2004",
      ChuyenCan: 9,
      BaiTapVeNha: 7,
      ThuongKy: 8,
      Giuaky: 6,
      Cuoiky: 9,
    },
    {
      Id: "03",
      Name: "Nguyễn Văn C",
      Birthday: "23/08/2006",
      ChuyenCan: 8,
      BaiTapVeNha: 6,
      ThuongKy: 7,
      Giuaky: 8,
      Cuoiky: 6,
    },
    {
      Id: "04",
      Name: "Nguyễn Văn D",
      Birthday: "05/02/2005",
      ChuyenCan: 10,
      BaiTapVeNha: 9,
      ThuongKy: 10,
      Giuaky: 9,
      Cuoiky: 10,
    },
    {
      Id: "05",
      Name: "Nguyễn Văn E",
      Birthday: "12/11/2003",
      ChuyenCan: 7,
      BaiTapVeNha: 6,
      ThuongKy: 5,
      Giuaky: 8,
      Cuoiky: 7,
    },
    {
      Id: "06",
      Name: "Nguyễn Văn F",
      Birthday: "30/01/2005",
      ChuyenCan: 6,
      BaiTapVeNha: 5,
      ThuongKy: 6,
      Giuaky: 7,
      Cuoiky: 6,
    },
    {
      Id: "07",
      Name: "Nguyễn Văn G",
      Birthday: "22/09/2004",
      ChuyenCan: 5,
      BaiTapVeNha: 7,
      ThuongKy: 6,
      Giuaky: 5,
      Cuoiky: 6,
    },
    {
      Id: "08",
      Name: "Nguyễn Văn H",
      Birthday: "09/03/2003",
      ChuyenCan: 9,
      BaiTapVeNha: 8,
      ThuongKy: 9,
      Giuaky: 8,
      Cuoiky: 10,
    },
    {
      Id: "09",
      Name: "Nguyễn Văn I",
      Birthday: "25/06/2004",
      ChuyenCan: 10,
      BaiTapVeNha: 9,
      ThuongKy: 8,
      Giuaky: 10,
      Cuoiky: 9,
    },
    {
      Id: "10",
      Name: "Nguyễn Văn J",
      Birthday: "14/07/2005",
      ChuyenCan: 8,
      BaiTapVeNha: 7,
      ThuongKy: 6,
      Giuaky: 8,
      Cuoiky: 7,
    },
    {
      Id: "11",
      Name: "Nguyễn Văn K",
      Birthday: "17/12/2006",
      ChuyenCan: 9,
      BaiTapVeNha: 8,
      ThuongKy: 7,
      Giuaky: 9,
      Cuoiky: 10,
    },
    {
      Id: "12",
      Name: "Nguyễn Văn L",
      Birthday: "02/01/2005",
      ChuyenCan: 10,
      BaiTapVeNha: 9,
      ThuongKy: 10,
      Giuaky: 8,
      Cuoiky: 9,
    },
    {
      Id: "13",
      Name: "Nguyễn Văn M",
      Birthday: "13/09/2004",
      ChuyenCan: 8,
      BaiTapVeNha: 7,
      ThuongKy: 9,
      Giuaky: 6,
      Cuoiky: 8,
    },
    {
      Id: "14",
      Name: "Nguyễn Văn N",
      Birthday: "24/10/2006",
      ChuyenCan: 9,
      BaiTapVeNha: 6,
      ThuongKy: 7,
      Giuaky: 10,
      Cuoiky: 6,
    },
    {
      Id: "15",
      Name: "Nguyễn Văn O",
      Birthday: "15/08/2003",
      ChuyenCan: 10,
      BaiTapVeNha: 10,
      ThuongKy: 10,
      Giuaky: 10,
      Cuoiky: 10,
    },
    {
      Id: "16",
      Name: "Nguyễn Văn P",
      Birthday: "17/04/2004",
      ChuyenCan: 7,
      BaiTapVeNha: 6,
      ThuongKy: 8,
      Giuaky: 6,
      Cuoiky: 7,
    },
    {
      Id: "17",
      Name: "Nguyễn Văn Q",
      Birthday: "10/07/2003",
      ChuyenCan: 9,
      BaiTapVeNha: 7,
      ThuongKy: 7,
      Giuaky: 8,
      Cuoiky: 9,
    },
    {
      Id: "18",
      Name: "Nguyễn Văn R",
      Birthday: "22/05/2005",
      ChuyenCan: 6,
      BaiTapVeNha: 8,
      ThuongKy: 9,
      Giuaky: 5,
      Cuoiky: 7,
    },
    {
      Id: "19",
      Name: "Nguyễn Văn S",
      Birthday: "10/11/2006",
      ChuyenCan: 8,
      BaiTapVeNha: 7,
      ThuongKy: 6,
      Giuaky: 6,
      Cuoiky: 8,
    },
    {
      Id: "20",
      Name: "Nguyễn Văn T",
      Birthday: "29/03/2005",
      ChuyenCan: 9,
      BaiTapVeNha: 8,
      ThuongKy: 7,
      Giuaky: 7,
      Cuoiky: 10,
    },
    {
      Id: "21",
      Name: "Nguyễn Văn U",
      Birthday: "04/05/2006",
      ChuyenCan: 10,
      BaiTapVeNha: 10,
      ThuongKy: 8,
      Giuaky: 9,
      Cuoiky: 10,
    },
    {
      Id: "22",
      Name: "Nguyễn Văn V",
      Birthday: "06/09/2004",
      ChuyenCan: 8,
      BaiTapVeNha: 6,
      ThuongKy: 9,
      Giuaky: 10,
      Cuoiky: 7,
    },
    {
      Id: "23",
      Name: "Nguyễn Văn W",
      Birthday: "21/02/2005",
      ChuyenCan: 7,
      BaiTapVeNha: 5,
      ThuongKy: 6,
      Giuaky: 8,
      Cuoiky: 9,
    },
    {
      Id: "24",
      Name: "Nguyễn Văn X",
      Birthday: "03/04/2006",
      ChuyenCan: 10,
      BaiTapVeNha: 9,
      ThuongKy: 7,
      Giuaky: 8,
      Cuoiky: 8,
    },
    {
      Id: "25",
      Name: "Nguyễn Văn Y",
      Birthday: "09/09/2003",
      ChuyenCan: 6,
      BaiTapVeNha: 8,
      ThuongKy: 9,
      Giuaky: 7,
      Cuoiky: 7,
    },
  ];

  function updateTable(scoreType) {
    var diemListDiv = document.getElementById("Diem");
    var table = "<table id='studentTable'>";
    table +=
      "<tr><th>STT</th><th>Mã SV</th><th>Tên Sinh Viên</th><th>Ngày Sinh</th><th>Điểm</th></tr>";

    var stt = 1;
    for (var val of arr) {
      let newScore = val[scoreType];

      table += "<tr>";
      table += "<td>" + stt++ + "</td>";
      table += "<td>" + val.Id + "</td>";
      table += "<td>" + val.Name + "</td>";
      table += "<td>" + val.Birthday + "</td>";
      table +=
        "<td><input type='number' class='scoreInput' data-id='" +
        val.Id +
        "' value='" +
        newScore +
        "' disabled /></td>";
      table += "</tr>";
    }

    table += "</table>";
    diemListDiv.innerHTML = table;
  }

  document.getElementById("scoreType").addEventListener("change", function () {
    var selectedOption = this.value;
    updateTable(selectedOption);
  });

  document.getElementById("editBtn").addEventListener("click", function () {
    var inputs = document.querySelectorAll(".scoreInput");
    inputs.forEach(function (input) {
      input.disabled = false;
      input.classList.add("selected");
    });

    document.getElementById("saveBtn").disabled = false;
  });

  document.getElementById("saveBtn").addEventListener("click", function () {
    var inputs = document.querySelectorAll(".scoreInput");
    let isValid = true;

    inputs.forEach(function (input) {
      if (!input.disabled) {
        var studentId = input.getAttribute("data-id");
        var newScore = parseInt(input.value);

        if (newScore > 10) {
          alert("Điểm không thể lớn hơn 10. Vui lòng nhập lại.");
          isValid = false;
          input.focus();
          return;
        }

        for (var val of arr) {
          if (val.Id === studentId) {
            val[document.getElementById("scoreType").value] = newScore;
            break;
          }
        }
      }
    });

    if (isValid) {
      inputs.forEach(function (input) {
        input.disabled = true;
        input.classList.remove("selected");
      });

      document.getElementById("saveBtn").disabled = true;

      var selectedOption = document.getElementById("scoreType").value;
      updateTable(selectedOption);
    }
  });

  updateTable("ChuyenCan");
});
