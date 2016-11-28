
var M = "";
var C = "";
var K = "";
var D = "";
var keyword = "lemon";
var L = 26;
var asciioffset = 65;

M = prompt("please type in the message");

M = removeSpace(M);
console.log(M);
document.writeln(M);
K = generateEncryptionKey(M, keyword);
console.log(K);
document.writeln(K);


C = encrypt_(M, K)
console.log(C);
document.writeln(C);

D = debugReturnClearText(C, K)
console.log(D);
document.writeln(D);

document.getElementById("original_message").innerHTML = "original message: " + M;
document.getElementById("encrypted_message").innerHTML = "encrypted message: " + C;
document.getElementById("decrypted_message").innerHTML = "decrypted message: " + D;



function removeSpace(message_){
	
	var mwos = "";	
	for (var position = 0; position < message_.length; position++){
		if (message_.charAt(position) != ' '){
		mwos = mwos.concat(message_.charAt(position));
		
	//console.log(mwos);
		
		}
	
	
	
	}
	return mwos.toUpperCase();

}

function generateEncryptionKey(message_, keyword_){
	var key = ""; // the amount of letters in the key must be equal to the amount
	var kwl = keyword_.length;
	var kwu = keyword_.toUpperCase();
	for(var position = 0; position < message_.length; position++){
		key = key.concat(kwu.charAt(position % kwl));
		//console.log(key);
	}
	return key;
}
function encrypt_(message_, key_){
	var encrypted = "";
	
	for (var position = 0; position < message_.length; position++){
	var lettercode = message_.charCodeAt(position);
	var keycode = key_.charCodeAt(position);
	
	encrypted = 
	encrypted.concat(
		String.fromCharCode(((lettercode + keycode)%L) + asciioffset));
		//Console.log(encrypted);
	
	}
	return encrypted;


}

function debugReturnClearText(ciphertext_, key_){
	decrypted = "";
	
	for (var position = 0; position < ciphertext_.length; position++){
	//positions in alphabet: cipher letter, key letter clear text letter
	var cipherpos = ciphertext_.charCodeAt(position) - asciioffset;
	var keypos = key_.charCodeAt(position) - asciioffset;
	var clearpos = (cipherpos - keypos);

		if (clearpos <= 0) //treatment for negative positions -> position goes 
		clearpos += L;
		
		clearpos = clearpos %L;
		
		decrypted = 
		decrypted.concat(
			String.fromCharCode(clearpos + asciioffset));
	}

return decrypted;

}
