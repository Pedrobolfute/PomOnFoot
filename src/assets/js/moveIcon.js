let toy=[];toy[0]=`
*_* <br>
/|\\ <br>
/ \\ <br>
... <br>
`,toy[1]=`
*_* <br>
/|\\ <br>
| | <br>
.., <br>
`,toy[2]=`
*_^ <br>
/|\\ <br>
/ \\ <br>
.,. <br>
`,toy[3]=`
*_* <br>
/|\\ <br>
| | <br>
,.. <br>
`,toy[4]=`
*_* <br>
/|\\  <br>
/ \\ <br>
.., <br>
`,toy[5]=`
*_* <br>
/|\\  <br>
| | <br>
,.. <br>
`;let toyPosition=0;function animationBoy(){let t=document.querySelector(".columnLeft h6");t.innerHTML=toy[toyPosition],(toyPosition+=1)>toy.length-1&&(toyPosition=0)}let k=!0;function animationTimer(){let t=document.querySelector(".dial-plate .time");k?(t.style.transform="scale(1.0)",k=!1):(t.style.transform="scale(1.1)",k=!0)}