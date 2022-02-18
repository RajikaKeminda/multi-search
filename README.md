# Multi Search

[Multi Search](https://github.com/RajikaKeminda/multi-search) is a lightweight list filtering library.

### [Demo](https://multi-search.vercel.app)

### Why [Multi Search](https://github.com/RajikaKeminda/multi-search)?
Multi Search provides a way to filter array of object without worrying object keys.

## Installation

Using npm:
```shell
$ npm i multi-search
```
Using yarn:
```shell
$ yarn add multi-search
```
## Example
```js
import search from 'multi-search'

let list = [
  { name: 'Madara Uchiha', age: 25, clan: 'Uchiha Clan' },
  { name: 'Kakashi Hatake', age: 26, clan: 'Hatake Clan' },
  { name: 'Tsunade', age: 45, clan: 'Senju Clan' },
  { name: 'Naruto Uzumaki', age: 18, clan: 'Uzumaki Clan' },
  { name: 'Sakura Haruno', age: 18, clan: 'Uchiha Clan' },
];

console.log(search(list, 45)); // [{ name: 'Tsunade', age: 45, clan: 'Senju Clan' }]

console.log(search(list, 'kakashi')); // [{ name: 'Kakashi Hatake', age: 26, clan: 'Hatake Clan' }]

console.log(search(list, 18)); 
//[
// { name: 'Naruto Uzumaki', age: 18, clan: 'Uzumaki Clan' },
// { name: 'Sakura Haruno', age: 18, clan: 'Uchiha Clan' }
//]
```
