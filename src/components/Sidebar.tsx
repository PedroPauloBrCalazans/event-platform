import { gql, useQuery } from "@apollo/client";
import { LessonCard } from "./LessonCard";

//fazendo a busca de dentro do graphcms, utilizando uma query do graphql
const GET_AULAS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[] // significa que vai receber um array de objetos
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_AULAS_QUERY)


    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma das aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return(
                        <LessonCard
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            dataDisponibilidade={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}