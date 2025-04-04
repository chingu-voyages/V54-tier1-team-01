import ReactMarkdown from 'react-markdown';

export default function ResultSection(props) {
    return (
        <>
            {props.assessment?
                <div className='resultsection gemini p-10 md:p-20 text-justify'>
                    <ReactMarkdown>{props.assessment}</ReactMarkdown>
                </div>
            : 
                <div className='resultsection flex items-center justify-center'>
                    <h1 className="text-xl md:text-3xl font-bold text-red-300">Evaluate or Submit your Prompt!</h1>
                </div>
            }            
        </>
    )
}