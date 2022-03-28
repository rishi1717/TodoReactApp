import React,{useState} from "react";

export default function TodoList(){
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
						onClick={() =>
							setTodos([
								...todos,
								{ id: Date.now(), text: todo, status: false },
							])
						}
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
												todos.filter((obj) => {
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
									<i className="fas fa-times"></i>
								</div>
							</div>
						</div>
					)
				})}

				{todos.map((td) => {
					if (td.status) {
						return (
							<div>
								<h2>{td.text}</h2>
							</div>
						)
					}
					return null
				})}
			</div>
		)
}