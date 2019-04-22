const exp = require('./nodeModule');
console.log(exp);

import { module1, module2, module3 } from './index';

import * as myModule from './moduleAMD';
myModule.Public

import component123 from './moduleDefault';
component123()

const obj = { x:1, z:'str', obj1: { c: 12, str: 'str'} };
const { obj1: { c }, x, z, obj1 } = obj;
const arr = [1,2,100500, 4,5,6,7,8,9,0];
const [x, y,,...arr1] = arr;
console.log(arr1)

const fn = function(...args) {
    console.log(args)
}

fn(1,2,3,4,5,6,7,8,9);


const Module = (function() {
    class BaseClass {

    }

    class Public extends BaseClass{
        constructor() {
            super();
            this.__private__ = new Private();
        }
    }

    class Private {
        constructor() {
            this.name = 'Secret name';
        }
    }

    return {
        Public
    }
})();

const public = new Module.Public();