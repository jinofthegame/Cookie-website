import City from "@/Components/Cities";
import Card from"../Components/Cards";
import Grids from"../Components/Grid";
  import State from "@/Components/states";
import DataFetch from "@/Components/datafetch";


//import ReusableCard from "@/Components/reusableCard";

export default function Home() {
  return (
      <div className="h-screen">
        <Card />
        <Grids />
        <State />
        <City />
        <DataFetch/>
      </div>
  );
}
