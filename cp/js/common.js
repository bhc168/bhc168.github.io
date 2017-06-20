var GLOBAL = {};    //使用{}对象类型的变量做为全局变量
GLOBAL.Nspace = function (str) {
    var arr = str.split('.'), o = GLOBAL;
    for (var i = (arr[0] == 'GLOBAL') ? 1 : 0; i < arr.length; i++) {
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }
};
// GLOBAL.是全局，A.开发者或按功能划分,xxx.变量[命名空间]
(function () {
    var a = 123, b = "hello";
    GLOBAL.Nspace("A.CAT");     //加入命名空间
    GLOBAL.Nspace("B");
    GLOBAL.A.CAT.name = a;      //然后在别的文件里随时可以调用,二级命名空间
    GLOBAL.B = b;
})();




//判断输入的字符是否为中文 
function IsChinese(str) {
    if (str.length != 0) {
        reg = /^[\u0391-\uFFE5]+$/;
        if (!reg.test(str)) {
            return "no";
        }
    }
    return "yes";
}
//判断是否为空 
function IsEmpty(str) {
    if (str == null || typeof str == "undefined" || str.trim() == "") {
        return true;
    } else {
        return false;
    }
}
//判断是否为手机号码 
function IsMobile(mobile) {
    var mobile_reg = new RegExp(/^0{0,1}1[0-9]{10}$/);
    if (!mobile_reg.test(mobile)) {
        return "no";
    }
    return "yes";
}
//判断是否为电子邮件 
function testEmail(email) {
    var email_reg = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/);
    if (!email_reg.test(email)) {
        return "no";
    }
    return "yes";
} 