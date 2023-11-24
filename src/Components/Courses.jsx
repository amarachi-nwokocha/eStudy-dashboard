import Heading from "../layout/Heading"
import appdev from '../assets/App-dev.svg'
import webdev from '../assets/graphic.svg'
import graphics from '../assets/web-dev.svg'
import digital from '../assets/digital.svg'
import CourseCard from "../layout/CourseCard"

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center md:px-32 px-5 my-10">
       <div>
       <Heading title='Our ' title2="Courses" />
       </div>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <CourseCard img={appdev} title="App Development"/>
          <CourseCard img={webdev} title="Web Development"/>
          <CourseCard img={graphics} title="Graphics"/>
          <CourseCard img={digital} title="Digital Marketing"/>
        </div>
    </div>
  )
}

export default Courses