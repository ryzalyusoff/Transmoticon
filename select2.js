
var demoData = [

 // Abbreviation 
 ["bfytw",
"Because f*** you that's why",
"People use this to curse, apparently. Not applicable in Canada.",""],


["lol",
"Laugh out loud",
"Most people use this to tell others that they are trying to laugh hard.Well, the truth is they are not even trying.",""],

["rofl",
"Rolling on the floor",
"Either they are easily amused or currently having a stomach-ache.",""],

["roflmao",
"Rolling on the floor laughing my a** off",
"We dont know why some people love to laugh at their own a**...",""],

["iykwim",
"If you know what I mean",
"Dont worry if you don't get what your friend is telling you.They dont even know what they are saying. Not without Transmoticon.",""],

["lulz",
"a.k.a LOL = Laughing out loud",
"Retards. Retards are everywhere.",""],

["noob",
"Newbie",
"Gamers also use this besides cursing each others' mum.",""],

["tldr",
"Too long didnt read",
"These guys are getting lazier. We hope they turn into zombies someday.",""],

["xoxo",
"Hugs and kisses",
"Girls are full of secret codes. They dont even understand themselves.",""],

["wtf",
"What the f***",
"You can tell that your chatting friend is in a happy mood. You bet.",""],

["imho",
"In my humble opinion","",""],

["idk",
"I dont know",
"It's either ignorant or laziness.",""],

["irl",
"In real life",
"They dont even deserve to use the 'real' word. They have no life.",""],

["brb",
"Be right back",
"That guy is probably gone forever.",""],

["ily",
"I love you",
"Stop chatting with him/her. He's/she's not worth it.",""],

["ty",
"Thank you",
"'And I'm off.' That's what she said.",""],

["np",
"No problem",
"That guy apparently is not excited to help you.",""],

["wth",
"What the hell",
"You managed to piss him off. High five, dude!",""],

["jk",
"Just kidding",
"No. He is not.",""],

["gtfo",
"Get the f*** off",
"Whoever he is, hug him now!",""],

 // Smiley 
 [":)","Happy","This is happy face","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif' />"],
 [":(","Sad","This is sad face","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif' />"],
 [";)","Winking","This is winking eyes","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' />"],
 [":D","Big grin","This is big grin","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' />"],
 [";;)","Batting Eyelashes","This is batting eyelashes","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' />"],
 [">:D<","Big Hug","This is big hug","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/6.gif' />"],
 [":-/","Confused","This is confused","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' />"],
 [":x","Love Struck","This is love struck","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif' />"],
 [":\">","Blushing","This is blushing","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/9.gif' />"],
 [":P","Tongue","This is giving tongue","<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' />"],
];

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
	$('body').append(div);
	
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
	
	$(document).bind("keypress",function(event){
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