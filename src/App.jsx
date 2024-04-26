import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Plate from "./assets/plate.jpg";
import { Divider } from "antd";
import green from "./assets/greens.jpg"
import logo from "./assets/logo.png"

function App() {
  let headers = ["Home", "About", "Pages", "Shop", "Contact"];

  return (
    <div className="w-screen xl:w-[97vw] h-screen xl:h-[95vh] xl:m-auto xl:mt-5 xl:border xl:border-t-slate-200 bg-white xl:shadow-md xl:shadow-slate-500 rounded-md">
      <div className="flex items-center gap-20 justify-around py-3 text-lg text-[#B1B0B0] font-bold">
        <div className="pl-10">
          <img src={logo} width={60}/>
        </div>
        <div className="flex gap-14">
          {headers.map((res, i) => {
            return (
              <p key={i} className="hover:text-[#FF9637] cursor-pointer flex-wrap">
                {res}
              </p>
            );
          })}
          <p></p>
        </div>
        <div className="shadow-md py-3 rounded-md  px-3 w-[25vw] relative">
          <input className="border-none outline-none pl-3" type="text" placeholder="Search Here" />
          <span className="absolute right-3 top-3">
            <SearchIcon />
          </span>
        </div>
        <div className="flex gap-3 pr-4">
          <p className="shadow-md rounded-lg p-2">
            <ShoppingBagOutlinedIcon />
          </p>
          <p className="shadow-md rounded-lg p-2">
            <FavoriteBorderOutlinedIcon />
          </p>
        </div>
      </div>
      <div className="flex items-center pl-14">
        <div className="w-[33%]">
          <p className="text-7xl font-Rancho">Hunger is <br/> a good cook</p>
          <p className="text-xl pt-3 text-[#B1B0B0] font-semibold">
            To live a full life,you have to fill your stomach first Quality food
            is the most important thing in our life.
          </p>
          <div className="pt-2 flex gap-8">
            <button className="bg-[#FF8E28] px-14 rounded-md py-4 text-white/80 text-lg font-semibold">
              Book a table
            </button>
            <button className="bg-[#00A850] px-14 rounded-md py-4 text-white/80 text-lg font-semibold">
             See our menu
            </button>
          </div>
        </div>
        <div>
          <img src={Plate} className="w-[34vw] pl-4 pt-2" />
        </div>
    <div className="total">
        <div className="pl-26.5 flex flex-col gap-8">
          <div>
            <h1 className="text-lg font-bold">Trending Item </h1>
            <div className="pt-2 text-[#B1B0B0] font-semibold">
              <p> -25% off</p>
              <p>Enjoy our specially prepared </p>
              <p> Items for you</p>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold"> Dessert Menu </h1>
            <div className="pt-2 text-[#B1B0B0] font-semibold">
              <p>  Delivering best ingredients <br/>
        for our trust food lovers</p>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold"> Nearest Restaurant </h1>
            <div className="pt-2 text-[#B1B0B0] font-semibold">
              <p> </p>
              <p>Each kitchen works with its own delivery area <br/>
            to deliver food to you as soon as possible </p>
            </div>
          </div>
        </div>
    </div>    
        <div className="flex flex-col gap-4 justify-between">
          <div class="flex">
            <span>01</span>
            <span class="flex items-start justify-start pt-12 border-r h-[104px] border-slate-500 pr-0"></span>
          </div>

          <div class="flex">
            <span>02</span>
            <span class="flex items-start justify-start pt-12 border-r h-[104px] border-slate-500 pr-0"></span>
          </div>

          <div class="flex">
            <span>03</span>
            <span class="flex items-start justify-start pt-12 border-r h-[104px] border-slate-500 pr-0"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-[#B1B0B0] justify-center pl-[26vw]">
        <p>Fresh Salad,Pasifigo</p>
      </div>
      <div className="flex text-[#B1B0B0]">
        <div>
          <img src={green} width={130} className="absolute bottom-3 left-4" />
        </div>
        <div className="flex absolute left-[15vw] gap-20 bottom-14">
          <div>Delivery in all town <br/> less than 30 minutes</div>
          <div>Free delivery <br/> from $29</div>
          <div>only fresh <br/> and home products</div>
        </div>
      </div>
    </div>
  );
}

export default App;