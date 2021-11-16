function w3_open() {
    document.getElementById("mytext").style.display = "block";
  }
  
  function open_tab(){
      var stat=document.getElementById("mylist").style.display
      if(stat=="none")
      document.getElementById("mylist").style.display = "block";
      else
      document.getElementById("mylist").style.display = "none";



  }
  function w_open(x)
  {
      document.getElementById(x).style.color = "white";
  }

  function w_close(x)
  {
      document.getElementById(x).style.color = "rgb(53, 48, 48)";
  }

  function w3_close() {
    document.getElementById("mytext").style.display = "none";
  }
  
  function showMore(){
      document.getElementById("load").style.display = "none";
      document.getElementById("second").style.display = "block";
  }
  
  function show()
  {
      document.getElementById("collapsible").style.display = "none";
      document.getElementById("load").style.display = "block";
      setTimeout(showMore, 1000);
  }
  
  

  var navbar = document.querySelector('.navbarDiv')
  window.onscroll = function() {
      if (window.pageYOffset > 0) {
          navbar.classList.add('scrolled')

          if (document.body.scrollTop > 5500 || document.documentElement.scrollTop > 5500) {
           count(182)
           count2(265)
          }
          
      } else {
          navbar.classList.remove('scrolled')
      }
  }

  function count(max){
      if(document.getElementById("demo").innerHTML=="")
      {var x=0;
      var y = setInterval(function() {
          document.getElementById("demo").innerHTML=x;
          x=x+1;

          if (x > max) {
         clearInterval(y);
         document.getElementById("demo").innerHTML = max;
       }
}, 10);

      }
  }


  function count2(max){
      if(document.getElementById("demo2").innerHTML=="")
      {var x=0;
      var y = setInterval(function() {
          document.getElementById("demo2").innerHTML=x;
          x=x+1;

          if (x > max) {
         clearInterval(y);
         document.getElementById("demo2").innerHTML = max;
       }
}, 10);
      }


  }



  



  