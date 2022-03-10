import logoDasesLab from '../style/img/logoDL.svg'

const VerifiableCredential = ({ setConnectedState, setOnboardedState }) => {
    const handleClose = () => {
        setConnectedState(false)
    }

    return (
        <body className="onboarding flex column">
            <section className="main onboardingStep onboardingUserInfos">
                <button className="closeButton fixed" onClick={handleClose}>Fermer</button>
                <h1>
                    <img src={logoDasesLab} alt="logoDasesLab" /> <br /><br />
                    Obtenez votre laisser passer
                </h1>
                <p>Prometheus met en relation des humains et des entreprises, pas des clés publiques :) Nous avons besoin de savoir qui se cache derrière cette clé publique pour vous permettre de publier et utiliser des ressources sur le portail</p>
                <p className="publicKey">0x78164a67eFc7CB9BBc506B47e7542D0C75F47b01</p>
                <form className="form" action="">
                    <div className="formGroup field">
                        <input type="input" className="formField" placeholder="Votre Nom" name="name" id='name' required />
                        <label for="name" className="formLabel">Votre nom</label>
                    </div>
                    <div className="formGroup field">
                        <input type="input" className="formField" placeholder="Votre prenom" name="forname" id='forname' required />
                        <label for="forname" className="formLabel">Votre prénom</label>
                    </div>
                    <div class="formGroup field">
                        <input type="email" className="formField" placeholder="Votre courriel professionnel" name="forname" id='proEmail' required />
                        <label for="proEmail" className="formLabel">Votre courriel professionnel</label>
                    </div>
                    <div class="formGroup field">
                        <input type="input" className="formField" placeholder="Nom de votre organisation" name="forname" id='entityName' required />
                        <label for="entityName" className="formLabel">Nom de votre organisation</label>
                    </div>
                    <div class="formGroup field">
                        <input type="input" className="formField" placeholder="L'adressse de votre organisation" name="forname" id='proAdress' required />
                        <label for="proAddress" className="formLabel">Adresse de votre organisation</label>
                    </div>
                    <div className="formGroup field">
                        <input type="input" className="formField" placeholder="Nom du représentant légal" name="name" id='namerl' required />
                        <label for="name" className="formLabel">Nom du représentant légal</label>
                    </div>
                    <div class="formGroup field">
                        <input type="email" className="formField" placeholder="Courriel du représentant légal" name="forname" id='rlEmail' required />
                        <label for="proEmail" className="formLabel">Courriel du représentant légal</label>
                    </div>
                    <div className="formGroup">
                        <input type="checkbox" id="consentCGV" />
                        <label for="consentCGV">Je consens à rejoindre Prometheus, et m’engage à respecter sa charte</label>
                    </div>
                    <input type="submit" className="button blackButton" value="Continuer" />
                </form>

            </section>
        </body>
    )
}

export default VerifiableCredential;