function animationBoy(){let r=[];r[0]=`
  *_* <br>
  /|\\ <br>
  / \\ <br>
  .., <br>
  `,r[1]=`
*_^ <br>
/|\\ <br>
/ \\ <br>
.,. <br>
`,r[2]=`
*_* <br>
/|\\ <br>
| | <br>
,.. <br>
`,r[3]=`
*_* <br>
/|\\  <br>
/ \\ <br>
.,. <br>
`,r[4]=`
*_* <br>
/|\\  <br>
| | <br>
,.. <br>
`;let b=document.querySelector(".columnLeft h6"),e=0;setInterval(()=>{b.innerHTML=r[e],(e+=1)>r.length-1&&(e=0)},250)}function animationTimer(){let r=document.querySelector(".dial-plate .time"),b=!0;setInterval(()=>{b?(r.style.transform="scale(1.0)",b=!1):(r.style.transform="scale(1.1)",b=!0)},500)}