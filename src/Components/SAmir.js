function Card(){
    return (
        <div className="bg-blue-300 flex flex-col items-center p-4 relative border-4 border-black rounded-lg">
        <img 
            className="h-[120px] w-[155px] rounded-full" src="https://media.gettyimages.com/id/2151017195/photo/london-england-andrew-garfield-attends-the-national-theatre-up-next-gala-at-the-national.jpg?s=612x612&w=0&k=20&c=KVZ4TznKHeCUBa5itKClnoM_Xko24sPwQjNRvEIDQQA=" alt=""
            />
        <h1 className="my-10 text-" > Andrew Garfield </h1>
        <div className="bg-[rgb(0,0,0)]/[0.5] p-4 absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center opacity-0 hover:opacity-100">
            <h1 className="text-white">Andrew Garfield</h1>
            <h2 className="text-white">NCCS</h2>
            <h2 className="text-white">1486325791</h2>
            
        </div>
    </div> 
    );
}
export default Card;