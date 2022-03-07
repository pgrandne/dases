import logoDasesLab from '../style/img/logoDL.svg'

const Footer = () => {
    return (
		<footer className="container">
			<a href='/'><img src={logoDasesLab} alt=""/></a>
			<p>
				Dases Lab est le portail de catalogage des services et donnees du data space education & competences
			<ul>
				<li>Mentions legales</li>
				<li>Contactez-nous</li>
			</ul>
			</p>
		</footer>
    )
}

export default Footer;