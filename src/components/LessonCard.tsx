import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    dataDisponibilidade: Date;
    type: 'live' | 'class';
}

export function LessonCard(props: LessonProps) {
    const { slug } = useParams<{ slug: string }>()

    const isLessonDisponivel = isPast(props.dataDisponibilidade);
    const dataFormatada = format(props.dataDisponibilidade, "EEEE' - 'd' de 'MMMM' - 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                { dataFormatada }
            </span>

            <div 
                className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 
                    'bg-green-500' : ''}`}
            >
                <header className="flex items-center justify-between">
                    {isLessonDisponivel ? (
                        <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson ? 
                        'text-white' : 'text-blue-500'}`}>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        { props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
                    </span>
                </header>

                <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
                   { props.title }
                </strong>
            </div>
        </Link>
    )
}

//isPast => ela verifica se uma data que eu passar para ela como parametro ja passou, está no passado 