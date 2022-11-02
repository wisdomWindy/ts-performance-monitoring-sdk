console.log('index.ts');
interface Info {
  name:string;
  age:number;
}
type K = number;

// type I = 'x' | 'y';
// let g: Record<I, K> = {
//   x: 1,
//   y: 2
// }


type U = keyof Info;

let f: Record<U, K> = {
  name:1,
  age:10
}
