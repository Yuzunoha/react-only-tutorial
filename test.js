'use strict';

const p = console.log;
const getArray = () => [123, () => 'hello', 'あいう'];

const [a, b] = getArray();
const [c, d, e, f] = getArray();

p('a b() :', a, b());
p('c d() e f :', c, d(), e, f);
