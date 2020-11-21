import './App.css';
import React from 'react'
import Journal from './Journal'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currTopic: 'Home',
    };
    this.topics = ['Home', 'React', 'Node.js', 'Django', 'Internship'];
  }

  render() {

    // Here we will read the items property, which was passed
    // as an attribute when the component was created
    // The map method will loop over the array of menu entries,
    // and will return a new array with <li> elements.
    return (
      <div>
        <div className='nav'>
          <ul>{this.topics.map((topic) => {
            // create nav items
            var style = '';
            // will set class name 'selected' if focused item
            if (this.state.currTopic === topic) {
              style = 'focused';
            }

            // Notice the use of the bind() method. It makes the
            // index available to the clicked function:
            return <li className={style} onClick={() => this.setState({ currTopic: topic })}>{topic}</li>;
          })}
          </ul>
        </div>

        <Journal topic={this.state.currTopic} />
      </div>
    );
  }
}



export default App;
