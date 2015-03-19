$(document).ready(function(){

     //refresh page on browser resize
    $(window).resize(function(){
      console.log('window resized..');
      if($(window).width()>768)
      location.reload(); /* false to get page from cache */
      /* true to fetch page from server */
    });

     $(document).ready(function(){
        $(".bg").interactive_bg(); // function call
         });


      $(function() {
      $(".bg").interactive_bg({
        strength: 12,
        scale: 1.0005,
        animationSpeed: "100ms",
        contain: true,
        wrapContent: false
       });
     });
      

    $(function () {
        $('.tlt').textillate({ 
        	in: { 
          effect: 'FadeIn'
           } 
        });
    });

    // SP
    $(function(){
      		$("#Smash").hide();
      	 $("#info").click(function(){
      	$("#Smash").fadeToggle("fast");
      });
      });


     $(function(){
    $("#SmashSm").hide();
     $("#infoSm").click(function(){
      $("#SmashSm").fadeToggle("fast");
      });
     });
      

     // PJ

     $(function(){
          $("#PJlg").hide();
         $("#info-PJ").click(function(){
        $("#PJlg").fadeToggle("fast");
      });
      });

     $(document).ready(function(){
    $("#PJsm").hide();
     $("#info-PJsm").click(function(){
      $("#PJsm").fadeToggle("fast");
      });
      });

     // RHCP

     $(function(){
          $("#RHCPlg").hide();
         $("#info-RHCP").click(function(){
        $("#RHCPlg").fadeToggle("fast");
      });
      });

     $(document).ready(function(){
    $("#RHCPsm").hide();
     $("#info-RHCPsm").click(function(){
      $("#RHCPsm").fadeToggle("fast");
      });
      });

     // SNP

     $(function(){
          $("#SNPlg").hide();
         $("#info-SNP").click(function(){
        $("#SNPlg").fadeToggle("fast");
      });
      });

     $(document).ready(function(){
    $("#SNPsm").hide();
     $("#info-SNPsm").click(function(){
      $("#SNPsm").fadeToggle("fast");
      });
      });



    $(function(){
    	$('.fancyText').textillate({
    		in: { 
          effect: 'FadeIn',
           }
    	});
    });

    $(function(){
      $(".img-swap").click(function() {
        if ($(this).attr("class") == "img-swap") {
          this.src = this.src.replace("assets/img/BeforeSP.png","assets/img/AfterSP.png");
        } else {
          this.src = this.src.replace("assets/img/AfterSP.png","assets/img/BeforeSP.png");
          //location.reload();
        }
        $(this).toggleClass("on");
      });
    });

    $(function(){
      $(".img-swapSm").click(function() {
        if ($(this).attr("class") == "img-swapSm") {
          this.src = this.src.replace("assets/img/BeforeSP.png","assets/img/AfterSP.png");
        } else {
          this.src = this.src.replace("assets/img/AfterSP.png","assets/img/BeforeSP.png");
          //location.reload();
        }
        $(this).toggleClass("on");
      });
    });


    $(function(){
      $(".PJ-swap").click(function() {
        if ($(this).attr("class") == "PJ-swap") {
          this.src = this.src.replace("assets/img/BeforePJ.png","assets/img/AfterPJ.png");
        } else {
          this.src = this.src.replace("assets/img/AfterPJ.png","assets/img/BeforePJ.png");
        }
        $(this).toggleClass("on");
      });
    });

    $(function(){
      $(".RHCP-swap").click(function() {
        if ($(this).attr("class") == "RHCP-swap") {
          this.src = this.src.replace("assets/img/BeforeRHCP.png","assets/img/AfterRHCP.png");
        } else {
          this.src = this.src.replace("assets/img/AfterRHCP.png","assets/img/BeforeRHCP.png");
        }
        $(this).toggleClass("on");
      });
    });

    $(function(){
      $(".SNP-swap").click(function() {
        if ($(this).attr("class") == "SNP-swap") {
          this.src = this.src.replace("assets/img/BeforeSNP.png","assets/img/AfterSNP.png");
        } else {
          this.src = this.src.replace("assets/img/AfterSNP.png","assets/img/BeforeSNP.png");
        }
        $(this).toggleClass("on");
      });
    });

    $(function(){
          $("#Jam").hide();
         $("#info-PJ").click(function(){
        $("#Jam").fadeToggle("fast");
      });
      });


    // logo hover
    $(function(){
      $(".swap-me").on({
        'mouseover' : function() {
          $(this).attr('src', 'assets/img/down.png');
        },
          'mouseout' : function () {
          $(this).attr('src', 'assets/img/logo.png');
        }
      });
    });


    // jplayer lg

    $(document).ready(function(){

      new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_lg",
        cssSelectorAncestor: "#jp_container_lg"
        
      }, 

      [

        {
          title:"1979",
          mp3:"assets/audio/SP/1979.mp3"
          // m4a:"assets/audio/SP/1979.m4a"
        },
        {
          title:"Today",
          mp3:"assets/audio/SP/Today.mp3"
          // m4a:"assets/audio/SP/Today.m4a"
        },
        {
           title:"Bullet with Butterfly Wings",
          mp3:"assets/audio/SP/Bullet With Butterfly Wings.mp3"
           // m4a:"assets/audio/SP/Bullet With Butterfly Wings.m4a"
        },
         {
           title:"Tonight, Tonight",
           mp3:"assets/audio/SP/Tonight, Tonight.mp3"
          // m4a:"assets/audio/SP/Tonight, Tonight.m4a"
          
        },
        {
          title: "Zero",
          mp3:"assets/audio/SP/Zero.mp3"
          // m4a:"assets/audio/SP/Zero.m4a"
        },
        
        {
          title: "Rhinoceros",
          mp3:"assets/audio/SP/Rhinoceros.mp3"
          // m4a:"assets/audio/SP/Rhinoceros.m4a"
        }
        

        ], 

        {
        swfPath: "assets/js/jquery.jplayer.swf",
        supplied: "mp3, m4a",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true

      });
    });

    // PJ
    $(document).ready(function(){

      new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_pjlg",
        cssSelectorAncestor: "#jp_container_pjlg"
        
      }, 

      [

        {
          title:"Alive",
          mp3:"assets/audio/PJ/Alive.mp3" 
          // m4a:"assets/audio/PJ/Alive.m4a"
        },
        {
          title:"Black",
          mp3:"assets/audio/PJ/Black.mp3"
          // m4a:"assets/audio/PJ/Black.m4a" 
        },
        {
           title:"Even Flow",
          mp3:"assets/audio/PJ/Even Flow.mp3"
           // m4a:"assets/audio/PJ/Even Flow.m4a"
        },
         {
           title:"Jeremy",
          mp3:"assets/audio/PJ/Jeremy.mp3"
          // m4a:"assets/audio/PJ/Jeremy.m4a"
        },
        {

         title:"Betterman",
          mp3:"assets/audio/PJ/Betterman.mp3"
        }
        
        ], 

        {
        swfPath: "assets/js/jquery.jplayer.swf",
        supplied: "mp3, m4a",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true

      });
    });                   //possible problem 

  // RHCP
    $(document).ready(function(){

      new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_rhcplg",
        cssSelectorAncestor: "#jp_container_rhcplg"
        
      }, 

      [

        {
          title:"Under the Bridge",
          mp3:"assets/audio/RHCP/Under The Bridge.mp3" 
          // m4a:"assets/audio/PJ/Alive.m4a"
        },
        {
          title:"Around The World",
          mp3:"assets/audio/RHCP/Around The World.mp3"
          // m4a:"assets/audio/PJ/Black.m4a" 
        },
        {
           title:"Breaking the Girl",
          mp3:"assets/audio/RHCP/Breaking the Girl.mp3"
           // m4a:"assets/audio/PJ/Even Flow.m4a"
        },
         {
           title:"Californication",
          mp3:"assets/audio/RHCP/Californication.mp3"
          // m4a:"assets/audio/PJ/Jeremy.m4a"
        },
        {

         title:"Scar Tissue",
          mp3:"assets/audio/RHCP/Scar Tissue.mp3"
        },

        {

         title:"By the Way",
          mp3:"assets/audio/RHCP/By the Way.mp3"
        }
        
        ], 

        {
        swfPath: "assets/js/jquery.jplayer.swf",
        supplied: "mp3, m4a",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true

      });
    });    

    // SNP
    $(document).ready(function(){

      new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_snplg",
        cssSelectorAncestor: "#jp_container_snplg"
        
      }, 

      [

        {
          title:"Push it",
          mp3:"assets/audio/SNP/Push it.mp3" 
        },
        {
          title:"Whatta Man",
          mp3:"assets/audio/SNP/Whatta Man.mp3"
        },
        {
           title:"Shoop",
          mp3:"assets/audio/SNP/Shoop.mp3"
        }
        ], 

        {
        swfPath: "assets/js/jquery.jplayer.swf",
        supplied: "mp3, m4a",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true

      });
    });   


    // jplayer sm sp

  $(document).ready(function(){


      var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
      {
        mp3: "assets/audio/SP/1979.mp3",
        m4a: "assets/audio/SP/1979.m4a"
      }, {
        cssSelectorAncestor: "#cp_container_1",
        swfPath: "assets/js/jquery.jplayer.swf",
        wmode: "window",
        keyEnabled: true
      });
    });

    // jplayer sm pj

    $(document).ready(function(){


      var myCirclePlayer = new CirclePlayer("#jquery_jplayer_pjsm",
      {
        mp3: "assets/audio/PJ/Black.mp3",
        m4a: "assets/audio/PJ/Black.m4a"
      }, {
        cssSelectorAncestor: "#cp_container_pjsm",
        swfPath: "assets/js/jquery.jplayer.swf",
        wmode: "window",
        keyEnabled: true
      });
    });

    // jplayer sm rhcp

    $(document).ready(function(){

      var myCirclePlayer = new CirclePlayer("#jquery_jplayer_rhcpsm",
      {
        mp3: "assets/audio/RHCP/Under The Bridge.mp3"
      }, {
        cssSelectorAncestor: "#cp_container_rhcpsm",
        swfPath: "assets/js/jquery.jplayer.swf",
        wmode: "window",
        keyEnabled: true
      });
    });
    
  // jplayer sm snp

    $(document).ready(function(){

      var myCirclePlayer = new CirclePlayer("#jquery_jplayer_snpsm",
      {
        mp3: "assets/audio/SNP/Push it.mp3"
      }, {
        cssSelectorAncestor: "#cp_container_snpsm",
        swfPath: "assets/js/jquery.jplayer.swf",
        wmode: "window",
        keyEnabled: true
      });
    });

 });