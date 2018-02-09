var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div>
        <div className="top-bar">
          <div className="navbar-centered">
            <ul className="menu">
              <li className="menu-text">React Timer App</li>
              <li>
                <IndexLink to="/" activeClassName="active" className="active-class">Timer</IndexLink>
              </li>
              <li>
                <Link to="/countdown" activeClassName="active" className="active-class">Countdown</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="author-centered">
          <p className="author">
            <span>Created by </span><a href="https://www.piijeidesigns.co.uk/" target="_blank">Piotr &quot;PIIJEI&quot;</a>
          </p>
        </div>
      </div>
    );
};

module.exports = Nav;
