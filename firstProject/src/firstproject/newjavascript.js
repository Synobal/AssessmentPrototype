var asciiMessage = "";
asciiMessage = prompt("please type in the message");
stringLength = asciiMessage.length;
var M = asciiMessage;
var n = false;
var finalString = "";  
var stringLengthVarying = stringLength -1;
//test

            for (var i = stringLength; i > 0; i--) {
                n = asciiMessage.includes("a", stringLengthVarying);
                if (n == true) {
                    finalString ="01100001" + " " + finalString;
                } else if(n==false) if(n == false){
                    console.log("not a");
                }
                n = asciiMessage.includes("b", stringLengthVarying);
                if (n == true) {
                    finalString = "01100010"  + " " + finalString;
                } else if(n==false) {
                    console.log("not b");
                }
                n = asciiMessage.includes("c", stringLengthVarying);
                if (n == true) {
                    finalString = "01100011" + " " + finalString;
                } else if(n==false) {
                    console.log("not c");
                }
                n = asciiMessage.includes("d", stringLengthVarying);
                if (n == true) {
                    finalString = "01100100"  + " " + finalString;
                } else if(n==false) {
                    console.log("not d");
                }
                n = asciiMessage.includes("e", stringLengthVarying);
                if (n == true) {
                    finalString = "01100101"  + " " + finalString;
                } else if(n==false) {
                    console.log("not e");
                }
                n = asciiMessage.includes("f", stringLengthVarying);
                if (n == true) {
                    finalString = "01100110"  + " " + finalString;
                } else if(n==false) {
                    console.log("not f");
                }
                n = asciiMessage.includes("g", stringLengthVarying);
                if (n == true) {
                    finalString ="01100111" + " " + finalString;
                } else if(n==false) {
                    console.log("not g");
                }
                n = asciiMessage.includes("h", stringLengthVarying);
                if (n == true) {
                    finalString ="01101000" + " " + finalString;
                } else if(n==false) {
                    console.log("not h");
                }
                n = asciiMessage.includes("i", stringLengthVarying);
                if (n == true) {
                    finalString ="01101001" + " " + finalString;
                } else if(n==false) {
                    console.log("not i");
                }
                n = asciiMessage.includes("j", stringLengthVarying);
                if (n == true) {
                    finalString ="01101010" + " " + finalString;
                } else if(n==false) {
                    console.log("not j");
                }
                n = asciiMessage.includes("k", stringLengthVarying);
                if (n == true) {
                    finalString ="01101011" + " " + finalString;
                } else if(n==false) {
                    console.log("not k");
                }
                n = asciiMessage.includes("l", stringLengthVarying);
                if (n == true) {
                    finalString ="01101100" + " " + finalString;
                } else if(n==false) {
                    console.log("not l");
                }
                n = asciiMessage.includes("m", stringLengthVarying);
                if (n == true) {
                    finalString ="01101101" + " " + finalString;
                } else if(n==false) {
                    console.log("not m");
                }
                n = asciiMessage.includes("n", stringLengthVarying);
                if (n == true) {
                    finalString ="01101110" + " " + finalString;
                } else if(n==false) {
                    console.log("not n");
                }
                n = asciiMessage.includes("o", stringLengthVarying);
                if (n == true) {
                    finalString ="01101111" + " " + finalString;
                } else if(n==false) {
                    console.log("not o");
                }
                n = asciiMessage.includes("p", stringLengthVarying);
                if (n == true) {
                    finalString ="01110000" + " " + finalString;
                } else if(n==false) {
                    console.log("not p");
                }
                n = asciiMessage.includes("q", stringLengthVarying);
                if (n == true) {
                    finalString ="01110001" + " " + finalString;
                } else if(n==false) {
                    console.log("not q");
                }
                n = asciiMessage.includes("r", stringLengthVarying);
                if (n == true) {
                    finalString ="01110010" + " " + finalString;
                } else if(n==false) {
                    console.log("not r");
                }
                n = asciiMessage.includes("s", stringLengthVarying);
                if (n == true) {
                    finalString ="01110011" + " " + finalString;
                } else if(n==false) {
                    console.log("not s");
                }
                n = asciiMessage.includes("t", stringLengthVarying);
                if (n == true) {
                    finalString ="01110100" + " " + finalString;
                } else if(n==false) {
                    console.log("not t");
                }
                n = asciiMessage.includes("u", stringLengthVarying);
                if (n == true) {
                    finalString ="01110101" + " " + finalString;
                } else if(n==false) {
                    console.log("not u");
                }
                n = asciiMessage.includes("v", stringLengthVarying);
                if (n == true) {
                    finalString ="01110110" + " " + finalString;
                } else if(n==false) {
                    console.log("not v");
                }
                n = asciiMessage.includes("w", stringLengthVarying);
                if (n == true) {
                    finalString ="01110111" + " " + finalString;
                } else if(n==false) {
                    console.log("not w");
                }
                n = asciiMessage.includes("x", stringLengthVarying);
                if (n == true) {
                    finalString ="01111000" + " " + finalString;
                } else if(n==false) {
                    console.log("not x");
                }
                n = asciiMessage.includes("y", stringLengthVarying);
                if (n == true) {
                    finalString ="01111001" + " " + finalString;
                } else if(n==false) {
                    console.log("not y");
                }
                n = asciiMessage.includes("z", stringLengthVarying);
                if (n == true) {
                    finalString ="01111010" + " " + finalString;
                } else if(n==false) {
                    console.log("not z");
                }
                n = asciiMessage.includes(" ", stringLengthVarying);
                if (n == true) {
                    finalString ="00100000" + " " + finalString;
                } else if(n==false) {
                    console.log("not space");
                }

                
                asciiMessage = asciiMessage.slice(0, stringLengthVarying);
                stringLengthVarying = stringLengthVarying - 1;
                console.log(finalString);

            }
            console.log(finalString);
var label = "original message: ";
var displayMessage = label.concat(M);
document.getElementById("Original_message").innerHTML = displayMessage;
document.getElementById("Binary_message").innerHTML = "original message: " + finalString;
