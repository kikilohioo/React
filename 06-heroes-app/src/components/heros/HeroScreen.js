import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroesById } from "../../selectors/getHeroesById"
import { heroeImages } from '../../helpers/heroImages'

export const HeroScreen = () => {
	const { id } = useParams();
	const hero = useMemo(()=> getHeroesById(id), [id])//caso real de uso, para memorizar heroe y evitar llamas inecesarias por ej al backend
	const navigate = useNavigate();
	const { superhero, alter_ego, publisher, first_appearance, characters } = hero;

	if (!hero) {
		return <Navigate to={'/'} />
	}

	const handleReturn = () => {
		navigate(-1)
	}

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					className="img-thumbnail animate__animated animate__fadeInLeft"
					src={heroeImages(`./${id}.jpg`)}
					alt={superhero}
				/>
			</div>
			<div className="col-8 animate__animated animate__fadeInRight">
				<h3>{superhero}</h3>
				<ul className="list-group list-group">
					<li className="list-group-item">
						<b>Alter ego:</b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher:</b> {publisher}
					</li>
					<li className="list-group-item">
						<b>First Appearance:</b> {first_appearance}
					</li>
				</ul>
				<h5 className="mt-4">{characters}</h5>
				<button
					className="btn btn-outline-info"
					onClick={handleReturn}
				>
					Regresar
				</button>
			</div>
		</div>
	)
}
