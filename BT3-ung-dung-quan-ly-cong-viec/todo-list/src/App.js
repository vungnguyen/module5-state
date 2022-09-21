// import React from 'react';
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [],
//             item: ''
//         }
//         this.inputRef = React.createRef();
//     }
//     handleChange = (event) => {
//         this.setState({...this.state, item: event.target.value})
//     }
//     handleAdd = (event) => {
//         this.setState({...this.state,list: [...this.state.list,this.state.item],item: ''})
//         this.inputRef.current.focus();
//     }
//     render() {
//         const {item,list} = this.state;
//         return (
//             <div style={{marginLeft: '20%', padding: '100px'}}>
//                 <h1>Todo List</h1>
//                 <input type="text"
//                        ref={this.inputRef}
//                        value = {item}
//                        onChange={this.handleChange}
//                      />
//                 <button onClick={this.handleAdd} style={{color: 'green',backgroundColor: 'yellow' }}>Add</button>
//                 <ul>
//                     {list.map(item =>(
//                         <li>{item}</li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }
// export default App;



import React from "react";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            job: ""
        };

    }

    handleChange = (e) => {
        this.setState({ job: e.target.value})
    }

    handleAdd = () => {
        this.setState({jobs: [...this.state.jobs, this.state.job]});
    }

    render() {
        const {job, jobs} = this.state
        return (
            <div className={"App"}>
                <h1>Todo List</h1>
                <input type="text"
                       value={job}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleAdd} style={{color: 'green'}}>Add</button>
                <ul style={{
                    textAlign: 'left',
                    marginLeft: 100
                }}>
                    {jobs.map((job, i) => (
                        <li key={i}>{job}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoApp;