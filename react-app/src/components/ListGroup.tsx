import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = ["北京", "上海", "广州", "深圳"];

  

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {/* 我们想让items转换为HTML的<li>北京</li>这样的HMLT一行，因为React返回的JSX只支持HTML */}
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
