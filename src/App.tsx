import { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import * as C from './App.styled';
import { PhotoItem } from './components/PhotoItem';
import * as Photos from './libs/firebase/api';
import { PhotoType } from './types/types';

const App = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [uploading, setUploading] = useState<boolean>(false);
    const [photos, setPhotos] = useState<PhotoType[]>();

    useEffect(() => {
        ( async () => {
            setLoading(true);
            setPhotos( await Photos.getAll() );
            setLoading(false);
        })();
    }, []);

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get('image') as File;

        if(file && file.size > 0) {
            setUploading(true);
            const result = await Photos.uploadPhoto(file);
            setUploading(false);

            if(result instanceof Error) {
                alert(`${result.name} - ${result.message}`);
            } else {
                let newPhotoList = [...photos as PhotoType[]];
                newPhotoList.push(result);
                setPhotos(newPhotoList);
            }
        }
    }

    const handleDelPhoto = async (name: string) => {
        if(window.confirm('Deseja excluir essa image?')) {            
            setLoading(true);
            setPhotos([]);

            await Photos.delPhoto(name); 
                                   
            setPhotos( photos?.filter(item => item.name !== name) );
            setLoading(false);
        }        
    }

    return (
        <C.Container>
            <div className="area">
                <h1>Galeria de Fotos</h1>

                <C.Upload method="POST" onSubmit={handleFormSubmit}>
                    <input type="file" name="image" />
                    <input type="submit" value="Enviar" />
                    {uploading && '...enviando'}
                </C.Upload>

                {loading &&
                    <C.Warning>
                        <div className="emoji">✋</div>
                        <div className="content">Carregando...</div>
                    </C.Warning>
                }

                {!loading && photos && photos.length > 0 &&
                    <C.PhotoList>
                        {photos.map((photo, index) => (
                            <PhotoItem key={index} data={photo} delPhoto={handleDelPhoto} />
                        ))}                        
                    </C.PhotoList>
                }

                {!loading && photos?.length === 0 &&
                    <C.Warning>
                        <div className="emoji">😣</div>
                        <div className="content">Não há fotos cadastradas...</div>
                    </C.Warning>
                }
            </div>
        </C.Container>
    );
}

export default App;