import gaiaxSimplified from '../style/img/gaiaxSimplified.svg'
import logoDL from '../style/img/logoDL.svg'
import coreValues from '../style/img/coreValues.svg'
import people from '../style/img/people.svg'
import gaiaxOrange from '../style/img/gaiaxOrange.svg'
import joinImg from '../style/img/join.svg'

const Header = () => {
    return (
        <div>
            <div className="header_topBar">
                <img src={gaiaxSimplified} alt="gaiax_logo" /> inspired by <a href="https://www.gaia-x.eu/">gaia-x</a>
            </div>
            <div className="header_navBar container clearfix">
                <div className="floatLeft">
                    <img src={logoDL} alt="daseslab_logo" />
                </div>
                <div className="floatRight">
                    <ul className="mainNav">
                        <li>
                            <button>Association</button>
                            <ul className="consortiumNav">
                                <li>
                                    <img src={coreValues} alt="" />
                                    <div><h4>Valeurs</h4><br />
                                        Apprenez-en davantage sur les valeurs de l'association
                                    </div>
                                </li>
                                <li>
                                    <img src={people.svg} alt="" />
                                    <div><h4>Gouvernance</h4><br />
                                        Découvrez comment l'association est gouvernée, et par qui
                                    </div>
                                </li>
                                <li>
                                    <img src={gaiaxOrange} alt="" />
                                    <div><h4>Origines</h4><br />
                                        A la base, il y a Gaia-X. Apprenez-en davantage sur cette association d'envergure internationale
                                    </div>
                                </li>
                                <li>
                                    <img src={joinImg} alt="" />
                                    <div><h4>Rejoignez-nous !</h4><br />
                                        Vous voulez intégrer Dases Lab ? Découvrez comment !
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button className="current">Catalogue</button>
                        </li>
                        <li><button>Communauté</button></li>
                        <li>
                            <button className="roundTurquoise">Participer</button>
                        </li>
                        <li>
                            <button className="roundPink">Connexion</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;