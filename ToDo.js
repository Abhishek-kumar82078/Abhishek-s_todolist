var addButton=document.getElementsByClassName('add')
var ulAll=document.getElementById('All');
var ulActive=document.getElementById('Active');
var ulDone=document.getElementById('Done');
var ulDeleted=document.getElementById('Deleted');

var clos = document.getElementsByClassName("close");  
var check= document.getElementsByClassName("checked");

// const lightSkyBlue=
// {
//   backgroundColor:lightskyblue,
// };
var memo=[];

for(var i=0;i<addButton.length ;i++)
{
 addButton[i].addEventListener('click',function()
 {
  console.log('hi');
  var List=document.getElementById('ListName').value;
  var prior=document.getElementById('Priority').value;
  
  //Here I was trying to using jquery but it was undefined
 
  memo.push({
    task_name:List,
    priority:prior
  });

  memo.sort(function(task1,task2)
  {
    return (task1.priority-task2.priority);
  });
 
  

  while (ulActive.firstChild) {
    ulActive.removeChild(ulActive.firstChild);
  }

  while (ulAll.firstChild) {
    ulAll.removeChild(ulAll.firstChild);
  }

  for(var v=0;v<memo.length;v++)
  {
    var newli =document.createElement('li');
  
  var t = document.createTextNode(memo[v].task_name);
  var s = document.createTextNode(memo[v].priority);
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
      var newli2 =document.createElement('li');
      newli2 = newli.cloneNode(true);
      ulAll.appendChild(newli2);
     }
     var span=document.createElement("span");
     var chk=document.createTextNode("\u2714");
     span.className="checked";
     span.appendChild(chk);
     newli.appendChild(span);

     var span2=document.createElement("span");
     var del=document.createTextNode("\uD83D\uDDD1");
     span2.className="close";
     span2.appendChild(del);
     newli.appendChild(span2);
     ulActive.appendChild(newli);
    }

  for (i = 0; i < clos.length; i++) 
  {
    clos[i].onclick = function() 
    {
      var cldl = this.parentElement;
      this.parentElement.style.backgroundColor="Red";
      ulDeleted.appendChild(this.parentElement);
      cldl.removeChild(cldl.childNodes[3]);
      // div.parentElement.removeChild(div);
    }
  }

  for(var j=0;j<check.length;j++)
  {
    check[j].onclick=function()
    {
      console.log("hello");
      this.parentElement.style.backgroundColor="lightGreen";
      this.parentElement.style.textDecoration="line-through";
      ulDone.appendChild(this.parentElement);
      //ulAll.appendChild(this.parentElement);
    } 
  }
 });
 

}


var toggled = false;
$('#toggle').click(function()
{
    var element =$(this.parentElement);
    var t=element.eq(0);
    if(toggled === false)
    {
    
      t.css("background-color","black");
      $('#para').css("color","White");
      $('#circle').css("left","78%");
      toggled=true;
    }
    else
    {
        t.css("background-color","silver");
        $('#para').css("color","black");
        $('#circle').css("left","0%")
        toggled=false;
    }
//    $('body[0]').
});