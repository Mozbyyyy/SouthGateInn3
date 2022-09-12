$(document).ready(function(){
    $(".text-room1").hover(function(){
        $(".text-white1").css("color", "white")
        ,$(".triangle-left").css("border-right", "27px solid #E0BB20")
        ,$(".view-button").css("background-color", "#ffff").css("border", "none");
        
    },
    function(){
        $(".text-white1").css("color", "var(--newdarkgreen)")
        ,$(".triangle-left").css("border-right", "27px solid white")
        ,$(".view-button").css("background-color", "transparent").css("border", "2px solid rgba(0,0,0,.1");
    }); 
  });

// second

  $(".text-room2").hover(function(){
    $(".text-white2").css("color", "white")
    ,$(".triangle-left1").css("border-right", "27px solid #E0BB20")
    ,$(".view-button").css("background-color", "#ffff").css("border", "none");
  },
  function(){
    $(".text-white2").css("color", "var(--newdarkgreen)")
    ,$(".triangle-left1").css("border-right", "27px solid white")
    ,$(".view-button").css("background-color", "transparent").css("border", "2px solid rgba(0,0,0,.1");
  });

// third

  $(".text-room3").hover(function(){
    $(".text-white3").css("color", "white")
    ,$(".view-button").css("background-color", "#ffff").css("border", "none");
  },
  function(){
    $(".text-white3").css("color", "var(--newdarkgreen)")
    ,$(".view-button").css("background-color", "transparent").css("border", "2px solid rgba(0,0,0,.1");
  }); 

// fourth

  $(".text-room4").hover(function(){
    $(".text-white4").css("color", "white")
    ,$(".view-button").css("background-color", "#ffff").css("border", "none");
  },
  function(){
    $(".text-white4").css("color", "var(--newdarkgreen)")
    ,$(".view-button").css("background-color", "transparent").css("border", "2px solid rgba(0,0,0,.1");
  }); 



