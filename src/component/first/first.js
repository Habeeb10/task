import "./first.css";
import Menu from "../../Menu.svg";
import Search from "../../search.svg";
import Vector from "../../vector.svg";
import Room from "../../room.svg";
import Account from "../../account.svg";
import Heart from "../../heart.svg";
import Bag from "../../bag.svg";
const First = () => {
  return (
    <div className="container">
      <div className="first-row">
        <div className="auto-lay">
          <h1> Auto Layout Added</h1>
        </div>
        <h1 className="title">
          Landing <br /> Page Template
        </h1>
      </div>
      <div className="second-row">
        <div className="my-header">
          <div className="image">
            <img className="icon" src={Menu} alt="menu." />
            <img className="icon" src={Search} alt="search." />
            <img className="icon" src={Vector} alt="vector." />
            <img className="icon" src={Room} alt="room." />
          </div>
          <div className="log">
            <h1 className="point1">logo</h1>
          </div>
          <div className="images">
            <img className="icon" src={Account} alt="account." />
            <img className="icon" src={Heart} alt="heart." />
            <img className="icon" src={Bag} alt="bag." />
          </div>
        </div>

        <div className="first-item">
          <div>
            <h3>
              The perfection of <br /> love is that it's not <br /> perfect.
            </h3>
            <h4>This valentine's day, give from the heart</h4>
            <button className="butt"> shop now</button>
          </div>
          <div className="box" />
        </div>
        <div className="third-item">
          <h5>White Valentine's Day Favorites</h5>
        </div>
        <div className="second-item">
          <div className="box-1" />
          <div className="box-2" />
          <div className="box-3" />
          <div className="box-4" />
        </div>
        <div>
          <button className="but"> Shop Valentine's Day Gift</button>
        </div>
      </div>
    </div>
  );
};

export default First;
