import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMexicoItems } from './redux/actions';
import HostelTemplate from '../../components/HostelTemplate';
import { LoadingWrapper } from '../../components';

class Mexico extends Component {
  componentWillMount() {
    this.props.getMexicoItems();
  }
  render() {
    if (this.props.loading) {
      return <LoadingWrapper />;
    }
    return (
      <div className="App">
        <HostelTemplate {...this.props.mexicoItems} />
      </div>
    );
  }
}

Mexico.propTypes = {
  loading: PropTypes.bool.isRequired,
  mexicoItems: PropTypes.object.isRequired, //eslint-disable-line
  getMexicoItems: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  loading: state.mexico.loading,
  mexicoItems: state.mexico.mexicoItems,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMexicoItems,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Mexico);
