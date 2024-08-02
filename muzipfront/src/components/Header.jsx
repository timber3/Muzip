import SignedIn from './SignedIn.jsx';
import SignedOut from './SignedOut.jsx';
import { getIconImage } from '../util/get-icon.js';
import { useNavigate } from 'react-router-dom';
import useMemberStore from '../stores/Members.js';

const Header = () => {
  const { isLoggedin } = useMemberStore();
  const nav = useNavigate();
  return (
    <div className="flex border-b-1 h-18 pt-2 px-11">
      <div className="flex w-1/5 size-8 gap-2 text-title text-titleCr font-bold" onClick={() => nav('/')}>
        <div className="cursor-pointer">MUZIP</div>
        <div className="pt-2 cursor-pointer">
          <img src={getIconImage('headPhone')} />
        </div>
      </div>

      <div className="w-3/5 flex pt-2 gap-10 text-btCr">
        <div className="cursor-pointer" onClick={() => nav('/')}>
          <img src={getIconImage('home')} className="mr-4" />
          <div className="ml-1">홈</div>
        </div>
        <div className="cursor-pointer" onClick={() => nav('/sheet')}>
          <img src={getIconImage('sheet')} className="ml-1" />
          <div className="">악보</div>
        </div>
        <div className="cursor-pointer" onClick={() => nav('/community')}>
          <img src={getIconImage('community')} className="ml-4" />
          <div className="">커뮤니티</div>
        </div>
        <div className="cursor-pointer" onClick={() => nav('/band')}>
          <img src={getIconImage('band')} className="ml-1" />
          <div className="">밴드</div>
        </div>
      </div>

      <div className="flex justify-end w-1/5">
        {isLoggedin ? (
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
