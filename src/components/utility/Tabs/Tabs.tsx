import styles from "./Tabs.module.scss";

function Tabs({
	tabs,
	tabClassName = "",
	tabInnerClassName = "",
	activeTab,
	setActiveTab,
}: {
	tabs: Array<{ text: string; key: string }>;
	tabClassName?: string;
	tabInnerClassName?: string;
	activeTab: string;
	setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
	return (
		<div className="row m-0 p-0">
			{tabs.map(tab => {
				return (
					<button
						data-testid={tab.key}
						key={tab.key}
						className={`col-6 p-0 btn ${tabClassName ?? ""} ${styles.tab} ${activeTab === tab.key ? styles.active : ""}`}
						onClick={() => {
							setActiveTab(tab.key);
						}}
					>
						<span className={tabInnerClassName}>{tab.text}</span>
					</button>
				);
			})}
		</div>
	);
}

export default Tabs;
