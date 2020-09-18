import React, { Component } from 'react'
import PropTypes from 'prop-types'


import {
  Form,
  Input
} from 'antd'

const Item = Form.Item

/* 
添加/修改分类的Form组件
*/
class AddUpdateForm extends Component {
  /* 有static关键字，propTypes给类（函数对象）AddUpdateForm添加属性，表示该方法不会被实例继承，而是直接通过类来调用
     无static，propTypes给实例（组件对象）添加属性
  */ 
  static propTypes = {
    setForm: PropTypes.func.isRequired,
    categoryName: PropTypes.string,
  }

  componentWillMount () {
    this.props.setForm(this.props.form)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { categoryName } = this.props
    return (
      <Form>
        <Item>
          {
            getFieldDecorator('categoryName', {
              initialValue: categoryName || '',
              rules: [
                {required: true, message: '分类名称必须输入'}
              ]
            })(
              <Input type="text" placeholder="请输入分类名称"></Input>
            )
          }
        </Item>
      </Form>
    )
  }
}

export default Form.create()(AddUpdateForm)
