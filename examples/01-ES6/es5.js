fn1(1,2,3,4,5,6,7,8,90);

function fn1 () {
    console.log(this);
    console.log(arguments);
    console.log('Hello world');
}

console.log(typeof fnExpr)

var fnExpr = function(input) {
    input.a = 3;
    input.b = 'str'
}

var k = {
    a : 1
};
fnExpr(k);
console.log(k)


var obj = {
    a: 123,
    fn: function(constant) {
        return this.a + constant;
    }
}

var obj2 = {
    a: 100500,
}

console.log(obj.fn(2));
var fn1 = obj.fn.bind(obj2);

console.log(fn1.call(obj, 3));

var Gypsy = function(name) {
    var secret = 'I know where gold';
    this.count = 300;
    this.name = name;
    this.secretPlace = function() {
        return secret;
    }
};

Gypsy.prototype.goGo = function() {
    console.log(this.count +' Men and Women go fucking away!! Go Go ' + this.name);
}

var gypsy1 = new Gypsy('Herson wolves');
var gypsy2 = new Gypsy('Kharkov strangers');
console.log(gypsy2.secretPlace());
console.log(gypsy1);

var ClanOfGypsy = function(name) {
    Gypsy.call(this, name);
    this.warSong = 'Ay ne ne ne ne';
}

ClanOfGypsy.prototype = Object.create(Gypsy.prototype);

var gypsyClan = new ClanOfGypsy('Astrakhan fishers');
var gypsyClan1 = new ClanOfGypsy('Moscow hobos');
var gypsyClan2 = new ClanOfGypsy('Saint Petersburg');


console.log(gypsyClan);
gypsyClan.goGo();

ClanOfGypsy.prototype.goGo = function() {
    console.log('Heroine');
}

gypsyClan.goGo();
gypsyClan1.goGo();
gypsyClan2.goGo();

var counter = function() {
    var i = 0;
    return function() {
        return i++;
    }
}

var cc = counter();
console.log(cc())
console.log(cc())
console.log(cc())
console.log(cc())