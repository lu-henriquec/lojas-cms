import React, { Component } from 'react';
import { connect } from 'react-redux';

import LinkRoute from '../../components/Link';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loja: {},
      loading: true
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const loja = this.props.lojas.find( loja => loja._id === id);

    this.setState({
      loja,
      loading: false,
    });

  }

  render() {
    const { loja, loading } = this.state;

    if (loading) {
      return (
        <>
          <p>Carregando dados da loja...</p>
        </>
      );
    }

    return (
      <>
        <LinkRoute route='/lojas'/>
        <div>
          <p>{loja.name}</p>
          <p>{loja.address}</p>
          <p>{loja.lat}</p>
          <p>{loja.lng}</p>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => ({
  lojas: store.lojas
});

export default connect(mapStateToProps)(index);
