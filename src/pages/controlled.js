
import React from 'React';

//input
//非受控组件  
class Demo1 extends React.Component {
  onTextChange = (event) => {
    console.log(event.target.value);
  }
  render() {
    const MyInput = ({ onChange }) => (
      <input onChange={onChange} />
    );
    return (
      <>
        <div>非受控组件</div>
        <MyInput onChange={this.onTextChange} />
        {/* 直接使用效果一致 */}
        {/* <input onChange={this.onTextChange} /> */}
      </>
    );
  }
}

//受控组件
class Demo2 extends React.Component {
  state = {
    text: '',
  }
  onTextChange = (event) => {
    this.setState({ text: event.target.value });
  }
  render() {
    const MyInput = ({ value = '', onChange }) => (
      <input value={value} onChange={onChange} />
    );
    return (
      <>
        <div>受控组件</div>
        <MyInput value={this.state.text} onChange={this.onTextChange} />
      </>
    );
  }
}

class Demo extends React.Component {
  render() {
    return (
      <>
        <Demo1 />
        <hr />
        <Demo2 />
      </>
    );
  }
}

export default Demo;
