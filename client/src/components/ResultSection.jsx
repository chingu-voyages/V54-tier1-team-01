import ReactMarkdown from 'react-markdown';

export default function ResultSection(props) {
    return (
        <div className='resultblock'>
            <ReactMarkdown>{props.assessment}</ReactMarkdown>
        </div>
    )
}