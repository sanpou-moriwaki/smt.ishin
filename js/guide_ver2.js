function myCheck() {
  var flag1 = false; // 分野が選択されているか否かを判定する変数
  var flag2 = false; // エリアが選択されているか否かを判定する変数
  // チェックボックスの数だけ判定を繰り返す（ボタンを表すインプットタグがあるので１引く）
  for (var i = 0; i < document.entrust.elements.length - 1; i++) {
    // i番目のチェックボックスがチェックされているかを判定
    if (document.entrust.elements[i].checked) {
      if (document.entrust.elements[i].value == "4-1456"
        || document.entrust.elements[i].value == "4-1460"
        || document.entrust.elements[i].value == "4-1461"
        || document.entrust.elements[i].value == "4-1465"
        || document.entrust.elements[i].value == "4-1464"
        || document.entrust.elements[i].value == "4-1457"
        || document.entrust.elements[i].value == "4-1467"
        || document.entrust.elements[i].value == "4-1466"
        || document.entrust.elements[i].value == "4-1458"
        || document.entrust.elements[i].value == "4-1459"
        || document.entrust.elements[i].value == "4-1468"
        || document.entrust.elements[i].value == "4-1469"
        || document.entrust.elements[i].value == "4-1463"
        || document.entrust.elements[i].value == "4-1473"
        || document.entrust.elements[i].value == "4-1472"
        || document.entrust.elements[i].value == "4-1471"
        || document.entrust.elements[i].value == "4-1462"
        || document.entrust.elements[i].value == "4-1475"
        || document.entrust.elements[i].value == "4-1474"
        || document.entrust.elements[i].value == "4-1470") {
        flag1 = true;
      }
    }

    if (document.entrust.elements[i].checked) {
      if (document.entrust.elements[i].value == "4-1476"
        || document.entrust.elements[i].value == "4-1477"
        || document.entrust.elements[i].value == "4-1478"
        || document.entrust.elements[i].value == "4-1479"
        || document.entrust.elements[i].value == "4-1480"
        || document.entrust.elements[i].value == "4-1481"
        || document.entrust.elements[i].value == "4-1482"
        || document.entrust.elements[i].value == "4-1483"
        || document.entrust.elements[i].value == "4-1484"
        || document.entrust.elements[i].value == "4-1485"
        || document.entrust.elements[i].value == "4-1486"
        || document.entrust.elements[i].value == "4-1487"
        || document.entrust.elements[i].value == "4-1488"
        || document.entrust.elements[i].value == "4-1489"
        || document.entrust.elements[i].value == "4-1490"
        || document.entrust.elements[i].value == "4-1491"
        || document.entrust.elements[i].value == "4-1492"
        || document.entrust.elements[i].value == "4-1493"
        || document.entrust.elements[i].value == "4-1494"
        || document.entrust.elements[i].value == "4-1495"
        || document.entrust.elements[i].value == "4-1496"
        || document.entrust.elements[i].value == "4-1497"
        || document.entrust.elements[i].value == "4-1498"
        || document.entrust.elements[i].value == "4-1499"
        || document.entrust.elements[i].value == "4-1500"
        || document.entrust.elements[i].value == "4-1501"
        || document.entrust.elements[i].value == "4-1502"
        || document.entrust.elements[i].value == "4-1503"
        || document.entrust.elements[i].value == "4-1504"
        || document.entrust.elements[i].value == "4-1505"
        || document.entrust.elements[i].value == "4-1506"
        || document.entrust.elements[i].value == "4-1507"
        || document.entrust.elements[i].value == "4-1508"
        || document.entrust.elements[i].value == "4-1509"
        || document.entrust.elements[i].value == "4-1510"
        || document.entrust.elements[i].value == "4-1511"
        || document.entrust.elements[i].value == "4-1512"
        || document.entrust.elements[i].value == "4-1513"
        || document.entrust.elements[i].value == "4-1514"
        || document.entrust.elements[i].value == "4-1515"
        || document.entrust.elements[i].value == "4-1516"
        || document.entrust.elements[i].value == "4-1517"
        || document.entrust.elements[i].value == "4-1518"
        || document.entrust.elements[i].value == "4-1519"
        || document.entrust.elements[i].value == "4-1520"
        || document.entrust.elements[i].value == "4-1521"
        || document.entrust.elements[i].value == "4-1522"
        || document.entrust.elements[i].value == "4-1523"
        || document.entrust.elements[i].value == "4-1524"
        || document.entrust.elements[i].value == "4-1525"
        || document.entrust.elements[i].value == "4-1526"
        || document.entrust.elements[i].value == "4-1527"
        || document.entrust.elements[i].value == "4-1528"
        || document.entrust.elements[i].value == "4-1529") {
        flag2 = true;
      }
    }
  }
  // 学問系統が何も選択されていない場合の処理   
  if (!flag1) {
    alert("興味のある分野を１つ以上選択してください。");
    return false;
  }
  if (!flag2) {
    alert("エリアを１つ以上選択してください。");
    return false;
  }
}


/*エリアチェック
--------------------------*/

//Hokkaido
function checkAll1() {
  let classHokkaido = document.getElementsByClassName("areaHokkaido");

  for (let i = 0; i < classHokkaido.length; i++) {
    if (document.getElementById("4-1476").checked) {
      classHokkaido[i].disabled = true;
      classHokkaido[i].checked = false;
    } else {
      classHokkaido[i].disabled = false;
      classHokkaido[i].checked = false;
    }
  }
}

//Kanto
function checkAll2() {
  let classKanto = document.getElementsByClassName("areaKanto");

  for (let i = 0; i < classKanto.length; i++) {
    if (document.getElementById("4-1484").checked) {
      classKanto[i].disabled = true;
      classKanto[i].checked = false;
    } else {
      classKanto[i].disabled = false;
      classKanto[i].checked = false;
    }
  }
}

//Tokai
function checkAll3() {
  let classTokai = document.getElementsByClassName("areaTokai");
  for (let i = 0; i < classTokai.length; i++) {
    if (document.getElementById("4-1495").checked) {
      classTokai[i].disabled = true;
      classTokai[i].checked = false;
    } else {
      classTokai[i].disabled = false;
      classTokai[i].checked = false;
    }
  }
}

//Hokuriku
function checkAll4() {
  let classHokuriku = document.getElementsByClassName("areaHokuriku");

  for (let i = 0; i < classHokuriku.length; i++) {
    if (document.getElementById("4-1500").checked) {
      classHokuriku[i].disabled = true;
      classHokuriku[i].checked = false;
    } else {
      classHokuriku[i].disabled = false;
      classHokuriku[i].checked = false;
    }
  }
}

//Kinki
function checkAll5() {
  let classKinki = document.getElementsByClassName("areaKinki");

  for (let i = 0; i < classKinki.length; i++) {
    if (document.getElementById("4-1504").checked) {
      classKinki[i].disabled = true;
      classKinki[i].checked = false;
    } else {
      classKinki[i].disabled = false;
      classKinki[i].checked = false;
    }
  }
}

//Chugoku
function checkAll6() {
  let classChugoku = document.getElementsByClassName("areaChugoku");

  for (let i = 0; i < classChugoku.length; i++) {
    if (document.getElementById("4-1511").checked) {
      classChugoku[i].disabled = true;
      classChugoku[i].checked = false;
    } else {
      classChugoku[i].disabled = false;
      classChugoku[i].checked = false;
    }
  }
}

//Kyushu
function checkAll7() {
  let classKyushu = document.getElementsByClassName("areaKyushu");

  for (let i = 0; i < classKyushu.length; i++) {
    if (document.getElementById("4-1521").checked) {
      classKyushu[i].disabled = true;
      classKyushu[i].checked = false;
    } else {
      classKyushu[i].disabled = false;
      classKyushu[i].checked = false;
    }
  }
} //checkAll

/*都道府県チェック
---------------------------*/
//Hokkaido
function checksub1() {
  let classHokkaido = document.getElementsByClassName("areaHokkaido");
  let AllHokkaido = document.getElementById("4-1476");

  let checksCount = 0;

  for (let i = 0; i < classHokkaido.length; i++) {
    if (classHokkaido[i].checked == false) {
      AllHokkaido.checked = false;
      classHokkaido[i].disabled = false;
    } else {
      checksCount += 1;
    }
  }
  for (let i = 0; i < classHokkaido.length; i++) {
    if (checksCount == classHokkaido.length) {
      AllHokkaido.checked = true;
      classHokkaido[i].disabled = true;
      classHokkaido[i].checked = false;
    }
  }
}

//Kanto
function checksub2() {
  let classKanto = document.getElementsByClassName("areaKanto");
  let AllKanto = document.getElementById("4-1484");

  let checksCount = 0;

  for (let i = 0; i < classKanto.length; i++) {
    if (classKanto[i].checked == false) {
      AllKanto.checked = false;
      classKanto[i].disabled = false;
    } else {
      checksCount += 1;
    }
  }
  for (let i = 0; i < classKanto.length; i++) {
    if (checksCount == classKanto.length) {
      AllKanto.checked = true;
      classKanto[i].disabled = true;
      classKanto[i].checked = false;
    }
  }
}

//Tokai
function checksub3() {
  let classTokai = document.getElementsByClassName("areaTokai");
  let AllTokai = document.getElementById("4-1495");

  let checksCount = 0;

  for (let i = 0; i < classTokai.length; i++) {
    if (classTokai[i].checked == false) {
      AllTokai.checked = false;
      classTokai[i].disabled = false;
    } else {
      checksCount += 1;
    }
  }
  for (let i = 0; i < classTokai.length; i++) {
    if (checksCount == classTokai.length) {
      AllTokai.checked = true;
      classTokai[i].disabled = true;
      classTokai[i].checked = false;
    }
  }
}

//Hokuriku
function checksub4() {
  let classHokuriku = document.getElementsByClassName("areaHokuriku");
  let AllHokuriku = document.getElementById("4-1500");

  let checksCount = 0;

  for (let i = 0; i < classHokuriku.length; i++) {
    if (classHokuriku[i].checked == false) {
      AllHokuriku.checked = false;
      classHokuriku[i].disabled = false;
    } else {
      checksCount += 1;
    }
  }
  for (let i = 0; i < classHokuriku.length; i++) {
    if (checksCount == classHokuriku.length) {
      AllHokuriku.checked = true;
      classHokuriku[i].disabled = true;
      classHokuriku[i].checked = false;
    }
  }
}

//Kinki
function checksub5() {
  let classKinki = document.getElementsByClassName("areaKinki");
  let AllKinki = document.getElementById("4-1504");

  let checksCount = 0;

  for (let i = 0; i < classKinki.length; i++) {
    if (classKinki[i].checked == false) {
      AllKinki.checked = false;
      classKinki[i].disabled = false;
    } else {
      checksCount += 1;
    }
  }
  for (let i = 0; i < classKinki.length; i++) {
    if (checksCount == classKinki.length) {
      AllKinki.checked = true;
      classKinki[i].disabled = true;
      classKinki[i].checked = false;
    }
  }
}

//Chugoku
function checksub6() {
  let classChugoku = document.getElementsByClassName("areaChugoku");
  let AllChugoku = document.getElementById("4-1511");

  let checksCount = 0;

  for (let i = 0; i < classChugoku.length; i++) {
    if (classChugoku[i].checked == false) {
      AllChugoku.checked = false;
      classChugoku[i].disabled = false;
    } else {
      checksCount += 1;
    }
  }
  for (let i = 0; i < classChugoku.length; i++) {
    if (checksCount == classChugoku.length) {
      AllChugoku.checked = true;
      classChugoku[i].disabled = true;
      classChugoku[i].checked = false;
    }
  }
}

//Kyushu
function checksub7() {
  let classKyushu = document.getElementsByClassName("areaKyushu");
  let AllKyushu = document.getElementById("4-1521");

  let checksCount = 0;

  for (let i = 0; i < classKyushu.length; i++) {
    if (classKyushu[i].checked == false) {
      AllKyushu.checked = false;
      classKyushu[i].disabled = false;
    } else {
      checksCount += 1;
    }
  }
  for (let i = 0; i < classKyushu.length; i++) {
    if (checksCount == classKyushu.length) {
      AllKyushu.checked = true;
      classKyushu[i].disabled = true;
      classKyushu[i].checked = false;
    }
  }
}
