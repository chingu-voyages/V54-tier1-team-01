import { ReactTyped } from "react-typed";

export default function TypedStringComponent(){
    return (
        <ReactTyped strings={['My new react app', 'a software development plan', 'an urbanization of a sector of a city', 'over community work', 'a contingency plan against natural disasters', 'an education program']} typeSpeed={100} showCursor={true} loop />
    )
}