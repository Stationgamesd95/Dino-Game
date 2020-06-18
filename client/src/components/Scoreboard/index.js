import React from 'react';
import './style.css'

class Scoreboard extends React.Component {
    constructor() {
      super();
      this.state = {
        list: []
      }
      this._clickAllTime = this._clickAllTime.bind(this);
      this._clickScore = this._clickScore.bind(this);
    }
  
    componentDidMount() {
      const fetchInit = {
        method: 'GET',
        mode: 'cors'
      };
  
      fetch(`${ this.props.apiURL }`, fetchInit)
        .then(response => response.json())
        .then(data => {
          this.setState({
            list: data
          });
        })
        .catch(err => console.log('fetch error : ', err))
    }
  
  
    _clickScore(e) {
      let sorted = this.state.list.sort((a, b) => b.score - a.score);
      this.setState(sorted);
    }
  
    render() {
      let userlist = this.state.list.map((user, i) => <User username={ user.username } rank={ i + 1 } score={ user.score } />);
  
      return (
        <div className="container">
          <LeaderboardHeader />
          { userlist }
        </div>
      )
    }
  
  }
  
  const LeaderboardHeader = () => {
    return (
      <div className="leadheader">
          <h2>Leaderboard</h2>
      </div>
    )
  }
  
  const ColumnHeader = ({
    onClick,
    onClickAll
  }) => (
    <div className="row colheader">
        <div className="col-xs-1">
          <h4>#</h4>
        </div>
        <div className="col-xs-5">
          <h4>Name</h4>
        </div>
        <div className="col-xs-3 score">
          <h4>Score</h4>
        </div>
      </div>
  );
  
  ColumnHeader.propTypes = {
    onClick: React.PropTypes.func,
    onClickAll: React.PropTypes.func
  }
  
  const User = ({ rank, username, score }) => {
    return (
      <div className="row users  vcenter">
          <div className="col-xs-1 rank">
            <h4>{ rank }</h4>
          </div>
          <div className="col-xs-5 name">
            <h4>{ username }</h4>
          </div>
          <div className="col-xs-3">
            <h4>{ score }</h4>
          </div>
        </div>
    )
  }
  
  User.propTypes = {
    rank: React.PropTypes.number.isRequired,
    username: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
  }
  
  ReactDOM.render(<Scoreboard apiURL='./Games' />, document.getElementById('Scoreboard'));