'use strict';
window.onload=function(){
  const hakase1 = document.getElementById("bomb");
  const hakase2 = document.getElementById("win");
  function Card(row,col){
    this.row=row;
    this.col=col;
    this.front;
    this.setFront=function(){
      this.front=`smile.png`;
    };
  }
  const cards=[];
  const rows=['s','d','h','c'];
  const colN=7;//列数
  const btn = document.querySelector('button')
      btn.addEventListener('click', () => {
        window.location.reload();
  })
  for(let i=0;i<rows.length;i++){
    for(let j=1;j<=colN;j++){
      let card=new Card(rows[i],j);
      card.setFront();
      cards.push(card);
    }
  }
  function shuffle(){
    let i=cards.length;
    while(i){
      let index=Math.floor(Math.random()*i--);
      var temp=cards[index];
      cards[index]=cards[i];
      cards[i]=temp;
    }
  }
  shuffle();
  const table=document.getElementById('table');
  for(let i=0;i<rows.length;i++){
    let tr=document.createElement('tr');
    for(let j=0;j<colN;j++){
      let td=document.createElement('td');
      let tempCard=cards[i*colN+j];
      td.classList.add('card','back');
      td.onclick=flip;
      td.col=tempCard.col;
      td.style.backgroundImage=`url(images/${tempCard.front})`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  //let firstCard=null;
  let flipTimerId=NaN;
  let count=0;
  let cc=10;//クリア条件(回数)
  function flip(e){
    let td=e.target;
    if(!td.classList.contains('back') || flipTimerId){
      return;
    }
    td.classList.remove('back');//画像反転
  
    count++;
    if(td.col===1){
      //document.write("救出失敗……<BR>".fontsize(9).fontcolor("blue"));
      //odocument.write( '<img src="images/shippai.png">' );
      hakase1.style.display="block";
      table.style.display="none";
    }else if(count>=cc){
      //document.write("救出成功！！<BR>".fontsize(9).fontcolor("red"));
      //document.write( '<img src="images/laugh.png">' );
      hakase2.style.display="block";
      table.style.display="none";
    }

  }

}
