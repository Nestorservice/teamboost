import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import InputField from '../InputField';
import './Form.css';

const Form = ({ teams, onRegisteredMember, onRegisteredTeam }) => {

    const [nom, setNom] = useState('');
    const [poste, setPoste] = useState('');
    const [image, setImage] = useState(null); // fichier au lieu de texte
    const [equipe, setEquipe] = useState('');
    const [nomEquipe, setNomEquipe] = useState('');
    const [couleurEquipe, setCouleurEquipe] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        if (image) {
            const lecteur = new FileReader();
            lecteur.onloadend = () => {
                onRegisteredMember({
                    id: uuidv4(),
                    name: nom,
                    role: poste,
                    image: lecteur.result, // base64
                    team: equipe
                });
                setNom('');
                setPoste('');
                setImage(null);
                setEquipe('');
            };
            lecteur.readAsDataURL(image); // convertit en base64
        }
    };

    const onSaveTeam = (e) => {
        e.preventDefault();
        onRegisteredTeam({ name: nomEquipe, color: couleurEquipe });
        setNomEquipe('');
        setCouleurEquipe('');
    };

    return (
        <section className='form-container'>
            <form onSubmit={onSave}>
                <h2>Remplissez les informations pour créer la carte du collaborateur.</h2>

                <InputField
                    required={true}
                    label="Nom"
                    placeholder="Entrez votre nom"
                    text={nom}
                    onChange={value => setNom(value)}
                />

                <InputField
                    required={true}
                    label="Poste"
                    placeholder="Entrez votre poste"
                    text={poste}
                    onChange={value => setPoste(value)}
                />

                <div className="w-full max-w-md mx-auto mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>

                    <div className="relative">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={e => setImage(e.target.files[0])}
                            id="upload-button"
                            className="sr-only"
                        />

                        <label
                            htmlFor="upload-button"
                            className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition duration-200"
                        >
                            📷 Choisir une image
                        </label>

                        {image && (
                            <p className="mt-2 text-sm text-gray-600 truncate">
                                Fichier sélectionné : <span className="font-medium">{image.name}</span>
                            </p>
                        )}
                    </div>
                </div>

                <Dropdown
                    required={true}
                    label="Équipe"
                    itens={teams}
                    option={equipe}
                    onChange={value => setEquipe(value)}
                />

                <Button>Créer la carte</Button>
            </form>

            <form onSubmit={onSaveTeam}>
                <h2>Remplissez les informations pour créer une nouvelle équipe.</h2>

                <InputField
                    required
                    label="Nom de l'équipe"
                    placeholder="Entrez le nom de l'équipe"
                    text={nomEquipe}
                    onChange={value => setNomEquipe(value)}
                />

                <InputField
                    required
                    type="color"
                    label="Couleur de l'équipe"
                    placeholder="Choisissez la couleur de l'équipe"
                    text={couleurEquipe}
                    onChange={value => setCouleurEquipe(value)}
                />

                <Button>Créer une nouvelle équipe</Button>
            </form>
        </section>
    );
};

export default Form;
