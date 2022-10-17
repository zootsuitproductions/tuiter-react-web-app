const NavigationSidebar = () => {
  return(`
<!--   <div class="row">-->
<!--      <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 mt-2">-->
        <ul class="list-group">
          <li class="list-group-item"><i class="fab fa-twitter fa-1x"></i></li>
          <li class="list-group-item">
            <a href="" class="wd-dont-show-link wd-white">
              <i class="fa fa-home fa-1x"></i>
              <span class="d-xl-inline d-lg-none d-md-none d-sm-none">
              Home
            </span>
            </a>
          </li>
          <li class="list-group-item active ">
            <i class="fa fa-hashtag fa-1x"></i>
            <span class="d-xl-inline d-lg-none d-md-none d-sm-none ">Explore</span>
          <li class="list-group-item ">
          <a href="" class="wd-dont-show-link">
          <i class="fa fa-bell fa-1x wd-white"></i>
          <span class="d-xl-inline d-lg-none d-md-none d-sm-none wd-white">Notifications</span>
          </a>
          <li class="list-group-item "><i class="fa fa-envelope fa-1x"></i>

          <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Messages</span></li></li>
          <li class="list-group-item "><i class="fa fa-bookmark fa-1x"></i>
            <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Bookmarks</span></li></li>
          <li class="list-group-item "><i class="fa fa-list fa-1x"></i>
            <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Lists</span></li></li>
          <li class="list-group-item "><i class="fa fa-user fa-1x"></i>
            <span class="d-xl-inline d-lg-none d-md-none d-sm-none">Profile</span></li></li>
          <li class="list-group-item "><i class="fa fa-question-circle fa-1x"></i>
            <span class="d-xl-inline d-lg-none d-md-none d-sm-none">More</span></li></li>
        </ul>

<!--        <div class="row">-->

          <a class="col-11 btn btn-primary rounded-pill m-2">Tweet</a>
<!--        </div>-->

<!--      </div>-->
 `);
}
export default NavigationSidebar;