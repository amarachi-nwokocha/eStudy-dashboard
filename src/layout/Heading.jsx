
const Heading = (prop) => {
  return (
    <div>
        <h3 className="text-4xl font-semibold">
            {prop.title}
            
        <span className="text-brightGreen">{prop.title2}</span>
        </h3>
    </div>
  )
}

export default Heading