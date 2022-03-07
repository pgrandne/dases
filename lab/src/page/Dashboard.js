import entityUnkown from '../assets/entityUnKnown.svg'

import { useState } from 'react';
import DashboardCatalog from '../component/DashboardCatalog'
import DashboardMyOffer from '../component/DashboardMyOffer'


const Dashboard = ({ setConnectedState }) => {
    const [myOffer, setMyOffer] = useState(true)

    const connectHandler = async () => {
        setConnectedState(false)
    }

    const myOfferHandler = async () => {
        setMyOffer(true)
    }

    const catalogHandler = async () => {
        setMyOffer(false)
    }


    return (
        <div className="dashboard serviceOffering">
            <aside className="mainNav">
                <header>
                    <ul className="contextNav flex row wrap center">
                        <li>
                            <button className="mainLogo">
                                <img src="favicon.svg" alt="" />
                            </button>
                        </li>
                        <li>
                            <button className="userLogo alert">
                                <img src={entityUnkown} alt="" />
                            </button>
                        </li>
                        <li>
                            Dashboard
                        </li>
                    </ul>
                    <ul className="actAsButton userService flex row center">
                        <li className="userInformations">
                            <strong>Jean-Marie Gilliot </strong><br />
                            <span className="didNumber">DIDdg8f7754d4g</span>
                        </li>
                        <li>
                            <button className="ellipsis"></button>
                            <ul>
                                <li>Mes informations</li>
                                <li>Déconnexion</li>
                            </ul>
                        </li>
                        <li>
                            <button className="notifications"></button>
                        </li>
                    </ul>
                </header>
                <nav className="appNav">
                    <ul className="flex column">
                        {myOffer && <li className="actAsButton serviceOffering current"  onClick={myOfferHandler}>Mon offre</li>}
                        {!myOffer && <li className="actAsButton serviceOffering" onClick={myOfferHandler}>Mon offre</li>}
                        {myOffer && <li className="actAsButton catalogue" onClick={catalogHandler}>Catalogue</li>}
                        {!myOffer && <li className="actAsButton catalogue current" onClick={catalogHandler}>Catalogue</li>}
                        <li className="actAsButton" onClick={connectHandler}>
                            Déconnexion
                        </li>
                    </ul>
                </nav>
            </aside>
            {myOffer && <DashboardMyOffer />}
            {!myOffer && <DashboardCatalog />}
        </div>
    )
}

export default Dashboard;