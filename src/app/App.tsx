import { useState } from 'react';
import { RepositoryCard, useSearch, UserCard, Loader } from "components";
import { Type, OptionType, RepositoryT, UserT } from 'types';
import { queryClient } from './providers/query-client';
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';
import style from "styles/app.module.scss";


function App(): JSX.Element {
	const { data, setUrl, isLoading } = useSearch();
	const [query, setQuery] = useState<string>('')
	const [type, setType] = useState<Type>(Type.user);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setQuery(e.target.value);
	}

	const handleSelectChange = (newValue: OptionType): void => {
		const value = newValue?.value
		value && setType(value);
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const urls = {
			[Type.user]: `https://api.github.com/users/${query.trim()}`,
			[Type.repo]: `https://api.github.com/repos/${query.trim()}`,
		}

		if (query.trim().length > 0) {

			setUrl(urls[type]);
		}
	}

	const Cards: Record<Type, JSX.Element> = {
		[Type.user]: <UserCard data={data as UserT} />,
		[Type.repo]: <RepositoryCard data={data as RepositoryT} />,
	}

	const options = [
		{ value: Type.user, label: Type.user },
		{ value: Type.repo, label: Type.repo },
	]

	const reset = (): void => {
		queryClient.clear();
		setQuery("");
		setUrl(null);
	}

	return (
		<main className={style.main}>
			<div className={style.center}>
				<div className={style.card}>
					<form onSubmit={handleSubmit} className={style.form}>
						<div className={style.section}>
							<input
								type='text'
								className={style.input}
								value={query}
								required
								disabled={isLoading}
								onChange={handleInputChange}
								placeholder='Type GitHub account username or repository'
							/>
							<button
								className={style.button}
								type='submit'
								title='Search'
								disabled={isLoading}

							>
								<FaSearch />
							</button>
						</div>
						<div className={''}>
							<Select
								isDisabled={isLoading}
								options={options}
								onChange={handleSelectChange}
								defaultValue={{ value: type, label: type }}
							/>

						</div>
						<div className={style.section}>
							<button
								className={style.button}
								type='button'
								onClick={reset}
								disabled={isLoading}
							>
								Reset
							</button>
						</div>
					</form>

				</div>

				{isLoading && (
					<div className={style.loader}> {<Loader />} </div>
				)}

				{data && Cards[type]}

			</div>

		</main>

	)
}

export default App;