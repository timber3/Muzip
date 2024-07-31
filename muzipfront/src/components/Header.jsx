import '../css/Header.css';
import SignedIn from './SignedIn.jsx';
import SignedOut from './SignedOut.jsx';
import { LogInStateContext } from '../App.jsx';
import { useContext } from 'react';
import { getIconImage } from '../util/get-icon.js';

const Header = () => {
  const isLogin = useContext(LogInStateContext);
  return (
    <div className="flex border-b-1 h-18 pt-3 px-11">
      <div className="flex w-1/4 size-8 gap-2 text-title font-bold cursor-pointer">
        <div>MUZIP</div>
        <div className="pt-2">
          <img src={getIconImage('headPhone')} />
        </div>
      </div>

      <div className="w-2/4 flex pt-2  text-btCr">
        <div>
          <img className="" src={getIconImage('home')} />
          <div className="btn-base flex justify ">홈</div>
        </div>
        <div>
          <img src={getIconImage('sheet')} />
          <div className="btn-base">악보</div>
        </div>
        <div>
          <img src={getIconImage('community')} />
          <div className="btn-base">커뮤니티</div>
        </div>
        <div>
          <img src={getIconImage('band')} />
          <div className="btn-base">밴드</div>
        </div>
      </div>

      <div className="flex justify-end w-1/4">
        {isLogin ? (
          <div>
            <SignedIn></SignedIn>
          </div>
        ) : (
          <div>
            <SignedOut></SignedOut>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
