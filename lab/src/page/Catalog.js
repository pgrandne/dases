import SearchBar from '../component/SearchBar'
import CatalogList from '../component/CatalogList'

const Catalog = () => {
	return (
		<div>
			<section class="container hero">
				<h1>Catalogue des données et services du<br />Data Space Education & Competences</h1>
			</section>
			<section class="searchEngine container flex wrap row">
				<SearchBar />
			</section>
			< CatalogList />

		</div>
	)
}

export default Catalog;