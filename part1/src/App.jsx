const App = () => {
  const friends = [
    {name: 'Peter', age: 10},
    {name: 'Maya', age: 26},
  ]
    return (
    <div>
      <h1>Greetings</h1>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}
export default App
