import React, { Component } from 'react';
class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'ok',
      list: ['one', 'two'],
    }
  }
  render() {
    return (
      <>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange} />
          <button onClick={this.addList}> 增加 </button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  key={item}
                  onClick={(e) => this.deleteItem(index, e)}
                >
                  {item} -- {index}
                </li>
              )
            })
          }
        </ul>
      </>
    );
  }

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  addList = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  deleteItem (index) {
    console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie;