import useNewsData from "../../Hooks/useNewsData";
import News from "../News/News";


const AllNews = () => {

    const news = useNewsData();

    return (
        <div className="dark:text-white">
            <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:my-32 my-16">
                <h1 className="lg:text-5xl text-3xl font-bold text-center">Our All Latest News Here</h1>


                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 gap-7">
                    {
                        news?.map(item => <News key={item._id} data={item}></News>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllNews;