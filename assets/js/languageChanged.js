/*
MIT License

Copyright (c) 2025 Abendiix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/** Detect language and change texts */
window.addEventListener("load", (event) => {
    if(localStorage.getItem("language") == 'es')
    {
        updateTexts("es");
        document.documentElement.setAttribute("lang", 'es');
    }
    else if (localStorage.getItem("language") == 'en')
    {
        updateTexts("en");
        document.documentElement.setAttribute("lang", 'en');
    }
    else if (localStorage.getItem("language") == 'ja')
    {
        updateTexts("ja");
        document.documentElement.setAttribute("lang", 'ja');
    }
  });
  

function changeToES()
{
    localStorage.setItem("language", "es");
    document.documentElement.setAttribute("lang", 'es');
    updateTexts("es");
}

function changeToEN()
{
    localStorage.setItem("language", "en");
    document.documentElement.setAttribute("lang", 'en');
    updateTexts("en");
}

function changeToJA()
{
    localStorage.setItem("language", "ja");
    document.documentElement.setAttribute("lang", 'ja');
    updateTexts("ja");
}

function updateTexts(language)
{
    if(localStorage.getItem("language") == 'es')
    {
        //Meta
        document.title = "BOTO LABO"

        //Header
        document.getElementById("linktothisweb").ariaLabel = "Enlace a la página de Abendiix (donde estás ahora).";
        document.getElementById("banner").alt = "Logo de Abendiix en su forma expandida. Las letras están en negro y el fondo es transparente (modo claro).";
        document.getElementById("moto").innerHTML = "¡Añade BOTO LABO a tu lista de deseados! - DEMO EN JULIO";
        
        //Languages and modes
        document.getElementById("es").style.textDecoration = "underline";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "none";

        document.getElementById("clearmode").ariaLabel = "Cambiar los colores de la página al modo claro.";
        document.getElementById("clear").alt = "Icono de un sol para cambiar la página al modo claro.";
        document.getElementById("darkmode").ariaLabel = "Cambiar los colores de la página al modo oscuro.";
        document.getElementById("dark").alt = "Icono de una luna para cambiar la página al modo oscuro.";

        document.getElementById("translationauthor").style.display = "none";

        //Sections
        document.getElementById("sections").innerHTML = "Apartados |";
        document.getElementById("sectionsabout").ariaLabel = "Mostrar Acerca de.";
        document.getElementById("sectionsabout").innerHTML = "Acerca de";
        document.getElementById("sectionsabout").ariaLabel = "Mostrar kit de prensa.";
        document.getElementById("sectionspresskit").innerHTML = "Kit de prensa";

        //About
        document.getElementById("bt").innerHTML = "Acerca de BOTO LABO";
        
        document.getElementById("p1").innerHTML = "BOTO LABO es un juego Sokoban-Puzle donde Boto<sup>1</sup>, el protagonista, ¡necesitará la ayuda de sus amigos robot para completar los niveles!";
        document.getElementById("botolabowebgif").alt = "Gif del protagonista de BOTO LABO, Boto, reproduciendo su animación idle. Boto se mueve de arriba a abajo mientras que la hoja de su cabeza le sigue."
        
        document.getElementById("p2").innerHTML = "Estos amigos robot se llaman Mibo<sup>2</sup>, y la única forma de completar los niveles es haciendo que alcancen la bandera<sup>3</sup> de cada nivel. Para lograrlo, tendrás que moverlos y girarlos para encontrar la solución (¡puede haber más de una!)<sup>4</sup>.";
        document.getElementById("mibowebpng").alt = "Mibo, el amigo robot de Boto. Mibo es un robot con una cabeza rectangular con dos ruedas conectadas, con ambas partes unidas por el cuello.";
        document.getElementById("flagwebpng").alt = "La bandera amarilla que aparece en cada nivel en BOTO LABO.";
        document.getElementById("levelwebgif").alt = "Gif de Boto moviéndose por un nivel de ejemplo donde mueve a Mibo para resolverlo.";
        document.getElementById("p3").innerHTML = "4 - ¡Hay 16 formas en las que se puede resolver este nivel! (y sí, ¡Boto puede estirar su pierna hasta el infinito!)";
        
        document.getElementById("p4").innerHTML = "¡Al jugar encontrarás diferentes mecánicas a lo largo de los niveles que te ayudarán a resolverlos y hacer que las interacciones de los Mibos sean más interesantes! (pista: ¡se asustan fácilmente!).";

        //Presskit
        document.getElementById("prsskt").innerHTML = "Kit de prensa";

        document.getElementById("downevery").innerHTML = "Descargar todos los archivos";

        document.getElementById("logopk").alt = "Logo de BOTO LABO. Muestra el protagonista, Boto, mirando hacia la izquierda.";       
        document.getElementById("logosvg").innerHTML = "Descargar SVG";
        document.getElementById("logopng").innerHTML = "Descargar PNG";
        document.getElementById("titleclearpk").alt = "Título de BOTO LABO en blanco.";       
        document.getElementById("titleclearsvg").innerHTML = "Descargar SVG";
        document.getElementById("titleclearpng").innerHTML = "Descargar PNG";
        document.getElementById("titledarkpk").alt = "Título de BOTO LABO en negro.";       
        document.getElementById("titledarksvg").innerHTML = "Descargar SVG";
        document.getElementById("titledarkpng").innerHTML = "Descargar PNG";
        document.getElementById("capsuleartpk").alt = "Arte cápsula de BOTO LABO. Muestra el título del juego y un dibujo de Boto estirando su pierna para alcanzar la bandera.";       
        document.getElementById("capsuleartsvg").innerHTML = "Descargar SVG";
        document.getElementById("capsuleartpng").innerHTML = "Descargar PNG";
        document.getElementById("capsuleartnopk").alt = "Arte cápsula de BOTO LABO. Muestra un dibujo de Boto estirando su pierna para alcanzar la bandera.";       
        document.getElementById("capsuleartnosvg").innerHTML = "Descargar SVG";
        document.getElementById("capsuleartnopng").innerHTML = "Descargar PNG";
        document.getElementById("verticalartpk").alt = "Arte vertical de BOTO LABO. Muestra el título del juego, un dibujo de Boto estirando su pierna para alcanzar la bandera y varios diseños del propio videojuego en la parte de abajo.";       
        document.getElementById("verticalartsvg").innerHTML = "Descargar SVG";
        document.getElementById("verticalartpng").innerHTML = "Descargar PNG";

        //Demos
        document.getElementById("alphav2").innerHTML = "Guadalindie 2026 - Alfa V3";
        document.getElementById("alphav2").innerHTML = "BCN Game Fest 2025 - Alfa V2";
        document.getElementById("alphav1").innerHTML = "Guadalindie 2025 - Alfa V1";
        document.getElementById("pd1").innerHTML = "Aquí encontrarás las demos de BOTO LABO de diferentes ferias de videojuegos. Ambas versiones tienen bugs conocidos y ya se han arreglado para el lanzamiento de la demo de Steam.";
        document.getElementById("pd2").innerHTML = "¡No dudes en ponerte en contacto vía redes sociales o correo electrónico para opinar del juego o notificar cualquier bug!";
        document.getElementById("pd3").innerHTML = "Nota: La interfaz gráfica de la demo tenía el uso de mandos en mente - Referencias para el teclado si juegas la demo con uno:";
        document.getElementById("pd4").innerHTML = "También se puede usar el ratón para hacer click en la interfaz gráfica.";
        document.getElementById("pd5").innerHTML = "Nota: La interfaz gráfica de la demo tenía el uso de mandos en mente - Referencias para el teclado si juegas la demo con uno:";
        document.getElementById("pd6").innerHTML = "También se puede usar el ratón para hacer click en la interfaz gráfica.";
        document.getElementById("pd7").innerHTML = "Nota: La interfaz gráfica de la demo tenía el uso de mandos en mente - Referencias para el teclado si juegas la demo con uno:";
        document.getElementById("pd8").innerHTML = "También se puede usar el ratón para hacer click en la interfaz gráfica.";
        document.getElementById("liy3").innerHTML = "Y del mando -> Q/Barra espaciadora";
        document.getElementById("lib3").innerHTML = "B del mando -> E";
        document.getElementById("lia3").innerHTML = "A del mando -> R";
        document.getElementById("liy1").innerHTML = "Y del mando -> Barra espaciadora";
        document.getElementById("lib1").innerHTML = "B del mando -> E";
        document.getElementById("lia1").innerHTML = "A del mando -> R";
        document.getElementById("liy2").innerHTML = "Y del mando -> Barra espaciadora";
        document.getElementById("lib2").innerHTML = "B del mando -> E";
        document.getElementById("lia2").innerHTML = "A del mando -> R";
        document.getElementById("lix").innerHTML = "X del mando -> Q";
        document.getElementsByClassName
        document.getElementById("capsuleartnopk").alt = "Arte cápsula de BOTO LABO. Muestra un dibujo de Boto estirando su pierna para alcanzar la bandera.";

        //Socials
        document.getElementById("rsslink").ariaLabel = "Enlace al RSS de Abendiix.";
        document.getElementById("rss").alt = "Icono negro de RSS que redirige al RSS de Abendiix.";
        document.getElementById("twitterlink").ariaLabel = "Enlace al Twitter de Abendiix.";
        document.getElementById("twitter").alt = "Icono negro de Twitter que redirige al perfil de Abendiix.";
        document.getElementById("blueskylink").ariaLabel = "Enlace al Bluesky de Abendiix.";
        document.getElementById("bluesky").alt = "Icono negro de Bluesky que redirige al perfil de Abendiix.";
        document.getElementById("tiktoklink").ariaLabel = "Enlace al Bluesky de Abendiix.";
        document.getElementById("tiktok").alt = "Icono negro de Bluesky que redirige al perfil de Abendiix.";
        document.getElementById("instagramlink").ariaLabel = "Enlace al Bluesky de Abendiix.";
        document.getElementById("instagram").alt = "Icono negro de Bluesky que redirige al perfil de Abendiix.";
        document.getElementById("youtubelink").ariaLabel = "Enlace al Bluesky de Abendiix.";
        document.getElementById("youtube").alt = "Icono negro de Bluesky que redirige al perfil de Abendiix.";
        document.getElementById("redditlink").ariaLabel = "Enlace al Bluesky de Abendiix.";
        document.getElementById("reddit").alt = "Icono negro de Bluesky que redirige al perfil de Abendiix.";

        //Contact section
        document.getElementById("contact").innerHTML = "Contactar via email";
        document.getElementById("copy").ariaLabel = "Copiar email de contacto de Abendiix al portapapeles.";
        document.getElementById("copy").innerHTML = "Copiar";
        document.getElementById("openApp").ariaLabel = "Abrir aplicación de email por defecto para contactar con Abendiix.";
        document.getElementById("openApp").innerHTML = "Abrir aplicación";
        document.getElementById("openApp").href = "mailto:contacto@abendiix [.] com";

        //Copyright
        document.getElementById("cc0").ariaLabel = "Enlace a la página de Creative Commons sobre CC0.";
        document.getElementById("fontAwe").ariaLabel = "Enlace a la página de Font Awesome.";

        //Made by
        document.getElementById("madeby").innerHTML = "Hecho por";
    }
    else if (localStorage.getItem("language") == 'en')
    {
        //Meta
        document.title = "BOTO LABO"

        //Header
        document.getElementById("linktothisweb").ariaLabel = "Link to BOTO LABO's website (where you are now).";
        document.getElementById("banner").alt = "BOTO LABO's title design.";
        document.getElementById("moto").innerHTML = "Wishlist BOTO LABO! - DEMO IN JULY";
        
        //Languages and modes
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "underline";
        document.getElementById("ja").style.textDecoration = "none";

        document.getElementById("clearmode").ariaLabel = "Change website colors to clear mode.";
        document.getElementById("clear").alt = "Icon showing a sun for changing the website to clear mode.";
        document.getElementById("darkmode").ariaLabel = "Change website colors to dark mode.";
        document.getElementById("dark").alt = "Icon showing a moon for changing the website to dark mode.";

        document.getElementById("translationauthor").style.display = "none";

        //Sections
        document.getElementById("sections").innerHTML = "Sections |";
        document.getElementById("sectionsabout").ariaLabel = "Show About.";
        document.getElementById("sectionsabout").innerHTML = "About";
        document.getElementById("sectionsabout").ariaLabel = "Show Presskit.";
        document.getElementById("sectionspresskit").innerHTML = "Presskit";

        //About
        document.getElementById("bt").innerHTML = "About BOTO LABO";
        
        document.getElementById("p1").innerHTML = "BOTO LABO is a Sokoban-Puzzle game where Boto<sup>1</sup>, the protagonist, will need the help of their robot friends to complete the levels!";
        document.getElementById("botolabowebgif").alt = "Gif of BOTO LABO's protagonist, Boto, playing their idle animation. Boto is moving up and down as the leaf on their head follows them."
        
        document.getElementById("p2").innerHTML = "These robot friends are called Mibo<sup>2</sup>, and the only way they can complete the levels is by making them reach each level's flag<sup>3</sup>. To do so, you will have to move and turn them around to find the solution (which may be more than one!)<sup>4</sup>.";
        document.getElementById("mibowebpng").alt = "Mibo, Boto's robot friend. Mibo is a robot with a rectangular head and two connected wheels, with both parts joined by their neck.";
        document.getElementById("flagwebpng").alt = "The yellow flag that shows on each level on BOTO LABO.";
        document.getElementById("levelwebgif").alt = "Gif of Boto moving around in an example level where it moves Mibo around to solve it.";
        document.getElementById("p3").innerHTML = "4 - There are 16 ways this level can be solved! (and yes, Boto can stretch their leg to infinity!)";
        
        document.getElementById("p4").innerHTML = "While playing you will find different mechanics across the levels that will help you solve them and make the Mibos' interactions a lot more interesting! (hint: they get scared very easily!).";

        //Presskit
        document.getElementById("prsskt").innerHTML = "Presskit";

        document.getElementById("downevery").innerHTML = "Download every file";

        document.getElementById("logopk").alt = "BOTO LABO's logo. It shows its protagonist, Boto, looking to the left.";       
        document.getElementById("logosvg").innerHTML = "Download SVG";
        document.getElementById("logopng").innerHTML = "Download PNG";
        document.getElementById("titleclearpk").alt = "BOTO LABO's title in white.";       
        document.getElementById("titleclearsvg").innerHTML = "Download SVG";
        document.getElementById("titleclearpng").innerHTML = "Download PNG";
        document.getElementById("titledarkpk").alt = "BOTO LABO's title in black.";       
        document.getElementById("titledarksvg").innerHTML = "Download SVG";
        document.getElementById("titledarkpng").innerHTML = "Download PNG";
        document.getElementById("capsuleartpk").alt = "BOTO LABO's capsule art. It shows the title of the game and a drawing of Boto stretching their leg to reach for the flag.";       
        document.getElementById("capsuleartsvg").innerHTML = "Download SVG";
        document.getElementById("capsuleartpng").innerHTML = "Download PNG";
        document.getElementById("capsuleartnopk").alt = "BOTO LABO's capsule art. It shows a drawing of Boto stretching their leg to reach for the flag.";       
        document.getElementById("capsuleartnosvg").innerHTML = "Download SVG";
        document.getElementById("capsuleartnopng").innerHTML = "Download PNG";
        document.getElementById("verticalartpk").alt = "BOTO LABO's vertical art. It shows the title of the game and a drawing of Boto stretching their leg to reach for the flag and some design from the game at the bottom.";       
        document.getElementById("verticalartsvg").innerHTML = "Download SVG";
        document.getElementById("verticalartpng").innerHTML = "Download PNG";

        //Demos
        document.getElementById("alphav3").innerHTML = "Guadalindie 2026 - Alpha V3";
        document.getElementById("alphav2").innerHTML = "BCN Game Fest 2025 - Alpha V2";
        document.getElementById("alphav1").innerHTML = "Guadalindie 2025 - Alpha V1";
        document.getElementById("pd1").innerHTML = "Here you will find BOTO LABO's demos from different game festivals. Both available versions have known bugs and have already been fixed for the Steam's demo release in July.";
        document.getElementById("pd2").innerHTML = "Feel free to contact via social media or email to give feedback or to notify any bugs!";
        document.getElementById("pd3").innerHTML = "Notes: The demo's GUI had the use of controllers in mind - Keyboard references in case you play the demo with one:";
        document.getElementById("pd4").innerHTML = "You can also use the mouse to click the GUI.";
        document.getElementById("pd5").innerHTML = "Notes: The demo's GUI had the use of controllers in mind - Keyboard references in case you play the demo with one:";
        document.getElementById("pd6").innerHTML = "You can also use the mouse to click the GUI.";
        document.getElementById("pd7").innerHTML = "Notes: The demo's GUI had the use of controllers in mind - Keyboard references in case you play the demo with one:";
        document.getElementById("pd8").innerHTML = "You can also use the mouse to click the GUI.";
        document.getElementById("liy3").innerHTML = "Controller's Y -> Q/Space Bar";
        document.getElementById("lib3").innerHTML = "Controller's B -> E";
        document.getElementById("lia3").innerHTML = "Controller's A -> R";
        document.getElementById("liy1").innerHTML = "Controller's Y -> Space Bar";
        document.getElementById("lib1").innerHTML = "Controller's B -> E";
        document.getElementById("lia1").innerHTML = "Controller's A -> R";
        document.getElementById("liy2").innerHTML = "Controller's Y -> Space Bar";
        document.getElementById("lib2").innerHTML = "Controller's B -> E";
        document.getElementById("lia2").innerHTML = "Controller's A -> R";
        document.getElementById("lix").innerHTML = "Controller's X -> Q";

        //Socials
        document.getElementById("rsslink").ariaLabel = "Link to Abendiix's RSS.";
        document.getElementById("rss").alt = "RSS icon in black (clear mode) that redirects to Abendiix's RSS.";
        document.getElementById("twitterlink").ariaLabel = "Link to Abendiix's Twitter.";
        document.getElementById("twitter").alt = "Twitter icon in black (clear mode) that redirects to Abendiix's profile.";
        document.getElementById("blueskylink").ariaLabel = "Link to Abendiix's Bluesky.";
        document.getElementById("bluesky").alt = "Bluesky icon in black (clear mode) that redirects to Abendiix's profile.";
        document.getElementById("tiktoklink").ariaLabel = "Link to Abendiix's TikTok.";
        document.getElementById("tiktok").alt = "TikTok icon in black (clear mode) that redirects to Abendiix's profile.";
        document.getElementById("instagramlink").ariaLabel = "Link to Abendiix's Instagram.";
        document.getElementById("instagram").alt = "Instagram icon in black (clear mode) that redirects to Abendiix's profile.";
        document.getElementById("youtubelink").ariaLabel = "Link to Abendiix's YouTube.";
        document.getElementById("youtube").alt = "YouTube icon in black (clear mode) that redirects to Abendiix's profile.";
        document.getElementById("redditlink").ariaLabel = "Link to Abendiix's Reddit.";
        document.getElementById("reddit").alt = "Reddit icon in black (clear mode) that redirects to Abendiix's profile.";

        //Contact section
        document.getElementById("contact").innerHTML = "Contact via email";
        document.getElementById("copy").ariaLabel = "Copy Abendiix's contact email to clipboard.";
        document.getElementById("copy").innerHTML = "Copy";
        document.getElementById("openApp").ariaLabel = "Open email app by default to contact Abendiix.";
        document.getElementById("openApp").innerHTML = "Open app";
        document.getElementById("openApp").href = "mailto:contact@abendiix [.] com";

        //Copyright
        document.getElementById("cc0").ariaLabel = "Link to Creative Commons page about CC0.";
        document.getElementById("fontAwe").ariaLabel = "Link to Font Awesome's page.";

        //Made by
        document.getElementById("madeby").innerHTML = "Made by";
    }
    else if (localStorage.getItem("language") == 'ja')
    {
        //Meta
        document.title = "Abendiix | ゲーム、ツール、その他！"

        //Header
        document.getElementById("linktothisweb").ariaLabel = "Abendiixのウェブサイトへのリンク（現在のページ）。";
        document.getElementById("banner").alt = "Abendiixのロゴの拡大版。文字は黒で、画像の背景は透明（クリアモード）です。";
        document.getElementById("moto").innerHTML = "Steamウィッシュリスト！";
        
        //Languages and modes
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "underline";

        document.getElementById("clearmode").ariaLabel = "ウェブサイトの色をクリアモードに変更する。";
        document.getElementById("clear").alt = "ウェブサイトをクリアモードに変更するための太陽のアイコン。";
        document.getElementById("darkmode").ariaLabel = "ウェブサイトの色をダークモードに変更する。";
        document.getElementById("dark").alt = "ウェブサイトをダークモードに変更するための月のアイコン。";

        document.getElementById("translationauthor").style.display = "block";

        document.getElementById("rsslink").ariaLabel = "AbendiixのRSSへのリンク。";
        document.getElementById("rss").alt = "AbendiixのRSSにリダイレクトする黒いTwitterアイコン（クリアモード）。";
        document.getElementById("twitterlink").ariaLabel = "AbendiixのTwitterへのリンク。";
        document.getElementById("twitter").alt = "Abendiixのプロフィールにリダイレクトする黒いTwitterアイコン（クリアモード）。";
        document.getElementById("blueskylink").ariaLabel = "AbendiixのBlueskyへのリンク。";
        document.getElementById("bluesky").alt = "Abendiixのプロフィールにリダイレクトする黒いBlueskyアイコン（クリアモード）。";
        document.getElementById("tiktoklink").ariaLabel = "AbendiixのTikTokへのリンク。";
        document.getElementById("tiktok").alt = "Abendiixのプロフィールにリダイレクトする黒いTikTokアイコン（クリアモード）。";
        document.getElementById("instagramlink").ariaLabel = "AbendiixのInstagramへのリンク。";
        document.getElementById("instagram").alt = "Abendiixのプロフィールにリダイレクトする黒いInstagramアイコン（クリアモード）。";
        document.getElementById("youtubelink").ariaLabel = "AbendiixのYouTubeへのリンク。";
        document.getElementById("youtube").alt = "Abendiixのプロフィールにリダイレクトする黒いYouTubeアイコン（クリアモード）。";
        document.getElementById("redditlink").ariaLabel = "AbendiixのRedditへのリンク。";
        document.getElementById("reddit").alt = "Abendiixのプロフィールにリダイレクトする黒いRedditアイコン（クリアモード）。";

        //Contact section
        document.getElementById("contact").innerHTML = "メールでの連絡";
        document.getElementById("copy").ariaLabel = "Abendiixの連絡先メールアドレスをクリップボードにコピーする。";
        document.getElementById("copy").innerHTML = "コピー";
        document.getElementById("openApp").ariaLabel = "Abendiixに連絡するためにデフォルトでメールアプリを開く。";
        document.getElementById("openApp").innerHTML = "アプリを開く";
        document.getElementById("openApp").href = "mailto:contact@abendiix [.] com";

        //Copyright
        document.getElementById("cc0").ariaLabel = "CC0に関するクリエイティブ・コモンズのページへのリンク。";
        document.getElementById("fontAwe").ariaLabel = "Font Awesomeのページへのリンク。";
    }
}
