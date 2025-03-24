import React from "react";

export default function Footer() {
   return (
       <footer className="text-black text-center py-4 text-lg">
            <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            <p>Developers: Evaristoc, Nadiia, VarshUI, Drogers1999</p>
        </footer>
    );
}
