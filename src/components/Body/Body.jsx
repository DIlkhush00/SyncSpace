import Left_wing from "./Left_wing/Left_side"
import Right_wing from "./Right_wing/Rigth_side"
function Body() {

  return (
    <div className="flex">
      <Left_wing />
      <Right_wing />
    </div>
  )
}

export default Body
