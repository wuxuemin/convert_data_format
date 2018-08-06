
function output(){
    //alert("导出");
    var z = new ZipArchive;
    //z.addFile("a.xml", "aaaaaaacontent");
    //var road="a";
    var string= "<htjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj";
    for (var count=0;count<100;count++){
        var road="a";
        road += count;
        road += "xml";
        z.addFile(road,string);
    }
    //z.addFile("aaaa.xml", "aaaaaaaccccc");
    z.export("nono");
    //alert("count");

}
