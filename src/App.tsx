import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"


const GET_AULAS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  const { data} = useQuery<{lessons: Lesson[]}>(GET_AULAS_QUERY)


      console.log(data);
  

  return (
   <ul>
    {data?.lessons.map(lesson => {
      return <li key={lesson.id}>{lesson.title}</li>
    })}
   </ul>
  )
}

export default App




