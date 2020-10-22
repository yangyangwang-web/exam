import React, { Component } from 'react';
import Modal from '@/components/modal';

const Alert = function(WraperComponent: any) {
  return class extends WraperComponent {
    close() {
      const wraper = this.refs['hocAlert'];
      wraper.setState({
        visible: false
      });
    }
    render() {
      return (
        <WraperComponent ref='hocAlert'>
          <div className='modal-title'>
            <span className='float-right' onClick={() => this.close()}>
              x
            </span>
            {this.state.title}
          </div>
          <div className='modal-content'>{this.props.children}</div>
        </WraperComponent>
      );
    }
  };
};

const hocAlert = Alert(Modal);

export default hocAlert;
