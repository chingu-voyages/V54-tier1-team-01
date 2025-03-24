import ReactMarkdown from 'react-markdown';

export default function ResultSection(props) {
    return (
<<<<<<< HEAD
        <div className='resultblock'>
            <ReactMarkdown>{props.assessment}</ReactMarkdown>
=======
        <div className='resultSection p-10 md:p-20 text-justify'>
            {props.assessment? <ReactMarkdown>{props.assessment}</ReactMarkdown> : <h1 className="text-xl md:text-3xl font-bold text-red-300">Submit your prompt!</h1>}
>>>>>>> 3faebd9 (spike:mvpwflows: styling)
        </div>
    )
}