// ==UserScript==
// @name         BOR Login Fix
// @namespace    http://github.com/d4rkr41n
// @version      0.2
// @description  Logging in shouldn't be harder for the users. This should help with that.
// @author       d4rkr41n
// @match        https://adfs.sdbor.edu/adfs/ls*
// @updateURL    https://raw.githubusercontent.com/d4rkr41n/userscripts/BOR-login/usd.js
// @downloadURL  https://raw.githubusercontent.com/d4rkr41n/userscripts/BOR-login/usd.js
// ==/UserScript==
​
window.onload=(function() {
    'use strict';
    document.getElementById("emailInput").value = "@usd.edu";
    document.getElementsByClassName("submit")[0].click();
})();
