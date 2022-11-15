import type { ReactNode } from "react";

const AthleteCard: React.FC<{ username: string, fullName: string, children?: ReactNode }> = ({ children, fullName, username }) => {
	return (
		<a className="max-w-[300px] flex flex-col shadow-lg rounded-xl rounded-t-3xl bg-white" href={`/athletes/${username}` } >
			<img src={`/${encodeURI(username)}/profile.jpg`} className="rounded-t-3xl "/>
			<div className="p-4">
				<h2 className="text-lg font-bold">{fullName}</h2>
				{children}
				<p>@{username}</p>
			</div>
			
		</a>
	)
}

export default AthleteCard;
