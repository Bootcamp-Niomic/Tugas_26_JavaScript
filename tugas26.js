// ====== Tugas 26 JavaScript =====

var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

data2 = data.forEach(function(Item) {
  var data3 = isNaN(Item) || isFinite(Item);
  if(data3 === false) {
    console.log("Angka ", Item, " Infinity");
  }else {
    console.log("Angka ", Item, " NOT Infinity");
  }
});