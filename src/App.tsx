import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface UserType {
  cell: string;
  email: string;
  phone: string;
  name: NameType;
  location: LocationType;
  picture: PictureType;
}

interface NameType {
  first: string;
  last: string;
  title: string;
}

interface LocationType {
  city: string;
}

interface PictureType {
  medium: string;
}

function App() {
  const [user, setUser] = useState<UserType>();
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchUser = async () => {
    setLoading(true);
    const response = await axios.get("https://randomuser.me/api/");
    setLoading(false);
    setUser(response.data.results[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 ">
      <div className="w-[600px] flex justify-center bg-white py-8 rounded-xl">
        {loading ? (
          <span>Yükleniyor</span>
        ) : (
          <div className="flex items-center flex-col text-center">
            <img
              src={user?.picture.medium}
              className="rounded-full w-32 h-32 border-4 border-blue-500"
            />
            <span>{user?.name.first}</span>
            <span>{user?.email}</span>
            <span>{user?.location.city}</span>
            <span>{user?.phone}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
