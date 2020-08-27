// ==UserScript==
// @name         BEGONE Watch Mojo
// @namespace    http://github.com/d4rkr41n
// @version      0.2
// @description  Hides WatchMojo on youtube from impressionable eyes
// @author       d4rkr41n
// @match        https://www.youtube.com/watch*
// @updateURL    https://raw.githubusercontent.com/d4rkr41n/userscripts/master/blockMojo.user.js
// @downloadURL  https://raw.githubusercontent.com/d4rkr41n/userscripts/master/blockMojo.user.js
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
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
