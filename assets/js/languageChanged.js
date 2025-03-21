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
        document.getElementById("moto").innerHTML = "¡Demo en abril!";
        
        //Languages and modes
        document.getElementById("es").style.textDecoration = "underline";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "none";

        document.getElementById("clearmode").ariaLabel = "Cambiar los colores de la página al modo claro.";
        document.getElementById("clear").alt = "Icono de un sol para cambiar la página al modo claro.";
        document.getElementById("darkmode").ariaLabel = "Cambiar los colores de la página al modo oscuro.";
        document.getElementById("dark").alt = "Icono de una luna para cambiar la página al modo oscuro.";

        document.getElementById("translationauthor").style.display = "none";

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
    }
    else if (localStorage.getItem("language") == 'en')
    {
        //Meta
        document.title = "Abendiix | Games, tools and more!"

        //Header
        document.getElementById("linktothisweb").ariaLabel = "Link to Abendiix's website (where you are now).";
        document.getElementById("banner").alt = "Abendiix's logo in expanded form. The letters are black and the background of the image is transparent (clear mode).";
        document.getElementById("moto").innerHTML = "Demo in April!";
        
        //Languages and modes
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "underline";
        document.getElementById("ja").style.textDecoration = "none";

        document.getElementById("clearmode").ariaLabel = "Change website colors to clear mode.";
        document.getElementById("clear").alt = "Icon showing a sun for changing the website to clear mode.";
        document.getElementById("darkmode").ariaLabel = "Change website colors to dark mode.";
        document.getElementById("dark").alt = "Icon showing a moon for changing the website to dark mode.";

        document.getElementById("translationauthor").style.display = "none";

        document.getElementById("botolabowebgif").alt = "(GIF) Boto blinking and going up and down while their leaf follows the up and down motion about their head.";

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
    }
    else if (localStorage.getItem("language") == 'ja')
    {
        //Meta
        document.title = "Abendiix | ゲーム、ツール、その他！"

        //Header
        document.getElementById("linktothisweb").ariaLabel = "Abendiixのウェブサイトへのリンク（現在のページ）。";
        document.getElementById("banner").alt = "Abendiixのロゴの拡大版。文字は黒で、画像の背景は透明（クリアモード）です。";
        document.getElementById("moto").innerHTML = "4月のデモ！";
        
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
