import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["北京", "上海", "广州", "深圳"];
  // items = [];

  // 我们有时候希望根据不同的item返回不同的数据，比如当item为空，我们返回没有item
  if (items.length === 0) {
    return <p>列表数据为空</p>
  }

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {/* 我们想让items转换为HTML的<li>北京</li>这样的HMLT一行，因为React返回的JSX只支持HTML */}
        {items.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
