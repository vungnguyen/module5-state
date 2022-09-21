import React from "react";
import Content from './hello'

class ExpandCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        }
    }

    handleShowButton = () => {
        this.setState({isExpanded: true})
    }
    handleHideButton = () => {
        this.setState({isExpanded: false})

    }

    render() {
        return (
            <div style={{marginLeft: 20 }}>
                <div className="heading" style={{
                    padding: 20,
                    backgroundColor: "green",
                    color: "white",
                    marginBottom: 10
                }}>
                    <h1>Conditional Rendering</h1>
                </div>
                <div style={{marginBottom: 10}}>
                    {this.state.isExpanded ?
                        <button onClick={this.handleHideButton}>Hide detail</button>
                        :
                        <button onClick={this.handleShowButton}>Show detail</button>
                    }
                </div>

                {this.state.isExpanded && <Content/>}
            </div>
        )
    }

}

export default ExpandCollapse;