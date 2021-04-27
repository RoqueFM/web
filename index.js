$(document).ready(function(){
  var url = "Prueba_Scaperoom_0.xlsx";
  var oReq = new XMLHttpRequest();
  oReq.open("GET",url,true);
  oReq.responseType = "arraybuffer";

  oReq.onload = function(e);
  {
    var info=readData();
    console.log(info);

    function readData()
    {
      var arraybuffer = oReq.esponse;
      var data = new Uint8Array(arraybuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");

      var workbook = XLSX.read(bstr, {type: "binary"});

      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var info=XLSX.utils.sheet_to_json(worksheet,{raw:true});

      return info;
    }
  }
  oReq.send();
});
