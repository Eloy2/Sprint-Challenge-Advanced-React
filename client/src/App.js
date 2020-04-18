import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Button from './components/Button';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      athletes: []
     };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ athletes: res.data });
      })
      .catch(err => console.log("axios error", err))
  }

  render() {
    return (
      <div>
        <Button/>
        {console.log(this.state.athletes)}
        {this.state.athletes.map((item) => {
          return <Card name={item.name} country={item.country} searches={item.searches} key={item.id} />
        })}
      </div>
    );
  }
}

export default App;
