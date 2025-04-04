import ReactMarkdown from 'react-markdown';

export default function ResultSection(props) {
    return (
        <div className='resultsection gemini p-10 md:p-20 text-justify'>
            {props.assessment? <ReactMarkdown>{props.assessment}</ReactMarkdown> : <h1 className="text-xl md:text-3xl font-bold text-red-300">Evaluate or Submit your Prompt!</h1>}
        </div>
    )
}