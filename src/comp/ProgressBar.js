
const ProgressBar = (progress) => {

   var width = progress;

  return (
    <div className="p-1 w-full bg-background-very-dark">
        <div className="bg-cyan h-2" style={{width: width + '%'}}/>
    </div>
  )
}

export default ProgressBar;