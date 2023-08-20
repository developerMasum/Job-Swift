import { FaArrowRight, FaBirthdayCake } from 'react-icons/fa';

const HeadlineBar = () => {
    return (
        <div className='bg-green-600 text-center font-bold text-white p-3 '>
            <div className='flex justify-center items-center gap-3'>
                <FaBirthdayCake></FaBirthdayCake>
                <h1>IT'S OUR BIRTHDAY! Save 15% on implementation Claim Your Discount</h1>
                <FaArrowRight></FaArrowRight>
            </div>

        </div>
    );
};

export default HeadlineBar;