import React from "react";

export default function FooterComponent() {
   return (
       <footer className="inline-flex items-center gap-4 text-black text-center py-4 text-sm p-20">
            <p>&copy; {new Date().getFullYear()} Pentaprompt. All rights reserved.</p>
            <p>Developers: Evaristoc, Nadiia, Drogers1999; Scrum Master: Moshood</p>
            <a href="https://github.com/chingu-voyages/V54-tier1-team-01" className="text-blue-600 hover:underline">GitHub</a>
        </footer>
    );
}
