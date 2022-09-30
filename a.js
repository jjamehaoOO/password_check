//密碼檢驗程式
//最多只能輸入三次

let password = 123456;
let input;
let entry_count = 0;
let entry_limit = 4;
let out_of_limit = false;

while(password!=input && !out_of_limit){
    entry_count++;
    if(entry_count<entry_limit){
        input = prompt("請輸入密碼");
    }else{
        out_of_limit = true;
    }
}

if(out_of_limit){
    alert("超過輸入次數");
}else{
    alert("輸入成功")
}


