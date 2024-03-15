const symkey = Symbol.for("mySymbol");
console.log(`key: ${symkey.toString()}`);
console.log(`value: ${Symbol.keyFor(symkey)}`);