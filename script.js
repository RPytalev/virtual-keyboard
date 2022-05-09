'use strict';
!function(e) {
    let t = {};
    function a(s) {
        if(t[s]) return t[s].exports;
        let r = t[s] = {
            i: s,
            l: !1,
            exports:{}
        };
        return e[s].call(r.exports,r,r.exports,a), r.l = !0, r.exports;
    }
    a.m = e,
    a.c = t,
    a.d = function(e,t,s) {
        a.o(e,t) || Object.defineProperty(e,t, {
            enumerable:!0, get:s
        });
    },
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})
    },
        a.t = function(e,t) {
            if( 1&t && ( e = a(e) ), 8&t )
            return e;
            if(4&t && "object" == typeof e && e && e.__esModule)
            return e;
            let s = Object.create(null);
            if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}), 2&t && "string" != typeof e)
            for(var r in e) a.d(
                s,
                r, 
                function(t) {
                    return e[t];
                }.bind(null,r));
                return s;
        },
        a.n = function(e) {
            let t = e && e.__esModule ? function() {return e.default} : function() {return e};
            return a.d(t,"a",t), t
        },
        a.o = function(e,t) {
            return Object.prototype.hasOwnProperty.call(e,t);
        },
        a.p = "",
        a(a.s = 0)
}

(
    [
        function(e,t,a) {
            "use strict";
            a.r(t);
            class s {
                constructor(e) {
                    this.name = e;
                }
                generateTextarea() {
                    const e = document.createElement("textarea");
                    e.classList.add(this.name),document.body.appendChild(e)
                }
            }
            class r {
                constructor(e,t,a) {
                    this.keyName = t,
                    this.keyClass = e,
                    this.isUpperCase = a
                }
                generateKey() {
                    const e = document.createElement("button");
                    e.classList.add("keyboard__key");
                    let t = "";
                    return t = "ShiftLeft" === this.keyName || "ShiftRight" === this.keyName ?"Shift":"ControlLeft"===this.keyName||"ControlRight"===this.keyName?"Ctrl":"AltLeft"===this.keyName||"AltRight"===this.keyName?"Alt":"Space"===this.keyName?"":"ArrowLeft"===this.keyName?"◄":"ArrowRight"===this.keyName?"►":"ArrowUp"===this.keyName?"▲":"ArrowDown"===this.keyName?"▼":this.keyName,this.keyName.length<2?!0===this.isUpperCase?e.innerHTML=t.toUpperCase():e.innerHTML=t.toLowerCase():e.innerHTML=t,"Space"===this.keyName&&e.classList.add("keyboard__key_extra-wide"),"Tab"!==this.keyName&&"ControlLeft"!==this.keyName&&"ControlRight"!==this.keyName&&"ShiftLeft"!==this.keyName&&"ShiftRight"!==this.keyName&&"Enter"!==this.keyName&&"AltLeft"!==this.keyName&&"AltRight"!==this.keyName&&"Backspace"!==this.keyName||e.classList.add("keyboard__key_wide"),"CapsLock"===this.keyName&&(e.classList.add("keyboard__key_activatable"),e.classList.add("keyboard__key_wide")),e.classList.add(this.keyClass),e}
            }
            const n = [

                ["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],
                ["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Delete"],
                ["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],
                ["ShiftLeft","Backslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","ArrowUp"],
                ["ControlLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]
            ];
            const i = [
                ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],
                ["Tab","q","w","e","r","t","y","u","i","o","p","[","]","Delete"],
                ["CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter"],
                ["ShiftLeft","\\","z","x","c","v","b","n","m",",",".","/","ShiftRight","ArrowUp"],
                ["ControlLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]
            ];
            const o = [
                ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],
                ["Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","Delete"],
                ["CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter"],
                ["ShiftLeft","\\","я","ч","с","м","и","т","ь","б","ю","/","ShiftRight","ArrowUp"],
                ["ControlLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]
            ];
    
            class c {
                constructor(e) {
                    this.name = e
                }
                generateKeyboardContainer() {
                    const e = document.createElement("div");
                    e.classList.add(this.name);
                    const t = document.createElement("div");
                    t.classList.add("keyboard__keys"),e.append(t),document.body.append(e)}
                renderKeys(e,t) {
                    l();
                    const a = document.querySelector(".keyboard__keys");
                    "true" === e ? this.generateKeys(n,i,t).forEach( e => {
                    a.append(e.generateKey()),
                    "Backspace" !== e.keyName && "Delete" !== e.keyName && "Enter" !== e.keyName && "ArrowUp" !== e.keyName || a.append(document.createElement("br"))
                    }):
                    this.generateKeys(n,o,t).forEach(e => {
                        a.append(e.generateKey()),"Backspace"!==e.keyName&&"Delete"!==e.keyName&&"Enter"!==e.keyName&&"ArrowUp"!==e.keyName||a.append(document.createElement("br"))
                    })
                }
                generateKeys(e,t,a) {
                    const s=[];
                    for(let n = 0; n < t.length; n += 1)
                    for(let i = 0; i< t[n].length; i += 1)s.push(new r(e[n][i],t[n][i],a));
                    return s;
                }
            }
            const l = () => {
                const e = document.createElement("div");
                e.classList.add("languages-switch-description"),
                e.innerHTML="Shift Left + Control Left ( en/ru )",
                e.style.fontSize = '600%';
                e.style.fontWeight = 700;
                e.style.color = '#fff';
                document.querySelector(".keyboard__keys").appendChild(e)
            };

            sessionStorage.setItem("isLanguageEng",sessionStorage.getItem("isLanguageEng")),
        
            window.onload = function() {
                new s("keyboard-textarea").generateTextarea();
                const e = new c("keyboard");
                e.generateKeyboardContainer();
                const t = sessionStorage.getItem("isLanguageEng");
                e.renderKeys(t, !1),
                function(e) {
                    document.addEventListener("keydown", t => {
                        m(t.code),
                        u(e,t,t.code,t.key),
                        t.preventDefault()
                        }),
                    document.addEventListener("keyup",e => { 
                        k(e.code)
                    })
                }(e),
                function(e) {
                    let t = "";
                    document.addEventListener("mousedown", a => {
                        a.target.innerHTML;
                        t = "active" === a.target.classList[a.target.classList.length-1] ? a.target.classList[a.target.classList.length-2] : a.target.classList[a.target.classList.length-1],
                        m(t),
                        u(e,a,t),
                        a.preventDefault();
                    }),
                    document.addEventListener("mouseup", e => { 
                        t = "active" === e.target.classList[e.target.classList.length-1] ? e.target.classList[e.target.classList.length-2] : e.target.classList[e.target.classList.length-1], 
                        k(t) 
                    });
                }(e) 
            };

            let y = !1;
            let d = sessionStorage.getItem("isLanguageEng");
            let g = "";
            let f = "";

            function u(e,t,a) {
                if(f = "", "Backspace" === a) f = g.substring(0, g.length-1), g = "";
                else if("Tab" === a) f = "    ";
                else if("Delete" === a) f = "";
                else if("CapsLock" === a) y=!y, f="",   
            
                function(e) {
                    L(),
                    e.renderKeys(sessionStorage.getItem("isLanguageEng"), y),
                    !0===y ? document.querySelector(".keyboard__key_activatable").classList.add("active") : document.querySelector(".keyboard__key_activatable").classList.remove("active");
                }( e,sessionStorage.getItem("isLanguageEng") );

                else if("Enter" === a) f = "\n";
                else if("Space" === a) f = " ";
                else if("ShiftLeft" === a) f = "", t.ctrlKey && t.shiftKey && t.altKey ? (m("ShiftLeft"),m("ControlLeft"),m("AltLeft")) : t.ctrlKey && t.shiftKey && h();
                else if("ControlLeft" === a)f = "", t.ctrlKey && t.shiftKey && t.altKey ? (m("ShiftLeft"),m("ControlLeft"),m("AltLeft")) : t.ctrlKey && t.shiftKey && h();
                else if("ShiftRight" === a)f = "";
                else if("ControlRight" === a)f = "";
                else if("AltLeft" === a||"AltRight" === a) f = "";
                else if("ArrowUp" === a) f = "↑";
                else if("ArrowLeft" === a) f = "←";
                else if("ArrowDown" === a) f = "↓";
                else if("ArrowRight" === a) f = "→";
                else {
                    const e = document.querySelectorAll(".keyboard__key");
                    for(let t = 0; t < e.length; t += 1) {
                        e[t].classList.contains(a) && (f = e[t].innerHTML)
                    } 
                }
                g += f,
                document.querySelector(".keyboard-textarea").innerHTML = g;
            }
            function h() {
                d =!d,
                sessionStorage.setItem("isLanguageEng",d),
                L(),
                new c("keyboard").renderKeys(sessionStorage.getItem("isLanguageEng"), y),
                m("ShiftLeft"),
                m("ControlLeft")
            }
            function L() {
                document.querySelector(".keyboard__keys").innerHTML = "";
            }
            function m(e) {
                document.querySelectorAll(".keyboard__key").forEach(t => {
                    t.classList.contains(e) && t.classList.add("pressed")
                });
            }
            function k(e) {
                document.querySelectorAll(".keyboard__key").forEach(t => {
                    t.classList.contains(e)&&t.classList.remove("pressed")
                });
            }
        }
    ]
);