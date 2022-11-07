import { PhotoType } from '../../types/types';
import * as C from './styled';

type Props = {
    data: PhotoType;
    delPhoto: (name: string) => void;
}
export const PhotoItem = ({ data, delPhoto }: Props) => {
    const handleDelImg = (name: string) => {
        delPhoto(name);
    }

    return (
        <C.Container>
            <button onClick={() => handleDelImg(data.name)}>
                <img src="/trash.svg" alt="" />
            </button>
            <img src={data.url} alt="" />
            <div>{data.name}</div>
        </C.Container>
    );
}