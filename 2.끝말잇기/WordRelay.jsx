const React = require('react');
const {useState, useRef} = React;

const WordRelay = () => {
  const [word, setWord] = useState('홍길동');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === e.target.children.word.value[0]) {
      setResult('딩동댕');
      setWord(e.target.children.word.value);
      e.target.children.word.value = '';
      inputRef.current.focus();
    } else {
      setResult('땡');
      e.target.children.word.value = '';
      inputRef.current.focus();
    }
  }

  /*const onChangeInput = (e) => {
    setValue(e.target.value)
  }*/


  return (
      <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="wordInput">글자를 입력하세요.</label>
          <input id="word" ref={inputRef}/>
          <button>입력!!</button>
        </form>
        <div>{result}</div>
      </>
  );
}

module.exports = WordRelay;