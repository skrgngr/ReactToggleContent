
import React from "react";

class Collapse extends React.Component {
    constructor() {
        super();

        this.state = {
            showContent: false
        };

        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.setState({showContent: true});
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                {this.props.children.props.cardTitle}
                </button>
                {this.state.showContent && (
                    <div className="collapse show">
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}

export default Collapse;
