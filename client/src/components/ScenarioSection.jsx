import ReactMarkdown from 'react-markdown';

export default function ScenarioSection(props) {
    return (
        <div className='scenarioection gemini bg-slate-600 rounded-md p-10 md:p-20 text-justify'>
            <ReactMarkdown>{props.scene}</ReactMarkdown>
        </div>
    )
}