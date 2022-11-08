import React from "react";
import "./styles.css"
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  const tuits = useSelector(state => state.tuits);

  return (
      <ul className="list-group">
        {
          tuits.map(tuit =>
            <TuitItem post={tuit}/>
          )
        }
      </ul>
  );
}

export default TuitsList;