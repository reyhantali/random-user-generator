import "./App.css";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 ">
      <div className="w-[600px] flex justify-center bg-white py-8 rounded-xl">
        <div className="flex items-center flex-col text-center">
          <img src="https://randomuser.me/api/portraits/women/51.jpg" className="rounded-full w-32 h-32 border-4 border-blue-500" />
          <span>Cenk Merk</span>
          <span>cenkmerk@gmail.com</span>
          <span>İzmir</span>
          <span>+999999</span>
        </div>
      </div>
    </div>
  );
}

export default App;
