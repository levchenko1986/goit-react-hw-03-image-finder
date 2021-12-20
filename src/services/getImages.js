import axios from 'axios';

const getImages = function (page, query) {
  const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=24494444-2fcf9d7148d7c7c0b9406343f&image_type=photo&orientation=horizontal&per_page=12`;
   return ( axios
      .get(URL)
      .then(resp => resp.data.hits))
}

export default getImages