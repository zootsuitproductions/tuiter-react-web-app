import React from "react";
import "./styles.css"

const TuitItem = (
    {
        tuit = {
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

  return(
      <li>
        <div className="wd-border wd-padding-left wd-overflow">
          <div className="wd-padding-top">
            <img className="wd-profile-pic wd-col-48"
                 src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
            <div className="wd-right">...</div>
            <div className="wd-col">
              <div className="wd-user">
                Abel Smith
                <span className="wd-gray-text">
              @abe ⋅ Jul 3
            </span>
              </div>
              <div className="wd-white-text wd-size15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eget vehicula arcu.
                Nulla facilisi. Donec leo lacus, dapibus sit amet turpis sed,
                efficitur congue
                dui. Nullam nunc erat, euismod sit amet nisi sit amet, ultricies
                sollicitudin
                arcu. Nam lacinia ligula vel magna pretium, sit amet pretium
                purus commodo. Nulla
                urna dolor, efficitur ut eros sit amet, sagittis vulputate nisi.
              </div>

              <div className="wd-padding-top">
                <img className="wd-image"
                     src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_517194189_373099.jpg"/>
                <div className="wd-image-link">
                  <div className="wd-link-enclosed-text">
                    Duis pretium non ex pharetra consequat.
                    <div className="wd-gray-link-text">
                      Aenean commodo velit at erat cursus iaculis id nec massa.
                      Cras commodo nisl eu neque vehicula, at vestibulum est
                      consectetur. Donec sed mi metus. Fusce lobortis auctor
                      arcu non gravida. Praesent sodales fermentum elit congue
                      pellentesque. Quisque ut rhoncus turpis, nec sollicitudin
                      quam. Maecenas felis turpis, lacinia a tristique ut,
                      ultrices id tellus. Aenean consequat est nec justo
                      imperdiet, ac euismod nunc vehicula. Nulla suscipit
                      sodales feugiat. Nullam felis massa, pharetra a auctor
                      vel, sagittis sit amet urna. Donec a magna nisi.
                      Suspendisse potenti. Aenean maximus facilisis libero, eu
                      egestas sapien laoreet eget.


                      <div className="wd-small-top-padding">
                        <a className="wd-no-link" href="#"><i
                            className="fa-solid fa-link"></i> rt.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wd-buttons-row">
                <a className="wd-action-button " href="#">
                  <i className="wd-small-padding-right fa-lg fa-regular fa-comment"></i>
                  2
                </a>
                <a className="wd-action-button " href="#">
                  <i className="wd-small-padding-right fa-lg fa-solid fa-retweet"></i>
                  901
                </a>
                <a className="wd-action-button wd-red" href="#">
                  <i className="wd-small-padding-right fa-lg fa-solid fa-heart"></i>
                  327
                </a>
                <a className="wd-action-button " href="#">
                  <i className="fa-lg fa-solid fa-arrow-up-from-bracket"></i>
                </a>

              </div>

            </div>

          </div>

        </div>
      </li>
  );

}

export default TuitItem;