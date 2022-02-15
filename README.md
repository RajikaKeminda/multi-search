# multi-search

## Installation

Using npm:
```shell
$ npm i multi-search
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
