import React, {Component} from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="btn btn-secondary" type="submit" onClick={this.props.onClick}>Submit</button>
        </div>
      </div>
    );
  }
}
