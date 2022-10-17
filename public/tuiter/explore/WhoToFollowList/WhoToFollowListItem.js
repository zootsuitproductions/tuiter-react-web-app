const WhoToFollowListItem = (who) => {
  return(`
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="row">
      <div class="col-5 p-2">
        <img class="rounded-circle img-fluid"
             src="${who.avatarIcon}">
      </div>
      <div class="col-7 p-2 wd-white-text">
        ${who.userName} <i
          class="fa fa-check-circle fa-1x position-relative"></i>
        <div class="wd-gray-text">
          @${who.handle}
        </div>
      </div>
      <div class="col-3 p-2">
        <a class="btn btn-primary rounded-pill">Follow</a>
      </div>
    </div>
  </li>`);

 }

 export default WhoToFollowListItem;