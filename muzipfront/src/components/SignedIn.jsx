import { getIconImage } from '../util/get-icon.js';

const SignedIn = () => {
  return (
    <div className="flex gap-1 pt-1">
      <img src={getIconImage('alarm')} className="btn-base" />
      <div className="flex btn-base gap-2 pb-2">
        <img src={getIconImage('profile')} />
        <div className="text-nameCr">내 이름</div>
      </div>
    </div>
  );
};

export default SignedIn;
