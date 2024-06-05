import { FC } from 'react'
import { UserT } from 'types'
import style from "./user.module.scss";

type Props = {
	data: UserT
}

export const UserCard: FC<Props> = ({ data }) => {

	return (
		<div className={style.wrapper}>
			<div className={style.section}>
				<div className={style.title}>User </div>
				<div className={style.content}>
					<a href={data.html_url} target='__blank'>{data.name ?? data.login}</a>
				</div>
			</div>
			<div className={style.section}>
				<div className={style.title}>
					Public repositories
				</div>
				<div className={style.content}>{data.public_repos}</div>
			</div>
		</div>
	)
}

