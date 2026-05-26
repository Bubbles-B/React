# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# StarWars Characters App
# What the App Does
A simple React app that fetches and displays Star Wars character names from a public API when the page loads.

# Code Explanation
# fetchData()

function fetchData() {
  return axios
    .get(`https://swapi.info/api/people`)
    .then((res) => {
      console.log("API response:", res.data)
      return res.data
    })
    .catch((err) => {
      console.log("API error:", err)
      return []
    })
}


.Uses axios to make a GET request to the Star Wars API
.then() handles a successful response and returns the data
.catch() handles any errors and returns an empty array so the app doesn't crash
.swapi.info returns an array directly, so we use res.data instead of res.data.results

# Characters Component
const Characters = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
      .then((results) => {
        setData(results)
        setLoading(false)
      })
  }, [])

.useState manages three states: the character data, a loading flag, and any error
.useEffect with an empty dependency array [] means it runs once on page load
.Once data comes back, it updates data and sets loading to false

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (data.length === 0) return <div>No characters found</div>

.Three guard clauses handle the different states before rendering the list
.This prevents the app from crashing or showing a blank 

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  )

.map() loops through the characters array and renders each name
.key={item.name} is required by React to uniquely identify each list item

# StarWars Component
function StarWars() {
  return (
    <div>
      <Characters />
    </div>
  )
}

.The parent component that simply renders Characters
.Kept minimal and clean — all the logic lives in Characters


## Summary of Changes Made

1. **Switched API from `swapi.dev` to `swapi.info`**
   - Reason: `swapi.dev` was down and returning no data

2. **Changed `res.data.results` to `res.data`**
   - Reason: `swapi.info` returns an array directly, no `.results` wrapper

3. **Removed the search input and `searchTerm` state**
   - Reason: App should just display all characters on load, no searching needed

4. **Removed debounce timer from `useEffect`**
   - Reason: No longer needed without search functionality

5. **Added `loading`, `error` states and guard clauses**
   - Reason: Better user feedback — shows Loading, Error, or No characters found instead of a blank screen

6. **Added `.catch()` to `fetchData`**
   - Reason: Prevents app from crashing on network errors
