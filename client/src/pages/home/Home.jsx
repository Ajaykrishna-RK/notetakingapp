import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos } from "../../redux/fetchingApi/fetchAlltodosApi";
import { Link, useNavigate } from "react-router-dom";
import NoDataAnimation from "../../components/NoDataAnimation";
import { logOutApi } from "../../redux/auth/loginSlice";


function Home() {
  const { allTodos } = useSelector((state) => state.Todos);
  const { userName, checkAuthLoading } = useSelector((state) => state.login);
  
console.log(userName,"user")

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  console.log(allTodos,"alltodos");


 


  const handleLogOut = () =>{
    dispatch(logOutApi())
    navigate("/login")
  }

  return (
    <div>
      <div className="mt-5 text-center items-center justify-center ">
        <h1 className="text-6xl text-white">HI,{userName}</h1>
      </div>

      <div className="justify-end items-end mt-6 flex mr-5">
        <button
          style={{ height: "35px" }}
          className="bg-blue-700 px-4 shadow-xl text-white rounded-lg "
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>

      <div>
        <form
          style={{ width: "100%" }}
          className="mt-14 justify-center items-center flex"
        >
          <input
            style={{ width: "60%", height: "35px" }}
            type="search"
            name=""
            id=""
            className="appearance-none block w-full text-gray-700 border border-black rounded  px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <button
            style={{ height: "35px" }}
            className="bg-blue-700 px-4 shadow-xl text-white rounded-lg"
          >
            Search
          </button>
        </form>
      </div>

      <div className="justify-center items-center flex mt-14">
        <Link to="/createtodo">
          <button
            style={{ height: "35px" }}
            className="bg-blue-700 px-4 shadow-xl text-white rounded-lg"
          >
            + Add new Note
          </button>
        </Link>
      </div>

      {allTodos.length === 0 ? (
        <NoDataAnimation />
      ) : (
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-4 ">
            {allTodos &&
              allTodos.map((item, key) => (
                <Link to={`/singlepage/${item?._id}`} key={item?._id}>
                  <div className="justify-center items-center flex cursor-pointer">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{item?.title} </div>
                        <p class="text-gray-700 text-base">
                          {item?.description}...
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
