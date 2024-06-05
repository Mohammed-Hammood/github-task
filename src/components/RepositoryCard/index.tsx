import { FC } from 'react'
import { RepositoryT } from 'types';
import { FaStar } from 'react-icons/fa';
import style from "./respository.module.scss";

type Props = {
	data: RepositoryT
}

export const RepositoryCard: FC<Props> = ({ data }) => {
	const stars = data.stargazers_count < 1000
		? data.stargazers_count
		: Math.floor(data.stargazers_count / 1000) + "k"

	return (
		<div className={style.wrapper}>
			<div className={style.section}>
				<div className={style.title}>Repository </div>
				<div className={style.content}>
					<a href={data.html_url} target='__blank'>{data.name}</a>
				</div>
			</div>
			<div className={style.section}>
				<div className={style.title}>
					<FaStar /> Stars
				</div>
				<div className={style.content}>{stars}</div>
			</div>
		</div>
	)
}

