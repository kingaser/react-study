import React, {Component} from "react";

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: []
  }

  onSubmitForm = () => {

  }

  onChangeInput = (e) => {

  }

  render() {
    return (
        <>
          <h1>{this.state.result}</h1>
          <form onSubmit={this.onSubmitForm}>
            <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
          </form>
          <div>시도: {this.state.tries.length}</div>
          <ul>
            {[
              {fruit: '사과', taste: '맛있다'},
              {fruit: '바나나', taste: '맛없다'},
              {fruit: '포도', taste: '시다'},
              {fruit: '귤', taste: '떫다'},
              {fruit: '감', taste: '쓰다'},
              {fruit: '배', taste: '달다'},
              {fruit: '수박', taste: '시원하다'}
            ].map((v) => {
              return (
                  <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
              );
            })}
          </ul>
        </>
    );
  }
}

export default NumberBaseball;