import SearchBar from '../component/SearchBar'
import CatalogList from '../component/CatalogList'
import Header from '../component/Header'

import Footer from '../component/Footer'

const Catalog = ({setConnectedState}) => {

	return (
		<div>
			<Header setConnectedState={setConnectedState} />
			<section className="container hero">
				<h1>Catalogue des données et services du<br />Data Space Education & Competences</h1>
			</section>
			<section className="searchEngine container flex wrap row">
				<SearchBar />
			</section>
			< CatalogList />
			<Footer />
		</div>
	)
}

export default Catalog;