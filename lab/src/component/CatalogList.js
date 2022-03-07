import inokufuLogo from '../assets/logos/inokufu.png'

const CatalogList = () => {
    return (
        <section class="container flex wrap catalogueList">
		<div class="catalogueCell" onclick="location.href='page-service.html';">
			<div class="title flex center">
				<img src={inokufuLogo} alt=""/>
				<div>
					<h2>Inokufu Competency V2</h2>
					<ul class="flex">
						<li><span class="tag">API</span></li>
						<li><span class="tag">Learning Objects</span></li>
					</ul>
				</div>
			</div>
			<p class="description">
				The Competency API enables you to explore and connect skills, occupations or domains of knowledge from
				various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi,
				Formacode®, etc.
			</p>
		</div>
		<div class="catalogueCell" onclick="location.href='page-service.html';">
			<div class="title flex center">
				<img src={inokufuLogo} alt=""/>
				<div>
					<h2>Inokufu Competency V2</h2>
					<ul class="flex">
						<li><span class="tag">API</span></li>
						<li><span class="tag">Learning Objects</span></li>
					</ul>
				</div>
			</div>
			<p class="description">
				The Competency API enables you to explore and connect skills, occupations or domains of knowledge from
				various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi,
				Formacode®, etc.
			</p>
		</div>
		<div class="catalogueCell" onclick="location.href='page-service.html';">
			<div class="title flex center">
				<img src={inokufuLogo} alt=""/>
				<div>
					<h2>Inokufu Competency V2</h2>
					<ul class="flex">
						<li><span class="tag">API</span></li>
						<li><span class="tag">Learning Objects</span></li>
					</ul>
				</div>
			</div>
			<p class="description">
				The Competency API enables you to explore and connect skills, occupations or domains of knowledge from
				various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi,
				Formacode®, etc.
			</p>
		</div>
		<div class="catalogueCell addService">
			<button>
				Participer au catalogue en ajoutant mon offre de services
			</button>
		</div>
	</section>
    )
}

export default CatalogList;