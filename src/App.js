import React, { Component } from "react";
import Column from "./Boards";
import Card from "./Tasks"
import "./App.css";


const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns : [],
      tasks:[]
    };
  }

  componentDidMount() {
    fetch("https://hapi5-api.herokuapp.com/boards", {
      method: "GET",
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo0M30.weMeWOhQoTRIm_Gt5-14e8Vr_353E_aI2ARU_BbASrI",
      },
    }
    )
    .then( response => response.json())
    .then(
        (result) => {
            this.setState({
                columns : result
            });
        }
    );

    fetch("https://hapi5-api.herokuapp.com/boards/12/tasks", {
        method: "GET",
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo0M30.weMeWOhQoTRIm_Gt5-14e8Vr_353E_aI2ARU_BbASrI",
        },
      }
      )
      .then( response => response.json())
      .then(
          (result) => {
              this.setState({
                  tasks : result
              });
              console.log("cards : ",this.state.tasks)
          }  
      );
  }

  

  

  handleAdd = columnIndex => {}

  handleMove = (columnIndex, cardIndex, direction) => {
    this.setState(prevState => {
      const { columns } = prevState
      const [card] = columns[columnIndex].cards.splice(cardIndex, 1)
      columns[columnIndex + direction].cards.push(card)
      return { columns }
    })
  }

  render() {
    console.log("Boards id => ",this.state.columns)
    console.log("Tasks => ", this.state.tasks)

    const {columns,tasks} = this.state;
    return (

      <div className="wrapcontent">
        <div className="roadmap">Product Roadmap</div>
        <div className="App">
          {columns.map((column, columnIndex) => (
            <div className="for-mobile">
            {console.log("title",columns[columnIndex].id)}
            
            <Column
              column={column}
              columnIndex={columnIndex}
              key={columnIndex}
              title={columns[columnIndex].title}
              description={columns[columnIndex].description}
              boardId={columns[columnIndex].id}
              onMoveLeft={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_LEFT)}
              onMoveRight={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_RIGHT)}
              onAddCard={() => this.handleAdd(columnIndex)}
              card={tasks.map((card, cardIndex) => (
                <div>
                  {console.log("task title => ", tasks[cardIndex].title)}
                  <Column card={card} cardIndex={cardIndex} taskTitle={tasks[cardIndex].title} taskWeight={tasks[cardIndex].weight} />
                </div>
              ))}
            />
            </div>
            
          ))}

          {/* {tasks.map((card, cardIndex) => (
            <div>
              {console.log("task title => ", tasks[cardIndex].title)}
              <Card card={card} cardIndex={cardIndex} taskTitle={tasks[cardIndex].title} taskWeight={tasks[cardIndex].weight} />
            </div>
          ))} */}
        </div>
      </div>
    );
    
  }
  
}

export default App;
