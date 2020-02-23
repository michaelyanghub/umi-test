import React from 'React';
import { Card, Layout, Tabs, Radio, Tree, Menu, Icon } from 'antd';



// 组件测试
class SubGroup extends React.Component {
  state = {
    value: 1,  //radio使用
    current: 'mail', //menu使用
  };

  onTextChange = (event) => {
    console.log(event.target.value);
  }
  callback = (key) => {
    console.log(key);
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  //tree
  onCheck = (checkedKeys, e) => {
    console.log(checkedKeys);
    console.log(e);
    console.log('onCheck');
  };
  onSelect = e => {
    console.log('onSelect');
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { TabPane } = Tabs;
    const { TreeNode } = Tree;
    const { SubMenu } = Menu;
    const style = {
      width: '400px',
      margin: '30px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '1px solid #e8e8e8',
    };

    return (
      <Layout>
        {/* <div>
          <div>card:</div>
          <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
            <Card.Meta
              avatar={<img
                alt=""
                style={{ width: '64px', height: '64px', borderRadius: '32px' }}
                src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
              />}
              title="Alipay"
              description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
            />
          </Card>
        </div> */}
        {/* <div>
          <div>tab:</div>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </div> */}

        {/* <div>
          <div>tree:</div>
          <Tree
            checkable
            blockNode={true}
            // autoExpandParent={true}
            // disabled
            defaultExpandedKeys={['0-0-1', '0-0-2']} //默认展开指定的树节点
            defaultSelectedKeys={['0-0-2-0']} //默认选中节点，背景变色 //只对一个有效
            defaultCheckedKeys={['0-0-0', '0-0-1-1', '0-0-2-0']}  //默认选中复选框的树节点
            onSelect={this.onSelect}
            onCheck={this.onCheck}
          >
            <TreeNode title="0-0" key="0-0">

              <TreeNode title="0-0-0" key="0-0-0" disabled>
                <TreeNode title="0-0-0-0" key="0-0-0-0" disableCheckbox />
                <TreeNode title="0-0-0-1" key="0-0-0-1" />
              </TreeNode>

              <TreeNode title="0-0-1" key="0-0-1">
                <TreeNode title={<span style={{ color: '#1890ff' }}>0-0-1-0</span>} key="0-0-1-0" />
                <TreeNode title="0-0-1-1" key="0-0-1-1" />
              </TreeNode>

              <TreeNode title="0-0-2" key="0-0-2">
                <TreeNode title={<span style={{ color: '#1890ff' }}>0-0-2-0</span>} key="0-0-2-0" />
                <TreeNode title="0-0-2-1" key="0-0-2-1" />
              </TreeNode>
            </TreeNode>
          </Tree>
        </div> */}
        {/* <div>
          <div>Radio.Group:</div>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        </div> */}
        <div>
          <div>menu:</div>
          <div>mode: string: vertical horizontal inline</div>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" /* style={{width:'20%'}} */ >
            <Menu.Item key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="setting" />
                  Navigation Three - Submenu
                </span>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
        </div>
      </Layout>
    )
  };
}
export default SubGroup;