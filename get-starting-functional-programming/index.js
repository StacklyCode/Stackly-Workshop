/*
@params {number, number}
**/
const add = (a, b) => a + b

/*
@return {number}
**/
const getDate = () => Date().now

add(2, 2)
getDate()

/*
@params {number}
@return {number}
**/
function toHex(n) {
  let hex = n.toString(16)
  return hex.padStart(2, '0')
}

toHex(2)
toHex(5)

/*
@params {number, number, number}
@return {strign}
**/
function rgbToHex(R, G, B) {
  return '#' + [toHex(R), toHex(G), toHex(B)].join('')
}

rgbToHex(1, 25, 45)

/*
@params {boolean, boolean}
@return {boolean}
**/

function exclusiveOr(A, B) {
  return (A || B) && !(A && B)
}

exclusiveOr(false, true)

/*
@params {function}
@return {boolean[]}
**/

function computeTruthTable(operator) {
  const truthValues = [true, false]
  const table = []
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B)
      table.push({ A, B, value })
    }
  }
  return table
}

console.table(computeTruthTable((a, b) => a && b))

todos = []

const addTodo = (todos, newTodo) => [...todos, newTodo]
const removeTodo = (todos, todoId) => todos.filter((todo) => todo.id !== todoId)

todos = addTodo(todos, { id: 1, title: 'Practice React', isCompleted: true })
todos = addTodo(todos, { id: 2, title: 'Practice Angular', isCompleted: false })

todos = removeTodo(todos, 1)

function transform(arr, fn) {
  let list = new Array(arr.length)

  for (let i = 0; i < arr.length; i++) {
    list[i] = fn(arr[i], i, arr)
  }

  return list
}

const powToTwo = transform([1, 2, 3, 4, 5, 6], (el) => el * el)
;[1, 2, 3, 4, 5, 6].map((el) => el * el)
powToTwo

function exclusion(arr, fn) {
  let list = []

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      list.push(arr[i])
    }
  }

  return list
}

let greaterThan2 = exclusion([1, 2, 3, 4, 5, 6], (el) => el <= 2)
;[1, 2, 3, 4, 5, 6].filter((el) => el <= 2)
greaterThan2

function composition(arr, fn, init) {
  let total = init

  for (let i = 0; i < arr.length; i++) {
    total = fn(total, arr[i], i, arr)
  }

  return total
}

let sum = composition([1, 2, 3, 4, 5, 6], (acc, el) => el + acc, 0)
;[1, 2, 3, 4, 5, 6].reduce((acc, el) => el + acc, 0)
sum
