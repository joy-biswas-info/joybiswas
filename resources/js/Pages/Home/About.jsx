import Container from "@/Components/Container";
import NavLink from "@/Components/NavLink";

const About = () => {
    return (
        <div id='about' className="">
            <Container>
                <div className="upper-section flex flex-col lg:flex-row gap-4 py-24 mx-auto">
                    <div>
                        <div className="my-4 border-b border-gray-600">
                            <h3 className="text-primary font-bold">01</h3>
                            <h2 className="text-2xl font-bold">
                                Dedication
                            </h2>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum laudantium! Architecto reiciendis quaerat placeat similique, ad earum omnis facere.</p>
                    </div>
                    <div>
                        <div className="my-4 border-b border-gray-600">
                            <h3 className="text-primary font-bold">02</h3>
                            <h2 className="text-2xl font-bold">
                                Dedication
                            </h2>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum laudantium! Architecto reiciendis quaerat placeat similique, ad earum omnis facere.</p>
                    </div>
                    <div>
                        <div className="my-4 border-b border-gray-600">
                            <h3 className="text-primary font-bold">03</h3>
                            <h2 className="text-2xl font-bold">
                                Dedication
                            </h2>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum laudantium! Architecto reiciendis quaerat placeat similique, ad earum omnis facere.</p>
                    </div>

                </div>

            </Container>

            <Container className="about-me flex gap-12 items-center align-middle mt-24">
                <div className="left">
                    <div className="relative">
                        <img src='./uploads/images/banner/about-1.jpeg' alt="" className=" rounded-2xl w-[800px]" />
                        <img src='./uploads/images/banner/about-2.jpeg' alt="" className="w-60 rounded-2xl absolute top-40 left-[-80px]" />

                    </div>

                </div>
                <div className="right">
                    <div className="text w-5/6">
                        <h3 className="text-primary font-bold md:text-2xl">I'm a Developer</h3>
                        <h2 className="texl-2xl md:text-4xl lg:text-4xl mb-8 font-bold">I Develop Application that Help People
                        </h2>
                        <p>Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat cupidatat

                        </p>
                        <p>Krnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis

                        </p>
                    </div>
                    <button className="btn bg-primary px-4 py-2 rounded-3xl my-6 hover:text-white"><NavLink className="hover:text-white" href="#">View Portfolio</NavLink></button>
                </div>
            </Container>
            <Container className="py-48">
                <div className="flex justify-between items-center align-middle lg:px-24">
                    <div className="digital-products flex items-center align-middle gap-2">
                        <h2 className="number text-primary text-xl font-bold md:text-4xl lg:text-6xl flex items-start">
                            52
                            <span className="text-2xl font-bold mx-1">+</span>
                        </h2>
                        <p className="font-bold">Digital <br /> Products</p>
                    </div>
                    <div className="digital-products flex items-center align-middle gap-2">
                        <h2 className="number text-primary text-xl font-bold md:text-4xl lg:text-6xl flex items-start">
                            520
                            <span className="text-2xl font-bold mx-1">+</span>
                        </h2>
                        <p className="font-bold">Open Source
                            <br /> Projects</p>
                    </div>
                    <div className="digital-products flex items-center align-middle gap-2">
                        <h2 className="number text-primary text-xl font-bold md:text-4xl lg:text-6xl flex items-start">
                            1M
                            <span className="text-2xl font-bold mx-1">+</span>
                        </h2>
                        <p className="font-bold">Lines of
                            <br /> Code</p>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default About;