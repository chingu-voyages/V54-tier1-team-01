import ReactMarkdown from 'react-markdown';

export default function ScenarioSection(props) {
    return (
        <div className='geminiScenario'>
            <ReactMarkdown>{props.scene}</ReactMarkdown>
        </div>
    )
}