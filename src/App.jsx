import Post from "./Post";

function App() {
  return (
    <div>
      <Post 
        author="Cauã Vieira" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae maiores perspiciatis non, quasi exercitationem placeat laudantium id asperiores fuga iure. Nisi debitis placeat sapiente ad architecto repellat ipsa accusamus molestiae!"
      />
      <Post 
        author="Diego Fernandes" 
        content="Um novo post muito legal!"
      />
    </div>
  )
}
export default App
