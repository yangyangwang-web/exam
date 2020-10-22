import React, { Component } from 'react';
import Modal from '@/components/modal';

const Dialog = function(WraperComponent: any) {
  return class extends Component {
    state = {
      showFooter: true
    };
    static defaultProps = {
      title: '123312'
    };
    close() {
      const modal = this.refs['hoc'];
      modal.setState({
        visible: false
      });
    }
    render() {
      return (
        <WraperComponent ref='hoc'>
          <div className='modal-title'>
            <span className='float-right' onClick={() => this.close()}>
              x
            </span>
            {this.props.title}
          </div>
          <div className='modal-content'>{this.props.children}</div>
          <div
            className={
              this.state.showFooter ? 'modal-footer show' : 'modal-footer hide'
            }>
            <span className='float-right'>关闭</span>
          </div>
        </WraperComponent>
      );
    }
  };
};

const hocDialog = Dialog(Modal);

export default hocDialog;
