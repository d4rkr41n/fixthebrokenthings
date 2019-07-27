// ==UserScript==
// @name         BEGONE Watch Mojo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides WatchMojo and their lies
// @author       d4rkr41n
// @match        https://www.youtube.com/watch*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    console.log("working");

    var blockit = function(item){
        console.log("Blocked one!");
        item.setAttribute("style", "display: none !important;");
        item.remove();
    };

    var huntMojo = function(){
//        var videoList = document.getElementsByClassName("ytd-video-meta-block");
        var videoList = document.getElementsByTagName("ytd-compact-video-renderer");
        console.log("Running");

        if(!videoList) console.log("No Dice");

        for (var i = 0; i < videoList.length; i++) {
            if(videoList[i].innerText.indexOf("WatchMojo.com") != -1) blockit(videoList[i]);
        }
    }
    setInterval(huntMojo,1000);
})();
