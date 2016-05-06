<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Ableto</title>
        <meta name="description" content="Ableto.co es una aplicación web que permite a personas con movilidad reducida comunicarse de forma más independiente, rápida e intuitiva.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="stylesheet" href="assets/css/normalize.min.css">
        <!--<link rel="stylesheet" href="css/main.css">-->
        <link rel="stylesheet" href="style.css">

        <script src="assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
        <script src="assets/js/vendor/jquery.fullPage.min.js"></script>
        <script src="assets/js/snap.svg-min.js"></script>
        <script src="assets/js/classie.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->


        <header class="brandandlogo">
          <div class="container">
            <div class="col-md-9 logo">
              <figure>
                <img id="logo" src="assets/img/logo.png" alt="">
              </figure>
            </div>


          <div class="col-md-3 navs">
            <div id="open-button" class="hamburglar">

                <div class="burger-icon">
                  <div class="burger-container">
                    <span class="burger-bun-top"></span>
                    <span class="burger-filling"></span>
                    <span class="burger-bun-bot"></span>
                  </div>
                </div>

                <!-- svg ring containter -->
                <div class="burger-ring">
                  <svg class="svg-ring">
                    <path class="path" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4" d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2" />
                  </svg>
                </div>
                <!-- the masked path that animates the fill to the ring -->

                 <svg width="0" height="0">
                   <mask id="mask">
                <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" stroke-miterlimit="10" stroke-width="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
                   </mask>
                 </svg>
                <div class="path-burger">
                  <div class="animate-path">
                    <div class="path-rotation"></div>
                  </div>
                </div>

              </div>

              <div class="lang">
                <ul>
                  <li><a href="#">ES</a> /</li>
                  <li><a href="#">EN</a> /</li>
                  <li><a href="#">DE</a></li>
                </ul>
              </div>

              <div class="menu-wrap">
                <div class="morph-shape" id="morph-shape" data-morph-open="M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">
                    <path d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z"/>
                  </svg>
                </div>
              <nav class="menu">
                <ul class="icon-list">
                  <li class="link-menu"><a href="#home"><span>Home</span></a></li>
                  <li><a href="#what"><span>¿Qué es Able To?</span></a></li>
                  <li><a href="#app"><span>La App</span></a></li>
                  <li><a href="#contact"><span>Contacto</span></a></li>
                </ul>
              </nav>
            </div>



          </div>

          </div>

        </header>

        <div id="overlay" class="overlay-ab"></div>

        <div id="fullpage">

          <section class="section home">
            <div class="container hello">
              <h2><span class="uppercase">Bienvenido a</span> Able To</h2>
              <h1 class="main-title">
                <span class="inline"><span id="letter">a</span><span>b</span><span>l</span><span>e</span><span>t</span><span>o</span><span>.</span><span>c</span><span>o</span><span>m</span><span>m</span><span>u</span><span>n</span><span>i</span><span>c</span><span>a</span><span>t</span><span>e</span><span>,</span></span>
                <span class="inline"><span>s</span><span>p</span><span>e</span><span>a</span><span>k</span> <span>a</span><span>n</span><span>d</span> <span>b</span><span>e</span> <span>h</span><span>e</span><span>a</span><span>r</span><span>d</span>
                </span>
              </h1>
            </div>
          </section>

          <section class="section what">
            <div class="container explain">
              <h2>¿QUÉ ES Able to?</h2>
              <p>Ableto.co es una aplicación web que permite a personas con movilidad reducida comunicarse de forma más independiente, rápida e intuitiva.
                Está especialmente pensada para personas que, debido a una enfermedad, han perdido el habla y necesitan la ayuda de un dispositivo tecnológico para ello.
                Con el movimiento de un solo dedo serán capaces de comunicarse con cualquier persona a través de voz o de forma escrita.</p>
                <!--<iframe src="https://player.vimeo.com/video/152337769" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>-->
                <div class="video-box">
                  <div class="embed-container">
                    <iframe src='https://player.vimeo.com/video/152337769' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                  </div>
                </div>


            </div>
          </section>

          <section class="section app">
              <div class="container app-content">

                <h2>LA APLICACIÓN</h2>
                <span>AbleTo estará disponible en cualquier dispositivo: ordenador, móvil o tablet</span>

                <!-- a low-tech hack for pre-loading the images -->
                <div class="preload" style="overflow: hidden; width: 0px; height: 0px">
                  <img src="assets/images/site1.jpg" />
                  <img src="assets/images/site2.jpg" />
                  <img src="assets/images/site3.jpg" />
                  <img src="assets/images/site3r.jpg" />
                  <img src="assets/images/site4.jpg" />
                  <img src="assets/images/site4r.jpg" />
                </div>

                <div class="md-slider">
                  <nav class="md-nav-icons">

                  </nav>
                  <div class="md-device-wrapper">
                    <div class="md-device md-device-1">
                      <a href="#"><img src="assets/images/site1.jpg" /></a>
                      <div class="md-border-element"></div>
                      <div class="md-base-element"></div>
                    </div>
                  </div>
                </div>



              </div>
          </section>
          <section class="section contact">
              <div class="container contact-content">

                <h2>¿HABLAMOS?</h2>
                <p><strong>¿Quieres enterarte y participar en nuestros progresos?</strong></p>
                <p>Danos tu email y te mantendremos informado</p>

                <div id="mc_embed_signup">

                    <form action="//ableto.us13.list-manage.com/subscribe/post?u=759b28a3012fe9e781a6bd466&amp;id=bcefd4e557" class="form-horizontal validate" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" role="form" method="POST" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                      <div class="col-xs-12 col-md-offset-3 col-md-6 mc-field-group">
                        <div class="form-group centered">
                          <input type="email" id="mce-EMAIL" class="form-control required email" name="EMAIL" placeholder="Email" aria-describedby="basic-addon1">
                        </div>
                      </div>

                      <div class="col-xs-12 col-md-offset-3 col-md-6 maxsizeform mc-field-group">
                        <div class="form-group col-centered">
                          <textarea class="form-control" cols="30" rows="10" placeholder="¿Tienes algo que decirnos?" id="mce-MMERGE1" name="MMERGE1" ></textarea>
                        </div>
                      </div>

                      <div class="chekbox">
                        <label>
                          <input name="group[3417][1]" id="mce-group[3417]-3417-0" type="checkbox" value="1">
                          Y también me gustaría probar AbleTo antes del lanzamiento.
                        </label>
                      </div>

                      <div class="col-xs-12">
                        <button id="mc-embedded-subscribe" name="send" class="btn btn-progress-lateral btn-send centered">¡Recibir novedades!</button>
                      </div>

                    </div>


                  </form>
                </div>


                <div class="col-xs-12 social">
                  <div><a href="https://twitter.com/ableto_co" target="_blank"><i class="fa fa-twitter twitter"></i></a></div>
                  <div><a href="https://www.facebook.com/abletoco-773876932711643/" target="_blank"><i class="fa fa-facebook facebook"></i></a></div>
                </div>

              </div>


          </section>
        </div>
        <script src="assets/js/main3.js"></script>
        <script src="assets/js/morphingDevices.js"></script>
        <script src="assets/js/vendor/ableto-btns.js"></script>
        <script src="assets/js/plugins.js"></script>
        <script src="assets/js/main.js"></script>
        <script>
        $("#mc-embedded-subscribe").speaksyBtnProgress({
            time: 1000,
            "easing": "linear"
          },
          function(event){
            document.getElementById("mc-embedded-subscribe-form").submit();
          }
        );


        </script>


        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-61300141-1','auto');ga('send','pageview');
        </script>
    </body>
</html>
