import ReactMarkdown from 'react-markdown';

export default function ScenarioSection(props) {
    return (
        <div className='geminiScenario p-10 md:p-20 text-justify'>
            <ReactMarkdown>{props.scene}</ReactMarkdown>
        </div>
    )
}