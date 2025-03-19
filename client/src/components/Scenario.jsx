export default function Scenario(props) {
    return (
        <div className='scenario'>
            <p> This is an scenario obtained from Gemini.</p>
            <p> The user should make a prompt for this scenario</p>
            <p> Gemini will assess and provide observations about the prompt for this scenario after submission.</p>
            <p> The following is an API call on mount (so I can start implenting the asyncs)</p>
            <p className='geminiScenario'>{props.scene}</p>
        </div>
    )
}