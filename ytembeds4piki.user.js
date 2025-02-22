// ==UserScript==
// @name         Youtube Embeds For Pikidiary
// @namespace    http://nomaakip.github.io/
// @version      2025-02-22
// @description  Adds youtube embeds for PikiDiary
// @author       hacks.guide
// @match        https://pikidiary.lol/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pikidiary.lol
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    function checkLinks() {
    document.querySelectorAll('.post').forEach(post => {
    post.innerHTML = post.innerHTML.replace(
         /<a[^>]*href=["'](https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)|https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+))["'][^>]*>(.*?)<\/a>/gi,
        (match, p1, id1, id2) => {
            let videoId = id1 || id2;
            return `<br><iframe style="display:flex; align-self:center;" width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        }
    );
});
}

    checkLinks();
    setInterval(checkLinks, 3000);
})();
