const PostSummaryList = () => {
  return (`

      <ul class="list-group">
        <li class="list-group-item">
          <div class="row">
            <div class="col-9">
              <div class="wd-gray-text">
                Web Development
              </div>
              <div class="wd-black-text">
                ReactJS <i
                  class="fa fa-check-circle fa-1x position-relative"></i>
                <span class="wd-gray-text">
                      - 2h
                     </span>
              </div>
              <div class="wd-black-text">
                React.js is a component based front end library that makes it
                very easy to build Single Page Applications or SPAs
              </div>
            </div>
            <div class="col-3 float-right">
              <img
                  src="data:image/png;base64,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"
                  class="img-fluid rounded-3">
            </div>


          </div>
          <li class="list-group-item">
            <div class="row">
              <div class="col-9">

                <div class="wd-black-text">
                  JavaScript <i
                    class="fa fa-check-circle fa-1x position-relative"></i>
                  <span class="wd-gray-text">
                      - 2h
                     </span>
                </div>
                <div class="wd-black-text">
                  JavaScript is a programming language that can run on browsers
                  as well as desktops
                </div>
                <div class="wd-gray-text">
                  123K Tweets
                </div>
              </div>
              <div class="col-3 float-right">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    class="img-fluid rounded-3">
              </div>


            </div>
            <li class="list-group-item">
              <div class="row">
                <div class="col-9">
                  <div class="wd-gray-text">
                    Web Development
                  </div>
                  <div class="wd-black-text">
                    jQuery

                  </div>
                  <div class="wd-gray-text">
                    123K Tweets
                  </div>

                </div>
                <div class="col-3 float-right">
                  <img
                      src="https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png"
                      class="img-fluid rounded-3">
                </div>


              </div>
            </li>


            <li class="list-group-item">
              <div class="row">
                <div class="col-9">
                  <div class="wd-gray-text">
                    Web Development
                  </div>
                  <div class="wd-black-text">
                    NodeJS <i
                      class="fa fa-check-circle fa-1x position-relative"></i>
                    <span class="wd-gray-text">
                      - 2h
                     </span>

                  </div>
                  <div class="wd-gray-text">
                    123K Tweets
                  </div>

                </div>
                <div class="col-3 float-right">
                  <img
                      src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                      class="img-fluid rounded-3">
                </div>


              </div>
            </li>
      </ul>
      
  `);

}

export default PostSummaryList;