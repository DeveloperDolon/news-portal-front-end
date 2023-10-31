
const Banner = () => {

    const imgUrl = "https://img.freepik.com/free-vector/earth-blue-wave-background_1017-36678.jpg?w=900&t=st=1698734955~exp=1698735555~hmac=cc9d82f85524776dd65757ab40521929aedbe2a72935884c0e6eb3bbfabb31c5";

    return (
        <div style={{
            background: `url("${imgUrl}") no-repeat center center`,
            backgroundSize: "cover"
        }} className="w-full">
            <div className="max-w-7xl h-[calc(100vh-68px)] mx-auto lg:px-0 md:px-5 px-3 grid md:grid-cols-2 grid-cols-1 place-items-center">
                <div>
                    <h1 className="md:text-5xl font-bold text-black">Hello world from my news portal web site</h1>

                    <p className="mt-8 font-semibold text-black">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem itaque numquam quisquam sunt inventore, doloremque ad cum nam non nisi laudantium voluptas amet aspernatur id, nulla hic similique. Ea?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;