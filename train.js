const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.
// const why = function(value){
//   return value === "of";
// }
// // console.dir(dummyText);

// let of = dummyText.filter(why);
// console.log(of);
// console.log(of.length);

// Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.
// let replaceAgain = dummyText.replace("duumy","sementic"); //왜 안되니....
// var test = "가나다라 마바사 가나";
var result = dummyText.replace( /dummy/gi, 'sementic');

console.log(result);


// Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.
dummyText.splice(); // index 4의 위치에 2개의 요소를 추가

// Todo : Q-5. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요
// 이 요소들은 사실 문자열이라는 객체 안에 글자라는 배열의 존재니까 모든 객체의 요소의 갯수를 구해야함
