
import styles from './index.css';
import { List, Typography } from 'antd';
import Link from "umi/link";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const pageData = [
  { name: "登陆", page: "login" },
  { name: "用户", page: "users" },
  { name: "关于", page: "about" },
  { name: "组件", page: "comp" },
  { name: "可控组件", page: "controlled" },
  { name: "表单", page: "form1" },
  { name: "商品", page: "goods" },
  { name: "布局", page: "layout" },
  { name: "列表", page: "list" },
  { name: "普通表格", page: "table1" },
  { name: "复选框表格", page: "tabie_checkbox" },
  { name: "单元格编辑表格", page: "table_edit_cell" },
];


//使用一个列表 导航到各个页面
export default function () {
  return (
    <div>
      <h3 style={{ marginBottom: 16 }}>功能列表</h3>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        itemLayout="vertical"
        bordered
        dataSource={pageData}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> 
            <Link to={`/${item.page}`}>{item.name}</Link>
          </List.Item>
        )}
      />
    </div>
  );
}
