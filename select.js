
var demoData = [["lorem ipsum","placeholder text (filler text)","blabalbalblablalbalblablalballbalba",""],["bibendum","Michelin Man"," is the symbol of the Michelin tire company",""],["justo","Significados en español y discusiones con el uso de 'justo'","sadasdasdasdasdasdblablabalblablbalblablal",""],["sed","asdsa","asdsadsa",""], [":)","smiley","this is smiley face","<img src='smiley/happy.gif' />"] ];

var getSelected = function(){
    var t = '';
    if(window.getSelection) {
        t = window.getSelection();
    } else if(document.getSelection) {
        t = document.getSelection();
    } else if(document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

$(document).ready(function(){

	var div = document.createElement('div');
	div.id = 'pop';
	$(div).css("background","#FFF").css("position","absolute").css("width","250px").css("z-index","999").css("top",100).css("left",100).css("border","1px solid #000").css("display","none");
	$(document).append(div);
	
	$(document).bind("mouseup",function(event){
		var data = textReader(getSelected());
		$('#pop').css("display","none")
		if ( data.length !== 0 ){
			$('#pop').css("display","block").css("webkit-border-radius","5px").css("font-family","arial,sans-serif").css("background-color","#eeeeee").css("font-size","12px").css("padding","10px").css("border","1px solid #727272").css("top",event.pageY).css("left",event.pageX).html(
			
				"<div style='width:240px;height:25px;border-bottom:1px solid #727272;margin-bottom:10px;' >" + data[3] + " " + data[1] + "</div>"
			
				 + data[2]
			
			);
			
			//parseHTML(data[3]);
		}
		//console.log(getSelected()+"");
	});

});

function textReader(text){
	for ( var i = 0; i < demoData.length; i++ ){
		if ( demoData[i][0] === String(text).toLowerCase() ){
			return demoData[i];
		}
	}
	return [];
}