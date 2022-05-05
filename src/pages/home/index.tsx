// import { Counter } from '../../features/counter/Counter';
import IGContainer from "../../components/IGContainer";
import IGHeader from "../../components/IGHeader";
import IGStory from "./components/IGStory";
import IGPost from "./components/IGPost";
import IGProfile from "./components/IGProfile";
import './App.css';
import db from  "../../db.json";

const IGPostList: React.FC = () => {
  const { posts } = db;
  return (
    <>
      {
        posts?.map((item) => {
          const {
            id,
            location,
            account,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          );
        })
        }
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">
              <IGStory />
              <IGPostList />
          </div>
          <div className="hidden lg:block lg:w-[424px]">
              <IGProfile />
          </div>
        </div>
      </IGContainer>
      {/* <div className="App">
        <div className="flex justify-center w-full mt-20">
          tailwindcss
        </div>
        <header className="App-header">
          
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div> */}
    </>
  );
}

export default Home;
