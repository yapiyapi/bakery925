function cal() {
    var n1 = document.getElementById("book1").value;
    var n2 = document.getElementById("book2").value;
    var n3 = document.getElementById("book3").value;
    var n4 = document.getElementById("book4").value;
    var n5 = document.getElementById("book5").value;
    var n6 = document.getElementById("book6").value;
    var n7 = document.getElementById("book7").value;
    var n8 = document.getElementById("book8").value;
    var n9 = document.getElementById("book9").value;
    var n10 = document.getElementById("book10").value;
    var n11 = document.getElementById("book11").value;
    var n12 = document.getElementById("book12").value;
    var n13 = document.getElementById("book13").value;
    var n14 = document.getElementById("book14").value;
    var n15 = document.getElementById("book15").value;
    var n16 = document.getElementById("book16").value;
    var n17 = document.getElementById("book17").value;
    var n18 = document.getElementById("book18").value;
    var n19 = document.getElementById("book19").value;
    var n20 = document.getElementById("book20").value;
    var n21 = document.getElementById("book21").value;
    var n22 = document.getElementById("book22").value;
    var n23 = document.getElementById("book23").value;
    var n24 = document.getElementById("book24").value;
    var n25 = document.getElementById("book25").value;
    var n26 = document.getElementById("book26").value;
    var n27 = document.getElementById("book27").value;
    var n28 = document.getElementById("book28").value;
    var n29 = document.getElementById("book29").value;
    var n30 = document.getElementById("book30").value;
    var n31 = document.getElementById("book31").value;
    var n32 = document.getElementById("book32").value;
    var n33 = document.getElementById("book33").value;
    
var p1 = 2000* n1;
var p2 = 2000* n2;
var p3 = 2000* n3;

var p4 = 1200* n4;
var p5 = 2000* n5;
var p6 = 2000* n6;

var p7 = 2800* n7;
var p8 = 2000* n8;
var p9 = 4000* n9;

var p10 = 4000* n10;
var p11 = 2400* n11;
var p12 = 3500* n12;

var p13 = 2800* n13;
var p14 = 3200* n14;
var p15 = 3500* n15;

var p16 = 2000* n16;
var p17 = 3500* n17;
var p18 = 1300* n18;

var p19 = 1500* n19;
var p20 = 3000* n20;
var p21 = 3500* n21;

var p22 = 3500* n22;
var p23 = 1800* n23;
var p24 = 1800* n24;

var p25 = 2000* n25;
var p26 = 1800* n26;
var p27 = 6500* n27;

var p28 = 1800* n28;
var p29 = 1800* n29;
var p30 = 1800* n30;

var p31 = 1300* n31;
var p32 = 1300* n32;
var p33 = 7000* n33;

var totalPrice ="총 : "+(p1 + p2 + p3+ p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 
+ p12 + p13 + p14 + p15 + p16 + p17 + p18 + p19 + p20 + p21 + p22 + p23
+ p24+p25+p26+p27+p28+p29+p30+p31+p32+p33)+"원";

var totalNumber = parseInt(n1) + parseInt(n2) + parseInt(n3);

document.getElementById("totalNumber").value = totalNumber;
document.getElementById("totalPrice").value = totalPrice;
if (n1 != 0){document.getElementById("totalPrice1").value = '소금버터롤'; document.getElementById("amount1").value = n1; document.getElementById("amount1").style.display = 'inline'; document.getElementById("totalPrice1").style.display = 'inline';}
if (n2 != 0){document.getElementById("totalPrice2").value = '감자사라다'; document.getElementById("amount2").value = n2; document.getElementById("amount2").style.display = 'inline';document.getElementById("totalPrice2").style.display = 'inline';}
if (n3 != 0){ document.getElementById("totalPrice3").value = '에그타르트';document.getElementById("amount3").value = n3; document.getElementById("amount3").style.display = 'inline';document.getElementById("totalPrice3").style.display = 'inline';}
if (n4 != 0){ document.getElementById("totalPrice4").value = '단팥빵';document.getElementById("amount4").value = n4; document.getElementById("amount4").style.display = 'inline'; document.getElementById("totalPrice4").style.display = 'inline';}
if (n5 != 0){ document.getElementById("totalPrice5").value = '레몬모찌';document.getElementById("amount5").value = n5; document.getElementById("amount5").style.display = 'inline'; document.getElementById("totalPrice5").style.display = 'inline';}
if (n6 != 0){ document.getElementById("totalPrice6").value = '크로크무슈';document.getElementById("amount6").value = n6; document.getElementById("amount6").style.display = 'inline'; document.getElementById("totalPrice6").style.display = 'inline';}
if (n7 != 0){document.getElementById("totalPrice7").value = '소세지빵';document.getElementById("amount7").value = n7; document.getElementById("amount7").style.display = 'inline'; document.getElementById("totalPrice7").style.display = 'inline';}
if (n8 != 0){document.getElementById("totalPrice8").value = '우유식빵';document.getElementById("amount8").value = n8; document.getElementById("amount8").style.display = 'inline'; document.getElementById("totalPrice8").style.display = 'inline';}
if (n9 != 0){document.getElementById("totalPrice9").value = '밤식빵';document.getElementById("amount9").value = n9; document.getElementById("amount9").style.display = 'inline'; document.getElementById("totalPrice9").style.display = 'inline';}
if (n10 != 0){document.getElementById("totalPrice10").value = '블루베리식빵';document.getElementById("amount10").value = n10; document.getElementById("amount10").style.display = 'inline'; document.getElementById("totalPrice10").style.display = 'inline';}
if (n11 != 0){document.getElementById("totalPrice11").value = '모닝빵';document.getElementById("amount11").value = n11; document.getElementById("amount11").style.display = 'inline';document.getElementById("totalPrice11").style.display = 'inline';}
if (n12 != 0){document.getElementById("totalPrice12").value = '갈릭모닝';document.getElementById("amount12").value = n12; document.getElementById("amount12").style.display = 'inline'; document.getElementById("totalPrice12").style.display = 'inline';}
if (n13 != 0){document.getElementById("totalPrice13").value = '야채고로케';document.getElementById("amount13").value = n13; document.getElementById("amount13").style.display = 'inline'; document.getElementById("totalPrice13").style.display = 'inline'; }
if (n14 != 0){document.getElementById("totalPrice14").value = '치아바타앙버터';document.getElementById("amount14").value = n14; document.getElementById("amount14").style.display = 'inline'; document.getElementById("totalPrice14").style.display = 'inline';}
if (n15 != 0){document.getElementById("totalPrice15").value = '바게트';document.getElementById("amount15").value = n15; document.getElementById("amount15").style.display = 'inline'; document.getElementById("totalPrice15").style.display = 'inline';}
if (n16 != 0){document.getElementById("totalPrice16").value = '통밀깜빠뉴';document.getElementById("amount16").value = n16; document.getElementById("amount16").style.display = 'inline'; document.getElementById("totalPrice16").style.display = 'inline';}
if (n17 != 0){document.getElementById("totalPrice17").value = '호두베리바게트';document.getElementById("amount17").value = n17; document.getElementById("amount17").style.display = 'inline'; document.getElementById("totalPrice17").style.display = 'inline';}
if (n18 != 0){document.getElementById("totalPrice18").value = '꽈배기';document.getElementById("amount18").value = n18; document.getElementById("amount18").style.display = 'inline'; document.getElementById("totalPrice18").style.display = 'inline';}
if (n19 != 0){document.getElementById("totalPrice19").value = '파이만주';document.getElementById("amount19").value = n19; document.getElementById("amount19").style.display = 'inline'; document.getElementById("totalPrice19").style.display = 'inline';}
if (n20 != 0){document.getElementById("totalPrice20").value = '크로와상';document.getElementById("amount20").value = n20; document.getElementById("amount20").style.display = 'inline'; document.getElementById("totalPrice20").style.display = 'inline';}
if (n21 != 0){document.getElementById("totalPrice21").value = '초코크로와상';document.getElementById("amount21").value = n21; document.getElementById("amount21").style.display = 'inline'; document.getElementById("totalPrice21").style.display = 'inline';}
if (n22 != 0){document.getElementById("totalPrice22").value = '아몬드크로와상';document.getElementById("amount22").value = n22; document.getElementById("amount22").style.display = 'inline'; document.getElementById("totalPrice22").style.display = 'inline';}
if (n23  != 0){document.getElementById("totalPrice23").value = '초코스콘';document.getElementById("amount23").value = n23; document.getElementById("amount23").style.display = 'inline'; document.getElementById("totalPrice23").style.display = 'inline';}
if (n24 != 0){document.getElementById("totalPrice24").value = '녹차스콘';document.getElementById("amount24").value = n24; document.getElementById("amount24").style.display = 'inline'; document.getElementById("totalPrice24").style.display = 'inline';}
if (n25 != 0){document.getElementById("totalPrice25").value = '크랜베리스콘';document.getElementById("amount25").value = n25; document.getElementById("amount25").style.display = 'inline'; document.getElementById("totalPrice25").style.display = 'inline';}
if (n26 != 0){document.getElementById("totalPrice26").value = '레몬파운드';document.getElementById("amount26").value = n26; document.getElementById("amount26").style.display = 'inline'; document.getElementById("totalPrice26").style.display = 'inline';}
if (n27 != 0){document.getElementById("totalPrice27").value = '밀크티';document.getElementById("amount27").value = n27; document.getElementById("amount27").style.display = 'inline'; document.getElementById("totalPrice27").style.display = 'inline';}
if (n28 != 0){document.getElementById("totalPrice28").value = '초코휘낭시에';document.getElementById("amount28").value = n28; document.getElementById("amount28").style.display = 'inline'; document.getElementById("totalPrice28").style.display = 'inline';}
if (n29 != 0){document.getElementById("totalPrice29").value = '레몬마들렌';document.getElementById("amount29").value = n29; document.getElementById("amount29").style.display = 'inline'; document.getElementById("totalPrice29").style.display = 'inline';}
if (n30 != 0){document.getElementById("totalPrice30").value = '초코마들렌';document.getElementById("amount30").value = n30; document.getElementById("amount30").style.display = 'inline'; document.getElementById("totalPrice30").style.display = 'inline';}
if (n31 != 0){document.getElementById("totalPrice31").value = '아몬드비스코티';document.getElementById("amount31").value = n31; document.getElementById("amount31").style.display = 'inline'; document.getElementById("totalPrice31").style.display = 'inline';}
if (n32 != 0){document.getElementById("totalPrice32").value = '초코비스코티';document.getElementById("amount32").value = n32; document.getElementById("amount32").style.display = 'inline'; document.getElementById("totalPrice32").style.display = 'inline';}
if (n33 != 0){document.getElementById("totalPrice33").value = '산딸기롤';document.getElementById("amount33").value = n33; document.getElementById("amount33").style.display = 'inline'; document.getElementById("totalPrice33").style.display = 'inline';}

}
/* 수량 + - */

function click1(e) {
    document.getElementById(e.getAttribute('id')).value ++;
    cal()
    var n1 = document.getElementById("book1").value; 
    var n2 = document.getElementById("book2").value;
    var n3 = document.getElementById("book3").value;
    var n4 = document.getElementById("book4").value;
    var n5 = document.getElementById("book5").value;
    var n6 = document.getElementById("book6").value;
    var n7 = document.getElementById("book7").value;
    var n8 = document.getElementById("book8").value;
    var n9 = document.getElementById("book9").value;
    var n10 = document.getElementById("book10").value;
    var n11 = document.getElementById("book11").value;
    var n12 = document.getElementById("book12").value;
    var n13 = document.getElementById("book13").value;
    var n14 = document.getElementById("book14").value;
    var n15 = document.getElementById("book15").value;
    var n16 = document.getElementById("book16").value;
    var n17 = document.getElementById("book17").value;
    var n18 = document.getElementById("book18").value;
    var n19 = document.getElementById("book19").value;
    var n20 = document.getElementById("book20").value;
    var n21 = document.getElementById("book21").value;
    var n22 = document.getElementById("book22").value;
    var n23 = document.getElementById("book23").value;
    var n24 = document.getElementById("book24").value;
    var n25 = document.getElementById("book25").value;
    var n26 = document.getElementById("book26").value;
    var n27 = document.getElementById("book27").value;
    var n28 = document.getElementById("book28").value;
    var n29 = document.getElementById("book29").value;
    var n30 = document.getElementById("book30").value;
    var n31 = document.getElementById("book31").value;
    var n32 = document.getElementById("book32").value;
    var n33 = document.getElementById("book33").value;
    if (n1 != 0){document.getElementById("totalPrice1").value = '소금버터롤'; document.getElementById("amount1").value = n1; document.getElementById("amount1").style.display = 'inline'; document.getElementById("totalPrice1").style.display = 'inline';}
    if (n2 != 0){document.getElementById("totalPrice2").value = '감자사라다'; document.getElementById("amount2").value = n2; document.getElementById("amount2").style.display = 'inline';document.getElementById("totalPrice2").style.display = 'inline';}
    if (n3 != 0){ document.getElementById("totalPrice3").value = '에그타르트';document.getElementById("amount3").value = n3; document.getElementById("amount3").style.display = 'inline';document.getElementById("totalPrice3").style.display = 'inline';}
    if (n4 != 0){ document.getElementById("totalPrice4").value = '단팥빵';document.getElementById("amount4").value = n4; document.getElementById("amount4").style.display = 'inline'; document.getElementById("totalPrice4").style.display = 'inline';}
    if (n5 != 0){ document.getElementById("totalPrice5").value = '레몬모찌';document.getElementById("amount5").value = n5; document.getElementById("amount5").style.display = 'inline'; document.getElementById("totalPrice5").style.display = 'inline';}
    if (n6 != 0){ document.getElementById("totalPrice6").value = '크로크무슈';document.getElementById("amount6").value = n6; document.getElementById("amount6").style.display = 'inline'; document.getElementById("totalPrice6").style.display = 'inline';}
    if (n7 != 0){document.getElementById("totalPrice7").value = '소세지빵';document.getElementById("amount7").value = n7; document.getElementById("amount7").style.display = 'inline'; document.getElementById("totalPrice7").style.display = 'inline';}
    if (n8 != 0){document.getElementById("totalPrice8").value = '우유식빵';document.getElementById("amount8").value = n8; document.getElementById("amount8").style.display = 'inline'; document.getElementById("totalPrice8").style.display = 'inline';}
    if (n9 != 0){document.getElementById("totalPrice9").value = '밤식빵';document.getElementById("amount9").value = n9; document.getElementById("amount9").style.display = 'inline'; document.getElementById("totalPrice9").style.display = 'inline';}
    if (n10 != 0){document.getElementById("totalPrice10").value = '블루베리식빵';document.getElementById("amount10").value = n10; document.getElementById("amount10").style.display = 'inline'; document.getElementById("totalPrice10").style.display = 'inline';}
    if (n11 != 0){document.getElementById("totalPrice11").value = '모닝빵';document.getElementById("amount11").value = n11; document.getElementById("amount11").style.display = 'inline';document.getElementById("totalPrice11").style.display = 'inline';}
    if (n12 != 0){document.getElementById("totalPrice12").value = '갈릭모닝';document.getElementById("amount12").value = n12; document.getElementById("amount12").style.display = 'inline'; document.getElementById("totalPrice12").style.display = 'inline';}
    if (n13 != 0){document.getElementById("totalPrice13").value = '야채고로케';document.getElementById("amount13").value = n13; document.getElementById("amount13").style.display = 'inline'; document.getElementById("totalPrice13").style.display = 'inline'; }
    if (n14 != 0){document.getElementById("totalPrice14").value = '치아바타앙버터';document.getElementById("amount14").value = n14; document.getElementById("amount14").style.display = 'inline'; document.getElementById("totalPrice14").style.display = 'inline';}
    if (n15 != 0){document.getElementById("totalPrice15").value = '바게트';document.getElementById("amount15").value = n15; document.getElementById("amount15").style.display = 'inline'; document.getElementById("totalPrice15").style.display = 'inline';}
    if (n16 != 0){document.getElementById("totalPrice16").value = '통밀깜빠뉴';document.getElementById("amount16").value = n16; document.getElementById("amount16").style.display = 'inline'; document.getElementById("totalPrice16").style.display = 'inline';}
    if (n17 != 0){document.getElementById("totalPrice17").value = '호두베리바게트';document.getElementById("amount17").value = n17; document.getElementById("amount17").style.display = 'inline'; document.getElementById("totalPrice17").style.display = 'inline';}
    if (n18 != 0){document.getElementById("totalPrice18").value = '꽈배기';document.getElementById("amount18").value = n18; document.getElementById("amount18").style.display = 'inline'; document.getElementById("totalPrice18").style.display = 'inline';}
    if (n19 != 0){document.getElementById("totalPrice19").value = '파이만주';document.getElementById("amount19").value = n19; document.getElementById("amount19").style.display = 'inline'; document.getElementById("totalPrice19").style.display = 'inline';}
    if (n20 != 0){document.getElementById("totalPrice20").value = '크로와상';document.getElementById("amount20").value = n20; document.getElementById("amount20").style.display = 'inline'; document.getElementById("totalPrice20").style.display = 'inline';}
    if (n21 != 0){document.getElementById("totalPrice21").value = '초코크로와상';document.getElementById("amount21").value = n21; document.getElementById("amount21").style.display = 'inline'; document.getElementById("totalPrice21").style.display = 'inline';}
    if (n22 != 0){document.getElementById("totalPrice22").value = '아몬드크로와상';document.getElementById("amount22").value = n22; document.getElementById("amount22").style.display = 'inline'; document.getElementById("totalPrice22").style.display = 'inline';}
    if (n23  != 0){document.getElementById("totalPrice23").value = '초코스콘';document.getElementById("amount23").value = n23; document.getElementById("amount23").style.display = 'inline'; document.getElementById("totalPrice23").style.display = 'inline';}
    if (n24 != 0){document.getElementById("totalPrice24").value = '녹차스콘';document.getElementById("amount24").value = n24; document.getElementById("amount24").style.display = 'inline'; document.getElementById("totalPrice24").style.display = 'inline';}
    if (n25 != 0){document.getElementById("totalPrice25").value = '크랜베리스콘';document.getElementById("amount25").value = n25; document.getElementById("amount25").style.display = 'inline'; document.getElementById("totalPrice25").style.display = 'inline';}
    if (n26 != 0){document.getElementById("totalPrice26").value = '레몬파운드';document.getElementById("amount26").value = n26; document.getElementById("amount26").style.display = 'inline'; document.getElementById("totalPrice26").style.display = 'inline';}
    if (n27 != 0){document.getElementById("totalPrice27").value = '밀크티';document.getElementById("amount27").value = n27; document.getElementById("amount27").style.display = 'inline'; document.getElementById("totalPrice27").style.display = 'inline';}
    if (n28 != 0){document.getElementById("totalPrice28").value = '초코휘낭시에';document.getElementById("amount28").value = n28; document.getElementById("amount28").style.display = 'inline'; document.getElementById("totalPrice28").style.display = 'inline';}
    if (n29 != 0){document.getElementById("totalPrice29").value = '레몬마들렌';document.getElementById("amount29").value = n29; document.getElementById("amount29").style.display = 'inline'; document.getElementById("totalPrice29").style.display = 'inline';}
    if (n30 != 0){document.getElementById("totalPrice30").value = '초코마들렌';document.getElementById("amount30").value = n30; document.getElementById("amount30").style.display = 'inline'; document.getElementById("totalPrice30").style.display = 'inline';}
    if (n31 != 0){document.getElementById("totalPrice31").value = '아몬드비스코티';document.getElementById("amount31").value = n31; document.getElementById("amount31").style.display = 'inline'; document.getElementById("totalPrice31").style.display = 'inline';}
    if (n32 != 0){document.getElementById("totalPrice32").value = '초코비스코티';document.getElementById("amount32").value = n32; document.getElementById("amount32").style.display = 'inline'; document.getElementById("totalPrice32").style.display = 'inline';}
    if (n33 != 0){document.getElementById("totalPrice33").value = '산딸기롤';document.getElementById("amount33").value = n33; document.getElementById("amount33").style.display = 'inline'; document.getElementById("totalPrice33").style.display = 'inline';}
}
    


function click2(e) {
    if (document.getElementById(e.getAttribute('id')).value !=0)
        document.getElementById(e.getAttribute('id')).value --;
    cal()
    var n1 = document.getElementById("book1").value;
    var n2 = document.getElementById("book2").value;
    var n3 = document.getElementById("book3").value;
    var n4 = document.getElementById("book4").value;
    var n5 = document.getElementById("book5").value;
    var n6 = document.getElementById("book6").value;
    var n7 = document.getElementById("book7").value;
    var n8 = document.getElementById("book8").value;
    var n9 = document.getElementById("book9").value;
    var n10 = document.getElementById("book10").value;
    var n11 = document.getElementById("book11").value;
    var n12 = document.getElementById("book12").value;
    var n13 = document.getElementById("book13").value;
    var n14 = document.getElementById("book14").value;
    var n15 = document.getElementById("book15").value;
    var n16 = document.getElementById("book16").value;
    var n17 = document.getElementById("book17").value;
    var n18 = document.getElementById("book18").value;
    var n19 = document.getElementById("book19").value;
    var n20 = document.getElementById("book20").value;
    var n21 = document.getElementById("book21").value;
    var n22 = document.getElementById("book22").value;
    var n23 = document.getElementById("book23").value;
    var n24 = document.getElementById("book24").value;
    var n25 = document.getElementById("book25").value;
    var n26 = document.getElementById("book26").value;
    var n27 = document.getElementById("book27").value;
    var n28 = document.getElementById("book28").value;
    var n29 = document.getElementById("book29").value;
    var n30 = document.getElementById("book30").value;
    var n31 = document.getElementById("book31").value;
    var n32 = document.getElementById("book32").value;
    var n33 = document.getElementById("book33").value;
    if (n1 != 0){ document.getElementById("totalPrice1").value = '소금버터롤'; document.getElementById("amount1").value = n1}    else{document.getElementById("amount1").value = ""; document.getElementById("totalPrice1").value = ''; document.getElementById("amount1").style.display = 'none'; document.getElementById("totalPrice1").style.display = 'none';}
    if (n2 != 0){ document.getElementById("totalPrice2").value = '감자사라다'; document.getElementById("amount2").value = n2}    else{document.getElementById("amount2").value = ""; document.getElementById("totalPrice2").value = ''; document.getElementById("amount2").style.display = 'none';document.getElementById("totalPrice2").style.display = 'none';}
    if (n3 != 0){ document.getElementById("totalPrice3").value = '에그타르트'; document.getElementById("amount3").value = n3} else{document.getElementById("amount3").value = ""; document.getElementById("totalPrice3").value = ''; document.getElementById("amount3").style.display = 'none';document.getElementById("totalPrice3").style.display = 'none';}
    if (n4 != 0){ document.getElementById("totalPrice4").value = '단팥빵'; document.getElementById("amount4").value = n4} else{document.getElementById("amount4").value = ""; document.getElementById("totalPrice4").value = ''; document.getElementById("amount4").style.display = 'none';document.getElementById("totalPrice4").style.display = 'none';}
    if (n5 != 0){ document.getElementById("totalPrice5").value = '레몬모찌'; document.getElementById("amount5").value = n5} else{document.getElementById("amount5").value = "";document.getElementById("totalPrice5").value = ''; document.getElementById("amount5").style.display = 'none';document.getElementById("totalPrice5").style.display = 'none';}
    if (n6 != 0){ document.getElementById("totalPrice6").value = '크로크무슈'; document.getElementById("amount6").value = n6 } else{document.getElementById("amount6").value = "";document.getElementById("totalPrice6").value = ''; document.getElementById("amount6").style.display = 'none';document.getElementById("totalPrice6").style.display = 'none';}
    if (n7 != 0){ document.getElementById("totalPrice7").value = '소세지빵'; document.getElementById("amount7").value = n7} else{document.getElementById("amount7").value = "";document.getElementById("totalPrice7").value = ''; document.getElementById("amount7").style.display = 'none';document.getElementById("totalPrice7").style.display = 'none';}
    if (n8 != 0){ document.getElementById("totalPrice8").value = '우유식빵'; document.getElementById("amount8").value = n8} else{document.getElementById("amount8").value = "";document.getElementById("totalPrice8").value = ''; document.getElementById("amount8").style.display = 'none';document.getElementById("totalPrice8").style.display = 'none';}
    if (n9 != 0){ document.getElementById("totalPrice9").value = '밤식빵'; document.getElementById("amount9").value = n9} else{document.getElementById("amount9").value = "";document.getElementById("amount9").style.display = 'none'; document.getElementById("totalPrice9").value = ''; document.getElementById("totalPrice9").style.display = 'none';}
    if (n10 != 0){document.getElementById("totalPrice10").value = '블루베리식빵';document.getElementById("amount10").value = n10} else{document.getElementById("amount10").value = "";document.getElementById("amount10").style.display = 'none'; document.getElementById("totalPrice10").value = '';document.getElementById("totalPrice10").style.display = 'none';}
    if (n11 != 0){document.getElementById("totalPrice11").value = '모닝빵';document.getElementById("amount11").value = n11} else{document.getElementById("amount11").value = "";document.getElementById("amount11").style.display = 'none'; document.getElementById("totalPrice11").value = '';document.getElementById("totalPrice11").style.display = 'none';}
    if (n12 != 0){document.getElementById("totalPrice12").value = '갈릭모닝';document.getElementById("amount12").value = n12} else{document.getElementById("amount12").value = "";document.getElementById("amount12").style.display = 'none'; document.getElementById("totalPrice12").value = '';document.getElementById("totalPrice12").style.display = 'none';}
    if (n13 != 0){document.getElementById("totalPrice13").value = '야채고로케';document.getElementById("amount13").value = n13} else{document.getElementById("amount13").value = "";document.getElementById("amount13").style.display = 'none'; document.getElementById("totalPrice13").value = '';document.getElementById("totalPrice13").style.display = 'none';}
    if (n14 != 0){document.getElementById("totalPrice14").value = '치아바타앙버터';document.getElementById("amount14").value = n14} else{document.getElementById("amount14").value = "";document.getElementById("amount14").style.display = 'none'; document.getElementById("totalPrice14").value = '';document.getElementById("totalPrice14").style.display = 'none';}
    if (n15 != 0){document.getElementById("totalPrice15").value = '바게트';document.getElementById("amount15").value = n15} else{document.getElementById("amount15").value = "";document.getElementById("amount15").style.display = 'none'; document.getElementById("totalPrice15").value = '';document.getElementById("totalPrice15").style.display = 'none';}
    if (n16 != 0){document.getElementById("totalPrice16").value = '통밀깜빠뉴';document.getElementById("amount16").value = n16} else{document.getElementById("amount16").value = "";document.getElementById("amount16").style.display = 'none'; document.getElementById("totalPrice16").value = '';document.getElementById("totalPrice16").style.display = 'none';}
    if (n17 != 0){document.getElementById("totalPrice17").value = '호두베리바게트';document.getElementById("amount17").value = n17} else{document.getElementById("amount17").value = "";document.getElementById("amount17").style.display = 'none'; document.getElementById("totalPrice17").value = '';document.getElementById("totalPrice17").style.display = 'none';}
    if (n18 != 0){document.getElementById("totalPrice18").value = '꽈배기';document.getElementById("amount18").value = n18} else{document.getElementById("amount18").value = "";document.getElementById("amount18").style.display = 'none'; document.getElementById("totalPrice18").value = '';document.getElementById("totalPrice18").style.display = 'none';}
    if (n19 != 0){document.getElementById("totalPrice19").value = '파이만주';document.getElementById("amount19").value = n19} else{document.getElementById("amount19").value = "";document.getElementById("amount19").style.display = 'none'; document.getElementById("totalPrice19").value = '';document.getElementById("totalPrice19").style.display = 'none';}
    if (n20 != 0){document.getElementById("totalPrice20").value = '크로와상';document.getElementById("amount20").value = n20} else{document.getElementById("amount20").value = "";document.getElementById("amount20").style.display = 'none'; document.getElementById("totalPrice20").value = '';document.getElementById("totalPrice20").style.display = 'none';}
    if (n21 != 0){document.getElementById("totalPrice21").value = '초코크로와상';document.getElementById("amount21").value = n21} else{document.getElementById("amount21").value = "";document.getElementById("amount21").style.display = 'none'; document.getElementById("totalPrice21").value = '';document.getElementById("totalPric21").style.display = 'none';}
    if (n22 != 0){document.getElementById("totalPrice22").value = '아몬드크로와상';document.getElementById("amount22").value = n22} else{document.getElementById("amount22").value = "";document.getElementById("amount22").style.display = 'none'; document.getElementById("totalPrice22").value = '';document.getElementById("totalPrice22").style.display = 'none';}
    if (n23  != 0){document.getElementById("totalPrice23").value = '초코스콘';document.getElementById("amount23").value = n23} else{document.getElementById("amount23").value = "";document.getElementById("amount23").style.display = 'none'; document.getElementById("totalPrice23").value = '';document.getElementById("totalPrice23").style.display = 'none';}
    if (n24 != 0){document.getElementById("totalPrice24").value = '녹차스콘';document.getElementById("amount24").value = n24} else{document.getElementById("amount24").value = "";document.getElementById("amount24").style.display = 'none'; document.getElementById("totalPrice24").value = '';document.getElementById("totalPrice24").style.display = 'none';}
    if (n25 != 0){document.getElementById("totalPrice25").value = '크랜베리스콘';document.getElementById("amount25").value = n25} else{document.getElementById("amount25").value = "";document.getElementById("amount25").style.display = 'none'; document.getElementById("totalPrice25").value = '';document.getElementById("totalPrice25").style.display = 'none';}
    if (n26 != 0){document.getElementById("totalPrice26").value = '레몬파운드';document.getElementById("amount26").value = n26} else{document.getElementById("amount26").value = "";document.getElementById("amount26").style.display = 'none'; document.getElementById("totalPrice26").value = '';document.getElementById("totalPrice26").style.display = 'none';}
    if (n27 != 0){document.getElementById("totalPrice27").value = '밀크티';document.getElementById("amount27").value = n27} else{document.getElementById("amount27").value = "";document.getElementById("amount27").style.display = 'none'; document.getElementById("totalPrice27").value = '';document.getElementById("totalPrice27").style.display = 'none';}
    if (n28 != 0){document.getElementById("totalPrice28").value = '초코휘낭시에';document.getElementById("amount28").value = n28} else{document.getElementById("amount28").value = "";document.getElementById("amount28").style.display = 'none'; document.getElementById("totalPrice28").value = '';document.getElementById("totalPrice28").style.display = 'none';}
    if (n29 != 0){document.getElementById("totalPrice29").value = '레몬마들렌';document.getElementById("amount29").value = n29} else{document.getElementById("amount29").value = "";document.getElementById("amount29").style.display = 'none'; document.getElementById("totalPrice29").value = '';document.getElementById("totalPrice29").style.display = 'none';}
    if (n30 != 0){document.getElementById("totalPrice30").value = '초코마들렌';document.getElementById("amount30").value = n30} else{document.getElementById("amount30").value = "";document.getElementById("amount30").style.display = 'none'; document.getElementById("totalPrice30").value = '';document.getElementById("totalPrice30").style.display = 'none';}
    if (n31 != 0){document.getElementById("totalPrice31").value = '아몬드비스코티';document.getElementById("amount31").value = n31} else{document.getElementById("amount31").value = "";document.getElementById("amount31").style.display = 'none'; document.getElementById("totalPrice31").value = '';document.getElementById("totalPrice31").style.display = 'none';}
    if (n32 != 0){document.getElementById("totalPrice32").value = '초코비스코티';document.getElementById("amount32").value = n32} else{document.getElementById("amount32").value = "";document.getElementById("amount32").style.display = 'none'; document.getElementById("totalPrice32").value = '';document.getElementById("totalPrice32").style.display = 'none';}
    if (n33 != 0){document.getElementById("totalPrice33").value = '산딸기롤';document.getElementById("amount33").value = n33} else{document.getElementById("amount33").value = "";document.getElementById("amount33").style.display = 'none'; document.getElementById("totalPrice33").value = '';document.getElementById("totalPrice33").style.display = 'none';}
    }

