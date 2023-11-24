import Heading from "../layout/Heading"
import ReviewCard from "../layout/ReviewCard"
import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.png'
import pic3 from '../assets/images/pic3.png'

const Review = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title='Our ' title2="Reviews" />
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={pic1} />
        <ReviewCard img={pic2} />
        <ReviewCard img={pic3} />
      </div>
    </div>
  )
}

export default Review