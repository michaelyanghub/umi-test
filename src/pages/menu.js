
import styles from './menu.css';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1', 'sub4'],
  };

  onOpenChange = openKeys => {
    // console.log(16,openKeys);  //顺序【上次展开，本次展开】
    // console.log(17,this.state.openKeys); //【上次展开】
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1); //排除不是上次展开的，那就是本次了（openKeys总共只有两个，排除一个就只有一个了）
    // console.log(19,latestOpenKey);  //得到了本次展开
    // console.log(20,this.rootSubmenuKeys.indexOf(latestOpenKey)); //得到本次展开索引
    // console.log(21,openKeys);
    // console.log(22,this.rootSubmenuKeys.indexOf(latestOpenKey));
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) { //当前展开 latestOpenKey undefined 时 === -1
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default function () {
  return (
    <div className={styles.normal}>
      <Sider />
    </div>
  );
}
