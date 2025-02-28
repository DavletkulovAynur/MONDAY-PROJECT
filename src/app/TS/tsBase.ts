//TODO: ADD
function add(a: number, b?: number): number {
  return a + (b ?? 0);
}

console.log(add(5)); // 5
console.log(add(5, 10));  // 15
console.log(add(5, undefined)); /// 5

//************************ */

//TODO: Тема: Generics (Обобщенные типы)
const wrapInArray = <T>(arg: T): T[] => {
  return [arg]
}
//

console.log(wrapInArray('df'))