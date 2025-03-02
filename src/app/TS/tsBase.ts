//TODO: ADD
function add(a: number, b?: number): number {
  return a + (b ?? 0);
}

console.log(add(5)); // 5
console.log(add(5, 10)); // 15
console.log(add(5, undefined)); /// 5

//************************ */
// Generics <T> - это гибкий способ работать с разными типами данных не теряя информацию о них
//TODO: Тема: Generics (Обобщенные типы)
const wrapInArray = <T>(a: T): T[] => {
  return [a];
};
//

console.log(wrapInArray("df"));


//