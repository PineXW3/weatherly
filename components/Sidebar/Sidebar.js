import {Icon} from "@iconify/react";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <button className="sidebar-button">
                <Icon className="sidebar-icon" icon="tabler:home" />
            </button>

            <button className="sidebar-button">
                <Icon className="sidebar-icon" icon="material-symbols:favorite-outline" />
            </button>
        </aside>
    );
}