
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const News = ({data}) => {

    
    return (
        <div>
            <div className="overflow-hidden rounded-lg">
                <img className="h-[300px]" src={data.image} alt="" />
            </div>
            <div className="my-3 flex justify-between">
                <p className="font-semibold">Author : {data.author}</p>
                <p className="font-semibold">{data.date_published}</p>
            </div>
            <h1 className="text-3xl font-medium hover:underline"><Link to={`/news/${data._id}`}>{data.headline}</Link></h1>
        </div>
    );
};

export default News;

News.propTypes = {
    data: PropTypes.object
}