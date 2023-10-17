import Container from "@/Components/Container";

const Skills = () => {
    return (
        <Container>
            <div className="my-24">

                <div className="my-12">
                    <h3 className="text-primary font-bold text-center">My Skills</h3>
                    <h2 className="font-bold text-center lg:text-6xl">I Develop Skills Regularly
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <div className="left">
                        <div>
                            <h3>JavaScript </h3>
                            <div class="w-80 bg-gray-200 rounded-full my-2">
                                <div class="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '80%' }}> 80%</div>
                            </div>
                        </div>


                        <div>
                            <h3>ReactJs </h3>
                            <div class="w-80 bg-gray-200 rounded-full my-2">
                                <div class="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '85%' }}> 85%</div>
                            </div>
                        </div>

                        <div>
                            <h3>NodeJs </h3>
                            <div class="w-80 bg-gray-200 rounded-full my-2">
                                <div class="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '70%' }}> 70%</div>
                            </div>
                        </div>
                        <div>
                            <h3>Mongoose </h3>
                            <div class="w-80 bg-gray-200 rounded-full my-2">
                                <div class="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '60%' }}> 60%</div>
                            </div>
                        </div>


                    </div>
                    <div className="right">

                        <div>
                            <h3>Tailwind CSS </h3>
                            <div class="w-80 bg-gray-200 rounded-full my-2">
                                <div class="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '95%' }}> 95%</div>
                            </div>
                        </div>
                        <div>
                            <h3>PHP </h3>
                            <div class="w-80 bg-gray-200 rounded-full my-2">
                                <div class="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}> 45%</div>
                            </div>
                        </div>
                        <div>
                            <h3>MySQL </h3>
                            <div class="w-80 bg-gray-200 rounded-full my-2">
                                <div class="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}> 45%</div>
                            </div>
                        </div>
                        <div>
                            <h3>Laravel </h3>
                            <div class="w-80 bg-gray-200 rounded-full my-2">
                                <div class="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}> 45%</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Container >
    );
};

export default Skills;