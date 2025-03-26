import React from "react";

export default function FooterComponent() {
   return (
       <footer className="text-black text-center py-4 text-lg">
            <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            <p>Developers: Evaristoc, Nadiia, Drogers1999; Scrum Master: Moshood</p>
        </footer>
    );
}