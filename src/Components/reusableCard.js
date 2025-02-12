//props
function ReusableCard({ college, age, phone, name }) {
    // const { college, age, phone } = props;
  
    return (
      <div className="bg-blue-100 flex flex-col items-center p-4 relative group">
        <img
          className="h-[100px] w-[100px] rounded-full"
          src="https://images.pexels.com/photos/19210730/pexels-photo-19210730/free-photo-of-gorsa-bridge-en-norvege-vue-de-drone-chute-d-eau-montagne-pont.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="user"
        />
        <h1 className="my-10">{name}</h1>
  
        <div className="bg-[rgb(255,0,0)]/[0.5] p-4 absolute top-0 bottom-0 flex flex-col items-center opacity-0 group-hover:opacity-100 ">
          <h1 className="text-white">{name}</h1>
          <h2 className="text-white">{college}</h2>
          <h2 className="text-white">{phone}</h2>
        </div>
      </div>
    );
  }
  
  export default ReusableCard;