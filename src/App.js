import "./App.css"
import { useState } from "react"

function App() {
	const [todos, setTodos] = useState([])
	const [todo, setTodo] = useState([])
	return (
		<div className="app">
			<div className="mainHeading">
				<h1>ToDo List</h1>
			</div>
			<div className="input">
				<input
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					type="text"
					placeholder="🖊️ Add item..."
				/>
				<i
					onClick={(e) => {
            console.log(e.target)
						return setTodos([
							...todos,
							{ id: Date.now(), text: todo, status: false },
						])
            
					}}
					className="fas fa-plus"
				></i>
			</div>
			{todos.map((td) => {
				return (
					<div className="todos">
						<div className="todo">
							<div className="left">
								<input
									onChange={(e) => {
										setTodos(
											todos.map((obj) => {
												if (obj.id === td.id) {
													obj.status = e.target.checked
												}
												return obj
											})
										)
									}}
									value={td.status}
									type="checkbox"
									name=""
									id=""
								/>
								<p>{td.text}</p>
							</div>
							<div className="right">
								<i onClick={(e)=>{
                  const index = todos.findIndex((obj)=>{
                    return obj.id === td.id
                  })
                  todos.splice(index,1)  
                  console.log(index)
                }} className="fas fa-times"></i>
							</div>
						</div>
					</div>
				)
			})}

			<div className="mainHeading">
				<h1>Completed List</h1>
			</div>
			{todos.map((td) => {
				if (td.status) {
					return (
						<div className="todos">
							<div className="todo">
								<div className="left">
									<p>{td.text}</p>
								</div>
							</div>
						</div>
					)
				}
				return null
			})}
		</div>
	)
}

export default App
