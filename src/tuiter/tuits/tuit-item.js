import React from "react";
import "./styles.css"
import "https://kit.fontawesome.com/80b90f727e.js";

import {useDispatch} from "react-redux";

import {deleteTuit} from "./tuits-reducer";



const TuitItem = (
    {

      post = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-1 margin-right-left m-2">
            <img className="rounded-circle" height={48} width={48} src={`/images/${post.image}`}/>
          </div>
          <div className="col-10">
            <div>{post.userName} . {post.time}</div>
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(post._id)}></i>
            <div className="fw-bolder">{post.topic}</div>
            <div>{post.tuit}</div>
            <div className="wd-buttons-row">
              <a className="wd-action-button " href="#">
                <i className="wd-small-padding-right fa-lg fa-regular fa-comment"></i>
                {post.replies}
              </a>
              <a className="wd-action-button " href="#">
                <i className="wd-small-padding-right fa-lg fa-solid fa-retweet"></i>
                {post.retuits}
              </a>
              <a className="wd-action-button wd-red" href="#">
                <i className="wd-small-padding-right fa-lg fa-solid fa-heart"></i>
                {post.likes}
              </a>
              <a className="wd-action-button " href="#">
                <i className="fa-lg fa-solid fa-arrow-up-from-bracket"></i>
              </a>

            </div>
          </div>

        </div>

      </li>
  );
};

export default TuitItem;