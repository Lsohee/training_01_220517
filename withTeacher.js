const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.
let countOne =0;
for(let i=0; i<dummyText.length; i++){
  if(dummyText[i]==="of"){
    countOne++
  }
}
console.log(countOne);


let countTwo = 0;
let result = dummyText.filter(function(index){// memo filter라는 단어를 보면 이건 배열이다~~ 생각하기
  if(index==="of"){
    count++
    return count;
  }
})
console.log(result);
//! filter : 참일 경우 배열로 반환함 -> 배열의 길이를 가져오면 개수도 알수 있음
// let test = dummyText.filter(index =>{});





// Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.

// let tempArr =[]

let mapping =dummyText.map(function(value,index){
  if(value==="dummy"){
    value= "sementic"
  }
})
let test = dummyText.map(value =>{if(value==="dummy"){value ==="sementic"}});


// //! map : 순회하면서 모든 "dummy"라는 요소를 "sementic"으로 바꿔줌





// Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.
dummyText.forEach(function(value,index){
  if(value === "the"){
    dummyText[index+1] ="web";
  };
})









// Todo : Q-5. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요.
//  join, reduce

const countTextlenght = dummyText.reduce(function(beforeValue, currentValue){
  return beforeValue+ currentValue;
})

console.log(countTextlenght .length);

// memo 배열 메소드의 공통점