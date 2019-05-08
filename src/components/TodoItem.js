import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
      const { text, checked, id, onToggle, onRemove } = this.props;
        //todo내용, 체크박스 상태, todo의 고유아이디, 체크박스를 키고 끄는 함수, 아이템을 삭제시키는 함수

      return (
        <div className="todo-item" onClick={() => onToggle(id)}>
          <div className="remove" onClick={(e) => { // onClick={onToggle{id}} 이런 형태로 절대 안됨!! 이렇게 하면 해당 함수가 렌더링 될 때 호출이 된다. (무한반복)
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onRemove(id)}
          }>&times;</div>
          <div className={`todo-text ${checked && 'checked'}`}>
            <div>{text}</div>
          </div>
          {
            checked && (<div className="check-mark">✓</div>)
          }
        </div>
      );
    }
  }

  export default TodoItem;