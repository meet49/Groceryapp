import Banner from './componets/Banner';
import Quick from './componets/Quick';
import Categories from './componets/Categories';
import Featured from './componets/Featured';
import Banner1 from './componets/Banner1';
import Todayproduct from './componets/Todayproduct';
import Testimonial from './componets/Testimonial';
import Top from './componets/Top';
import Blog from './componets/Blog';


export default function Home() {
  return (
    <>
      <div>
        <Banner/>
        <Quick/>
        <Categories/>
        <Featured/>
        <Banner1/>
        <Todayproduct/>
        <Testimonial/>
        <Top/>
        <Blog/>
      </div>


    </>

  );
}
