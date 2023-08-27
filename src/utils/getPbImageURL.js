const PB = import.meta.env.VITE_PB_URL;
export const getPbImageURL = (item, fileName = 'photo') => 
  `${PB}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`

// Each uploaded file could be accessed by requesting its file url:
// http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME