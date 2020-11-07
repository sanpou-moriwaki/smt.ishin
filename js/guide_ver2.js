function myCheck(){
    var flag1 = false; // 分野が選択されているか否かを判定する変数
    var flag2 = false; // エリアが選択されているか否かを判定する変数
    // チェックボックスの数だけ判定を繰り返す（ボタンを表すインプットタグがあるので１引く）
    for(var i=0; i<document.entrust.elements.length-1;i++){
        // i番目のチェックボックスがチェックされているかを判定
        if(document.entrust.elements[i].checked){
            if (document.entrust.elements[i].value=="4-1456" || 
              document.entrust.elements[i].value=="4-1460" || 
              document.entrust.elements[i].value=="4-1461" || 
              document.entrust.elements[i].value=="4-1465" || 
              document.entrust.elements[i].value=="4-1464" || 
              document.entrust.elements[i].value=="4-1457" || 
              document.entrust.elements[i].value=="4-1467" || 
              document.entrust.elements[i].value=="4-1466" || 
              document.entrust.elements[i].value=="4-1458" || 
              document.entrust.elements[i].value=="4-1459" || 
              document.entrust.elements[i].value=="4-1468" || 
              document.entrust.elements[i].value=="4-1469" || 
              document.entrust.elements[i].value=="4-1463" || 
              document.entrust.elements[i].value=="4-1473" || 
              document.entrust.elements[i].value=="4-1472" || 
              document.entrust.elements[i].value=="4-1471" || 
              document.entrust.elements[i].value=="4-1462" || 
              document.entrust.elements[i].value=="4-1475" || 
              document.entrust.elements[i].value=="4-1474" || 
              document.entrust.elements[i].value=="4-1470"){
              flag1 = true;    
            }
        }
        
        if(document.entrust.elements[i].checked){
            if (document.entrust.elements[i].value=="4-1476" ||
              document.entrust.elements[i].value=="4-1477" ||
              document.entrust.elements[i].value=="4-1478" ||
              document.entrust.elements[i].value=="4-1479" ||
              document.entrust.elements[i].value=="4-1480" ||
              document.entrust.elements[i].value=="4-1481" ||
              document.entrust.elements[i].value=="4-1482" ||
              document.entrust.elements[i].value=="4-1483" ||
              document.entrust.elements[i].value=="4-1484" ||
              document.entrust.elements[i].value=="4-1485" ||
              document.entrust.elements[i].value=="4-1486" ||
              document.entrust.elements[i].value=="4-1487" ||
              document.entrust.elements[i].value=="4-1488" ||
              document.entrust.elements[i].value=="4-1489" ||
              document.entrust.elements[i].value=="4-1490" ||
              document.entrust.elements[i].value=="4-1491" ||
              document.entrust.elements[i].value=="4-1492" ||
              document.entrust.elements[i].value=="4-1493" ||
              document.entrust.elements[i].value=="4-1494" ||
              document.entrust.elements[i].value=="4-1495" ||
              document.entrust.elements[i].value=="4-1496" ||
              document.entrust.elements[i].value=="4-1497" ||
              document.entrust.elements[i].value=="4-1498" ||
              document.entrust.elements[i].value=="4-1499" ||
              document.entrust.elements[i].value=="4-1500" ||
              document.entrust.elements[i].value=="4-1501" ||
              document.entrust.elements[i].value=="4-1502" ||
              document.entrust.elements[i].value=="4-1503" ||
              document.entrust.elements[i].value=="4-1504" ||
              document.entrust.elements[i].value=="4-1505" ||
              document.entrust.elements[i].value=="4-1506" ||
              document.entrust.elements[i].value=="4-1507" ||
              document.entrust.elements[i].value=="4-1508" ||
              document.entrust.elements[i].value=="4-1509" ||
              document.entrust.elements[i].value=="4-1510" ||
              document.entrust.elements[i].value=="4-1511" ||
              document.entrust.elements[i].value=="4-1512" ||
              document.entrust.elements[i].value=="4-1513" ||
              document.entrust.elements[i].value=="4-1514" ||
              document.entrust.elements[i].value=="4-1515" ||
              document.entrust.elements[i].value=="4-1516" ||
              document.entrust.elements[i].value=="4-1517" ||
              document.entrust.elements[i].value=="4-1518" ||
              document.entrust.elements[i].value=="4-1519" ||
              document.entrust.elements[i].value=="4-1520" ||
              document.entrust.elements[i].value=="4-1521" ||
              document.entrust.elements[i].value=="4-1522" ||
              document.entrust.elements[i].value=="4-1523" ||
              document.entrust.elements[i].value=="4-1524" ||
              document.entrust.elements[i].value=="4-1525" ||
              document.entrust.elements[i].value=="4-1526" ||
              document.entrust.elements[i].value=="4-1527" ||
              document.entrust.elements[i].value=="4-1528" ||
              document.entrust.elements[i].value=="4-1529"){
              flag2 = true;    
            }
        }
    }
    // 学問系統が何も選択されていない場合の処理   
    if(!flag1){
        alert("興味のある分野を１つ以上選択してください。");
        return false; 
    }
    if(!flag2){
        alert("エリアを１つ以上選択してください。");
        return false; 
    }
}
