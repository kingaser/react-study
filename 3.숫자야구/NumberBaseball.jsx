import React, {useCallback, useState} from "react";
import Try from './Try';

const getNumbers = () => { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}


const NumberBaseballClass = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers);
  const [tries, setTries] = useState([]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join('')) {
      setResult('홈런');
      setTries((prevTries) => {
        return [...prevTries, {try: value, result: '홈런!'}]
      })

      alert('게임을 다시 시작합니다.');

      setValue('');
      setAnswer(getNumbers());
      setTries([]);

    } else { // 답 틀렸으면
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) { // 10번 이상 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`)

        alert('게임을 다시 시작합니다.');

        setValue('');
        setAnswer(getNumbers());
        setTries([]);

      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
          setValue('');
          setTries((prevTries) => {
            return [...prevTries, {try: value, result: `${strike}스트라이크, ${ball}볼 입니다.`}]
          })
        }
      }
    }
  });

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  return (
      <>
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
          <input maxLength={4} value={value} onChange={onChangeInput}/>
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
                <Try key={`${i + 1}차 시도 : `} tryInfo={v}/>
            );
          })}
        </ul>
      </>
  );
}

export default NumberBaseballClass;