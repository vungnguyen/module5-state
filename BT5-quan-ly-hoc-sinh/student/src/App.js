import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    name: 'abi',
                    phone: 123456,
                    email: 'abi@gmail.com'
                }
            ],
            student: {
                name: '',
                phone: '',
                email: '',
            },
            index: -1
        }
    }
    handleChange =(e) => {
        this.setState((state) => {
            state.student[e.target.name] = e.target.value;
            return{
                student: state.student,
            }
        })
    }
    handleSubmit =() => {
        if(this.state.indexEdit === -1){
            this.setState((state) => {
                return{
                    students: [...state.students, state.student],
                    student: {
                        name: '',
                        phone: '',
                        email: ''
                    }
                }
            }
            )
        }else {
            this.state.students.splice(this.state.indexEdit, 1,this.state.student);
            this.setState((state) => {
                return{
                    students : state.students,
                    student: {
                        name: '',
                        phone: '',
                        email: ''
                    },
                    indexEdit: -1
                }
            })
        }
    }
    handleEdit (index)  {
        this.setState((state) => {
            return{
                student: {
                    name: state.students[index].name,
                    phone: state.students[index].phone,
                    email: state.students[index].email
                },
                indexEdit: index
            }
        })
    }
    handleDelete (index) {
        this.state.students.splice(index, 1)
        this.setState(  {
            students: this.state.students
        })
    }
    
    render() {
        return (
            <div>
                <div style={{padding: '10px'}}>
                    <div>
                        Name: <input type="text"
                                     name="name"
                                     value={this.state.student.name}
                                     onChange={(e) => this.handleChange(e)}/>
                        <br/>
                        Phone: <input type="number"
                                      name="phone"
                                      value={this.state.student.phone}
                                      onChange={(e) => this.handleChange(e)}/>
                        <br/>
                        Email: <input type="email"
                                      name="email"
                                      value={this.state.student.email}
                                      onChange={(e) => this.handleChange(e)}/>
                        <br/>
                        <div style={{padding: '10px'}}>
                            <button onClick={this.handleSubmit}>Save</button>

                        </div>
                    </div>
                </div>
                <div>
                    <table className="table table-bordered bordered-primary table-striped ">
                        <thead className="table-dark">
                        <tr >
                            <th> Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th colSpan='2'>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.students.map((students,index) => (
                            <tr>
                                <td>{students.name}</td>
                                <td>{students.phone}</td>
                                <td>{students.email}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(index)}
                                            className="btn btn-primary"
                                    >Update</button>
                                </td>
                                <td>
                                    <button onClick={() => {this.handleDelete(index)}}
                                            className="btn btn-danger"
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}
export default App;