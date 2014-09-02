/** @jsx React.DOM */

var React = require('react');

var PropTypes = React.PropTypes;
var cx = React.addons.classSet;

var SearchBox = React.createClass({
  propTypes: {
    onQueryChange: PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      query: '',
      queryProgress: '',
    };
  },

  _onQueryKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.onQueryChange(this.state.queryProgress);
    }
  },

  _onQueryChange(e) {
    this.setState({queryProgress: e.target.value});
  },

  _onSearchClick() {
    this.props.onQueryChange(this.state.queryProgress);
  },

  render() /*object*/ {
    return (
      <div className={cx(this.props.className, 'SearchBox')}>
        <input
          className="SearchBox_input"
          value={this.state.queryProgress}
          onChange={this._onQueryChange}
          onKeyDown={this._onQueryKeyDown}
          type="text"
        />
        <button
          className="SearchBox_button"
          onClick={this._onSearchClick}
          type="button">
          Search
        </button>
      </div>
    );
  }
});

module.exports = SearchBox;
