import useMemberStore from '../stores/Members';

const SignedOut = () => {
  const { setIsLoggedIn } = useMemberStore();
  const onClickLoginButton = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="flex gap-x-1">
      <div className="btn-base border-1">회원가입</div>
      <div className="btn-base border-1 border-titleCr text-titleCr" onClick={onClickLoginButton}>
        로그인
      </div>
    </div>
  );
};

export default SignedOut;
