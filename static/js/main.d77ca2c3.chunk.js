(this["webpackJsonpfcc-drum-machine"]=this["webpackJsonpfcc-drum-machine"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(1),c=r.n(i),s=r(7),d=r.n(s),a=(r(13),r(3)),o=r(4),u=r(6),h=r(5),l=(r(14),[{id:"hi-hat",key:"Q",src:"http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/HiHat%2003.wav-9237-Free-Loops.com.mp3"},{id:"high-hat",key:"W",src:"http://www.denhaku.com/r_box/sr16/sr16hat/tighthat.wav"},{id:"hi-hat closed",key:"E",src:"http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Hi%20Hat%2005-5835-Free-Loops.com.mp3"}]),m=[{id:"drum hit, roll",key:"A",src:"http://www.innisdale.ca/ICS3U/drum.mp3"},{id:"snare drum - rimshot",key:"S",src:"http://www.randomthink.net/labs/html5drums/drumkit/Rimshot.wav"},{id:"drum fill",key:"D",src:"http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/DRUMRLL3.WAV"}],p=[{id:"bass drum",key:"Z",src:"http://www.denhaku.com/r_box/sr16/sr16bd/lodblhrm.wav"},{id:"synth: bass drum",key:"X",src:"http://www.denhaku.com/r_box/sr16/sr16bd/roomkik1.wav"},{id:"drum kick, sub-bass",key:"C",src:"http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drum%20Kick%208-9192-Free-Loops.com.mp3"}];function k(e){return Object(n.jsxs)("button",{className:"drum-pad",id:e.id,onClick:e.onClick,children:[e.letter,Object(n.jsx)("audio",{className:"clip",id:e.letter,src:e.source})]})}var y=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderPad",value:function(e,t){var r=this;return Object(n.jsx)(k,{id:e[t].id,letter:e[t].key,source:e[t].src,onClick:function(){return r.props.onClick(e[t])}})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"drumPads",children:[Object(n.jsx)("div",{className:"firstRow"}),this.renderPad(l,0),this.renderPad(l,1),this.renderPad(l,2),Object(n.jsxs)("div",{className:"secondRow",children:[this.renderPad(m,0),this.renderPad(m,1),this.renderPad(m,2)]}),Object(n.jsxs)("div",{className:"thirdRow",children:[this.renderPad(p,0),this.renderPad(p,1),this.renderPad(p,2)]})]})}}]),r}(c.a.Component),b=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"updateDisplay",value:function(e){var t=document.querySelectorAll("button");for(var r in t){if(t[r].innerText===e.key.toUpperCase())document.querySelector("#display").innerHTML=t[r].id}}},{key:"keyPress",value:function(e){var t=e.key.toUpperCase(),r=document.getElementById(t);switch(t){case"Q":case"W":case"E":case"A":case"S":case"D":case"Z":case"X":case"C":r.play()}}},{key:"handleClick",value:function(e){document.getElementById(e.key).play()}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyPress),window.addEventListener("keydown",this.updateDisplay)}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{id:"drum-machine",children:[Object(n.jsx)(y,{onClick:function(t){e.handleClick(t),e.updateDisplay(t)}}),Object(n.jsx)("div",{id:"display"})]})}}]),r}(c.a.Component),j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),i(e),c(e),s(e)}))};d.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.d77ca2c3.chunk.js.map