import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Albums as IAlbums } from "../../redux/reducers/postsReducer";
import { AppDispatch, AppStateType } from "../../redux/store";
import { FC } from "react";
import { getAlbumsThunkRTK } from '../../reduxTK/slices/postsSlice';

const Albums: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const albums: IAlbums[] | [] = useSelector((store: AppStateType) => store?.albumsReducer?.albums);
  
    useEffect(() => {
      dispatch(getAlbumsThunkRTK())
    }, []);
  
    return (
      <div>
        <h2>Albums</h2>
        {albums?.map((album: IAlbums)=> {
                return  (
                        <div key={album.id} style={{border: '1px solid black', margin: '10px'}}>
                            <p>{album.id}</p>
                            <h4>{album.title}</h4>
                        </div>
                    )
            })}
      </div>
    );
  }

  export default Albums;


