// @ts-check
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Divider, Modal } from 'antd';
import Edit from './edit';
interface IHomeProps {
  home: any;
}
interface ICarousel {
  id: number;
  cid: string;
  c_img_url: string;
  c_img_title: string;
  c_img_des?: string;
  c_type: number;
}
@inject('home')
@observer
class Home extends Component<IHomeProps, any> {
  formRef: any = null;
  state = {
    visible: false,
    carousel: {}
  };
  componentDidMount() {
    this.props.home._getCarouselList();
  }
  async handleOk() {
    const result = await this.formRef.handleSubmit();
    console.log(result);
    this.setState({
      visible: false
    });
  }
  handleCancel() {
    this.setState({
      visible: false
    });
  }
  edit(carousel: ICarousel) {
    this.setState({
      visible: true,
      carousel: {
        ...carousel
      }
    });
  }
  delete(col: ICarousel) {}
  render() {
    const { carouselList } = this.props.home;
    const { Column } = Table;
    return (
      <div>
        <Table dataSource={carouselList} rowKey='cid'>
          <Column title='标题' dataIndex='c_img_title' key='c_img_title' />
          <Column title='图片' dataIndex='c_img_url' key='c_img_url' />
          <Column title='描述' dataIndex='c_img_des' key='c_img_des' />
          <Column title='状态' dataIndex='c_type' key='c_type' />
          <Column
            title='操作'
            key='action'
            render={(text: any, record: any) => (
              <div>
                <span onClick={() => this.edit(text)}>编辑</span>
                <Divider type='vertical' />
                <span onClick={() => this.delete(text)}>删除</span>
              </div>
            )}
          />
        </Table>
        <Modal
          title='编辑'
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}>
          <Edit
            wrappedComponentRef={(form: any) => (this.formRef = form)}
            carousel={this.state.carousel}
          />
        </Modal>
      </div>
    );
  }
}
export default Home;
