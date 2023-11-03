import { useEffect } from "react";
import News from "../News/News";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";


const AllNews = () => {
    const [news , setNews] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);
    const [newsCount, setNewsCount] = useState(0);
    const {mainUrl} = useContext(AuthContext);
    const numberOfPages = Math.ceil(newsCount / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        axios.get(`${mainUrl}/all-news?page=${currentPage}&&size=${itemsPerPage}`)
        .then(res => {
            setNews(res.data)
        }).catch(err => console.error(err));

    }, [currentPage, itemsPerPage, mainUrl])

    useEffect(() => {
        axios.get(`${mainUrl}/all-news-count`)
        .then(res => setNewsCount(res.data.count))
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="dark:text-white">
            <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:my-32 my-16">
                <h1 className="lg:text-5xl text-3xl font-bold text-center">Our All Latest News Here</h1>


                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 md:gap-10 gap-7">

                    {
                        news?.map(item => <News key={item._id} data={item}></News>)
                    }

                </div>

                <p>Page number : {currentPage}</p>

                <div className="space-x-5 text-center md:my-10 my-5">
                    {
                        pages.map(number =><> <button onClick={() => setCurrentPage(number)} 
                            className={`btn hover:bg-amber-200 ${currentPage === number ? "bg-amber-200" : ""}`} 
                            key={number}>{number+1}</button>
                        </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllNews;