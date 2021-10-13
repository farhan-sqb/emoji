// JavaScript Document
let emoji = "129402";

for(let x=0; x<100; x++){
	//Make Div
	let div = document.createElement('div');
	div.setAttribute('class', 'flex-item');
	
	//Make Div Paragraph
	let p = document.createElement('p');
	//Make Span In Paragraph
	let span = document.createElement('span');
	span.innerHTML = "&#"+emoji+";<br />";
	//Make Code In Paragraph
	let code = document.createElement('code');
	code.innerHTML = emoji;
	
	p.appendChild(span);
	p.appendChild(code);
	div.appendChild(p);
	
	document.getElementById("flex-container").appendChild(div);	
	
	emoji = Number(emoji)+Number(1);
}