import Featured from "./components/featured";
import Library from "./components/library";
import Trend from "./components/trend";
import Menu from "./components/menu";

export default function Home() {

return (
    <div className="my-10 mx-5 border-5 border-gray-600 rounded-md">
      <Library></Library>
      <Menu></Menu>
      <Featured></Featured>
      <Trend></Trend>
    </div>
  );
}
