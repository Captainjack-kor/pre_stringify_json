/**
 * 1. Broswer에 존재하는 JSON.stringfy 함수를 직접구현해봅니다.
 * JSON.stringfy 함수는 input 값을 JSON 형식으로 변환합니다.
 * 단, undefind와 function은 JSON으로 생략되거나 null 로 변환됩니다.
 *
 * 2. stringfyJSON은 아래와 같이 작동합니다.
 * - Bolean이 input으로 주어졌을 경우
 * stringifyJSON(true);                // 'true'
 * - String이 input으로 주어졌을 경우
 * stringifyJSON('foo');               // '"foo"'
 * - Array가 input으로 주어졌을 경우
 * stringifyJSON([1, 'false', false]); // '[1,"false",false]'***
 * - Object가 input으로 주어졌을 경우
 * stringifyJSON({ x: 5 , y:10});            // '{"x":5, "y":10}'
 * - undefind, function이 주어졌을 경우
 * stringifyJSON(undefined)            // undefined
 * stringifyJSON(function(){})         // undefined
 * stringifyJSON({ x: undefined, y: function(){} })   // '{}'
 *
 * 3. spec/fixtures.js를 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 stringify해 주어야할지 생각해 보세요.
 *
 * 4. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될거예요.
 *  const stringifyJSON = JSON.stringify;
 *
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:
 */
function stringifyJSON(obj) {
  // your code goes here
  //const result = [];
  //1.숫자인지 아닌지 판단해서 -> 숫자면 : String 
 
  if(typeof obj === 'string'){
    return `"${obj}"`; //"," 붙여서 리턴 (``);
  }
  if(typeof(obj) === 'boolean' || typeof obj === 'number'
   || obj === null) 
  { return `${obj}`;}
  
  if(Array.isArray(obj)){ // '[8,"hi"]'
    let newArr =[];
      for(let i=0; i<obj.length; i++){
        newArr.push(stringifyJSON(obj[i])); 
      }
        return `[${newArr}]`;  
  }

  // 객체의 키랑 밸류에 " "를 붙여준다.

  if(typeof obj === 'object'){
    let result = [];
    for(let key in obj){
      //'{"a":"apple", "b":"mango"}'
      if(obj[key] === undefined){
        return '{}'
      } 
      else{ 
      result.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
      }
    }     
    return `{${result}}`;
  }
  //return stringifyJSON = JSON.stringify;
};



// 다음 코드는 결과 제출을 위한 코드입니다. 신경쓰지 않아도 좋습니다.
if (typeof window === "undefined") {
  module.exports = stringifyJSON;
}