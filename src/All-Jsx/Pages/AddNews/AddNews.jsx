import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const AddNews = () => {

    const {mainUrl} = useContext(AuthContext);

    const handleAddNews = (e) => {

        e.preventDefault();

        const form = e.target;

        const headline = form.headline.value;
        const author = form.author.value;
        const image = form.image.value;
        const source = form.source.value;
        const content = form.content.value;
        const category = form.category.value;
        const date = new Date();
        const date_published =date.toISOString();


        const newsValue = {headline, date_published, author, image, source, content, category};

        axios.post(`${mainUrl}/news`, newsValue, {withCredentials: true}).
        then(res => {
            if(res?.data?.insertedId) {
                toast.success("News Added successfully!!");
            }
        }).catch(err => console.log(err));
    }

    return (
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:my-32 my-20">

            <h1 className="md:text-5xl text-3xl font-bold text-center md:mb-20 mb-10">Add News Content</h1>

            <form onSubmit={handleAddNews} className="grid md:grid-cols-2 grid-cols-1 gap-7">
                <div className="grid grid-cols-1 gap-5">
                    <label htmlFor="headline"> Headline
                        <input type="text" name="headline" className="w-full md:py-5 py-2 md:text-base text-sm mt-3 rounded-lg px-5 bg-gray-400 text-white" placeholder="Headline" required />
                    </label>

                    <label htmlFor="author"> Author
                        <input type="text" name="author" className="w-full md:py-5 py-2 md:text-base text-sm mt-3 rounded-lg px-5 bg-gray-400 text-white" placeholder="Author" required />
                    </label>

                    <label htmlFor="image"> Image
                        <input type="text" name="image" className="w-full md:py-5 py-2 md:text-base text-sm mt-3 rounded-lg px-5 bg-gray-400 text-white" placeholder="Image Link" required />
                    </label>

                    <label htmlFor="source"> Source
                        <input type="text" name="source" className="w-full md:py-5 py-2 md:text-base text-sm mt-3 rounded-lg px-5 bg-gray-400 text-white" placeholder="Source" required />
                    </label>
                </div>

                <div className="grid grid-cols-1 gap-5">
                    <label htmlFor="category"> Category
                        <select name="category" id="" className="w-full md:py-5 py-2 md:text-base text-sm mt-3 rounded-lg px-5 bg-gray-400 text-white" required>
                            <option selected disabled>Select Category</option>
                            <option value="Politics">Politics</option>
                            <option value="Sports">Sports</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="International">International</option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Others">Others</option>
                        </select>
                    </label>

                    <label htmlFor="content"> Content
                        <textarea name="content" className="w-full md:py-5 py-2 md:text-base text-sm mt-3 rounded-lg px-5 bg-gray-400 text-white" id="" placeholder="Content" required cols="30" rows="10"></textarea>
                    </label>

                    <input type="submit" className="w-full block py-5 md:text-lg text-base font-bold bg-yellow-300 rounded-lg cursor-pointer text-black" value="Submit News" />
                </div>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default AddNews;