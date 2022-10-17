import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return(`
      <div class="col-lg-4 mt-2 d-xl-block d-xxl-block d-md-none d-sm-none">
        <ul class="list-group"></ul>
          <li class="list-group-item wd-white-text">Who to follow</li>
          ${who.map(who => {return(WhoToFollowListItem(who)) })}
         <ul>
       <div>
      
  `);
}

export default WhoToFollowList;