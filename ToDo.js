var addButton=document.getElementsByClassName('add')

const list = "PPName";
const pr = "PriorityLabel";
var ulAll=document.getElementById('All');
var ulActive=document.getElementById('Active');
var ulDone=document.getElementById('Done');
var ulDeleted=document.getElementById('Deleted');
var ulPrioritised=document.getElementById('Prioritised');

var clos = document.getElementsByClassName("close");
console.log(clos);

var i;
for (  i = 0; i < clos.length; i++) {
  clos[i].onclick=function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// ulAll.addEventListener('click',function()
// {
//   ulAll.style.display=none;
// });

for(var i=0;i<addButton.length ;i++)
{
addButton[i].addEventListener('click',function()
{
  console.log('hi');
  var List=document.getElementById('ListName').value;
  var prior=document.getElementById('Priority').value;
  var newli =document.createElement('li');
  
  var t = document.createTextNode(List);
  var s = document.createTextNode(prior);
  t.className="box";
  s.className="box";
  newli.appendChild(t);

  var spc=document.createTextNode('\u2002');
  newli.appendChild(spc);
  
  newli.appendChild(s);
  if(List==="")
  {
      alert('Please add some appropriate task.');
  }
  else
     {
        ulAll.appendChild(newli);
        ulActive.appendChild(newli);
     }

     //var space=document.createElement('span');
     
     var span=document.createElement("span");
     var txt=document.createTextNode("\uD83D\uDDD1");
     span.className="close";
     span.appendChild(txt);

  newli.appendChild(span);
 

  for (i = 0; i < clos.length; i++) {
    clos[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  localStorage.setItem(list,List);
  localStorage.setItem(pr,prior);

  console.log( localStorage.getItem(list));
  console.log(localStorage.getItem(pr));
});
}

