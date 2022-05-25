import React, {useState} from 'react'
import Thing from './Thing'
import AddItem from './AddItem'

const Todo = () => {
    const affairs = [
        {id: 1, thing: 'Watch movie', done: false, cross: false},
        {id: 2, thing: 'Read book', done: false, cross: false},
        {id: 3, thing: 'Do sport', done: false, cross: false}
    ]
    
    const [todos, setTodos] = useState(affairs)
    const [value, setValue] = useState('')
    const [classRed, setClassRed] = useState(false)

    const changeItem = (event, index) => {
        setTodos(todos.map(item => {
            if(item.id === index) {
                return {...item, thing: event.target.value}
            }
            return item
        }))
    }

    const editItem = (index, status) => {
        setTodos(todos.map(item => {
            if(item.id === index) {
                return {...item, done: status}
            }
            return item
        }))
    }
    
    const delItem = index => {
        setTodos(todos.filter(item => {
            return item.id !== index
        }))
    }

    const crossItem = (event, index) => {
        event.preventDefault()
        setTodos(todos.map(item => {
            if(item.id === index) {
                return {...item, cross: !item.cross}
            }
            return item
        }))
    }


    const addItem = value => {
        if(value !== '') {
            let obj = {id: 4, thing: value, done: false, cross: false}
            setTodos([...todos, obj])
            setClassRed(false)
            setValue('')
        }else{
            setClassRed(true)
        }
    }
    
    const result = todos.map(item => {
        return <Thing
            key={item.id}
            index={item.id}
            thing={item.thing}
            done={item.done}
            cross={item.cross}
            changeItem={changeItem}
            editItem={editItem}
            delItem={delItem}
            crossItem={crossItem}
        />
    })

    const newItem = event => {
        setValue(event.target.value)
        setClassRed(false)
    }
    
    return <div>
            <table>
                <tbody>
                    {result}
                </tbody>
            </table>

            <div className="addItem">
                <AddItem
                    addItem={addItem}
                    value={value}
                    classRed={classRed}
                    newItem={newItem}
                />
            </div>
        </div>
}

export default Todo