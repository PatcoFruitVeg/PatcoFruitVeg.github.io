"use strict";function scrollToSection(e){event.preventDefault(),$("body").animate({scrollTop:$("#"+e).offset().top-60})}!function(e,t,a,o,n,s,c){e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date,s=t.createElement(a),c=t.getElementsByTagName(a)[0],s.async=1,s.src=o,c.parentNode.insertBefore(s,c)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-53461628-1","auto"),ga("send","pageview"),$("body").scrollspy({target:"#bs-example-navbar-collapse-1",offset:70});