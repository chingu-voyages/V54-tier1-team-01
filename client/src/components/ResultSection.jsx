import ReactMarkdown from 'react-markdown';

export default function ResultSection(props) {
    return (
        <div className='resultblock'>
            {props.assessment? <ReactMarkdown>{props.assessment}</ReactMarkdown> : <h1 className="text-red-300">Submit your prompt!</h1>}
        </div>
    )
}