// JavaScript Document

$(document).ready(function(){
	$("input").blur(function(){
		if($(this).val() == ""){
			$(this).css({"border-color" : "#f00"});
		}
	});
	$("#botao").click(function(){
		var cont = 0;
		$("div input").each(function(){
			if($(this).val()== ""){
				$(this).css({"border" : "1px solid #F00"});
				cont++;
				var msg1 = document.querySelector('.msg1');
				msg1.innerHTML = 'Um dos campos não está preenchido*';
			}else{//se campos estiverem preenchidos:
				$(this).css({"border" : "none"});
			}
		});
		if(cont == 0){
			$("#form").submit();
		}
	});
});