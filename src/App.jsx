import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './app.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Cauã Vieira" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae maiores perspiciatis non, quasi exercitationem placeat laudantium id asperiores fuga iure. Nisi debitis placeat sapiente ad architecto repellat ipsa accusamus molestiae!"
          />
          <Post 
            author="Diego Fernandes" 
            content="Um novo post muito legal!"
          />
        </main>
      </div>
    </div>
  )
}
export default App
