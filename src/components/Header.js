import { Icon } from "@iconify/react";

export default function Header() {
    return (
        <header className="header">
            <div className="search-container">
                <button className="search-button">
                    <Icon icon="tabler:search" className="search-icon" />
                </button>
                <input className="search-bar"></input>
            </div>

            <button className="setting-button">
                <Icon icon="uil:setting" className="setting-icon" />
            </button>
        </header>
    );
}