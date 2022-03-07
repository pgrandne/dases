import inokufuLogo from '../assets/logos/inokufu.png'
import searchIcon from '../style/img/searchIcon.svg'

const DashboardCatalog = () => {
    return (
        <section className="main sectionContent flex column flex-1">
            <header>
                <h1><img src={searchIcon} alt="" />Catalogue</h1>
            </header>
            <section className="searchEngine container flex wrap row">
                <div>
                    <input type="text" placeholder="Recherchez un produit par mot-cle, par exemple : traces d'apprentissage" />
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Type de produit</option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Type de licence</option>
                    </select>
                </div>
            </section>
            <section className="container flex wrap catalogueList">
                <div className="catalogueCell">
                    <div className="title flex center">
                        <img src={inokufuLogo} alt="" />
                        <div>
                            <h2>Inokufu Competency V2</h2>
                            <ul className="flex">
                                <li><span className="tag">API</span></li>
                                <li><span className="tag">Learning Objects</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className="description">
                        The Competency API enables you to explore and connect skills, occupations or domains of knowledge from
                        various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi,
                        Formacode®, etc.
                    </p>
                </div>
                <div className="catalogueCell">
                    <div className="title flex center">
                        <img src={inokufuLogo} alt="" />
                        <div>
                            <h2>Inokufu Competency V2</h2>
                            <ul className="flex">
                                <li><span className="tag">API</span></li>
                                <li><span className="tag">Learning Objects</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className="description">
                        The Competency API enables you to explore and connect skills, occupations or domains of knowledge from
                        various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi,
                        Formacode®, etc.
                    </p>
                </div>
                <div className="catalogueCell">
                    <div className="title flex center">
                        <img src={inokufuLogo} alt="" />
                        <div>
                            <h2>Inokufu Competency V2</h2>
                            <ul className="flex">
                                <li><span className="tag">API</span></li>
                                <li><span className="tag">Learning Objects</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className="description">
                        The Competency API enables you to explore and connect skills, occupations or domains of knowledge from
                        various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pole Emploi,
                        Formacode, etc.
                    </p>
                </div>
                <div className="catalogueCell addService">
                    <button>
                        Participer au catalogue en ajoutant mon offre de services
                    </button>
                </div>
            </section>
        </section>
    )
}

export default DashboardCatalog;