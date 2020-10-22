/*
 * @Author: heinan
 * @Date: 2020-01-10 13:45:42
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-10 15:11:58
 */
import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
interface IModalProps {}
interface IModalState {}

const Modal = function(props) {
  const [visible, setVisible] = useState(true);
  const [title, setTitle] = useState('默认标题');
  return (
    <div className={visible ? 'modal show' : 'modal hide'}>
      <div className='modal-mask'></div>
      <div className='modal-wraper'>{props.children}</div>
    </div>
  );
};
// class Modal extends Component<IModalProps, IModalState> {
//   state = {
//     visible: true,
//     title: '默认标题'
//   };
//   render() {
//     const nodes = (
//       <div className={this.state.visible ? 'modal show' : 'modal hide'}>
//         <div className='modal-mask'></div>
//         <div className='modal-wraper'>{this.props.children}</div>
//       </div>
//     );
//     return ReactDOM.createPortal(nodes, document.body);
//   }
// }

export default Modal;
