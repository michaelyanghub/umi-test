import { connect } from "dva";
import styles from './goods.css';
import { Button, Card } from "antd";
import { useEffect } from "react";

export default connect(
  state => ({
    goodsList: state.goods,
    loading: state.loading
  }),
  {
    addGood: title => ({
      type: "goods/addGood",
      title,
    }),
    getList: () => ({
      type: "goods/getList"
    })
  }
)(function ({ goodsList, addGood, getList, loading }) {
  useEffect(() => {
    getList();
  }, [])
  return (
    <div className={styles.normal}>
      <h1>Page goods</h1>
      {/* 商品列表 */}
      <div>
        {/* 加载状态 */}
        {loading.models.goods && <p>loading...</p>}
        {goodsList.map(good => {
          return (
            <Card key={good.title}>
              <div>{good.title}</div>
            </Card>
          );
        })}
        <div>
          <Button onClick={() => addGood("商品" + new Date().getTime())}>
            添加商品
          </Button>
        </div>
      </div>
    </div>
  );
})
