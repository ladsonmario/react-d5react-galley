import { v4 as createId } from 'uuid';
import { PhotoType } from '../../types/types';
import { storage } from '../firebase/firebaseConfig';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';

export const getAll = async () => {
    let list: PhotoType[] = [];

    const imagesFolder = ref(storage, 'images');
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        const photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }

    return list;
}

export const uploadPhoto = async (file: File) => {
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        const newFile = ref(storage, `images/${createId()}`);
        
        const upload = await uploadBytes(newFile, file);
        const photoUrl = await getDownloadURL(upload.ref);

        return { name: upload.ref.name, url: photoUrl } as PhotoType;

    } else {
        return new Error('Tipo de arquivo não permitido.');
    }
}

export const delPhoto = async (name: string) => {    
    const del = ref(storage, `images/${name}`);
    await deleteObject(del);    
}