import ReactMarkdown from 'react-markdown';

export default function ResultBlock(props) {
    return (
        <div className='resultblock'>
            <ReactMarkdown>{props.assessment}</ReactMarkdown>
        </div>
    )
}