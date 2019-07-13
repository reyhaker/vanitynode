var bitcoin = require("bitcoinjs-lib");
var hit = 0;
var tryN = 0;
var CoinKey = require('coinkey') //1.0.0

while(hit < 1)
{
var ck = new CoinKey.createRandom()

var pkey = ck.privateWif;

var address = ck.publicAddress
var vanity = address.substring(0,4);
console.log(tryN + " " + vanity);
if (vanity == "1BaF" || vanity == "1Fee")     {
	console.log(address + " , " + pkey);
	hit = 2;

}
	tryN++;
}
