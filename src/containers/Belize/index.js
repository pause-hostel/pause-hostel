import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBelizeItems } from './redux/actions';
import HostelTemplate from '../../components/HostelTemplate';
import { LoadingWrapper } from '../../components';

class Belize extends Component {
  componentWillMount() {
    const { belizeItems } = this.props;
    if (Object.keys(belizeItems).length <= 0) {
      this.props.getBelizeItems();
    }
  }
  render() {
    if (this.props.loading) {
      return <LoadingWrapper />;
    }
    return (
      <div className="App">
        <HostelTemplate {...this.props.belizeItems} />
      </div>
    );
  }
}

Belize.propTypes = {
  loading: PropTypes.bool.isRequired,
  belizeItems: PropTypes.object.isRequired, //eslint-disable-line
  getBelizeItems: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  loading: state.belize.loading,
  belizeItems: state.belize.belizeItems,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBelizeItems,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Belize);
