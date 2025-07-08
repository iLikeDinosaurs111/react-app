import { useState } from "react";
import "./ListGroup.css";

interface Props {
  color?: "primary" | "secondary" | "danger";
  names: string[];
  dates: string[];
  statuses: string[];
  heading: string;
  onSelectItem: (item: string, index: number) => void;
}

function ListGroup({ names, dates, statuses, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="entire">
      <div className="nameList tripleList">
        <h1 className="label">Name</h1>
        {names.length === 0 && <p>No item found</p>}
        <ul className="list-group list-group-flush">
          {names.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item, index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="dateList tripleList">
        <h1 className="label">Due date</h1>
        {dates.length === 0 && <p>No item found</p>}
        <ul className="list-group list-group-flush">
          {dates.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item, index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="statusesList tripleList">
        <h1 className="label">Status</h1>
        {statuses.length === 0 && <p>No item found</p>}
        <ul className="list-group list-group-flush">
          {statuses.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item, index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListGroup;
