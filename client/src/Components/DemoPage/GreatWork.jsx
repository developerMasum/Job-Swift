const GreatWork = () => {
  return (
    <div className="max-w-[1100px] mx-auto mt-20">
      <div className=" flex justify-center items-center ">
        <div className="max-w-[700px] text-justify space-y-5">
          <h1 className=" text-2xl md:text-4xl font-extrabold text-swift text-center">
            We set people free to do great work.
          </h1>
          <p className="text-center text[18px] text-gray-500">
            Job Swift software collects and organizes all the information you
            gather throughout the employee life cycle, and then helps you use it
            to achieve great things. Whether you’re hiring, onboarding,
            preparing compensation, or building culture, Job Swift gives you the
            tools and insights to focus on your most important asset—your
            people.
          </p>
        </div>
      </div>
      <div className="md:flex justify-between items-center gap-4 m-2 md:m-10">
        <img
          src="https://i.ibb.co/3dtRSYk/project-Image1.webp"
          alt="GratImag"
          width={500}
        />
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold">Built for SMBs</h3>
            <p className="text-gray-500 text-justify">
              Starting small makes everything easier when it comes to building
              strong cultures and creating great places to work. That’s why
              we’re obsessed with crafting solutions for small and medium-sized
              businesses.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Easy to Set Up, Easy to Use</h3>
            <p className="text-gray-500 text-justify">
              We built Job Swift to be intuitive, clear, and easy to use. People
              get it immediately, they love using it, and they’ll love you for
              choosing our software.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Top-Rated Customer Service</h3>
            <p className="text-gray-500 text-justify">
              No one else puts the customer experience at the heart of
              everything quite like we do. We’re always listening to gain a
              better understanding of how we can help you succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatWork;
