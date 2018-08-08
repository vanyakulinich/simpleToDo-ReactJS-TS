import * as React from 'react';
import './App.css';

import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ItemsList from './components/ItemsList/ItemsList';


interface IProps {
  date?: string;
}

interface IState {
  list: any[];
  newItem: string | null;
}

class App extends React.Component<IProps, IState> {

  public static defaultProps:IProps = {date: new Date().toLocaleDateString()}

  public state : IState = {
    list: [],
    newItem: null
  }

  public newItem = (e: any)=>{
    const newItem = e.target.value;
    this.setState({
      newItem
    })
  }

  public addNewItem = ()=>{
    if(this.state.newItem !== null){
      this.setState({
        list: [...this.state.list, this.state.newItem]
      })
    }
  }

  public deleteItem = (e:any):void=>{
    const newList = this.state.list.filter(el=>el!==e)
    this.setState({
      list: newList
    })
  }

  public render() {
    const {list} = this.state;
    return (
      <div className="App">
        <div className ="App-todo-container">
          <span className='date'>{App.defaultProps.date}</span>

          <div>
            <h3>TODO LIST</h3> 
          </div>

          <div className='todo-content'>
            <ItemsList list={list} deleteItem={this.deleteItem}/>

            <div className='newItem'>
              
              <Input onChange = {this.newItem}/>
              
              <Button 
                text='add new task'
                addNewItem = {this.addNewItem}
              />
            </div>
            
          </div>

        </div>
      </div>
    );
  }
}

export default App;
