var str= new Array();
str[0]= "shuju1";
str[1]="shuju2";
str[2]="shuju3";
function output(){
    //alert(1);
    //alert(str);
    /*for (var count=0;count<10;count++){
       var road="text";
       road+= count;
      // road+=".xml";
       export_raw(road,str);
    }*/
    export_raw("text.xml",str);

}
function fake_click(obj) {
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent(
        "click", true, false, window, 0, 0, 0, 0, 0
        , false, false, false, false, 0, null
        );
    obj.dispatchEvent(ev);
}

function export_raw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;

    var export_blob = new Blob([data]);

    var save_link1 = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link1.href = urlObject.createObjectURL(export_blob);
    save_link1.download = name;
    fake_click(save_link1);

    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    fake_click(save_link);
}