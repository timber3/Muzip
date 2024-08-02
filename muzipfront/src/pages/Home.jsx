import Header from '../components/Header';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <Carousel></Carousel>
      </div>
      <div className="pt-10 flex justify-center">
        <input
          className="h-12 min-w-96 w-1/4 pl-8 border-1 rounded-full border-titleCr outline-0 shadow-lg  placeholder:font-semibold placeholder:text-titleCr text-titleCr text-lg placeholder:text-center placeholder:pr-8 focus:placeholder-transparent focus:text-left"
          placeholder="악보를 검색하세요."
        />
      </div>
      <div className="pt-7">
        <div>베스트 영상</div>
        <div>베스트 악보</div>
        <div>추천 악보</div>
      </div>
    </div>
  );
};

export default Home;
