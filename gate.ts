//Solve all the typing issues in the code without changing the implementation

/*export function concatenate(...strings: number): boolean{
  return strings.join('');
}

concatenate('Hello', 'Hi', 'Hola');
*/

 function concatenate(...strings: string[]): string{
  return strings.join('');
}

console.log(concatenate('Hello', 'Hi', 'Hola'));