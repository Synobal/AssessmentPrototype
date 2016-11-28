var asciiMessage = "";
asciiMessage = prompt("please type in the message");
asciiMessage = asciiMessage.replace(/\s+/g, '');
stringLength = asciiMessage.length;
var M = asciiMessage;
var n = false;
var finalString = "";  
var stringLengthVarying = stringLength;
//test

            for (var i = (stringLength/8); i > 0; i--) {
                n = asciiMessage.includes("01100001", stringLengthVarying);
                if (n == true) {
                    finalString ="a" + finalString;
                } else if(n==false) if(n == false){
                    console.log("not a");
                }
                n = asciiMessage.includes("01100010", stringLengthVarying);
                if (n == true) {
                    finalString = "b"  + finalString;
                } else if(n==false) {
                    console.log("not b");
                }
                n = asciiMessage.includes("01100011", stringLengthVarying);
                if (n == true) {
                    finalString = "c" + finalString;
                } else if(n==false) {
                    console.log("not c");
                }
                n = asciiMessage.includes("01100100", stringLengthVarying);
                if (n == true) {
                    finalString = "d"  + finalString;
                } else if(n==false) {
                    console.log("not d");
                }
                n = asciiMessage.includes("01100101", stringLengthVarying);
                if (n == true) {
                    finalString = "e"  + finalString;
                } else if(n==false) {
                    console.log("not e");
                }
                n = asciiMessage.includes("01100110", stringLengthVarying);
                if (n == true) {
                    finalString = "f"  + finalString;
                } else if(n==false) {
                    console.log("not f");
                }
                n = asciiMessage.includes("01100111", stringLengthVarying);
                if (n == true) {
                    finalString ="e" + finalString;
                } else if(n==false) {
                    console.log("not g");
                }
                n = asciiMessage.includes("01101000", stringLengthVarying);
                if (n == true) {
                    finalString ="h" + finalString;
                } else if(n==false) {
                    console.log("not h");
                }
                n = asciiMessage.includes("01101001", stringLengthVarying);
                if (n == true) {
                    finalString ="i" + finalString;
                } else if(n==false) {
                    console.log("not i");
                }
                n = asciiMessage.includes("01101010", stringLengthVarying);
                if (n == true) {
                    finalString ="j" + finalString;
                } else if(n==false) {
                    console.log("not j");
                }
                n = asciiMessage.includes("01101011", stringLengthVarying);
                if (n == true) {
                    finalString ="k" + finalString;
                } else if(n==false) {
                    console.log("not k");
                }
                n = asciiMessage.includes("01101100", stringLengthVarying);
                if (n == true) {
                    finalString ="l" + finalString;
                } else if(n==false) {
                    console.log("not l");
                }
                n = asciiMessage.includes("01101101", stringLengthVarying);
                if (n == true) {
                    finalString ="m" + finalString;
                } else if(n==false) {
                    console.log("not m");
                }
                n = asciiMessage.includes("01101110", stringLengthVarying);
                if (n == true) {
                    finalString ="n" + finalString;
                } else if(n==false) {
                    console.log("not n");
                }
                n = asciiMessage.includes("01101111", stringLengthVarying);
                if (n == true) {
                    finalString ="o" + finalString;
                } else if(n==false) {
                    console.log("not o");
                }
                n = asciiMessage.includes("01110000", stringLengthVarying);
                if (n == true) {
                    finalString ="p" + finalString;
                } else if(n==false) {
                    console.log("not p");
                }
                n = asciiMessage.includes("01110001", stringLengthVarying);
                if (n == true) {
                    finalString ="q" + finalString;
                } else if(n==false) {
                    console.log("not q");
                }
                n = asciiMessage.includes("01110010", stringLengthVarying);
                if (n == true) {
                    finalString ="r" + finalString;
                } else if(n==false) {
                    console.log("not r");
                }
                n = asciiMessage.includes("01110011", stringLengthVarying);
                if (n == true) {
                    finalString ="s" + finalString;
                } else if(n==false) {
                    console.log("not s");
                }
                n = asciiMessage.includes("01110100", stringLengthVarying);
                if (n == true) {
                    finalString ="t" + finalString;
                } else if(n==false) {
                    console.log("not t");
                }
                n = asciiMessage.includes("01110101", stringLengthVarying);
                if (n == true) {
                    finalString ="u" + finalString;
                } else if(n==false) {
                    console.log("not u");
                }
                n = asciiMessage.includes("01110110", stringLengthVarying);
                if (n == true) {
                    finalString ="v" + finalString;
                } else if(n==false) {
                    console.log("not v");
                }
                n = asciiMessage.includes("01110111", stringLengthVarying);
                if (n == true) {
                    finalString ="w" + finalString;
                } else if(n==false) {
                    console.log("not w");
                }
                n = asciiMessage.includes("01111000", stringLengthVarying);
                if (n == true) {
                    finalString ="x" + finalString;
                } else if(n==false) {
                    console.log("not x");
                }
                n = asciiMessage.includes("01111001", stringLengthVarying);
                if (n == true) {
                    finalString ="y" + finalString;
                } else if(n==false) {
                    console.log("not y");
                }
                n = asciiMessage.includes("01111010", stringLengthVarying);
                if (n == true) {
                    finalString ="z" + finalString;
                } else if(n==false) {
                    console.log("not z");
                }
                n = asciiMessage.includes("00100000", stringLengthVarying);
                if (n == true) {
                    finalString = " " + finalString;
                } else if(n==false) {
                    console.log("not space");
                }

                
                asciiMessage = asciiMessage.slice(0, stringLengthVarying);
                stringLengthVarying = stringLengthVarying - 8;
                console.log(finalString);

            }
            console.log(finalString);
var label = "original message: ";
var displayMessage = label.concat(M);
document.getElementById("Original_message").innerHTML = displayMessage;
document.getElementById("Binary_message").innerHTML = "original message: " + finalString;
