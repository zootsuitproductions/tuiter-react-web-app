import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
            <div class="row">
                      <div class="row">
          <div class="rounded-pill col-10">
            <input type="text" class="rounded-pill form-control px-5" placeholder="Search Twitter">
            <i class="fa fa-search fa-1x position-relative" style="top: -30px; right: -20px"></i>

          </div>
          <div class="col-1">
            <a href=""><i class="fa fa-cog fa-2x m-1"></i></a>
          </div>
        </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                     <ul class="nav nav-tabs py-1">
          <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For You</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
          </li>
          <li class="nav-item d-sm-none d-md-inline">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
          </li>

        </ul>
           </ul>
           <div class="wd-container">
            <img src="https://i.insider.com/5c38c4b3d4beaf6935023278?width=1136&format=jpeg" class="w-100">
            <h1 class="wd-bottom-left">
              SpaceX's Starship
            </h1>
          </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

